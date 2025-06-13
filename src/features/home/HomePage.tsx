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
            <div className="w-full bg-purple-100 py-20 px-6 md:px-16 ">
                <Description />
            </div>
            <div className='py-24 px-6 md:px-16'>
                <CustomizeSection/>
            </div>
            <div className='py-11 px-6 md:px-16'>
                <ExploreSection/>
            </div>
            <div className='w-full bg-gradient-to-br from-input via-muted to-transparent px-6 md:px-16'>
                <AccountSection/>
            </div>
            <div className='w-full p-6 md:p-16'>
                <QRReader />
            </div>
            <div className='w-full px-6 md:px-16'>
                <HowItWorks/>
            </div>
            <div className='py-24 px-6 md:px-16 w-full'>
                <TestimonialsSection/>
            </div>
        </QRProvider>
    );
};

export default HomePage;
