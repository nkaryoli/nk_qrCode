import { useEffect, useRef } from 'react';
import { Html5QrcodeScanner } from 'html5-qrcode';
import { motion } from 'framer-motion';

interface ScannerProps {
    onResult: (result: string) => void;
    isActive: boolean;
}

const Scanner = ({ onResult, isActive }: ScannerProps) => {
    const scannerRef = useRef<Html5QrcodeScanner | null>(null);

    useEffect(() => {
        if (isActive) {
            scannerRef.current = new Html5QrcodeScanner(
                'reader',
                { qrbox: { width: 250, height: 250 }, fps: 5 },
                false
            );

            scannerRef.current.render(
                (result: string) => {
                    onResult(result);
                },
                (err: string) => console.log('QR Error:', err)
            );
        }

        return () => {
            if (scannerRef.current) {
                scannerRef.current.clear();
            }
        };
    }, [isActive, onResult]);

    return (
        <motion.div
            key={isActive.toString()}
            initial={{ height: 0, backgroundColor: '#000000' }}
            animate={{ height: 400, backgroundColor: '#F9F1F5' }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="flex flex-col items-center justify-end w-[310px] sm:w-[350px]"
            id="reader"
        />
    );
};

export default Scanner;
