import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { ModeToggle } from '@/components/ModeToggle';
import { useIsMobile } from '@/hooks/useIsMobile';
import BurgerMenu from './BurgerMenu';
import { SignedOut } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

const Header = () => {
    const isMobile = useIsMobile(900);
    const navigate = useNavigate();

    const handleSignIn = () => {
        navigate('/sign-in');
    }; 

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
                        <BurgerMenu isMobile={isMobile} onClick={handleSignIn} />
                    </div>
                ) : (
                    <>
                        <Navbar />
                        <div className='space-x-3 flex items-center'>
                            <SignedOut>
                                <Button 
                                    variant={'glow'}
                                    onClick={handleSignIn}>
                                    Sing In
                                </Button>
                            </SignedOut>
                            <ModeToggle />
                        </div>
                    </>
                )}
        </header>
    );
};

export default Header;
