import { NavLink } from 'react-router-dom';
import Navbar from './Navbar';
import { ModeToggle } from '@/components/ModeToggle';
import { useIsMobile } from '@/hooks/useIsMobile';
import BurgerMenu from './BurgerMenu';

const Header = () => {
    const isMobile = useIsMobile(888);

    return (
		<header className="fixed top-0 left-0 right-0 flex justify-between items-center h-20 px-6 md:px-11 backdrop-blur-sm bg-white/10 dark:bg-black/10 z-10">
            <NavLink
                to="/"
                className="flex items-center justify-center bg-gradient-to-r from-primary to-accent bg-clip-text text-3xl font-subtitle font-extrabold text-transparent"
            >
                NK-QRCode
            </NavLink>
            <div className="flex items-center gap-4">
                {isMobile ? (
                    <BurgerMenu isMobile={isMobile} />
                ) : (
                    <>
                        <Navbar />
                        <ModeToggle />
                    </>
                )}
            </div>
        </header>
    );
};

export default Header;
