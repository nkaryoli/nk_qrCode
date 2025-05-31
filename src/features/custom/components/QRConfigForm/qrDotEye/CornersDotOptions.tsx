import { memo } from 'react';
import type { QRConfig } from '@/types';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import { useCornersDotOptions } from '@/hooks/useCornerDotOptions';
import StyleSelector from '../StyleSelector';
import CornersDotGradient from './CornersDotGradient';
import type { CornerDotType } from 'qr-code-styling';
import ColorTypeToggle from '../ColorTypeToggle';

interface CornersDotOptionsProps {
    config: QRConfig;
    onChange: (options: NonNullable<QRConfig['cornersDotOptions']>) => void;
    onChangeHelper: (helper: NonNullable<QRConfig['cornersDotOptionsHelper']>) => void;
}

const cornerDotTypes: CornerDotType[] = ['square', 'dot'];

const CornersDotOptions = ({ config, onChange, onChangeHelper }: CornersDotOptionsProps) => {
    const {
        localOptions,
        localHelper,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
        handleTypeChange,
    } = useCornersDotOptions({ config, onChange, onChangeHelper });


    return (
        <div className="p-6 space-y-4">
            <StyleSelector
                label="Corner Dot Style"
                value={localOptions.type}
                options={cornerDotTypes}
                placeholder="Select dot type"
                onChange={handleTypeChange}
            />
            <ColorTypeToggle
                showGradient={localHelper.colorType.gradient}
                handleColorTypeChange={handleColorTypeChange}
            />
            {localHelper.colorType.gradient ? (
                <CornersDotGradient
                    helper={localHelper}
                    onGradientChange={handleGradientChange}
                />
            ) : (
                <div className="space-y-2">
                    <Label>Corner Dot Color</Label>
                    <ColorPicker
                        color={localOptions.color || '#000000'}
                        onChange={handleSolidColorChange}
                    />
                </div>
            )}
        </div>
    );
};

export default memo(CornersDotOptions);
