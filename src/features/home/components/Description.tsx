import { Button } from "@/components/ui/button";

const Description = () => {
    return (
        <div className="w-full max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-16 items-center text-start m-auto">
            <h1 className="text-2xl leading-[3rem] font-medium mb-3">
                Create Stunning QR Codes Effortlessly
            </h1>
            <div className="space-y-6">
                <p>
                    Our app allows you to generate customized QR Codes with
                    unique patterns, colors and logos. Save and reuse your
                    designs anytime for maximun convinience.
                </p>
                <div className="space-x-3">
                    <Button>Get Started</Button>
                    <Button variant={'outline'}>Learn More</Button>
                </div>
            </div>
        </div>
    );
};

export default Description;
