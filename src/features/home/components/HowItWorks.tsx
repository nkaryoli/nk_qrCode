import StepsCard from './StepsCard';

const HowItWorks = () => {
    return (
        <section className="w-full flex flex-col justify-center items-center py-24 backdrop-blur-sm bg-white space-y-4">
            <h2 className="text-3xl md:text-5xl font-semibold">How It Works</h2>
            <p className="text-lg max-w-[800px] mx-auto tracking-wid">
                Get started in minutes with three simple steps process.
            </p>
            <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-3 gap-14 m-auto pt-9">
                <StepsCard
                    number={1}
                    img={<img src="/step1.svg" className="w-64" />}
                    text="Type the content you want as a QR-Code."
                />
                <StepsCard
                    number={2}
                    img={<img src="/step2.svg" className="w-60 mt-4" />}
                    text="Customize it to your liking."
                />
                <StepsCard
                    number={3}
                    img={<img src="/step3.svg" className="w-60 mt-4" />}
                    text="Download it or Save it for future use."
                />
            </div>
        </section>
    );
};

export default HowItWorks;
