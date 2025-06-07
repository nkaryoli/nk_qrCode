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

    const scale = useTransform(scrollYProgress, [0, 0.6], [1.4, 0]);
    const opacity = useTransform(scrollYProgress, [0.3, 0.35], [1, 0]);

    const icon1X = useTransform(
        scrollYProgress,
        [0, 0.2, 1],
        [-1100, window.innerWidth / 3, window.innerWidth]
    );
    const icon1Y = useTransform(
        scrollYProgress,
        [0, 1],
        [-0, window.innerHeight - 180]
    );

    const icon2X = useTransform(
        scrollYProgress,
        [0, 0.4, 1],
        [-520, window.innerWidth, (window.innerWidth * 3) / 5]
    );
    const icon2Y = useTransform(
        scrollYProgress,
        [0, 1],
        [400, window.innerHeight / 5]
    );

    const icon3X = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [-450, window.innerWidth, window.innerWidth * 2]
    );
    const icon3Y = useTransform(
        scrollYProgress,
        [0, 1],
        [550, window.innerHeight - 700]
    );

    const icon4X = useTransform(scrollYProgress, [0, 0.3, 1], [-700, 700, 800]);
    const icon4Y = useTransform(scrollYProgress, [0, 1], [-72, 0]);

    const icon5X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1100, 1300]);
    const icon5Y = useTransform(scrollYProgress, [0, 1], [-22, 500]);

    const icon6X = useTransform(
        scrollYProgress,
        [0, 0.3, 1],
        [-800, 1100, 1300]
    );
    const icon6Y = useTransform(scrollYProgress, [0, 1], [-82, 500]);

    const classIcon =
        'fixed bg-white/80 p-2 shadow-xl shadow-gray-200 rounded-sm text-chart-5 hidden lg:block';

    return (
        <>
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
                    className={`${classIcon} -rotate-[23deg] -left-16`}
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
                    className={`${classIcon} -rotate-[20deg] -left-64`}
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
                    className={`${classIcon} -rotate-[12deg] -left-80`}
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
                    size={75}
                    className={`${classIcon} rotate-12 -right-0 top-6`}
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
                    size={83}
                    className={`${classIcon} rotate-12 right-6 top-96 text-chart-5`}
                />
            </motion.div>
        </>
    );
};

export default BgAnimation;
