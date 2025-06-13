import { Button } from '@/components/ui/button';
import { PaintBucket } from 'lucide-react';

const CustomizeSection = () => {
    return (
        <section className="w-full flex flex-col lg:flex-row gap-16 max-w-4xl m-auto">
            <div className="w-full max-w-lg space-y-3">
                <p className="mb-3">Customize</p>
                <h1 className="text-2xl font-medium">
                    Unleash Your Creativity
                </h1>
                <p>
                    Transform your QR codes into unique works of art. Choose
                    from a variety of colors, gradients, logos, and backgrounds
                    to make your codes stand out.
                </p>

                <div className="flex py-3">
                    <div className=" max-w-52 space-y-3">
                        <PaintBucket size={45} />
                        <h3 className="font-medium pt-4">Color Options</h3>
                        <p className="">
                            Select from vibrant colors to personalize your QR
                            codes.
                        </p>
                    </div>
                    <div className=" max-w-52 space-y-3">
                        <img src="/icon-gradient.svg" />
                        <h3 className="font-medium pt-4">Gradient Styles</h3>
                        <p className="">
                            Add depth with stunning gradient designs for your QR
                            codes.
                        </p>
                    </div>
                </div>

                <Button className="w-36">Sign Up</Button>
            </div>

            <img src="/customize-img.svg" className="w-72" />
        </section>
    );
};

export default CustomizeSection;
