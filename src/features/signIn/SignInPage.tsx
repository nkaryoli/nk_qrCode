import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/AuthContext';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Mail, Lock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function SignInPage() {
    const {
        signInWithPassword,
        signInWithGoogle,
        signInWithGithub,
        signOut,
        user,
    } = useAuth();
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [error, setError] = useState<string | null>(null);
    const [isSigningUp, setIsSigningUp] = useState(false);
    const navigate = useNavigate();

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSigningUp(true);
        try {
            const result = await signInWithPassword(email, password);
            if (!result.success) {
                console.log('Sign-in email sent successfully:', result.data);
                setIsSigningUp(false);
                return;
            }
        } catch (error) {
            console.log('Error during sign in:', error);
            setError('Failed to sign in. Please try again.');
            setIsSigningUp(false);
        }
    };

    useEffect(() => {
        if (user && isSigningUp) {
            navigate('/dashboard');
            setIsSigningUp(false);
        }
    }, [user, isSigningUp, navigate]);

    const displayName = user?.user_metadata.user_name || user?.email;

    return (
        <section className="w-full flex items-center justify-center bg-background pt-32 px-3">
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full lg:max-w-[50%] flex flex-col items-center lg:p-16 relative">
                    <h1 className="text-4xl font-medium mb-6 text-purple-950">
                        Welcome Back!
                    </h1>
                    <p className="mt-6">We are very excited to see you.</p>
                    <p>
                        Please Sign into your{' '}
                        <strong className="text-primary font-header text-lg ">
                            NK-QRcode
                        </strong>{' '}
                        account.
                    </p>
                    <img src="/qrCode.png" className="m-auto hidden lg:block" />
                    <QrCode
                        size={'35%'}
                        className="hidden lg:block -rotate-45 absolute -left-20 -top-11 text-purple-500  rounded-lg"
                    />
                </div>

                <div className="flex items-center justify-center w-full lg:w-[50%] lg:min-w-[400px] lg:bg-gradient-to-b from-purple-950 to-purple-600 lg:p-14 relative overflow-hidden">
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -right-14 -bottom-14 text-purple-300"
                    />
                    <motion.div
                        className="w-full h-[637px] sm:h-[550px] lg:h-fit bg-gradient-to-b from-purple-950 to-purple-600 lg:from-purple-950/0 lg:to-purple-800/0 rounded-xl "
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >
                        {user ? (
                            <div className="space-x-3  ">
                                {user.user_metadata.avatar_url && (
                                    <img
                                        src={user.user_metadata.avatar_url}
                                        alt="user avatar"
                                        className="w-16 rounded-full inline-block"
                                    />
                                )}
                                <span>{displayName}</span>
                                <Button variant={'outline'} onClick={signOut}>
                                    SignOut
                                </Button>
                            </div>
                        ) : (
                            <div className="w-full flex flex-col gap-4">
                                <form
                                    onSubmit={handleLogIn}
                                    className="w-full flex flex-col gap-4"
                                >
                                    {/* Email */}
                                    <div className="flex flex-col gap-2">
                                        <Label
                                            htmlFor="email"
                                            className="text-white"
                                        >
                                            Email
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

                                    {/* Remember me & Forgot */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center space-x-2">
                                            <Checkbox id="remember" />
                                            <Label
                                                htmlFor="remember"
                                                className="text-sm font-normal text-white"
                                            >
                                                Remember me
                                            </Label>
                                        </div>
                                        <button className="text-sm text-primary hover:underline ml-1">
                                            Forgot password?
                                        </button>
                                    </div>

                                    {/* Submit */}
                                    <Button type="submit">Sign In</Button>
                                    {error && (
                                        <p className="text-red-600 text-center pt-4">
                                            {error}
                                        </p>
                                    )}
                                </form>

                                <hr />

                                {/* Social login buttons */}
                                <div className="flex flex-col gap-3">
                                    <Button
                                        onClick={signInWithGoogle}
                                        variant="outline"
                                        className="bg-gray-300"
                                    >
                                        <img
                                            src="https://www.svgrepo.com/show/355037/google.svg"
                                            alt="Google"
                                            width={20}
                                            height={20}
                                        />
                                        Continue with Google
                                    </Button>

                                    <button
                                        onClick={signInWithGithub}
                                        className="w-full h-10 rounded-md shadow-md bg-black text-white flex items-center justify-center gap-3
                                            hover:bg-zinc-800 hover:scale-[103%] transition"
                                    >
                                        <img
                                            src="/githubIcon.svg"
                                            alt="GitHub"
                                            width={20}
                                            height={20}
                                        />
                                        Continue with GitHub
                                    </button>
                                </div>

                                {/* Signup */}
                                <p className="text-center text-sm text-white mt-2">
                                    Don’t have an account?{' '}
                                    <a
                                        href="/sign-up"
                                        className="text-primary cursor-pointer hover:underline"
                                    >
                                        Sign Up
                                    </a>
                                </p>
                            </div>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
