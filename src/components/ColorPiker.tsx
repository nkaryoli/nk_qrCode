import { useState } from 'react';
import { HexColorPicker, HexColorInput,  } from 'react-colorful';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';

interface ColorPickerProps {
    color: string;
    onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, onChange }) => {
    const [open, setOpen] = useState(false);

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    className="w-full justify-start"
                    style={{ backgroundColor: color }}
                >
                    <div className="w-full flex items-center gap-2">
                        <span className="truncate">{color}</span>
                    </div>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-2 space-y-2">
                <HexColorInput 
                    color={color} 
                    onChange={onChange}  
                    prefixed alpha 
                    className='outline-none focus:ring-2 focus:ring-primary' 
                />
                <HexColorPicker color={color} onChange={onChange} />
            </PopoverContent>
        </Popover>
    );
};

export default ColorPicker;
