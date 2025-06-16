import { Button } from '@/components/ui/button';
import { HashLink } from 'react-router-hash-link';
interface DescriptionProps {
    isSignedIn: boolean | undefined;
}

const Description:React.FC<DescriptionProps> = ({ isSignedIn }) => {
    return (
        <section className="w-full bg-purple-200 py-20 px-9 md:px-16 ">
            <div className="w-full max-w-4xl text-center lg:text-start grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-16 items-center m-auto">
                <h1 className="text-2xl text-purple-950 leading-[3rem] font-medium mb-3">
                    Create Stunning QR Codes Effortlessly
                </h1>
                <div className="space-y-6">
                    <p>
                        Our app allows you to generate customized QR Codes with
                        unique patterns, colors and logos. Save and reuse your
                        designs anytime for maximun convinience.
                    </p>
                    <div className="space-x-3">
                        <Button>
                            <HashLink
                                smooth
                                to={isSignedIn ? '/dashboard' : '/#home'}
                            >
                                Get Started
                            </HashLink>
                        </Button>
                        <Button variant={'outline'}>Learn More</Button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Description;
