import { memo } from 'react';
import type { QRConfig } from '@/types';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useBackgroundOptions } from '@/hooks/useBackgroundOptions';

interface BackgroundOptionsProps {
    config: QRConfig;
    onChange: (options: QRConfig['backgroundOptions']) => void;
}

const BackgroundOptions = ({ config, onChange }: BackgroundOptionsProps) => {
    const { showGradient, handleColorTypeChange, handleGradientChange, handleColorStopChange } = useBackgroundOptions({ config, onChange });

    return (
        <div className="p-6 space-y-4">
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
                        {config.backgroundOptions?.gradient?.colorStops.map(
                            (stop, index) => (
                                <div key={index} className="space-y-2">
                                    <Label>Color {index + 1}</Label>
                                    <ColorPicker
                                        color={stop.color}
                                        onChange={(color) =>
                                            handleColorStopChange(index, color)
                                        }
                                    />
                                </div>
                            )
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label>Gradient Type</Label>
                        <Select
                            value={
                                config.backgroundOptions?.gradient?.type ||
                                'linear'
                            }
                            onValueChange={(value) =>
                                handleGradientChange('type', value)
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

                    <div className="space-y-2">
                        <Label>
                            Rotation (
                            {config.backgroundOptions?.gradient?.rotation || 0}
                            °)
                        </Label>
                        <Input
                            type="range"
                            min="0"
                            max="360"
                            value={
                                config.backgroundOptions?.gradient?.rotation ||
                                0
                            }
                            onChange={(e) =>
                                handleGradientChange('rotation', e.target.value)
                            }
                        />
                    </div>
                </div>
            ) : (
                <div className="space-y-2">
                    <Label>Background Color</Label>
                    <ColorPicker
                        color={config.backgroundOptions?.color || '#ffffff'}
                        onChange={(color) =>
                            onChange({
                                ...config.backgroundOptions,
                                color,
                            })
                        }
                    />
                </div>
            )}
        </div>
    );
};

export default memo(BackgroundOptions);
