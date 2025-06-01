import QRCustomizer from './components/QRCustomizer';
import QRPreview from './components/QRPreview';
import { QRProvider } from '@/hooks/QRContext';
import CustomizeHeader from './components/CustomizeHeader';
import { motion } from 'framer-motion';

const CustomizePage = () => {
    return (
        <QRProvider>
            <div className="flex flex-col justify-center items-start w-full  pt-32 pb-20 gap-14">
                <CustomizeHeader/>
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex flex-col lg:flex-row items-center lg:items-start justify-center w-full gap-3"
                >
                    <motion.div
                        initial={{ x: -20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className='w-full max-w-lg overflow-hidden'
                    >
                        <QRCustomizer />
                    </motion.div>
                    <motion.div
                        initial={{ x: 20 }}
                        animate={{ x: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="lg:sticky top-16 h-full w-full max-w-sm"
                    >
                        <QRPreview />
                    </motion.div>
                </motion.div>
            </div>
        </QRProvider>
    );
};

export default CustomizePage;
