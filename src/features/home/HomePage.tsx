import { QRProvider } from '@/hooks/QRContext';
import Hero from './components/heroSection/HeroSection';
import Description from './components/Description';
import ExploreSection from './components/ExploreSection';
import AccountSection from './components/AccountSection';
import HowItWorks from './components/HowItWorks';
import CustomizeSection from './components/CustomizeSection';
import TestimonialsSection from './components/TestimonialsSection';
import QRReader from './components/qrReader/QRReader';

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
