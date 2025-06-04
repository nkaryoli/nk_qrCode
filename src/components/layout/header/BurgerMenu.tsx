import { memo } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '../../ui/sheet';
import { LogOut, Menu } from 'lucide-react';
import { navigationLinks } from '@/constants';
import {
    ClerkLoading,
    SignedIn,
    SignedOut,
    useClerk,
    UserButton,
} from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { HashLink } from 'react-router-hash-link';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface BurgerMenuProps {
    onClick?: () => void;
    handleClick: () => void;
    isMobile: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
    isMobile,
    onClick,
    handleClick,
}) => {
    const { signOut } = useClerk();

    const menuLinks = navigationLinks.map(({ to, label }) => {
        const isActive = location.pathname === to;
        const className = `w-full flex justify-center gap-3 text-center py-4 border-b transition-colors duration-200 rounded-md
		${isActive ? 'text-primary font-bold' : 'hover:text-primary'}`;

        return (
            <li key={to}>
                <SheetClose asChild>
                    <a href={to} className={className}>
                        {label}
                    </a>
                </SheetClose>
            </li>
        );
    });

    if (!isMobile) return null;

    return (
        <Sheet>
            <SheetTrigger aria-label="Open menu" asChild>
                <button>
                    <Menu size={35} className="text-primary" />
                </button>
            </SheetTrigger>
            <SheetContent
                aria-describedby="navegation links"
                className="w-[280px] z-[99999]"
            >
                <SheetHeader>
                    <SheetTitle className="hidden">Side Menu</SheetTitle>
                    <SheetDescription asChild>
                        <ul className="text-center w-full h-full pt-9">
                            {menuLinks}
                            <SheetClose asChild>
                                <HashLink
                                    smooth
                                    to="/#qr-reader"
                                    className="w-full flex justify-center gap-3 text-center py-4 border-b transition-colors duration-200 rounded-md hover:text-primary"
                                >
                                    QR Reader
                                </HashLink>
                            </SheetClose>
                            <ClerkLoading>
                                <Skeleton className="h-9 w-24 mr-3" /> 
                            </ClerkLoading>
                            <SignedIn>
                                <SheetClose asChild>
                                    <NavLink
                                        to={'/dashboard'}
                                        className={({
                                            isActive,
                                        }) => `w-full flex justify-center gap-3 text-center py-4 border-b transition-colors duration-200 rounded-md
                                            ${isActive ? 'text-primary font-bold' : 'hover:text-primary'}
                                        `}
                                    >
                                        My QR Codes
                                    </NavLink>
                                </SheetClose>
                            </SignedIn>
                            <SheetClose asChild>
                                <Button
                                    variant={'sunset'}
                                    onClick={handleClick}
                                    className="mt-6 w-full"
                                >
                                    Create QR
                                </Button>
                            </SheetClose>
                        </ul>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <SignedOut>
                        <SheetClose asChild>
                            <Button
                                variant={'glow'}
                                onClick={onClick}
                                className="mt-6 w-full"
                            >
                                Sing In
                            </Button>
                        </SheetClose>
                    </SignedOut>
                </SheetFooter>
                <SignedIn>
                    <div className="absolute bottom-0 right-0 w-full flex justify-center items-center border-t px-6 py-2">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.5,
                                ease: 'easeOut',
                            }}
                            className="w-full h-full bg-background flex justify-between pointer-events-none"
                        >
                            <UserButton
                                showName
                                appearance={{
                                    variables: {
                                        fontFamily: '',
                                    },
                                    elements: {
                                        userButtonBox: {
                                            flexDirection: 'row-reverse',
                                        },
                                        userButtonOuterIdentifier: {
                                            color: '#6D6D6D',
                                            fontSize: '16px',
                                        },
                                    },
                                }}
                            />
                        </motion.div>
                        <SheetClose asChild>
                            <Button
                                variant="link"
                                size={'icon'}
                                onClick={() => signOut()}
                            >
                                <LogOut />
                            </Button>
                        </SheetClose>
                    </div>
                </SignedIn>
            </SheetContent>
        </Sheet>
    );
};

export default memo(BurgerMenu);
