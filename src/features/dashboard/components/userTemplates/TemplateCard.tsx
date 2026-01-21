import { Button } from '@/components/ui/button';
import QRDisplay from '@/components/qrCode/QRDisplay';
import type { QRConfig } from '@/types';
import type { Gradient } from 'qr-code-styling';
import { useNavigate } from 'react-router-dom';
import { Copy } from 'lucide-react';
import { useQR } from '@/hooks/QRContext';
import { useIsMobile } from '@/hooks/useIsMobile';

interface TemplateCardProps {
    qrTemplate: QRConfig;
    handleSidebarSelect?: (id: string) => void;
}

const TemplateCard: React.FC<TemplateCardProps> = ({ qrTemplate, handleSidebarSelect }) => {
    const navigate = useNavigate();
    const { setQrConfig } = useQR();
    const isMobile = useIsMobile(1050);
    const dotType = qrTemplate.dotsOptions?.type || 'square';
    const cornerType = qrTemplate.cornersSquareOptions?.type || 'square';
    const hasImage = !!qrTemplate.image;

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
                    className="w-4 h-4 rounded-sm border border-gray-50"
                    style={{
                        background: gradientStyle,
                    }}
                />
            );
        }
        return (
            <div
                className="w-4 h-4 rounded-sm full border"
                style={{ backgroundColor: options.color || '#000000' }}
            />
        );
    };

    const handleUseTemplate = () => {
        setQrConfig(qrTemplate);
        if (handleSidebarSelect) {
            handleSidebarSelect('new-qr');
        } else {
            navigate('/customize', { state: { qrTemplate } });
        }
    };

    return (
        <div
            className="w-full md:w-fit shadow p-6 bg-white rounded-md relative group
            hover:shadow-xl hover:shadow-ring transition-all duration-300 overflow-hidden flex  gap-6 flex-col
        "
        >
            <div className="w-fit h-fit bg-slate-100 flex items-center justify-center p-2 rounded-sm">
                <QRDisplay
                    config={{ ...qrTemplate, width: isMobile ? 160 : 200, height: isMobile ? 160 : 200 }}
                />
            </div>

            <div className="text-xs flex flex-col justify-between gap-2 w-[180px] lg:w-[200px] xl:w-full ">
                <div className='space-y-2'>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Dots:</span>
                        <span>{dotType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Corners:</span>
                        <span>{cornerType}</span>
                    </div>
                    <div className="flex items-center justify-between">
                        <span className="font-medium">Logo:</span>
                        <span>{hasImage ? 'Yes' : 'No'}</span>
                    </div>

                    <div className="w-full flex justify-between items-center">
                        <span className="font-medium">Dot color</span>
                        {renderColorSwatch({
                            color: qrTemplate.dotsOptions?.color,
                            gradient: qrTemplate.dotsOptions?.gradient,
                        })}
                    </div>
                    <div className="w-full flex justify-between items-center">
                        <span className="font-medium">BG color</span>
                        {renderColorSwatch({
                            color: qrTemplate.backgroundOptions?.color,
                            gradient: qrTemplate.backgroundOptions?.gradient,
                        })}
                    </div>
                    {(qrTemplate.cornersSquareOptions?.color ||
                        qrTemplate.cornersSquareOptions?.gradient) && (
                            <div className="w-full flex justify-between items-center ">
                                <span className="font-medium">
                                    Corners color
                                </span>
                                {renderColorSwatch({
                                    color: qrTemplate.cornersSquareOptions?.color,
                                    gradient:
                                        qrTemplate.cornersSquareOptions?.gradient,
                                })}
                            </div>
                        )}
                    {/* <div className="w-full flex flex-col items-start gap-1 border-t ">
                    </div> */}
                </div>

            </div>

                <Button
                    variant="outline"
                    className="w-full gap-2 border-primary hover:bg-primary text-primary"
                    onClick={handleUseTemplate}
                >
                    <Copy />
                    Use template
                </Button>
        </div>
    );
};

export default TemplateCard;
