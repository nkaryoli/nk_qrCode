import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { memo } from "react";

interface StyleSelectorProps<T extends string> {
    label?: string;
    value: T | undefined;
    options: readonly T[];
    placeholder?: string;
    onChange: (value: T) => void;
}

function StyleSelector<T extends string>({
    label = 'Style',
    value,
    options,
    placeholder = 'Select style',
    onChange,
}: StyleSelectorProps<T>) {
    return (
        <div className='space-y-2'>
            <Label>{label}</Label>
            <Select
                value={value}
                onValueChange={(newValue) => onChange(newValue as T)}
            >
                <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {options.map((option) => (
                        <SelectItem key={option} value={option}>
                            {option}
                        </SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
    );
}

export default memo(StyleSelector) as typeof StyleSelector;