import { memo } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import type { ImageOptionsType } from '@/types';

interface ImageSettingsProps {
    imageOptions: ImageOptionsType;
    onOptionChange: <K extends keyof ImageOptionsType>(key: K, value: ImageOptionsType[K]) => void;
}

const ImageSettings = memo(({ imageOptions, onOptionChange }: ImageSettingsProps) => {
    return (
        <div className="space-y-4 pt-4">
            <div className="space-y-2">
                <Label>
                    Image Size ({((imageOptions?.imageSize || 0.3) * 100).toFixed(0)}%)
                </Label>
                <Input
                    type="range"
                    min="0.1"
                    max="0.5"
                    step="0.05"
                    value={imageOptions?.imageSize || 0.3}
                    onChange={(e) => onOptionChange('imageSize', parseFloat(e.target.value))}
                />
            </div>

            <div className="flex items-center justify-between">
                <Label htmlFor="hide-dots">Hide Dots Behind Image</Label>
                <Switch
                    id="hide-dots"
                    checked={imageOptions?.hideBackgroundDots || false}
                    onCheckedChange={(checked) =>
                        onOptionChange('hideBackgroundDots', checked)
                    }
                />
            </div>
        </div>
    );
});

ImageSettings.displayName = 'ImageSettings';
export default ImageSettings;