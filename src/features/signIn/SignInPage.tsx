import { ClerkLoading, SignIn } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { QrCode } from 'lucide-react';
import { CircleLoader } from 'react-spinners';

export function SignInPage() {
    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-background py-24 px-3">
            <div className="flex flex-col lg:flex-row w-full max-w-xl lg:max-w-6xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full lg:max-w-[55%] flex flex-col items-center lg:items-start lg:pt-24 py-11 p-3 lg:p-16 relative">
                    <div className="w-full text-center">
                        <h1 className="text-4xl md:text-5xl font-extrabold font-subtitle mb-6 text-primary">
                            Welcome Back!
                        </h1>
                        <p>We are very excited to see you.</p>
                        <p>
                            Please Sign into your{' '}
                            <strong className="text-primary text-lg ">
                                NK-QRcode
                            </strong>{' '}
                            account
                        </p>
                    </div>
                    <div className="relative w-fit">
                        <img
                            src="/qrCode.png"
                            className="rounded-xl w-[25%] mt-6 block m-auto absolute left-[55%]"
                        />
                        <img src="/abstract.svg" className="w-[400px]" />
                    </div>
                    <QrCode
                        size={'35%'}
                        className="-rotate-45 absolute -left-20 -top-11 text-chart-5"
                    />
                </div>

                <div className="flex items-center justify-center w-full lg:w-[45%] lg:min-w-[400px] lg:bg-chart-5 lg:px-24 relative overflow-hidden">
                    <ClerkLoading>
                        <CircleLoader className="" color="#ffffff" />
                    </ClerkLoading>
                    <QrCode
                        size={'32%'}
                        className="-rotate-12 absolute -right-14 -bottom-14 text-white/50"
                    />
                    <motion.div
                        className="w-fit h-[537px] lg:h-fit bg-chart-5 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >
                        <SignIn
                            signUpUrl="/sign-up"
                            appearance={{
                                variables: {
                                    colorPrimary: '#ffffff',
                                    colorBackground: '#FF5E1F00',
                                    colorTextOnPrimaryBackground: '#FF5E1F',
                                    colorText: '#ffffff',
                                    fontFamily: 'nunito',
                                    fontSize: '16px',
                                },
                                elements: {
                                    cardBox: 'shadow-none w-[100]',
                                    formButtonPrimary: { height: '40px' },
                                    socialButtonsIconButton:
                                        'bg-white/10 border-primary',
                                    headerTitle:
                                        "text-[0px] before:content-['Sign_in'] before:text-4xl before:text-white ",
                                    headerSubtitle: 'hidden',
                                    footer: 'bg-none',
                                    card: {
                                        borderBottom: 'none',
                                        boxShadow: 'none',
                                    },
                                    footerActionText: 'text-white',
                                    formFieldInput:
                                        'bg-white/90 text-foreground placeholder:text-gray-400',
                                    formFieldLabel: '',
                                    footerActionLink:
                                        'text-secondary font-bold ',
                                },
                            }}
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
