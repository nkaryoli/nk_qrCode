import { useState } from 'react';
import type { QRConfig } from '@/types';

interface UseBackgroundOptionsProps {
    config: QRConfig;
    onChange: (options: QRConfig['backgroundOptions']) => void;
}

export const useBackgroundOptions = ({ config, onChange }: UseBackgroundOptionsProps) => {
    const [showGradient, setShowGradient] = useState(
        config.backgroundOptions?.gradient !== undefined,
    );

    const defaultColor = '#ffffff';
    const currentBackgroundColor = config.backgroundOptions?.color || defaultColor;

    const handleColorTypeChange = (isGradient: boolean) => {
        setShowGradient(isGradient);
        if (!isGradient) {
            onChange({
                ...config.backgroundOptions,
                color: currentBackgroundColor,
                gradient: undefined,
            });
        } else {
            onChange({
                ...config.backgroundOptions,
                color: currentBackgroundColor,
                gradient: {
                    type: 'linear',
                    rotation: 0,
                    colorStops: [
                        { offset: 0, color: '#ffffff' },
                        { offset: 1, color: '#cccccc' },
                    ],
                },
            });
        }
    };

    const handleGradientChange = (key: string, value: string | number) => {
        if (!config.backgroundOptions?.gradient) return;

        onChange({
            ...config.backgroundOptions,
            color: currentBackgroundColor,
            gradient: {
                ...config.backgroundOptions.gradient,
                [key]: key === 'rotation' ? Number(value) : value,
            },
        });
    };

    const handleColorStopChange = (index: number, color: string) => {
        if (!config.backgroundOptions?.gradient) return;

        const newColorStops = [...config.backgroundOptions.gradient.colorStops];
        newColorStops[index] = {
            ...newColorStops[index],
            color,
        };

        onChange({
            ...config.backgroundOptions,
            color: currentBackgroundColor,
            gradient: {
                ...config.backgroundOptions.gradient,
                colorStops: newColorStops,
            },
        });
    };

    return {
        showGradient,
        currentBackgroundColor,
        handleColorTypeChange,
        handleGradientChange,
        handleColorStopChange,
    };
};