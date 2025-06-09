import QRGenerator from './QRGenerator';

const Hero = () => {
    return (
        <section className="flex flex-col items-center justify-center pt-32  overflow-hidden">
            <div className="space-y-6 text-center">
                <h1 className="text-4xl lg:text-5xl text-balance font-bold">
                    Unleash Your Creativity with <br/>
                    <span className="bg-gradient-to-r from-accent via-secondary to-primary bg-clip-text text-transparent leading-[3.5rem]">
                        NK QR-Code
                    </span>
                </h1>
                <p className="w-full text-xl text-balance">
                    Generate, Customize and download your QR code in
                    <strong> three simple Steps</strong>
                </p>
            </div>
            <div className='bg_elipse relative w-full flex justify-center pt-16'>
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
