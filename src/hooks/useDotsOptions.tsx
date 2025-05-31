import { useState, useCallback } from 'react';
import { useQR } from './QRContext';
import type { DotsOptions, DotsOptionsHelper } from '@/types';

export const useDotsOptions = () => {
    const { qrConfig, handleChange } = useQR();

    const defaultDotsOptions: DotsOptions = {
        type: 'rounded',
        color: '#000000',
    };

    const defaultDotsOptionsHelper: DotsOptionsHelper = {
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 0,
        },
    };

    const dotsOptions = qrConfig.dotsOptions ?? defaultDotsOptions;
    const dotsOptionsHelper = qrConfig.dotsOptionsHelper ?? defaultDotsOptionsHelper;

    const [showGradient, setShowGradient] = useState(dotsOptionsHelper.colorType.gradient);

    const handleColorTypeChange = useCallback((isGradient: boolean) => {
        setShowGradient(isGradient);
        handleChange('dotsOptionsHelper', {
            ...dotsOptionsHelper,
            colorType: {
                single: !isGradient,
                gradient: isGradient,
            },
        });

        if (!isGradient) {
            handleChange('dotsOptions', {
                ...dotsOptions,
                gradient: undefined,
            });
        }
    }, [dotsOptions, dotsOptionsHelper, handleChange]);

    const handleGradientChange = useCallback(
        (
            key: keyof typeof dotsOptionsHelper.gradient,
            value: string | number | boolean
        ) => {
        const updatedHelper = {
            ...dotsOptionsHelper,
            gradient: {
                ...dotsOptionsHelper.gradient,
                [key]: key === 'rotation' ? Number(value) : value,
            },
        };

        handleChange('dotsOptionsHelper', updatedHelper);

        if (showGradient) {
            handleChange('dotsOptions', {
                ...dotsOptions,
                gradient: {
                    type: updatedHelper.gradient.linear ? 'linear' : 'radial',
                    rotation: updatedHelper.gradient.rotation,
                    colorStops: [
                        { offset: 0, color: updatedHelper.gradient.color1 },
                        { offset: 1, color: updatedHelper.gradient.color2 },
                    ],
                },
            });
        }
    }, [dotsOptions, dotsOptionsHelper, handleChange, showGradient]);

    const handleSolidColorChange = useCallback((color: string) => {
        handleChange('dotsOptions', {
            ...dotsOptions,
            color,
            gradient: undefined,
        });
    }, [dotsOptions, handleChange]);

    return {
        dotsOptions,
        dotsOptionsHelper,
        showGradient,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
    };
};