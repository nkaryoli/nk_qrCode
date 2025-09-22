import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/hooks/AuthContext';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { Mail, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
    const { signUpNewUser, user } = useAuth();
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user && isSigningUp) {
            navigate('/dashboard');
            setIsSigningUp(false);
        }
    }, [user, isSigningUp, navigate]);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSigningUp(true);

        try {
            const result = await signUpNewUser(email, password, {
                first_name: name,
                last_name: lastname,
            });
            if (result.success) {
                console.log(
                    'User signed up successfully, profile will be created automatically'
                );
                navigate('/');
            } else {
                setError('Failed to sign up. Please try again.');
            }
        } catch (error) {
            console.log('Error during sign up:', error);
            setError('Failed to sign up. Please try again.');
        } finally {
            setIsSigningUp(false);
        }
    };

    return (
        <section className="w-full flex items-center justify-center bg-background pt-32 px-3">
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row-reverse w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full text-center flex flex-col items-center lg:pt-24 lg:p-16 relative">
                    <h1 className="text-4xl font-medium mb-6 text-purple-950">
                        Hello friend!
                    </h1>
                    <p className="mt-6">We are glad you are joining us.</p>
                    <p className="pt-2">
                        Please provide the information to register
                        <br /> your{' '}
                        <strong className="text-primary font-header text-lg ">
                            NK-QRcode
                        </strong>{' '}
                        account.
                    </p>
                    <img
                        src="/img-signup3.svg"
                        className="w-[160px] m-auto rounded-bl-[100px] hidden lg:block drop-shadow-[1px_2px_1px_var(--chart-4)]"
                        style={{ transform: 'rotateY(180deg)' }}
                    />
                    <QrCode
                        size={'35%'}
                        className="hidden lg:block -rotate-45 absolute -right-20 -top-11 text-purple-500"
                    />
                </div>

                <div className="flex items-center justify-center w-full lg:min-w-[400px] lg:bg-gradient-to-b from-purple-950 to-purple-600 lg:px-14 relative overflow-hidden">
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -left-14 -bottom-14 text-purple-300"
                    />
                    <motion.div
                        className="w-full bg-gradient-to-b from-purple-950 to-purple-600 lg:from-purple-950/0 lg:to-purple-800/0 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >
                        {/* <div className="w-full flex flex-col gap-4"> */}
                        <form
                            onSubmit={handleSignUp}
                            className="w-full flex flex-col gap-4"
                        >
                            <div className="flex gap-3">
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="name"
                                        className="text-white"
                                    >
                                        First name
                                    </Label>
                                    <div className="flex items-center gap-2 border rounded-sm  h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                                        <Input
                                            id="name"
                                            type="name"
                                            placeholder="Name"
                                            className="border-0 shadow-none focus-visible:ring-0"
                                            onChange={(e) =>
                                                setName(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <Label
                                        htmlFor="lastname"
                                        className="text-white"
                                    >
                                        Last name
                                    </Label>
                                    <div className="flex items-center gap-2 border rounded-sm h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                                        <Input
                                            id="lastname"
                                            type="lastname"
                                            placeholder="Lastname"
                                            className="border-0 shadow-none focus-visible:ring-0"
                                            onChange={(e) =>
                                                setLastname(e.target.value)
                                            }
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <Label htmlFor="email" className="text-white">
                                    Email Address
                                </Label>
                                <div className="flex items-center gap-2 border rounded-sm px-3 h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                                    <Mail className="h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="email"
                                        type="email"
                                        placeholder="Enter your email"
                                        className="border-0 shadow-none focus-visible:ring-0"
                                        onChange={(e) =>
                                            setEmal(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-col gap-2">
                                <Label
                                    htmlFor="password"
                                    className="text-white"
                                >
                                    Password
                                </Label>
                                <div className="flex items-center gap-2 bg-white border rounded-sm  px-3 h-10 focus-within:ring-2 focus-within:ring-ring">
                                    <Lock className="h-5 w-5 text-muted-foreground" />
                                    <Input
                                        id="password"
                                        type="password"
                                        placeholder="Enter your password"
                                        className="border-0 shadow-none focus-visible:ring-0"
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                    />
                                </div>
                            </div>

                            {/* Submit */}
                            <Button type="submit" className="mt-2">
                                Sign In
                            </Button>

                            {error && (
                                <p className="text-red-600 text-center pt-4">
                                    {error}
                                </p>
                            )}
                        </form>

                        {/* Signup */}
                        <p className="text-center text-sm text-white mt-4">
                            You have an account?{' '}
                            <a
                                href="/sign-up"
                                className="text-primary cursor-pointer hover:underline"
                            >
                                Sign In
                            </a>
                        </p>
                        {/* </div> */}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
