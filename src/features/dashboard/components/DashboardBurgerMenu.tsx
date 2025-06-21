import { memo } from 'react';
import { LogOut, Menu } from 'lucide-react';
import { SignedIn, useClerk, UserButton } from '@clerk/clerk-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui/sheet';
import { items, type SectionKey } from './MySidebar';

interface DashboardBurgerMenuProps {
    onSelect: (id: SectionKey) => void;
    active: string;
}

const DashboardBurgerMenu: React.FC<DashboardBurgerMenuProps> = ({
    onSelect,
    active,
}) => {
    const { signOut } = useClerk();
    return (
        <Sheet>
            <SheetTrigger aria-label="Open menu" asChild>
                <button>
                    <Menu size={35} className="text-primary" />
                </button>
            </SheetTrigger>
            <SheetContent
                aria-describedby="navegation links"
                className="w-[280px] p-2"
            >
                <SheetHeader>
                    <SheetTitle className="flex items-center h-9"></SheetTitle>
                    <SheetDescription asChild>
                        <ul className="space-y-1 pt-6">
                            {items.map((item) => (
                                <SheetClose asChild>
                                    <li key={item.title}>
                                        <button
                                            onClick={() => {
                                                onSelect(item.id as SectionKey);
                                            }}
                                            className={`
                                                h-11 px-6 gap-5 hover:bg-purple-600/5 w-full rounded-sm flex items-center overflow-hidden transition-all duration-500
                                            
												${active === item.id ? 'bg-purple-600/5 text-primary font-bold' : 'font-medium'}
											`}
                                        >
                                            <item.icon
                                                strokeWidth={1.4}
                                                size={22}
                                            />
                                            <span
                                                className={`
                                                    transition-opacity duration-500 w-fit text-start
                                                `}
                                            >
                                                {item.title}
                                            </span>
                                        </button>
                                    </li>
                                </SheetClose>
                            ))}
                        </ul>
                    </SheetDescription>
                </SheetHeader>
                <SheetFooter></SheetFooter>
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

export default memo(DashboardBurgerMenu);
