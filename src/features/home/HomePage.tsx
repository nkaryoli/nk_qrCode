import { QRProvider } from '@/hooks/QRContext';
import Hero from './components/heroSection/HeroSection';

const HomePage = () => {
    return (
        <QRProvider>
            <div className="w-full">
                <Hero />
            </div>
        </QRProvider>
    );
};

export default HomePage;
