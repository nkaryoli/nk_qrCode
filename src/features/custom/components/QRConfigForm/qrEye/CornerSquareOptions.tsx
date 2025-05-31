import { memo } from 'react';
import type { QRConfig } from '@/types';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import type { CornerSquareType } from 'qr-code-styling';
import { useCornerSquareOptions } from '@/hooks/useCornerSquareOptions';
import StyleSelector from '../StyleSelector';
import CornerSquareGradient from './CornerSquareGradient';
interface CornersSquareOptionsProps {
    config: QRConfig;
    onChange: (options: NonNullable<QRConfig['cornersSquareOptions']>) => void;
    onChangeHelper: (helper: NonNullable<QRConfig['cornersSquareOptionsHelper']>) => void;
}

const cornerSquareTypes: CornerSquareType[] = ['square', 'dot', 'extra-rounded'];

const CornersSquareOptions = ({ config, onChange, onChangeHelper }: CornersSquareOptionsProps) => {
        const {
        localOptions,
        localHelper,
        handleColorTypeChange,
        handleGradientChange,
        handleSolidColorChange,
        handleTypeChange,
    } = useCornerSquareOptions({ config, onChange, onChangeHelper });

    return (
        <div className="p-6 space-y-4">
            <StyleSelector
                label="Corner Style"
                value={localOptions.type}
                options={cornerSquareTypes}
                placeholder="Select corner type"
                onChange={handleTypeChange}
            />

            <div className="flex items-center justify-between">
                <Label>Color Type</Label>
                <div className="flex items-center gap-2">
                    <span className="text-sm">Solid</span>
                    <Switch
                        checked={localHelper.colorType.gradient}
                        onCheckedChange={handleColorTypeChange}
                    />
                    <span className="text-sm">Gradient</span>
                </div>
            </div>

            {localHelper.colorType.gradient ? (
                <CornerSquareGradient
                    helper={localHelper}
                    onGradientChange={handleGradientChange}
                />
            ) : (
                <div className="space-y-2">
                    <Label>Corner Color</Label>
                    <ColorPicker
                        color={localOptions.color || '#000000'}
                        onChange={handleSolidColorChange}
                    />
                </div>
            )}
        </div>
    );
};

export default memo(CornersSquareOptions);
