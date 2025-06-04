import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { ModeToggle } from '@/components/ModeToggle';
import { useIsMobile } from '@/hooks/useIsMobile';
import BurgerMenu from './BurgerMenu';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { motion } from 'framer-motion';

const Header = () => {
    const isMobile = useIsMobile(900);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/sign-in');
    }; 

    const handleClick = () => {
        navigate('/customize-qr');
    }
    return (
		<header className="fixed top-0 left-0 right-0 flex justify-between items-center w-screen py-3 px-6 md:px-11 backdrop-blur-sm bg-white/70 dark:bg-black/10 z-50">
            <NavLink
                to="/"
                className="flex items-center justify-center bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-subtitle font-extrabold text-transparent"
            >
                NK-QRCode
            </NavLink>
                {isMobile ? (
                    <div className='space-x-3 flex items-center'>
                        <ModeToggle />
                        <BurgerMenu isMobile={isMobile} onClick={handleSignIn} handleClick={handleClick} />
                    </div>
                ) : (
                    <>
                        <Navbar handleClick={handleClick}/>
                        <div className='flex items-center'>
                            <ClerkLoading>
                                <Skeleton className="h-9 w-24 mr-3" /> 
                            </ClerkLoading>
                            <ClerkLoaded>
                                <SignedOut>
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{
                                            duration: 0.7,
                                            ease: "easeOut"
                                        }}
                                    >
                                        <Button 
                                            variant={'glow'}
                                            onClick={handleSignIn}
                                            className='w-24 mr-3'
                                        >
                                            Sign In
                                        </Button>
                                    </motion.div>
                                </SignedOut>
                            </ClerkLoaded>
                            <SignedIn>
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{
                                        duration: 0.5,
                                        ease: "easeOut"
                                    }} 
                                    className='h-8 w-8 ml-16 mr-3 flex justify-end rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-0.5'
                                >
                                    <UserButton/>
                                </motion.div>
                            </SignedIn>
                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{
                                    duration: 0.5,
                                    ease: "easeOut", 
                                    delay: 0.4
                                }}
                            >
                            <ModeToggle />
                        </motion.div>
                        </div>
                    </>
                )}
        </header>
    );
};

export default Header;
