import { memo } from 'react';
import { Label } from '@/components/ui/label';
import ColorPicker from '@/components/ColorPiker';
import { Input } from '@/components/ui/input';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import type { QRConfig } from '@/types';

type LocalHelper = NonNullable<QRConfig['cornersSquareOptionsHelper']>;

interface CornerSquareGradientProps {
    helper: LocalHelper;
    onGradientChange: <K extends keyof LocalHelper['gradient']>(
        key: K,
        value: LocalHelper['gradient'][K]
    ) => void;
}

const CornerSquareGradient = memo(
    ({ helper, onGradientChange }: CornerSquareGradientProps) => {
        return (
            <div className="space-y-4 p-4 border rounded-lg">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label>Color 1</Label>
                        <ColorPicker
                            color={helper.gradient.color1}
                            onChange={(color) =>
                                onGradientChange('color1', color)
                            }
                        />
                    </div>
                    <div className="space-y-2">
                        <Label>Color 2</Label>
                        <ColorPicker
                            color={helper.gradient.color2}
                            onChange={(color) =>
                                onGradientChange('color2', color)
                            }
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <Label>Gradient Type</Label>
                    <Select
                        value={helper.gradient.linear ? 'linear' : 'radial'}
                        onValueChange={(value) =>
                            onGradientChange('linear', value === 'linear')
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
                    <Label>Rotation ({helper.gradient.rotation || 0}°)</Label>
                    <Input
                        type="range"
                        min="0"
                        max="360"
                        value={helper.gradient.rotation || 0}
                        onChange={(e) =>
                            onGradientChange('rotation', Number(e.target.value))
                        }
                    />
                </div>
            </div>
        );
    }
);

CornerSquareGradient.displayName = 'CornerSquareGradient';
export default CornerSquareGradient;
