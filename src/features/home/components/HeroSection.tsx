import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import HowItWorks from './HowItWorks';
import { useRef } from 'react';
import BgAnimation from './BgAnimation';

const HeroSection = () => {
    const navigate = useNavigate();
    const ref = useRef<HTMLDivElement>(null);

    const handleClick = () => {
        navigate('/customize-qr');
    };

    return (
        <div
            ref={ref}
            className="relative flex justify-center text-center min-h-screen flex-col items-center overflow-hidden"
        >
            <div className="bg_grid"></div>
            <div className="bg_geometric"></div>
            <BgAnimation targetRef={ref} />
            <div className="flex flex-col items-center justify-center space-y-6 pt-52 pb-40">
                <h1 className="text-4xl lg:text-6xl text-balance font-bold">
                    Create your
                    <span className="text-primary leading-[100px]">
                        {' '}
                        QR-Code{' '}
                    </span>
                    and <br />
                    Make It{' '}
                    <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                        Unique
                    </span>
                </h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full text-lg font-body tracking-wide"
                >
                    Customize, download and share your QR code in seconds.
                    <br />
                    <strong>Effortless and free!!</strong>
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
            <HowItWorks />
        </div>
    );
};

export default HeroSection;
