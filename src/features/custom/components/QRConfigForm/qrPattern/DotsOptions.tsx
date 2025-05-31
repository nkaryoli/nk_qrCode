import { memo } from 'react';
import { useQR } from '@/hooks/QRContext';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import { useDotsOptions } from '@/hooks/useDotsOptions';
import DotsGradientOptions from './DotsGradientOptions';
import StyleSelector from '../StyleSelector';
import ColorTypeToggle from '../ColorTypeToggle';

const dotTypes = [
    'square',
    'dots',
    'rounded',
    'classy',
    'classy-rounded',
    'extra-rounded',
] as const;

const DotsOptionsForm = memo(() => {
    const { handleChange } = useQR();
    const {
        dotsOptions,
        dotsOptionsHelper,
        showGradient,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
    } = useDotsOptions();

    return (
        <div className="p-6 space-y-4">
            <StyleSelector
                label="Dot Style"
                value={dotsOptions.type}
                options={dotTypes}
                placeholder="Select dot type"
                onChange={(value: (typeof dotTypes)[number]) => {
                    handleChange('dotsOptions', {
                        ...dotsOptions,
                        type: value,
                    });
                }}
            />
            <div className="space-y-2">
                <ColorTypeToggle
                    showGradient={showGradient}
                    handleColorTypeChange={handleColorTypeChange}
                />
                {showGradient ? (
                    <DotsGradientOptions
                        gradient={dotsOptionsHelper.gradient}
                        onGradientChange={handleGradientChange}
                    />
                ) : (
                    <div className="space-y-2">
                        <Label>Dot Color</Label>
                        <ColorPicker
                            color={dotsOptions.color || '#000000'}
                            onChange={handleSolidColorChange}
                        />
                    </div>
                )}
            </div>
        </div>
    );
});

export default DotsOptionsForm;
