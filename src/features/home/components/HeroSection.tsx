import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { QrCode, ScanHeart, ScanLine, ScanQrCode, Sparkles, Wand } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import HowItWorks from './HowItWorks';

const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/customize-qr');
    };
    const classIcon = "absolute bg-white/80 p-2 shadow-xl shadow-gray-200 rounded-sm"

    return (
        <div className="flex justify-center text-center min-h-screen flex-col items-center py-40 gap-28">

            <div className="background-grid"></div>
            <div className="background-blur"></div>
            <div className='background-filter'></div>
            <div className="flex flex-col items-center justify-center space-y-6 relative">
                <QrCode
                    size={90}
                    strokeWidth={1.1}
                    className={`${classIcon} -rotate-[23deg] -left-32 -top-20 text-chart-5`}
                />
                <ScanHeart
                    strokeWidth={1.2}
                    size={70}
                    className={`${classIcon} -rotate-[20deg] -left-64 top-52 text-chart-5`}
                />
                <Sparkles
                    strokeWidth={1}
                    size={50}
                    className={`${classIcon} -rotate-[12deg] left-24 top-48 text-chart-5`}
                />
                <ScanQrCode
                    strokeWidth={1.1}
                    size={85}
                    className={`${classIcon} rotate-12 right-20 top-52 text-chart-5`}
                />
                <Wand
                    strokeWidth={1}
                    size={65}
                    className={`${classIcon} rotate-12 -right-40 -top-16 text-chart-5`}
                />
                <ScanLine
                    strokeWidth={1.3}
                    size={70}
                    className={`${classIcon} rotate-12 -right-56 top-40 text-chart-5`}
                />

                <h1 className="text-4xl lg:text-6xl text-balance font-semibold mt-16">
                    Create your
                    <span className="text-accent">
                        {' '}QR-Code{' '}
                    </span>
                    and <br/>Make It <span className="text-accent">Unique</span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-xl md:text-xl font-body tracking-wide"
                >
                    Customize, download and share your QR codes in seconds. Effortless and free!!
                </motion.p>
                <Button
                    variant={'sunset'}
                    size={'lg'}
                    className="w-64"
                    onClick={handleClick}
                >
                    Get Started
                </Button>
            </div>
            <div className='w-[90%] h-[1000px] bg-gradient-to-r from-chart-5 via-white to-chart-5 rounded-[100px]'>
                <div  className='w-full h-full flex items-center justify-center bg-white/30 rounded-[100px] shadow-lg shadow-input'>
                    <HowItWorks/>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
