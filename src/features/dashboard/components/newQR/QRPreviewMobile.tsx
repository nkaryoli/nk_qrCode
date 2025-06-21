import QRDisplay, { type QRDisplayRef } from '@/components/qrCode/QRDisplay';
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
import { QrCode } from 'lucide-react';

interface QRPreviewProps {
    qrRef: React.RefObject<QRDisplayRef | null>;
    qrConfig: QRConfig;
}

const QRPreviewMobile: React.FC<QRPreviewProps> = ({ qrRef, qrConfig }) => {
    return (
        <Dialog>
            <DialogTrigger
                className={`${qrConfig.data ? '' : 'pointer-events-none'}`}
            >
                <Button size={'sm'} variant="neon" disabled={!qrConfig.data}>
                    Preview
                    <QrCode />
                </Button>
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
