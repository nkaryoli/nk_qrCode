import QRGenerator from './QRGenerator';

const Hero = () => {
    return (
        <section
            className="w-full"
            style={{
                backgroundImage: `radial-gradient(125% 125% at 50% 10%, #ffffff 40%, #efdcfd 100%)`,
                backgroundSize: '100% 100%',
            }}
        >
            <div className="flex flex-col items-center justify-center gap-9 pt-32 pb-16 lg:pb-32 z-10 overflow-hidden">
                <div className="space-y-6 text-center max-w-5xl">
                    <h1 className="text-5xl max-w-4xl text-balance font-semibold">
                        Unleash Your Creativity with{' '}
                        <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                            NK QR-Code
                        </span>
                    </h1>
                    <p className="w-full text-lg font-medium text-balance md:px-9">
                        Generate, Customize and download your QR code in
                        <strong> three simple Steps</strong>
                    </p>
                </div>
                <QRGenerator />
            </div>
        </section>
    );
};

export default Hero;
