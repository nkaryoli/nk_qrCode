import { useAuth } from '@/hooks/AuthContext';
import { motion } from 'framer-motion';
import { Mail, QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpForm from './components/SignUpForm';
import WelcomeSignUp from './components/WelcomeSignUp';
import SocialButtons from '../signIn/components/SocialButtons';

const SignUpPage = () => {
    const { signUpNewUser, signInWithGoogle, signInWithGithub, user } = useAuth();
    const [name, setName] = useState<string>('');
    const [lastname, setLastname] = useState<string>('');
    const [email, setEmal] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [, setError] = useState<string | null>(null);
    const [, setIsSigningUp] = useState(false);
    const navigate = useNavigate();
    const [confirmEmail, setConfirmEmail] = useState<boolean>(false);

    useEffect(() => {
        if (user) {
            navigate('/');
        }
    }, [user, navigate]);

    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSigningUp(true);
        setError(null);
        try {
            const result = await signUpNewUser(email, password, {
                first_name: name,
                last_name: lastname,
            });
            if (result.success) {
                console.log(
                    'User signed up successfully, profile will be created automatically'
                );
                setConfirmEmail(true);
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
        <section className="w-full flex items-center justify-center pt-32 px-3">
            {confirmEmail ?
                (
                    <div className="text-center space-y-6 max-w-xl p-6">
                        <div className="flex flex-col items-center justify-center gap-3">
                            <Mail className="w-12 h-12" />
                            <h1 className="text-2xl font-semibold">
                                Confirma tu correo electrónico
                            </h1>
                        </div>
                        <p>
                            Te hemos enviado un enlace de confirmación a tu dirección de correo.
                        <br/>
                            Por favor, revisa tu bandeja de entrada (y también la carpeta de spam o promociones).
                        </p>

                        <p className="text-sm">
                            Una vez confirmes tu cuenta, podrás iniciar sesión y acceder a tu panel.
                        </p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col justify-center items-center gap-6 lg:gap-0 lg:flex-row-reverse w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                            <WelcomeSignUp />

                            <div className="flex items-center justify-center w-full h-[550px] max-w-lg p-9 lg:p-14  
                    bg-gradient-to-b from-purple-950 to-purple-600 relative overflow-hidden rounded-xl"
                            >
                                <QrCode
                                    size={'32%'}
                                    className="hidden lg:block -rotate-12 absolute -left-16 -bottom-16 text-purple-300"
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

                                    <SignUpForm
                                        handleSignUp={handleSignUp}
                                        setName={setName}
                                        setLastname={setLastname}
                                        setEmail={setEmal}
                                        setPassword={setPassword}
                                    />
                                    <hr />
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
                        </div></>
                )
            }
        </section>
    );
};

export default SignUpPage;
