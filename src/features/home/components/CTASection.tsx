import { Button } from '@/components/ui/button';
import { QrCode } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface CTASectionProps {
    handleSigIn: () => void;
    isSignedIn: boolean | undefined;
}

const CTASection: React.FC<CTASectionProps> = ({ handleSigIn, isSignedIn }) => {
    return (
        <section className="w-full py-16 lg:py-20 px-9 lg:p-20 mt-20 bg-gradient-to-b from-input via-input to-transparent">
            <div className="max-w-4xl flex flex-col items-center lg:flex-row gap-9 m-auto rounded-lg">
                <div className="space-y-6 w-full p-3 text-center lg:text-start">
                    <h1 className="text-2xl text-purple-950 font-medium">
                        Create your QR Code today!
                    </h1>
                    <p className="max-w-lg m-auto lg:m-0">
                        Experience the benefits of our service now. Join us now
                        to design and customize your own QR codes effortlessly
                        and efficiently.
                    </p>
                    <div className="flex w-full gap-3 justify-center lg:justify-start">
                        <Button className="w-40" asChild>
                            <HashLink
                                smooth
                                to={isSignedIn ? '/dashboard' : '/#home'}
                            >
                                <QrCode />
                                Create QR
                            </HashLink>
                        </Button>
                        {!isSignedIn && (
                            <Button
                                variant={'outline'}
                                className="w-40"
                                onClick={handleSigIn}
                            >
                                Sign Up
                            </Button>
                        )}
                    </div>
                </div>
                <img src="/qrCode.png" alt="" className="rounded-xl w-44" />
            </div>
        </section>
    );
};

export default CTASection;
