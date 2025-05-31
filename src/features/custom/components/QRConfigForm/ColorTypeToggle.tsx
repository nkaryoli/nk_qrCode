import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

interface ColorTypeToggleProps {
    showGradient: boolean;
    handleColorTypeChange: (checked: boolean) => void;
}

const ColorTypeToggle: React.FC<ColorTypeToggleProps> = ({
    showGradient,
    handleColorTypeChange,
}) => {
    return (
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
    );
};

export default ColorTypeToggle;
