import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HowItWorks = () => {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/customize-qr');
    };

    return (
        <section className="px-[10vw] mt-11">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
                <p className="text-lg text-muted-foreground max-w-[800px] mx-auto">
                    Get started in minutes with three simple steps process.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <Card className='rounded-ss-[70px] rounded-ee-[70px] p-4'>
                    <CardHeader className='flex items-center gap-3 text-center'>
                        <CardTitle>
                            <span className="text-primary w-16 h-16  flex items-center justify-center text-4xl font-bold ">1</span>
                        </CardTitle>
                        <CardDescription>
                            <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h3>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </CardContent>
                </Card>

                <Card className='rounded-ss-[70px] rounded-ee-[70px] p-4'>
                    <CardHeader className='flex items-center gap-3 text-center'>
                        <CardTitle>
                            <span className="text-primary w-16 h-16  flex items-center justify-center text-4xl font-bold ">2</span>
                        </CardTitle>
                        <CardDescription>
                            <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h3>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </CardContent>
                </Card>
                
                <Card className='rounded-ss-[70px] rounded-ee-[70px] p-4'>
                    <CardHeader className='flex items-center gap-3 text-center'>
                        <CardTitle>
                            <span className="text-primary w-16 h-16  flex items-center justify-center text-4xl font-bold ">2</span>
                        </CardTitle>
                        <CardDescription>
                            <h3 className="text-xl font-bold mb-2">Lorem ipsum dolor sit amet</h3>
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p className='text-center'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        </p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-12 text-center">
                <Button
                    size="lg"
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                    onClick={handleGetStarted}
                >
                    Get Started Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </div>
        </section>
    );
};

export default HowItWorks;
