import QRDisplay from '@/components/qrCode/QRDisplay';
import { QRPreviewLoader } from '@/components/qrCode/QRPreviewLoader';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import QREmptyState from '@/features/dashboard/components/QREmptyState';
import { useQR } from '@/hooks/QRContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { memo, useEffect, useRef, useState } from 'react';

const PreviewQR = () => {
    const { qrRef, qrConfig } = useQR();
    const isMobile = useIsMobile(900);
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
        <>
            {!isMobile && (
                <Card>
                    {qrConfig.data == '' ? (
                        <QREmptyState />
                    ) : (
                        <>
                            <CardHeader>
                                <CardTitle className="text-foreground text-xl">
                                    <h2 className="text-lg font-medium text-purple-950">
                                        Preview
                                    </h2>
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className="relative flex items-center justify-center">
                                    <div
                                        className={`transition-opacity duration-250 ${isTransitioning
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
                                <p className="text-muted-foreground text-center">
                                    Scan your QR Code to test it
                                </p>
                            </CardContent>
                        </>
                    )}
                </Card>
            )}
        </>
    );
};

export default memo(PreviewQR);
