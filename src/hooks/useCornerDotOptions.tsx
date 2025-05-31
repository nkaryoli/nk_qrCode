import { useState, useEffect, useCallback, useMemo } from 'react';
import type { QRConfig } from '@/types';
import type { CornerDotType } from 'qr-code-styling';

type OptionsState = NonNullable<QRConfig['cornersDotOptions']>;
type HelperState = NonNullable<QRConfig['cornersDotOptionsHelper']>;

interface UseCornersDotOptionsProps {
    config: QRConfig;
    onChange: (options: OptionsState) => void;
    onChangeHelper: (helper: HelperState) => void;
}

export const useCornersDotOptions = ({
    config,
    onChange,
    onChangeHelper,
}: UseCornersDotOptionsProps) => {
    const defaultOptions = useMemo<OptionsState>(() => ({
        type: 'dot',
        color: '#000000',
    }), []);

    const defaultHelper = useMemo<HelperState>(() => ({
        colorType: { single: true, gradient: false },
        gradient: {
            linear: true,
            radial: false,
            color1: '#000000',
            color2: '#000000',
            rotation: 0,
        },
    }), []);

    const [localOptions, setLocalOptions] = useState<OptionsState>(defaultOptions);
    const [localHelper, setLocalHelper] = useState<HelperState>(defaultHelper);

    useEffect(() => {
        if (config.cornersDotOptions) {
            setLocalOptions({ ...defaultOptions, ...config.cornersDotOptions });
        }
        if (config.cornersDotOptionsHelper) {
            setLocalHelper({ ...defaultHelper, ...config.cornersDotOptionsHelper });
        }
    }, [config, defaultOptions, defaultHelper]);

    const handleColorTypeChange = useCallback((isGradient: boolean) => {
        const updatedHelper: HelperState = {
            ...localHelper,
            colorType: {
                single: !isGradient,
                gradient: isGradient,
            },
        };

        setLocalHelper(updatedHelper);
        onChangeHelper(updatedHelper);

        if (!isGradient) {
            const updatedOptions: OptionsState = {
                ...localOptions,
                gradient: undefined,
            };
            setLocalOptions(updatedOptions);
            onChange(updatedOptions);
        }
    }, [localHelper, localOptions, onChange, onChangeHelper]);

    const handleGradientChange = useCallback(<K extends keyof HelperState['gradient']>(
        key: K,
        value: HelperState['gradient'][K],
    ) => {
        const updatedHelper: HelperState = {
            ...localHelper,
            gradient: {
                ...localHelper.gradient,
                [key]: key === 'rotation' ? Number(value) : value,
            },
        };

        setLocalHelper(updatedHelper);
        onChangeHelper(updatedHelper);

        const updatedOptions: OptionsState = {
            ...localOptions,
            gradient: {
                type: updatedHelper.gradient.linear ? 'linear' : 'radial',
                rotation: updatedHelper.gradient.rotation,
                colorStops: [
                    { offset: 0, color: updatedHelper.gradient.color1 },
                    { offset: 1, color: updatedHelper.gradient.color2 },
                ],
            },
        };
        setLocalOptions(updatedOptions);
        onChange(updatedOptions);
    }, [localHelper, localOptions, onChange, onChangeHelper]);

    const handleSolidColorChange = useCallback((color: string) => {
        const updatedOptions: OptionsState = {
            ...localOptions,
            color,
            gradient: undefined,
        };
        setLocalOptions(updatedOptions);
        onChange(updatedOptions);
    }, [localOptions, onChange]);

    const handleTypeChange = useCallback((value: CornerDotType) => {
        const updatedOptions: OptionsState = {
            ...localOptions,
            type: value,
        };
        setLocalOptions(updatedOptions);
        onChange(updatedOptions);
    }, [localOptions, onChange]);

    return {
        localOptions,
        localHelper,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
        handleTypeChange,
    };
};