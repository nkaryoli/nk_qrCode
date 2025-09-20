import { Button } from '@/components/ui/button';
import QRDisplay from '@/components/qrCode/QRDisplay';
import type { QRConfig } from '@/types';
import type { Gradient } from 'qr-code-styling';
import { useNavigate } from 'react-router-dom';
import { Copy, Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteQR } from '@/api/qrApi';

interface TemplateCardProps {
    qrTemplate: QRConfig;
    qr_id?: number;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ qrTemplate, qr_id }) => {
    const navigate = useNavigate();
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const dotType = qrTemplate.dotsOptions?.type || 'square';
    const cornerType = qrTemplate.cornersSquareOptions?.type || 'square';
    const hasImage = !!qrTemplate.image;
    const queryClient = useQueryClient();

    const mutation = useMutation<void, Error, number>({
        mutationFn: async (qr_id: number) => {
            await deleteQR(qr_id);
        },
        onSuccess: async () => {
            toast('QR deleted');
            queryClient.invalidateQueries();
            await queryClient.refetchQueries();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast('Error saving QR: ' + error.message);
        },
    });

    const handleDelete = () => {
        if (typeof qr_id === 'number') {
            mutation.mutate(qr_id);
        } else {
            toast('QR id is missing, cannot delete.');
        }
    };




    const renderColorSwatch = (options: {
        color?: string;
        gradient?: Gradient;
    }) => {
        if (options.gradient) {
            const rotation = options.gradient.rotation || 0;
            const gradientStyle =
                options.gradient.type === 'radial'
                    ? `radial-gradient(circle, ${options.gradient.colorStops[0].color}, ${options.gradient.colorStops[1].color})`
                    : `linear-gradient(${rotation}deg, ${options.gradient.colorStops[0].color}, ${options.gradient.colorStops[1].color})`;

            return (
                <div
                    className="w-6 h-6 rounded-full border border-gray-50"
                    style={{
                        background: gradientStyle,
                    }}
                />
            );
        }
        return (
            <div
                className="w-3 h-3 rounded-full border"
                style={{ backgroundColor: options.color || '#000000' }}
            />
        );
    };

    const handleCustomQR = () => {
        navigate('/customize', { state: { qrTemplate } });
    };

    const confirmDelete = () => {
        setShowDeleteConfirm(true);
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    // const handleDelete = () => {
    //     // Implement delete logic here
    //     setShowDeleteConfirm(false);
    // };

    
    return (
        <div
            className="w-fit shadow space-y-6 px-9  pb-9 pt-3 bg-white rounded-md relative group
            hover:shadow-xl hover:shadow-ring transition-all duration-300 overflow-hidden
        "
        >
            {showDeleteConfirm && (
                <div className="absolute inset-0 bg-orange-50 bg-opacity-95 z-20 flex items-center justify-center">
                    <div className="text-center p-4">
                        <p className="font-medium mb-4">
                            Are you sure you want to delete this template?
                        </p>
                        <div className="flex gap-2 m-auto w-fit">
                            <Button
                                variant={'outline'}
                                onClick={handleDelete}
                            >
                                Yes
                            </Button>
                            <Button
                                variant={'destructive'}
                                onClick={cancelDelete}
                            >
                                Cancel
                            </Button>
                        </div>
                    </div>
                </div>
            )}
            <div className="absolute top-3 right-3 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={confirmDelete}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 shadow-sm"
                    title="Eliminar template"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
            <div className="w-full bg-slate-100 flex items-center justify-center p-4 rounded-sm">
                <QRDisplay
                    config={{ ...qrTemplate, width: 150, height: 150 }}
                />
            </div>

            <div className="text-sm space-y-3 rounded-sm">
                <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">Dots:</span>
                    <span>{dotType}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">Corners:</span>
                    <span>{cornerType}</span>
                </div>
                <div className="flex items-center justify-between gap-2">
                    <span className="font-medium">Logo:</span>
                    <span>{hasImage ? 'Yes' : 'No'}</span>
                </div>

                <div className="w-64 md:w-56 xl:w-64 flex justify-between border-t pt-4">
                    <div className="flex flex-col items-center space-y-2">
                        <span className="font-medium">Dot color</span>
                        {renderColorSwatch({
                            color: qrTemplate.dotsOptions?.color,
                            gradient: qrTemplate.dotsOptions?.gradient,
                        })}
                    </div>
                    <div className="flex flex-col items-center space-y-2">
                        <span className="font-medium">BG color</span>
                        {renderColorSwatch({
                            color: qrTemplate.backgroundOptions?.color,
                            gradient: qrTemplate.backgroundOptions?.gradient,
                        })}
                    </div>
                    {(qrTemplate.cornersSquareOptions?.color ||
                        qrTemplate.cornersSquareOptions?.gradient) && (
                        <div className="flex flex-col items-center space-y-2">
                            <span className="text-sm font-medium">
                                Corners color
                            </span>
                            {renderColorSwatch({
                                color: qrTemplate.cornersSquareOptions?.color,
                                gradient:
                                    qrTemplate.cornersSquareOptions?.gradient,
                            })}
                        </div>
                    )}
                </div>
            </div>
            <Button
                variant="outline"
                className="w-full gap-2 border-primary hover:bg-primary text-primary"
                onClick={handleCustomQR}
            >
                <Copy />
                Use this template
            </Button>
        </div>
    );
};

export default TemplateCard;
