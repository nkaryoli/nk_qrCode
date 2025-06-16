import { Button } from '@/components/ui/button';
import { PaintBucket, QrCode } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';

interface CustomizeSectionProps {
    handleSigIn: () => void;
    isSignedIn: boolean | undefined;
}

const CustomizeSection: React.FC<CustomizeSectionProps> = ({
    handleSigIn,
    isSignedIn,
}) => {
    return (
        <section className="w-full px-6 py-11 md:p-20">
            <div className="flex flex-col-reverse items-center justify-center gap-6 lg:gap-9 xl:flex-row max-w-4xl m-auto">
                <div className="w-full space-y-6">
                    <p className="mb-3 text-center">Customize</p>
                    <h1 className="text-2xl font-medium text-center text-purple-950">
                        Unleash Your Creativity
                    </h1>
                    <p className="text-center max-w-lg m-auto">
                        Transform your QR codes into unique works of art. Choose
                        from a variety of colors, gradients, logos, and
                        backgrounds to make your codes stand out.
                    </p>

                    <div className="flex flex-col lg:flex-row justify-center w-full max-w-lg lg:max-w-4xl gap-6 m-auto py-4">
                        <div className="w-full flex rounded-xl overflow-hidden">
                            <div className="w-full flex flex-col rounded-l-xl items-center lg:items-start p-6 space-y-3 border border-r-0">
                                <PaintBucket size={45} />
                                <h3 className="font-medium pt-4">
                                    Color Options
                                </h3>
                                <p className="">
                                    Select from vibrant colors to personalize
                                    your QR codes.
                                </p>
                            </div>
                            <div className="w-9 flex flex-col">
                                <div className="bg-accent w-full h-full" />
                                <div className="bg-orange-300 w-full h-full" />
                                <div className="bg-blue-700 w-full h-full" />
                                <div className="bg-emerald-500 w-full h-full" />
                                <div className="bg-yellow-400 w-full h-full" />
                                <div className="bg-primary w-full h-full" />
                                <div className="bg-fuchsia-700 w-full h-full" />
                                <div className="bg-cyan-300 w-full h-full" />
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-b from-purple-950 via-accent to-secondary pr-9 rounded-l-2xl rounded-r-xl">
                            <div className="h-full flex flex-col items-center lg:items-start space-y-3 bg-white p-6 rounded-l-xl border">
                                <img src="/icon-gradient.svg" />
                                <h3 className="font-medium pt-4">
                                    Gradient Styles
                                </h3>
                                <p className="">
                                    Add depth with stunning gradient designs for
                                    your QR codes.
                                </p>
                            </div>
                        </div>
                        <div className="w-full flex rounded-xl overflow-hidden">
                            <div className="w-full flex flex-col rounded-l-xl items-center lg:items-start p-6 space-y-3 border border-r-0">
                                <div className="w-full flex justify-center lg:justify-start gap-3">
                                    <img src="/logo1.svg" className="h-9" />
                                    <img src="/logo2.svg" className="h-9" />
                                    <img src="/logo3.svg" className="h-9" />
                                    <img
                                        src="/logo4.svg"
                                        className="h-9 lg:hidden"
                                    />
                                    <img
                                        src="/logo5.svg"
                                        className="h-9 lg:hidden xl:block"
                                    />
                                </div>
                                <h3 className="font-medium pt-4">Logos</h3>
                                <p className="">
                                    Personalize it even furtther. Add theme logo
                                    of your brand.
                                </p>
                            </div>
                            <div className="w-10 flex flex-col justify-evenly bg-gradient-to-l from-input via-transparent to-input border border-l-0 px-1 rounded-r-xl" />
                        </div>
                    </div>

                    <div className="flex w-full justify-center">
                        <Button asChild>
                            <HashLink
                                smooth
                                to={isSignedIn ? '/dashboard' : '/#home'}
                                className="w-40"
                            >
                                <QrCode />
                                Create QR
                            </HashLink>
                        </Button>
                        {!isSignedIn && (
                            <Button
                                variant={'outline'}
                                className="ml-3 bg-transparent w-40 text-primary"
                                onClick={handleSigIn}
                            >
                                Sign Up
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomizeSection;
