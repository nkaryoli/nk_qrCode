import { Button } from '@/components/ui/button';

const CTASection = () => {
    return (
        <section className="w-full py-16 lg:py-20 px-9 lg:p-20 mt-20 bg-gradient-to-b from-input via-input to-transparent">
            <div className="max-w-4xl flex flex-col items-center lg:flex-row gap-9 m-auto rounded-lg">
                <div className="space-y-6 w-full p-3 text-center lg:text-start">
                    <h1 className="text-2xl font-medium">
                        Create your QR Code today!
                    </h1>
                    <p className="text-balance">
                        Experience the benefits of our service now. Join us now
                        to design and customize your own QR codes effortlessly
                        and efficiently.
                    </p>
                    <Button>Create QR</Button>
                    <Button variant={'neon'} className="ml-3 bg-transparent">
                        Sign Up
                    </Button>
                </div>
                <img src="/qrCode.png" alt="" className="rounded-xl" />
            </div>
        </section>
    );
};

export default CTASection;
