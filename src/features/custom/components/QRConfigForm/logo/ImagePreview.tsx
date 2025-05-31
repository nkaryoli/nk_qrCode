import { memo } from 'react';
import { Button } from '@/components/ui/button';

interface ImagePreviewProps {
    image: string;
    onRemove: () => void;
}

const ImagePreview = memo(({ image, onRemove }: ImagePreviewProps) => {
    return (
        <>
            <div className="relative">
                <img
                    src={image}
                    alt="QR Center Preview"
                    className="w-32 h-32 object-contain border rounded-md"
                />
                <Button
                    variant="destructive"
                    className="absolute -top-2 -right-2 w-5 h-5 p-0 rounded-sm"
                    onClick={onRemove}
                >
                    ×
                </Button>
            </div>
            <span className="text-sm text-muted-foreground">Image loaded</span>
        </>
    );
});

ImagePreview.displayName = 'ImagePreview';
export default ImagePreview;