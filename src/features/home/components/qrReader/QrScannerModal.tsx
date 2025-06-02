import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Scanner from './Scanner';

const QrScannerModal = () => {
    const [scanResult, setScanResult] = useState<string | null>(null);
    const [scannerActive, setScannerActive] = useState(false);
    const [isDialogOpen, setIsDialogOpen] = useState(false);

    const handleScanResult = (result: string) => {
        setScanResult(result);
        setScannerActive(false);
        setIsDialogOpen(false);
    };

    return (
        <div className="max-w-[450px]">
            {scanResult ? (
                <div className="flex flex-col justify-center w-[310px] sm:w-[350px] h-fit gap-4 text-text-200 overflow-hidden">
                    <span>Reading successful!!</span>
                    {scanResult ? (
                        <Link
                            className="text-sm text-primary-100 w-[310px] sm:w-[350px] bg-primary-300/50 rounded-md p-4"
                            to={scanResult}
                        >
                            {scanResult}
                        </Link>
                    ) : (
                        <p className="text-sm text-text-200 w-full h-fit bg-primary-300/50 rounded-md p-4">
                            {scanResult}
                        </p>
                    )}
                    <Button 
                      variant={'sunset'}
                      onClick={() => setScanResult(null)}>
                        Scan new QR Code
                    </Button>
                </div>
            ) : (
                <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
                    <DialogTrigger asChild>
                        <Button
                            onClick={() => {
                                setScannerActive(true);
                                setIsDialogOpen(true);
                            }}
                            className='font-bold'
                        >
                            Start Scan Now!
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Scan your QR Code</DialogTitle>
                            <DialogDescription className='flex items-center justify-center py-11'>
                                <Scanner
                                    isActive={scannerActive && isDialogOpen}
                                    onResult={handleScanResult}
                                />
                            </DialogDescription>
                        </DialogHeader>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
};

export default QrScannerModal;
