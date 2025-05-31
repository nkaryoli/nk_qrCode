import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';

const CustomizeHeader = () => {
    return (
        <motion.div
            className="text-center space-y-4 max-w-3xl mx-auto px-4"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.div
                className="relative flex items-center justify-center gap-2 text-primary mb-4"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <QrCode size={82} className="animate-pulse" />
            </motion.div>

            <motion.h1
                className="text-4xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                Create Your Custom QR Code
            </motion.h1>

            <motion.p
                className="text-lg text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                Design a unique QR code that matches your brand. Customize
                colors, add your logo, and make it stand out.
            </motion.p>
        </motion.div>
    );
};

export default CustomizeHeader;
