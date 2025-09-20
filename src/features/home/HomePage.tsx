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
import { useAuth } from '@/hooks/AuthContext';


const HomePage = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    
    console.log(user);
    const isSignedIn = user ? true : false;

    const handleSignIn = () => {
        navigate('/sign-in');
    };

    return (
        <QRProvider>
            <Hero />
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
                <HowItWorks handleSigIn={handleSignIn} isSignedIn={isSignedIn} />
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
