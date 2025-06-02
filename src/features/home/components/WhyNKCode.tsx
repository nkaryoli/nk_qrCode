import { useIsMobile } from "@/hooks/useIsMobile";

const WhyNK = () => {
    const isMobile  = useIsMobile();

    const characteristics = [
        { icon: <img src="/puzzle-icon.svg"/>, title: "Fully Customizable", text: "Choose colors, add logos, and personalize your QR codes.", delay: 0},
        { icon: <img src="/fast-icon.svg" />, title: "Fast & Free", text: "Generate high-quality QR codes instantly at no cost.", delay: isMobile ? 0 : 0.2},
        { icon: <img src="/save-icon.svg"/>, title: "Scan & Save", text: "Easily scan and store QR codes for future use.", delay: isMobile ? 0 : 0.3},
    ]

    return (
        <div className="w-full flex flex-col justify-center items-center gap-6 md:gap-9 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">
                Why our users preffer 
                <strong className="bg-gradient-to-r from-primary via-accent to-primary text-transparent bg-clip-text font-extrabold"> NK QR-Code</strong>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-9 md:gap-12 p-6">
                {characteristics.map(({icon, title, text}) => (
                <div 
                    key={title}
                    className="w-full max-w-72 flex flex-col items-center justify-center gap-4 rounded-md">
                    <div className="text-5xl text-accent-100">{icon}</div>
                    <h3 className="text-2xl text-primary-100 font-headerText ">{title}</h3>
                    <p className="text-lg text-text-200 font-bodyText">{text}</p>
                </div>
                ))}
            </div>
        </div>
    )
};

export default WhyNK;