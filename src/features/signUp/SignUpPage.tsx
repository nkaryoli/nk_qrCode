import { ClerkLoading, SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { CircleLoader } from 'react-spinners';
import { QrCode } from 'lucide-react';

const SignUpPage = () => {
    return (
        <section className="w-full flex items-center justify-center bg-background pt-32 px-3">
            <div className="flex flex-col gap-6 lg:gap-0 lg:flex-row-reverse w-full max-w-xl lg:max-w-4xl mx-auto lg:shadow-xl rounded-xl lg:overflow-hidden">
                <div className="w-full lg:max-w-[55%] text-center flex flex-col items-center lg:pt-24 lg:p-16 relative">
                        <h1 className="text-4xl font-medium mb-6 text-purple-950">
                            Hello friend!
                        </h1>
                        <p className="mt-6">We are glad you are joining us.</p>
                        <p className='pt-2'>
                            Please provide the information to register
                            <br /> your{' '}
                            <strong className="text-primary font-header text-lg ">
                                NK-QRcode
                            </strong>{' '}
                            account.
                        </p>
                   
                    <img src="/img-signup3.svg" className="w-[160px] m-auto rounded-bl-[100px] hidden lg:block drop-shadow-[1px_2px_1px_var(--chart-4)]" style={{ transform: 'rotateY(180deg)' }} />
                    <QrCode
                        size={'35%'}
                        className="hidden lg:block -rotate-45 absolute -right-20 -top-11 text-purple-500"
                    />
                </div>

                <div className="flex items-center justify-center w-full lg:w-[45%] lg:min-w-[400px] lg:bg-gradient-to-b from-purple-950 to-purple-600 lg:px-24 relative overflow-hidden">
                    <ClerkLoading>
                        <CircleLoader className="" color="#ffffff" />
                    </ClerkLoading>
                    <QrCode
                        size={'32%'}
                        className="hidden lg:block -rotate-12 absolute -left-14 -bottom-14 text-purple-300"
                    />
                    <motion.div
                        className="w-fit h-[787px] sm:h-[700px] lg:h-[800px]t bg-gradient-to-b from-purple-950 to-purple-600 lg:from-purple-950/0 lg:to-purple-800/0 rounded-xl"
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
                                    cardBox: 'shadow-none w-[100] py-16',
                                    formButtonPrimary: { height: '40px' },
                                    socialButtonsIconButton: 'bg-white/20',
                                    headerTitle:
                                        "text-[0px] before:content-['Create_account'] before:text-3xl before:text-white before:font-medium font-header",
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
