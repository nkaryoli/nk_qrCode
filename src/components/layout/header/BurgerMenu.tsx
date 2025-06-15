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
import {
    ClerkLoading,
    SignedIn,
    SignedOut,
    useClerk,
    UserButton,
} from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { Skeleton } from '@/components/ui/skeleton';

interface BurgerMenuProps {
    handleLogIn?: () => void;
    handleSignUp: () => void;
    isMobile: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({
    isMobile,
    handleLogIn,
    handleSignUp,
}) => {
    const { signOut } = useClerk();

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
                            <li>
                                <SheetClose asChild>
                                    <NavLink
                                        to="/#qr-reader"
                                        className={({ isActive }) =>
                                            `${
                                                isActive
                                                    ? 'text-primary font-bold'
                                                    : 'w-full flex justify-center gap-3 text-center py-4 border-b hover:text-primary transition-colors duration-200'
                                            }`
                                        }
                                    >
                                        QR Reader
                                    </NavLink>
                                </SheetClose>
                            </li>
                            <li>
                                <SheetClose asChild>
                                    <NavLink
                                        to="/#faq"
                                        className={({ isActive }) =>
                                            `${
                                                isActive
                                                    ? 'text-primary font-bold'
                                                    : 'w-full flex justify-center gap-3 text-center py-4 border-b hover:text-primary transition-colors duration-200'
                                            }`
                                        }
                                    >
                                        FAQs
                                    </NavLink>
                                </SheetClose>
                            </li>
                            <li>
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
                            </li>
                        </ul>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                    <SignedOut>
                        <SheetClose asChild>
                            <Button
                                variant={'glow'}
                                onClick={handleSignUp}
                                className="mt-6 w-full"
                            >
                                Sing Up
                            </Button>
                        </SheetClose>
                        <SheetClose asChild>
                            <Button
                                variant={'neon'}
                                onClick={handleLogIn}
                                className="mt-6 w-full"
                            >
                                Log In
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
