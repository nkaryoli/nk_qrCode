import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/AuthContext';

export function SignInPage() {
    const { signInWhitGithub, signOut, user } = useAuth();

    const displayName = user?.user_metadata.user_name || user?.email;

    return (
        <section className="w-full flex items-center justify-center bg-background pt-32 px-3">
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full lg:max-w-[55%] flex flex-col items-center lg:p-16 relative">
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

                <div className="flex items-center justify-center w-full lg:w-[45%] lg:min-w-[400px] lg:bg-gradient-to-b from-purple-950 to-purple-600 lg:px-24 relative overflow-hidden">
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -right-14 -bottom-14 text-purple-300"
                    />
                    <motion.div
                        className="w-fit h-[637px] sm:h-[550px] lg:h-fit bg-gradient-to-b from-purple-950 to-purple-600 lg:from-purple-950/0 lg:to-purple-800/0 rounded-xl pt-7 pb-9"
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
                            <Button onClick={signInWhitGithub}>
                                Sign in with github
                            </Button>
                        )}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
