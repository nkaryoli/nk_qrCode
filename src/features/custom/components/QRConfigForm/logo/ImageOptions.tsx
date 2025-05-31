/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef, type ChangeEvent, memo, useCallback } from 'react';
import type { QRConfig, ImageOptionsType } from '@/types';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Button } from '@/components/ui/button';
import SelectOptionBtns from './SelectOptionsBtns';

interface ImageOptionsProps {
    config: QRConfig;
    onChange: (options: QRConfig['imageOptions']) => void;
    onImageChange: (image: string) => void;
}

const ImageOptions = ({ config, onChange, onImageChange }: ImageOptionsProps) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = useCallback((e: ChangeEvent<HTMLInputElement>) => {        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (event) => {
            const imageData = event.target?.result as string;
            if (imageData !== config.image) {
                onImageChange(imageData);
            }
        };
        reader.readAsDataURL(file);
    }, [onImageChange, config.image]);

    const handleRemoveImage = useCallback(() => {
        onImageChange('');
    }, [onImageChange]);

    const handleImageOptionChange = useCallback((key: keyof ImageOptionsType, value: any) => {
        onChange({
            ...config.imageOptions,
            [key]: value,
        });
    }, [config.imageOptions, onChange]);

    return (
        <div className="p-6 space-y-4">
            <div className="flex flex-col items-center gap-4">
                {config.image ? (
                    <>
                        <div className="relative">
                            <img
                                src={config.image}
                                alt="QR Center Preview"
                                className="w-32 h-32 object-contain border rounded-md"
                            />
                            <Button
                                variant="destructive"
                                className="absolute -top-2 -right-2 w-5 h-5 p-0 rounded-sm"
                                onClick={handleRemoveImage}
                            >
                                ×
                            </Button>
                        </div>
                        <span className="text-sm text-muted-foreground">Image loaded</span>
                    </>
                ) : (
                    <>
                        <Button variant="outline" onClick={() => fileInputRef.current?.click()}>
                            Upload Image
                        </Button>
                        <input
                            ref={fileInputRef}
                            type="file"
                            accept="image/*"
                            onChange={handleImageUpload}
                            className="hidden"
                        />
                        <span className="text-sm text-muted-foreground">
                            Recommended: 300x300px transparent PNG
                        </span>
                        <div className="grid grid-cols-5 gap-4 h-fit">
                            <SelectOptionBtns onChange={onImageChange}/>
                        </div>
                    </>
                )}
            </div>

            {config.image && (
                <div className="space-y-4 pt-4">
                    <div className="space-y-2">
                        <Label>
                            Image Size ({((config.imageOptions?.imageSize || 0.3) * 100).toFixed(0)}
                            %)
                        </Label>
                        <Input
                            type="range"
                            min="0.1"
                            max="0.5"
                            step="0.05"
                            value={config.imageOptions?.imageSize || 0.3}
                            onChange={(e) =>
                                handleImageOptionChange('imageSize', parseFloat(e.target.value))
                            }
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <Label htmlFor="hide-dots">Hide Dots Behind Image</Label>
                        <Switch
                            id="hide-dots"
                            checked={config.imageOptions?.hideBackgroundDots || false}
                            onCheckedChange={(checked) =>
                                handleImageOptionChange('hideBackgroundDots', checked)
                            }
                        />
                    </div>

                </div>
            )}
        </div>
    );
};

const arePropsEqual = (prevProps: ImageOptionsProps, nextProps: ImageOptionsProps) => {
    return (
        prevProps.config.image === nextProps.config.image &&
        JSON.stringify(prevProps.config.imageOptions) === JSON.stringify(nextProps.config.imageOptions)
    );
};

export default memo(ImageOptions, arePropsEqual);