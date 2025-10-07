import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { useAuth } from '@/hooks/AuthContext';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WelcomeLogIn from './components/WelcomeLogIn';
import LogInForm from './components/LogInForm';
import SocialButtons from './components/SocialButtons';

export function SignInPage() {
    const { signInWithPassword, signInWithGoogle, signInWithGithub, user } =
        useAuth();
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [, setError] = useState<string | null>(null);
    const [, setIsSigningUp] = useState<boolean>(false);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleLogIn = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSigningUp(true);
        try {
            const result = await signInWithPassword(email, password);
            if (!result.success) {
                console.log('Sign-in email sent successfully:', result.data);

                return;
            }
        } catch (error) {
            console.log('Error during sign in:', error);
            setError('Failed to sign in. Please try again.');

        } finally {
            setIsSigningUp(false);
        }
    };

    return (
        <section className="w-full flex items-center justify-center pt-32 px-3">
            <div className="flex flex-col justify-center items-center gap-6 lg:gap-0 lg:flex-row w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <WelcomeLogIn />
                <div className="flex items-center justify-center w-full max-w-lg p-9 lg:p-14
                    bg-gradient-to-b from-purple-950 to-purple-600 relative overflow-hidden rounded-xl"
                >
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -right-14 -bottom-14 text-purple-300"
                    />
                    <motion.div
                        className="w-full space-y-3"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >

                            <LogInForm
                                handleLogIn={handleLogIn}
                                setEmail={setEmal}
                                setPassword={setPassword}
                            />
                            <hr />
                            <SocialButtons
                                signInWithGoogle={signInWithGoogle}
                                signInWithGithub={signInWithGithub}
                            />
                            <p className="text-center text-sm text-white mt-2">
                                Don’t have an account?{' '}
                                <a
                                    href="/sign-up"
                                    className="text-primary cursor-pointer hover:underline"
                                >
                                    Sign Up
                                </a>
                            </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
