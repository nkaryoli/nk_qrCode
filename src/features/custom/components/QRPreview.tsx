import QRDisplay from '@/components/qrCode/QRDisplay';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useIsMobile } from '@/hooks/useIsMobile';
import { DownloadIcon, HeartPlus } from 'lucide-react';
import { memo, useEffect, useRef, useState } from 'react';
import { useQR } from '@/hooks/QRContext';
import { useQRManager } from '@/hooks/useQRManager';
import QRPreviewModal from './QRPreviewModal';
import QREmptyState from './QREmptyState';
import { QRPreviewLoader } from '@/components/qrCode/QRPreviewLoader';

const QRPreview = () => {
    const { isSaving, handleDownload, handleSaveQRCode } = useQRManager();
    const { title, qrRef, qrConfig } = useQR();
    const isMobile = useIsMobile(976);
    const [displayConfig, setDisplayConfig] = useState(qrConfig);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const prevConfigRef = useRef(qrConfig);

    useEffect(() => {
        if (qrConfig.data === '' || JSON.stringify(qrConfig) === JSON.stringify(prevConfigRef.current)) {
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
            {!isMobile ? (
                <Card>
                    {qrConfig.data == '' ? (
                        <QREmptyState />
                    ) : (
                        <>
                            <CardHeader>
                                <CardTitle className="text-foreground text-xl">Preview</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-6">
                                <div className='relative flex items-center justify-center'>
                                    <div className={`transition-opacity duration-250 ${
                                        isTransitioning ? 'opacity-10' : 'animate-fade-in'
                                    }`}>
                                        <QRDisplay 
                                            ref={qrRef} 
                                            config={isTransitioning ? prevConfigRef.current : displayConfig}
                                        />
                                    </div>
                                    {isTransitioning && <QRPreviewLoader />}
                                </div>
                                <div className="text-sm text-foreground text-center">
                                    <p>Scan your QR Code to test it</p>
                                </div>
                            </CardContent>
                            <CardFooter className="gap-3 w-full justify-center">
                                <Button
                                    variant="neon"
                                    className="w-full sm:w-40 "
                                    onClick={() => handleDownload(qrRef)}
                                >
                                    <DownloadIcon size={4} />
                                    Download
                                </Button>
                                <Button
                                    className="sm:w-40"
                                    onClick={() => handleSaveQRCode()}
                                    disabled={isSaving}
                                >
                                    <HeartPlus size={4} />
                                    {!isMobile && (isSaving ? 'Saving...' : 'Save')}
                                </Button>
                            </CardFooter>
                        </>
                    )}
                </Card>
            ) : (
                <QRPreviewModal
                    qrRef={qrRef}
                    onSave={handleSaveQRCode}
                    onDownload={handleDownload}
                    qrConfig={isTransitioning ? prevConfigRef.current : displayConfig}
                    title={title}
                    isTransitioning={isTransitioning}
                />
            )}
        </>
    );
};

export default memo(QRPreview);
