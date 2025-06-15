import { QRProvider } from '@/hooks/QRContext';
import Hero from './components/heroSection/HeroSection';
import Description from './components/Description';
import ExploreSection from './components/innovate/ExploreSection';
import AccountSection from './components/save/AccountSection';
import CustomizeSection from './components/custiomize/CustomizeSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import QRReader from './components/qrReader/QRReader';
import HowItWorks from './components/howItWorks/HowItWorks';

import FaqSection from './components/faqs/FaqSection';

const HomePage = () => {
    return (
        <QRProvider>
            <div className="w-full px-6 bg_gradient_white">
                <Hero />
            </div>
            <Description />
            <CustomizeSection />
            <ExploreSection />
            <AccountSection />
            <div className="w-full bg-gradient-to-b from-white via-purple-100 to-purple-300 pb-64 relative mb-32">
                <QRReader />
                <HowItWorks />
                <div className="absolute -bottom-44 w-full">
                    <TestimonialsSection />
                </div>
            </div>
            <FaqSection />
        </QRProvider>
    );
};

export default HomePage;
