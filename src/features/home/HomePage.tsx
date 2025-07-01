import { QRProvider } from '@/hooks/QRContext';
import Hero from './components/heroSection/HeroSection';
import ExploreSection from './components/innovate/ExploreSection';
import AccountSection from './components/save/AccountSection';
import CustomizeSection from './components/custiomize/CustomizeSection';
import TestimonialsSection from './components/testimonials/TestimonialsSection';
import QRReader from './components/qrReader/QRReader';
import HowItWorks from './components/howItWorks/HowItWorks';
import FaqSection from './components/faqs/FaqSection';
import CTASection from './components/CTASection';
import { useNavigate } from 'react-router-dom';
import AnimatedBG from '@/components/AnimatedBG';

const HomePage = () => {
    const navigate = useNavigate();

    const isSignedIn = true;

    const handleSignIn = () => {
        navigate('/sign-in');
    };

    return (
        <QRProvider>
            <div id="home" className="w-full px-6 bg_gradient_white">
                <div className="absolute inset-0">
                    <AnimatedBG />
                </div>
                <Hero />
            </div>
            <CustomizeSection
                handleSigIn={handleSignIn}
                isSignedIn={isSignedIn}
            />
            <ExploreSection />
            <AccountSection
                handleSigIn={handleSignIn}
                isSignedIn={isSignedIn}
            />
            <div className="w-full bg-gradient-to-b from-white via-purple-100 to-purple-300 pb-64 relative mb-32">
                <QRReader />
                <HowItWorks />
                <div className="absolute -bottom-44 w-full">
                    <TestimonialsSection />
                </div>
            </div>
            <FaqSection />
            <CTASection handleSigIn={handleSignIn} isSignedIn={isSignedIn} />
        </QRProvider>
    );
};

export default HomePage;
