import { useCallback, useMemo, useState } from 'react';
import type { QRDisplayRef } from '@/components/qrCode/QRDisplay';
import type { FileExtension } from 'qr-code-styling';
import { createQr } from '@/api/qrApi';
import type { QRConfig } from '@/types';
import { toast } from 'sonner';

export type DownloadFormat = FileExtension; // 'png' | 'jpeg' | 'svg' | 'webp'
export type DownloadSize = 'small' | 'medium' | 'large' | 'custom';

export interface DownloadOptions {
    format: DownloadFormat;
    size: DownloadSize;
    customSize?: number;
    quality?: number;
}

export const useQRManager = () => {
    const [isSaving, setIsSaving] = useState<boolean>(false);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const getSizeInPixels = (size: DownloadSize, customSize?: number): number => {
        const sizes = {
            small: 256,
            medium: 512,
            large: 1024,
            custom: customSize || 512
        };
        return sizes[size];
    };

    const handleDownload = (
        qrRef: React.RefObject<QRDisplayRef | null>,
        options: DownloadOptions = { format: 'png', size: 'medium' }
    ) => {
        const size = getSizeInPixels(options.size, options.customSize);
        console.log('Downloading with options:', options, 'size:', size);
        // Ahora pasamos todos los parámetros
        qrRef.current?.download('my-qr-code', size, options.format);
    };

    const handleSaveQRCode = useCallback(async (qrConfig: QRConfig, userId: string, title?: string) => {
        if (!userId) {
            toast.error('User ID is required to save');
            return;
        }

        try {
            setIsSaving(true);
            console.log('Saving QR code...');

            await createQr({
                qr_data: qrConfig.data,
                qr_template: qrConfig,
                user_id: userId,
                title: title || 'New QR Code'
            });

            toast.success('QR Code saved successfully!');
        } catch (error) {
            console.error('Error saving QR code:', error);
            toast.error('Failed to save QR code');
        } finally {
            setIsSaving(false);
        }
    }, []);

    const loadQRs = useCallback(async () => {
        // tu lógica existente
        setIsLoading(true);
        // Implementación futura
        setTimeout(() => setIsLoading(false), 1000);
    }, []);

    return useMemo(
        () => ({
            isSaving,
            handleDownload,
            handleSaveQRCode,
            loadQRs,
            isLoading
        }),
        [isSaving, handleDownload, handleSaveQRCode, isLoading, loadQRs]
    );
};