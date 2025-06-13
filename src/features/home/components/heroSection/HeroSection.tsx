import QRGenerator from './QRGenerator';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-32 overflow-hidden">
            <div className="space-y-6 text-center max-w-5xl">
                <h1 className="text-5xl max-w-4xl text-balance font-semibold">
                    Unleash Your Creativity with {' '}
                    <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent">
                        NK QR-Code
                    </span>
                </h1>
                <p className="w-full text-lg text-balance md:px-9">
                    Generate, Customize and download your QR code in
                    <strong> three simple Steps</strong>
                </p>
            </div>
            <div className='bg_elipse relative w-full flex justify-center pt-16 pb-20'>
                <div className='blur-bg'></div>
                <div className='bg_lines'></div>
                <div className='bg_lines2'></div>
                <div className='bg_lines3'></div>
                <div className='bg_lines4'></div>
                <div className='bg_lines5'></div>
                <div className='bg_lines6'></div>
                <div className='bg_lines7'></div>
                <QRGenerator />
            </div>
        </section>
    );
};

export default Hero;
