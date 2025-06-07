import { motion, useScroll, useTransform } from 'framer-motion';
import {
    QrCode,
    ScanHeart,
    ScanLine,
    ScanQrCode,
    Sparkles,
    Wand,
} from 'lucide-react';

interface BgAnimationProps {
    targetRef: React.RefObject<HTMLDivElement | null>;
}

const BgAnimation = ({ targetRef }: BgAnimationProps) => {
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ['start end', 'end start'],
    });

    const scale = useTransform(scrollYProgress, [0, 1], [1.4, 0]);

    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.7], [1, 1, 0]);
    const icon1X = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-1000, window.innerWidth / 3, window.innerWidth]
    );
    const icon1Y = useTransform(
        scrollYProgress,
        [0, 1],
        [-32, window.innerHeight - 180]
    );

    const icon2X = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-500, (window.innerWidth * 2) / 5, (window.innerWidth * 3) / 5]
    );
    const icon2Y = useTransform(
        scrollYProgress,
        [0, 1],
        [600, window.innerHeight / 5]
    );

    const icon3X = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [-600, window.innerWidth / 3, window.innerWidth]
    );
    const icon3Y = useTransform(
        scrollYProgress,
        [0, 1],
        [600, window.innerHeight - 700]
    );

    const icon4X = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-1400, 500, 1000]
    );
    const icon4Y = useTransform(scrollYProgress, [0, 1], [-322, 1000]);

    const icon5X = useTransform(
        scrollYProgress,
        [0, 0.5, 1],
        [-100, 700, 1200]
    );
    const icon5Y = useTransform(scrollYProgress, [0, 1], [-62, 500]);

    const icon6X = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-1000, 500, 800]
    );
    const icon6Y = useTransform(scrollYProgress, [0, 1], [-82, 500]);

    const classIcon =
        'fixed bg-white/80 p-2 shadow-xl shadow-gray-200 rounded-sm text-chart-5 hidden lg:block';
    return (
        <div>
            <motion.div
                style={{
                    position: 'fixed',
                    left: icon1X,
                    top: icon1Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <QrCode
                    size={90}
                    strokeWidth={1.1}
                    className={`${classIcon} -rotate-[23deg]`}
                />
            </motion.div>
            <motion.div
                style={{
                    position: 'fixed',
                    left: icon2X,
                    top: icon2Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <ScanHeart
                    strokeWidth={1.2}
                    size={70}
                    className={`${classIcon} -rotate-[20deg]`}
                />
            </motion.div>
            <motion.div
                style={{
                    position: 'fixed',
                    left: icon3X,
                    top: icon3Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <Sparkles
                    strokeWidth={1}
                    size={80}
                    className={`${classIcon} -rotate-[12deg]`}
                />
            </motion.div>
            <motion.div
                style={{
                    position: 'fixed',
                    right: icon4X,
                    top: icon4Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <ScanQrCode
                    strokeWidth={1.1}
                    size={85}
                    className={`${classIcon} rotate-12 right-6 top-52`}
                />
            </motion.div>
            <motion.div
                style={{
                    position: 'fixed',
                    right: icon5X,
                    top: icon5Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <Wand
                    strokeWidth={1}
                    size={65}
                    className={`${classIcon} rotate-12 -right-20 -top-0`}
                />
            </motion.div>
            <motion.div
                style={{
                    position: 'fixed',
                    right: icon6X,
                    top: icon6Y,
                    opacity: opacity,
                    scale: scale,
                }}
            >
                <ScanLine
                    strokeWidth={1.3}
                    size={70}
                    className={`${classIcon} rotate-12 right-56 top-96 text-chart-5`}
                />
            </motion.div>
        </div>
    );
};

export default BgAnimation;
