import { Button } from '@/components/ui/button';
import StepsCard from './StepsCard';
import { HashLink } from 'react-router-hash-link';
import { QrCode } from 'lucide-react';
import type { CTASectionProps } from '../CTASection';

const HowItWorks: React.FC<CTASectionProps> = ({ handleSigIn, isSignedIn }) => {
    return (
        <section className="w-full p-6 lg:pb-20 ">
            <div className="max-w-4xl flex flex-col justify-center items-center space-y-9 m-auto">
                <h2 className="font-medium">How It Works</h2>
                <div className="w-full flex flex-col items-center gap-6 lg:flex-row lg:justify-around ">
                    <StepsCard
                        number={1}
                        img={<img src="/step-1.svg" className="w-40 mt-4" />}
                        text="Type the content you want as a QR-Code."
                    />
                    <StepsCard
                        number={2}
                        img={<img src="/step-2.svg" className="w-44 mt-2" />}
                        text="Customize it to your liking."
                    />
                    <StepsCard
                        number={3}
                        img={<img src="/step3.svg" className="w-44 mt-2" />}
                        text="Download it or Save it for future use."
                    />
                </div>
                <div className="flex w-full gap-3 justify-center">
                    <Button className="w-52" asChild>
                        <HashLink
                            smooth
                            to={isSignedIn ? '/dashboard' : '/#home'}
                        >
                            <QrCode />
                            Start creating!
                        </HashLink>
                    </Button>
                    {!isSignedIn && (
                        <Button
                            variant={'outline'}
                            className="w-48"
                            onClick={handleSigIn}
                        >
                            Sign Up
                        </Button>
                    )}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
