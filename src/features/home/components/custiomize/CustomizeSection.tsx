import { Button } from '@/components/ui/button';
import { PaintBucket } from 'lucide-react';

const CustomizeSection = () => {
    return (
        <section className="w-full px-6 py-11 md:p-20">
            <div className="flex flex-col-reverse items-center gap-6 lg:flex-row max-w-4xl m-auto">
                <div className="w-full space-y-3 text-center lg:text-start">
                    <p className="mb-3">Customize</p>
                    <h1 className="text-2xl font-medium">
                        Unleash Your Creativity
                    </h1>
                    <p className="text-balance">
                        Transform your QR codes into unique works of art. Choose
                        from a variety of colors, gradients, logos, and
                        backgrounds to make your codes stand out.
                    </p>

                    <div className="flex justify-center lg:justify-start gap-3 py-3">
                        <div className="w-full lg:w-52 flex flex-col items-center lg:items-start space-y-3 bg-pink-300/10 p-3 rounded-lg">
                            <PaintBucket size={45} />
                            <h3 className="font-medium pt-4">Color Options</h3>
                            <p className="">
                                Select from vibrant colors to personalize your
                                QR codes.
                            </p>
                        </div>
                        <div className="w-full lg:w-52 flex flex-col items-center lg:items-start space-y-3 bg-yellow-50/50 p-3 rounded-lg">
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

                    <Button className="w-36">Sign Up</Button>
                </div>

                <img src="/img-customize.svg" className="w-32 lg:w-52" />
            </div>
        </section>
    );
};

export default CustomizeSection;
