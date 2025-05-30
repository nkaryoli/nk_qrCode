import { useCallback, useMemo, useState } from 'react';
import type { QRDisplayRef } from '@/components/qrCode/QRDisplay';

export const useQRManager = () => {
    const [isSaving] = useState<boolean>(false);
    const [isLoading] = useState<boolean>(false);

    const handleDownload = (qrRef: React.RefObject<QRDisplayRef | null>) => {
        qrRef.current?.download('my-qr-code');
    };

    const handleSaveQRCode = useCallback(
        async (
        ) => {
        },
        [],
    );

    const loadQRs = useCallback(async () => {
        
    }, []);

    return useMemo(
        () => ({ isSaving, handleDownload, handleSaveQRCode, loadQRs, isLoading }),
        // eslint-disable-next-line react-hooks/exhaustive-deps
        [isSaving, handleDownload, handleSaveQRCode],
    );
};
