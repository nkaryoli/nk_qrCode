import { QRProvider } from '@/hooks/QRContext';
import Hero from './components/heroSection/HeroSection';
import Description from './components/Description';
import ExploreSection from './components/innovate/ExploreSection';
import AccountSection from './components/save/AccountSection';
import CustomizeSection from './components/custiomize/CustomizeSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import QRReader from './components/qrReader/QRReader';
import HowItWorks from './components/howItWorks/HowItWorks';

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
            <QRReader />
            <HowItWorks />
            <div className="w-full h-72 relative bg-purple-300 mb-40">
                <div className="absolute top-0 w-full">
                    <TestimonialsSection />
                </div>
            </div>
        </QRProvider>
    );
};

export default HomePage;
