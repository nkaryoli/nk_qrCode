import QRDisplay, { type QRDisplayRef } from '@/components/qrCode/QRDisplay';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import type { QRConfig } from '@/types';
import { QrCode } from 'lucide-react';

interface QRPreviewProps {
    qrRef: React.RefObject<QRDisplayRef | null>;
    qrConfig: QRConfig;
}

const QRPreviewMobile: React.FC<QRPreviewProps> = ({ qrRef, qrConfig }) => {
    return (
        <Dialog>
            <DialogTrigger
                className={`
                    flex items-center justify-center gap-2 rounded-sm h-8 px-4 text-sm font-semibold text-purple-900 border border-purple-900 shadow-md shadow-purple-200/50
                    transition-transform duration-300 hover:scale-[1.02] hover:bg-purple-950 hover:text-white hover:border-none 
                    ${qrConfig.data ? '' : 'pointer-events-none opacity-50'}`}
            >
                Preview
                <QrCode />
            </DialogTrigger>
            <DialogContent
                className="w-fit p-10 lg:p-20"
                aria-describedby="qr-preview"
            >
                <DialogTitle className="hidden" />
                <DialogDescription className="hidden" />
                <QRDisplay ref={qrRef} config={qrConfig} />
                <DialogFooter>
                    <p className="w-full text-muted-foreground text-center">
                        Scan your QR Code to test it
                    </p>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default QRPreviewMobile;
