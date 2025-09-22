import { useAuth } from '@/hooks/AuthContext';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import WelcomeSignUp from './components/WelcomeSignUp';
import SocialButtons from '../signIn/components/SocialButtons';

const SignUpPage = () => {
    const { signUpNewUser, signInWithGoogle, signInWithGithub, user } =
        useAuth();
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [, setError] = useState<string | null>(null);
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
                <WelcomeSignUp />

                <div className="flex items-center justify-center w-full lg:min-w-[400px] lg:bg-gradient-to-b from-purple-950 to-purple-600 lg:p-14 relative overflow-hidden">
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -left-16 -bottom-16 text-purple-300"
                    />
                    <motion.div
                        className="w-full space-y-3 bg-gradient-to-b from-purple-950 to-purple-600 lg:from-purple-950/0 lg:to-purple-800/0 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >
                        <SignUpForm
                            handleSignUp={handleSignUp}
                            setName={setName}
                            setLastname={setLastname}
                            setEmail={setEmal}
                            setPassword={setPassword}
                        />
                        <hr/>
                        <SocialButtons
                            signInWithGoogle={signInWithGoogle}
                            signInWithGithub={signInWithGithub}
                        />
                        <p className="text-center text-sm text-white">
                            Already have an account?{' '}
                            <a
                                href="/sign-in"
                                className="text-primary cursor-pointer hover:underline"
                            >
                                Sign In
                            </a>
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default SignUpPage;
