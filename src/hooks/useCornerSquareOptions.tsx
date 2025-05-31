import { useState, useEffect, useCallback, useMemo } from 'react';
import type { QRConfig } from '@/types';
import type { CornerSquareType } from 'qr-code-styling';

type LocalOptions = NonNullable<QRConfig['cornersSquareOptions']>;
type LocalHelper = NonNullable<QRConfig['cornersSquareOptionsHelper']>;

interface UseCornerSquareOptionsProps {
    config: QRConfig;
    onChange: (options: LocalOptions) => void;
    onChangeHelper: (helper: LocalHelper) => void;
}

export const useCornerSquareOptions = ({ config, onChange, onChangeHelper }: UseCornerSquareOptionsProps) => {
    const defaultOptions = useMemo<LocalOptions>(() => ({
        type: 'extra-rounded',
        color: '#000000',
    }), []);

    const defaultHelper = useMemo<LocalHelper>(() => ({
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 0,
        },
    }), []);

    const [localOptions, setLocalOptions] =
        useState<LocalOptions>(defaultOptions);
    const [localHelper, setLocalHelper] = useState<LocalHelper>(defaultHelper);

    useEffect(() => {
        if (config.cornersSquareOptions) {
            setLocalOptions({
                ...defaultOptions,
                ...config.cornersSquareOptions,
            });
        }

        if (config.cornersSquareOptionsHelper) {
            setLocalHelper({
                ...defaultHelper,
                ...config.cornersSquareOptionsHelper,
            });
        }
    }, [config, defaultOptions, defaultHelper]);

    const handleColorTypeChange = useCallback(
        (isGradient: boolean) => {
            const updatedHelper: LocalHelper = {
                ...localHelper,
                colorType: {
                    single: !isGradient,
                    gradient: isGradient,
                },
            };

            setLocalHelper(updatedHelper);
            onChangeHelper(updatedHelper);

            if (!isGradient) {
                const updatedOptions: LocalOptions = {
                    ...localOptions,
                    gradient: undefined,
                };
                setLocalOptions(updatedOptions);
                onChange(updatedOptions);
            }
        },
        [localHelper, localOptions, onChange, onChangeHelper]
    );

    const handleGradientChange = useCallback(
        <K extends keyof LocalHelper['gradient']>(
            key: K,
            value: LocalHelper['gradient'][K]
        ) => {
            const updatedHelper: LocalHelper = {
                ...localHelper,
                gradient: {
                    ...localHelper.gradient,
                    [key]: key === 'rotation' ? Number(value) : value,
                },
            };

            setLocalHelper(updatedHelper);
            onChangeHelper(updatedHelper);

            if (localHelper.colorType.gradient) {
                const updatedOptions: LocalOptions = {
                    ...localOptions,
                    gradient: {
                        type: updatedHelper.gradient.linear
                            ? 'linear'
                            : 'radial',
                        rotation: updatedHelper.gradient.rotation,
                        colorStops: [
                            { offset: 0, color: updatedHelper.gradient.color1 },
                            { offset: 1, color: updatedHelper.gradient.color2 },
                        ],
                    },
                };
                setLocalOptions(updatedOptions);
                onChange(updatedOptions);
            }
        },
        [localHelper, localOptions, onChange, onChangeHelper]
    );

    const handleSolidColorChange = useCallback(
        (color: string) => {
            const updatedOptions: LocalOptions = {
                ...localOptions,
                color,
                gradient: undefined,
            };
            setLocalOptions(updatedOptions);
            onChange(updatedOptions);
        },
        [localOptions, onChange]
    );

    const handleTypeChange = useCallback(
        (value: CornerSquareType) => {
            const updatedOptions: LocalOptions = {
                ...localOptions,
                type: value,
            };
            setLocalOptions(updatedOptions);
            onChange(updatedOptions);
        },
        [localOptions, onChange]
    );

    return {
        localOptions,
        localHelper,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
        handleTypeChange,
    };
};
