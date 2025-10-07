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
import type { DotsOptionsHelper } from '@/types';

interface DotsGradientOptionsProps {
    gradient: DotsOptionsHelper['gradient'];
    onGradientChange: <K extends keyof DotsOptionsHelper['gradient']>(key: K, value: DotsOptionsHelper['gradient'][K]) => void;
}

const DotsGradientOptions = memo(({ gradient, onGradientChange }: DotsGradientOptionsProps) => {
    return (
        <div className="space-y-4 p-4 border rounded-lg">
            <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                    <Label>Color 1</Label>
                    <ColorPicker
                        color={gradient.color1}
                        onChange={(color) => onGradientChange('color1', color)}
                    />
                </div>
                <div className="space-y-2">
                    <Label>Color 2</Label>
                    <ColorPicker
                        color={gradient.color2}
                        onChange={(color) => onGradientChange('color2', color)}
                    />
                </div>
            </div>

            <div className="space-y-2">
                <Label>Gradient Type</Label>
                <Select
                    value={gradient.linear ? 'linear' : 'radial'}
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

            {gradient.linear && (
                <div className="space-y-2">
                    <Label>Rotation ({gradient.rotation}°)</Label>
                    <Input
                        type="range"
                        min="0"
                        max="360"
                        value={gradient.rotation}
                        onChange={(e) =>
                            onGradientChange('rotation', Number(e.target.value))
                        }
                    />
                </div>
            )}
        </div>
    );
});

DotsGradientOptions.displayName = 'DotsGradientOptions';
export default DotsGradientOptions;