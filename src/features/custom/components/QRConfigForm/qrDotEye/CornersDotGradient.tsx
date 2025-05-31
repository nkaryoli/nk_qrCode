import { memo } from 'react';
import type { QRConfig } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import ColorPicker from '@/components/ColorPiker';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';

type HelperState = NonNullable<QRConfig['cornersDotOptionsHelper']>;

interface CornersDotGradientProps {
    helper: HelperState;
    onGradientChange: <K extends keyof HelperState['gradient']>(
        key: K,
        value: HelperState['gradient'][K]
    ) => void;
}

const CornersDotGradient = memo(({ helper, onGradientChange }: CornersDotGradientProps) => {
    return (
        <div className="space-y-4 p-4 border rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Color 1</Label>
                    <ColorPicker
                        color={helper.gradient.color1}
                        onChange={(color) => onGradientChange('color1', color)}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Color 2</Label>
                    <ColorPicker
                        color={helper.gradient.color2}
                        onChange={(color) => onGradientChange('color2', color)}
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

            {helper.gradient.linear && (
                <div className="space-y-2">
                    <Label>Rotation ({helper.gradient.rotation}°)</Label>
                    <Input
                        type="range"
                        min="0"
                        max="360"
                        value={helper.gradient.rotation}
                        onChange={(e) =>
                            onGradientChange('rotation', Number(e.target.value))
                        }
                    />
                </div>
            )}
        </div>
    );
});

CornersDotGradient.displayName = 'CornersDotGradient';
export default CornersDotGradient;