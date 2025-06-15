import { NavLink, useNavigate } from 'react-router-dom';
import Navbar from './Navbar';
import { ModeToggle } from '@/components/ModeToggle';
import { useIsMobile } from '@/hooks/useIsMobile';
import BurgerMenu from './BurgerMenu';
import ActionButtons from './ActionButtons';

const Header = () => {
    const isMobile = useIsMobile(900);
    const navigate = useNavigate();

    const handleLogIn = () => {
        navigate('/sign-in');
    };

    const handleSignUp = () => {
        navigate('/sign-up');
    };

    return (
        <header className="fixed top-0 left-0 right-0 flex justify-between items-center w-screen py-3 px-6 md:px-20 backdrop-blur-sm bg-white/70 dark:bg-black/10 z-50">
            <div className="flex gap-6 items-center">
                <NavLink
                    to="/"
                    className="flex items-center justify-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-2xl md:text-3xl font-header font-bold text-transparent"
                >
                    <img src="/img-logo.svg" className="w-6 md:w-8 mr-1" />
                    NK-QRCode
                </NavLink>
                {!isMobile && <Navbar />}
            </div>
            {isMobile ? (
                <div className="space-x-3 flex items-center">
                    <ModeToggle />
                    <BurgerMenu
                        isMobile={isMobile}
                        handleLogIn={handleLogIn}
                        handleSignUp={handleSignUp}
                    />
                </div>
            ) : (
                <ActionButtons handleLogIn={handleLogIn} handleSignUp={handleSignUp} />
            )}
        </header>
    );
};

export default Header;
