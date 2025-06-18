import { useState } from 'react';
import { HexColorPicker, HexColorInput,  } from 'react-colorful';
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
                <button
                    className="w-full hover:scale-1 text-black h-8 rounded-sm"
                    style={{ backgroundColor: color }}
                >
                    <div className="w-full flex items-center justify-center">
                        <span className="truncate">{color}</span>
                    </div>
                </button>
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
