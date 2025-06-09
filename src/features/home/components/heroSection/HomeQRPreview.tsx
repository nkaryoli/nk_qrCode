import QRDisplay from '@/components/qrCode/QRDisplay';
import { QRPreviewLoader } from '@/components/qrCode/QRPreviewLoader';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import QREmptyState from '@/features/custom/components/QREmptyState';
import { useQR } from '@/hooks/QRContext';
import { useQRManager } from '@/hooks/useQRManager';
import { DownloadIcon, HeartPlus } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const HomeQRPreview = () => {
    const { isSaving, handleDownload, handleSaveQRCode } = useQRManager();
    const { qrRef, qrConfig } = useQR();
    const [displayConfig, setDisplayConfig] = useState(qrConfig);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const prevConfigRef = useRef(qrConfig);

    useEffect(() => {
        if (
            qrConfig.data === '' ||
            JSON.stringify(qrConfig) === JSON.stringify(prevConfigRef.current)
        ) {
            return;
        }
        setIsTransitioning(true);
        prevConfigRef.current = displayConfig;
        const timer = setTimeout(() => {
            setDisplayConfig(qrConfig);
            setIsTransitioning(false);
        }, 250);
        return () => clearTimeout(timer);
    }, [displayConfig, qrConfig]);

    return (
        <Card className="border-none shadow-none bg-transparent pt-3">
            {qrConfig.data == '' ? (
                <QREmptyState />
            ) : (
                <>
                    <CardHeader className="p-2 hidden">
                        <CardTitle className="text-foreground text-lg text-center">
                            Preview
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        <div className="relative flex items-center justify-center">
                            <div
                                className={`transition-opacity duration-250 ${
                                    isTransitioning
                                        ? 'opacity-10'
                                        : 'animate-fade-in'
                                }`}
                            >
                                <QRDisplay
                                    ref={qrRef}
                                    config={
                                        isTransitioning
                                            ? prevConfigRef.current
                                            : displayConfig
                                    }
                                />
                            </div>
                            {isTransitioning && <QRPreviewLoader />}
                        </div>
                        <div className="text-sm text-foreground text-center">
                            <p>Scan your QR Code to test it</p>
                        </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-3 w-full justify-center p-0">
                        <Button
                            className="w-full max-w-64"
                            onClick={() => handleDownload(qrRef)}
                        >
                            <DownloadIcon size={4} />
                            Download
                        </Button>
                        <Button
                            variant={'neon'}
                            className="w-full max-w-64"
                            onClick={() => handleSaveQRCode()}
                            disabled={isSaving}
                        >
                            <HeartPlus size={4} />
                            {isSaving ? 'Saving...' : 'Save QR'}
                        </Button>
                    </CardFooter>
                </>
            )}
        </Card>
    );
};

export default HomeQRPreview;
