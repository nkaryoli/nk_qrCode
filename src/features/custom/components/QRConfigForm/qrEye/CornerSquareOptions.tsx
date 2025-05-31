import { memo } from 'react';
import type { QRConfig } from '@/types';
import ColorPicker from '@/components/ColorPiker';
import { Label } from '@/components/ui/label';
import type { CornerSquareType } from 'qr-code-styling';
import { useCornerSquareOptions } from '@/hooks/useCornerSquareOptions';
import StyleSelector from '../StyleSelector';
import CornerSquareGradient from './CornerSquareGradient';
import ColorTypeToggle from '../ColorTypeToggle';
interface CornersSquareOptionsProps {
    config: QRConfig;
    onChange: (options: NonNullable<QRConfig['cornersSquareOptions']>) => void;
    onChangeHelper: (
        helper: NonNullable<QRConfig['cornersSquareOptionsHelper']>
    ) => void;
}

const cornerSquareTypes: CornerSquareType[] = [
    'square',
    'dot',
    'extra-rounded',
];

const CornersSquareOptions = ({
    config,
    onChange,
    onChangeHelper,
}: CornersSquareOptionsProps) => {
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
            <ColorTypeToggle
                showGradient={localHelper.colorType.gradient}
                handleColorTypeChange={handleColorTypeChange}
            />
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
