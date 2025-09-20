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
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';
import { useAuth } from '@/hooks/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

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
    const { user, signOut } = useAuth();

    const displayName = user?.user_metadata.user_name || user?.email;

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
                                <SheetClose asChild>
                                    <NavLink
                                        to="/dashboard"
                                        className={({ isActive }) =>
                                            `${
                                                isActive
                                                    ? 'text-primary font-bold'
                                                    : 'w-full flex justify-center gap-3 text-center py-4 border-b hover:text-primary transition-colors duration-200'
                                            }`
                                        }
                                    >
                                        My Dashboard
                                    </NavLink>
                                </SheetClose>
                            </li>
                            {!user && (
                                <>
                                    <li className="pt-5 ">
                                        <SheetClose asChild>
                                            <Button
                                                variant={'outline'}
                                                onClick={handleLogIn}
                                                className="w-full"
                                            >
                                                Log In
                                            </Button>
                                        </SheetClose>
                                    </li>
                                    <li className="py-5">
                                        <SheetClose asChild>
                                            <Button
                                                variant={'glow'}
                                                onClick={handleSignUp}
                                                className="w-full"
                                            >
                                                Sign Up
                                            </Button>
                                        </SheetClose>
                                    </li>
                                </>
                            )}
                        </ul>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter></SheetFooter>

                <div className="absolute bottom-0 right-0 w-full flex justify-center items-center border-t px-6 py-2">
                    {user && (
                        <div className="flex justify-between w-full">
                            <div className="flex items-center gap-3">
                                {user.user_metadata.avatar_url && (
                                    <Avatar>
                                        <AvatarImage
                                            src={user.user_metadata.avatar_url}
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                )}
                                <span>{displayName}</span>
                            </div>

                            <SheetClose asChild>
                                <Button
                                    variant="outline"
                                    size={'icon'}
                                    onClick={signOut}
                                >
                                    <LogOut />
                                </Button>
                            </SheetClose>
                        </div>
                    )}
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default memo(BurgerMenu);
