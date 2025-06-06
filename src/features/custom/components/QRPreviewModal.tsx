import QRDisplay, { type QRDisplayRef } from '@/components/qrCode/QRDisplay';
import { QRPreviewLoader } from '@/components/qrCode/QRPreviewLoader';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { QRConfig } from '@/types';
import { DownloadIcon, HeartPlus } from 'lucide-react';

interface QRPreviewProps {
    qrRef: React.RefObject<QRDisplayRef | null>;
    onSave: (title: string, qrData: string, config: QRConfig) => void;
    onDownload: (qrRef: React.RefObject<QRDisplayRef | null>) => void;
    qrConfig: QRConfig;
    title: string;
    isTransitioning?: boolean;
}

const QRPreviewModal: React.FC<QRPreviewProps> = ({
    qrRef,
    onSave,
    onDownload,
    qrConfig,
    title,
    isTransitioning = false,
}) => {
    const handleSave = () => {
        onSave(title, qrConfig.data, qrConfig);
    };

    return (
        <Dialog>
            <DialogTrigger className="fixed top-[30vh] -right-20 md:-right-10 -scale-[0.3] md:-scale-50 p-1 border border-withe bg-primary">
                    <div className='relative flex items-center justify-center'>
                        <div className={`transition-opacity duration-250 ${
                            isTransitioning ? 'opacity-10' : 'animate-fade-in'
                        }`}>
                            <QRDisplay ref={qrRef} config={qrConfig} />
                        </div>
                        {isTransitioning && <QRPreviewLoader />}
                    </div>
            </DialogTrigger>
            <DialogContent className="w-fit p-10 lg:p-20" aria-describedby="qr-preview">
                <DialogTitle className="hidden" />
                <DialogDescription className="hidden" />
                <QRDisplay ref={qrRef} config={qrConfig} />
                <DialogFooter className="sm:flex-row justify-center items-center mt-4">
                    <Button
                        variant="outline"
                        className="gap-2 w-full sm:w-40  my-2 border-secondary/70 hover:border-secondary hover:bg-secondary/10 text-secondary"
                        size="lg"
                        onClick={() => onDownload(qrRef)}
                    >
                        <DownloadIcon size={4} />
                        Download QR
                    </Button>
                    <Button className="gap-2 w-full sm:w-40" size="lg" onClick={handleSave}>
                        <HeartPlus size={4} />
                        Save
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default QRPreviewModal;
