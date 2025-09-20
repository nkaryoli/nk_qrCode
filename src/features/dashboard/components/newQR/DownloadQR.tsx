import { Button } from '@/components/ui/button';
import { ArrowLeft, CirclePlus, DownloadIcon, HeartPlus } from 'lucide-react';

interface DownloadProps {
    setActive: (active: string) => void;
    onDownload: () => void;
    saveQr: () => void;
    onNewQR: () => void;
    isSaved?: boolean;
    isDownloaded?: boolean;
}

const DownloadQR: React.FC<DownloadProps> = ({
    setActive,
    onDownload,
    saveQr,
    onNewQR,
    isSaved,
    isDownloaded
}) => {
    return (
        <div className="w-full h-full flex flex-col gap-4">
            <div className='w-full flex flex-col gap-6 px-6 py-14 items-center bg-white rounded-md shadow-lg shadow-purple-700/10'>
                <h2 className="text-lg font-medium text-purple-950 text-center">
                    Download Your QR Code
                </h2>
                <p className="text-sm text-muted-foreground text-center">
                    Download your QR code or save it to your dashboard for future use.
                </p>
                <div className='flex flex-col sm:flex-row gap-4 justify-center items-center'>
                    <Button
                        disabled={isDownloaded}
                        variant="outline"
                        onClick={onDownload}
                        className="w-full sm:w-auto"
                        aria-label="Download QR"
                    >
                        <DownloadIcon size={4} />
                        Download QR
                    </Button>
                    <Button 
                        disabled={isSaved}
                        onClick={saveQr}
                        className=" w-full sm:w-auto"
                        aria-label="Save QR"
                    >
                        <HeartPlus size={18} /> 
                        Save QR
                    </Button>
                </div>
            </div>
            <div className="flex items-center justify-end gap-4">
                <Button
                size={'sm'}
                variant={'outline'}
                onClick={() => setActive('customize')}
				className="w-fit self-end flex opacity-80"
                aria-label="Back"
            >
				<ArrowLeft/>
                Back
            </Button>
                <Button 
                    size={'sm'} 
                    onClick={onNewQR}
                >
                    New QR
                    <CirclePlus />
                </Button>
            </div>
            
        </div>
    );
};

export default DownloadQR;
