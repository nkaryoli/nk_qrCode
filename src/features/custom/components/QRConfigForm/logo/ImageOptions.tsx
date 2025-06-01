import { memo } from 'react';
import type { QRConfig } from '@/types';
import { Button } from '@/components/ui/button';
import SelectOptionBtns from './SelectOptionsBtns';
import { useImageOptions } from '@/hooks/useImageOptions';
import ImagePreview from './ImagePreview';
import ImageSettings from './ImageSettings';

interface ImageOptionsProps {
    config: QRConfig;
    onChange: (options: QRConfig['imageOptions']) => void;
    onImageChange: (image: string) => void;
}

const ImageOptions = ({ config, onChange, onImageChange }: ImageOptionsProps) => {
    const {
        fileInputRef,
        handleImageUpload,
        handleRemoveImage,
        handleImageOptionChange,
    } = useImageOptions({ config, onChange, onImageChange });

    return (
        <div className="p-6 space-y-4">
            <div className="flex flex-col items-center gap-4">
                {config.image ? (
                    <ImagePreview
                        image={config.image}
                        onRemove={handleRemoveImage}
                    />
                ) : (
                    <>
                        <Button
                            variant="outline"
                            size={'sm'}
                            onClick={() => fileInputRef.current?.click()}
                        >
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
                        <div className="grid grid-cols-5 gap-6 h-fit">
                            <SelectOptionBtns onChange={onImageChange} />
                        </div>
                    </>
                )}
            </div>
            {config.image && (
                <ImageSettings
                    imageOptions={config.imageOptions || {}}
                    onOptionChange={handleImageOptionChange}
                />
            )}
        </div>
    );
};

const arePropsEqual = ( prevProps: ImageOptionsProps, nextProps: ImageOptionsProps ) => {
    return (
        prevProps.config.image === nextProps.config.image &&
        JSON.stringify(prevProps.config.imageOptions) ===
            JSON.stringify(nextProps.config.imageOptions)
    );
};

export default memo(ImageOptions, arePropsEqual);
