import { Button } from '@/components/ui/button';
import QRDisplay from '@/components/qrCode/QRDisplay'
import { Trash2 } from 'lucide-react';
import { useState } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { deleteQR } from '@/api/qrApi';
import type { QRCode } from '@/supabase/types';


interface QRCardProps {
    qr: QRCode;
}

const QRCard: React.FC<QRCardProps> = ({ qr }) => {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const queryClient = useQueryClient();

    const mutation = useMutation<void, Error, number>({
        mutationFn: async (id: number) => {
            await deleteQR(id);
        },
        onSuccess: async () => {
            toast('QR deleted');
            queryClient.invalidateQueries();
            await queryClient.refetchQueries();
        },
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        onError: (error: any) => {
            toast('Error deleting QR: ' + error.message);
        },
    });

    const handleDelete = () => {
        if (typeof qr.id === 'number') {
            mutation.mutate(qr.id);
        } else {
            toast('QR id is missing, cannot delete.');
        }
    };

    const confirmDelete = () => {
        setShowDeleteConfirm(true);
    };

    const cancelDelete = () => {
        setShowDeleteConfirm(false);
    };

    return (
        <div
            className="w-full shadow p-3 bg-purple-50/30 border border-purple-50 hover:border-purple-100 rounded-md relative group hover:shadow-xl hover:shadow-ring transition-all duration-300 overflow-hidden flex gap-3
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
            <div className="absolute top-2 right-2 z-10 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <button
                    onClick={confirmDelete}
                    className="p-2 bg-white/90 backdrop-blur-sm rounded-sm text-red-500 hover:bg-red-50 hover:text-red-600 transition-all duration-200 shadow-sm"
                    title="Eliminar template"
                >
                    <Trash2 className="w-4 h-4" />
                </button>
            </div>
            <div className="w-fit bg-slate-100 flex items-center justify-center p-1 rounded-sm">
                <QRDisplay
                    config={{ ...qr.qr_template, data: qr.qr_data, width: 150, height: 150 }}
                />
            </div>

            <div className="text-xs space-y-3 rounded-sm py-3 overflow-hidden">
                <div className="flex flex-col items-start justify-between ">
                    <span className="font-semibold">Title:</span>
                    <span className="truncate max-w-[150px]">{qr.title || 'Untitled'}</span>
                </div>
                <div className="flex flex-col items-start justify-between text-muted-foreground">
                    <span className="font-semibold">Content:</span>
                    <span className="truncate max-w-[150px]">{qr.qr_data}</span>
                </div>
            </div>
        </div>
    );
};

export default QRCard;
