import { useRef, useCallback, type ChangeEvent } from 'react';
import type { QRConfig, ImageOptionsType } from '@/types';

interface UseImageOptionsProps {
    config: QRConfig;
    onChange: (options: QRConfig['imageOptions']) => void;
    onImageChange: (image: string) => void;
}

export const useImageOptions = ({ config, onChange, onImageChange }: UseImageOptionsProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const imageData = event.target?.result as string;
            if (imageData !== config.image) {
                onImageChange(imageData);
            }
        };
        reader.readAsDataURL(file);
    }, [onImageChange, config.image]);

    const handleRemoveImage = useCallback(() => {
        onImageChange('');
    }, [onImageChange]);

    const handleImageOptionChange = useCallback(
        <K extends keyof ImageOptionsType>(key: K, value: ImageOptionsType[K]) => {
            onChange({
                ...config.imageOptions,
                [key]: value,
            });
        },
        [config.imageOptions, onChange]
    );

    return {
        fileInputRef,
        handleImageUpload,
        handleRemoveImage,
        handleImageOptionChange,
    };
};