import { memo } from 'react';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetTitle,
    SheetTrigger,
} from '../../ui/sheet';
import { Menu } from 'lucide-react';
import { navigationLinks } from '@/constants';
import { SignedOut } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';

interface BurgerMenuProps {
    onClick?: () => void;
    isMobile: boolean;
}

const BurgerMenu:React.FC<BurgerMenuProps> = ({ isMobile, onClick }) => {
    
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
            <SheetTrigger aria-label="Open menu">
                <Menu size={35} className='text-primary'/>
            </SheetTrigger>
            <SheetContent
                aria-describedby="navegation links"
                className="w-[280px] z-[99999]"
            >
                <SheetTitle className="hidden">Side Menu</SheetTitle>
                <SheetDescription >
                    <ul className="text-center w-full h-full pt-9">{menuLinks}</ul>
                </SheetDescription>
                <SheetFooter>
                    <SignedOut>
                        <SheetClose asChild>
                            <Button 
                                variant={'glow'}
                                onClick={onClick} className="mx-3 mt-6 w-full">
                                Sing In
                            </Button>
                        </SheetClose>
                    </SignedOut>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    );
};

export default memo(BurgerMenu);
