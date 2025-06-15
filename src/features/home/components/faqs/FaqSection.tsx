import { motion } from 'framer-motion';
import Faqs from './Faqs';

const FaqSection = () => {
    return (
        <section id='faq' className="w-full max-w-4xl m-auto flex flex-col items-center gap-6 pt-20">
            <motion.h2
                className="text-2xl font-headerText text-center"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                FAQS
            </motion.h2>
            <Faqs />
        </section>
    );
};

export default FaqSection;
