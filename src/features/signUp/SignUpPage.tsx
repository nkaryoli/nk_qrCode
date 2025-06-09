import { ClerkLoading, SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { CircleLoader } from 'react-spinners';
import { QrCode } from 'lucide-react';

const SignUpPage = () => {


    return (
        <section className="w-full min-h-screen flex items-center justify-center bg-background py-24 px-3">
            <div className="flex flex-col lg:flex-row-reverse w-full max-w-xl lg:max-w-6xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full lg:max-w-[55%] flex flex-col items-center lg:items-start lg:pt-24 py-11 p-3 lg:p-16 relative">
                    <div className="w-full text-center mb-6">
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-primary">
                            Hello friend!
                        </h1>
                        <p>We are glad you are joining us.</p>
                        <p>
                            Please provide the information to register<br/> your {' '}
                            <strong className="text-primary text-lg ">
                                NK-QRcode
                            </strong>{' '}
                            account.
                        </p>
                    </div>
                    <div className="relative w-full flex justify-center">

                        <img src="/blob.svg" className="w-[400px]" />
                    </div>
                    <QrCode
                        size={'35%'}
                        className="-rotate-45 absolute -right-20 -top-11 text-chart-5"
                    />
                </div>

                <div className="flex items-center justify-center w-full lg:w-[45%] lg:min-w-[400px] lg:bg-chart-5 lg:px-24 relative overflow-hidden">
                    <ClerkLoading>
                        <CircleLoader className="" color="#ffffff" />
                    </ClerkLoading>
                    <QrCode
                        size={'32%'}
                        className="-rotate-12 absolute -left-14 -bottom-14 text-white/50"
                    />
                    <motion.div
                        className="w-fit h-[687px] sm:h-[600px] lg:h-fit bg-chart-5 rounded-xl"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.5,
                            ease: 'easeOut',
                            delay: 0.5,
                        }}
                    >
                            <SignUp
                                signInUrl="/sign-in"
                                appearance={{
                                    variables: {
                                        colorPrimary: '#ffffff',
                                        colorBackground: '#FF5E1F00',
                                        colorTextOnPrimaryBackground: '#FF5E1F',
                                        colorText: '#ffffff',
                                        fontFamily: 'Quicksand',
                                        fontSize: '16px',
                                    },
                                    elements: {
                                    cardBox: 'shadow-none w-[100]',
                                    formButtonPrimary: { height: '40px'},
                                    socialButtonsIconButton:
                                        'bg-white/10 border-primary',
                                    headerTitle:
                                        "text-[0px] before:content-['Create_account'] before:text-4xl before:text-white font-header",
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
};

export default SignUpPage;
