import { memo } from 'react';
import { useQR } from '@/hooks/QRContext';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { useDotsOptions } from '@/hooks/useDotsOptions';

const dotTypes = [
    'square',
    'dots',
    'rounded',
    'classy',
    'classy-rounded',
    'extra-rounded',
] as const;

const DotsOptionsForm = memo(() => {
    const {  handleChange } = useQR();
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
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label>Dot Style</Label>
                    <Select
                        value={dotsOptions.type}
                        onValueChange={(value) =>
                            handleChange('dotsOptions', {
                                ...dotsOptions,
                                type: value as (typeof dotTypes)[number],
                            })
                        }
                    >
                        <SelectTrigger>
                            <SelectValue placeholder="Select dot type" />
                        </SelectTrigger>
                        <SelectContent>
                            {dotTypes.map((type) => (
                                <SelectItem key={type} value={type}>
                                    {type}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <div className="flex items-center justify-between">
                        <Label>Color Type</Label>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">Solid</span>
                            <Switch
                                checked={showGradient}
                                onCheckedChange={handleColorTypeChange}
                            />
                            <span className="text-sm">Gradient</span>
                        </div>
                    </div>

                    {showGradient ? (
                        <div className="space-y-4 p-4 border rounded-lg">
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label>Color 1</Label>
                                    <ColorPicker
                                        color={dotsOptionsHelper.gradient.color1}
                                        onChange={(color) => handleGradientChange('color1', color)}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label>Color 2</Label>
                                    <ColorPicker
                                        color={dotsOptionsHelper.gradient.color2}
                                        onChange={(color) => handleGradientChange('color2', color)}
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label>Gradient Type</Label>
                                <Select
                                    value={dotsOptionsHelper.gradient.linear ? 'linear' : 'radial'}
                                    onValueChange={(value) =>
                                        handleGradientChange('linear', value === 'linear')
                                    }
                                >
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select gradient type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="linear">Linear</SelectItem>
                                        <SelectItem value="radial">Radial</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>

                            {dotsOptionsHelper.gradient.linear && (
                                <div className="space-y-2">
                                    <Label>Rotation ({dotsOptionsHelper.gradient.rotation}°)</Label>
                                    <Input
                                        type="range"
                                        min="0"
                                        max="360"
                                        value={dotsOptionsHelper.gradient.rotation}
                                        onChange={(e) =>
                                            handleGradientChange('rotation', e.target.value)
                                        }
                                    />
                                </div>
                            )}
                        </div>
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
        </div>
    );
});

export default DotsOptionsForm;
