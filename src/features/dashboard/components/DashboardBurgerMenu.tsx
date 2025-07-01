import { memo } from 'react';
import { LogOut, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
import { useAuth } from '@/hooks/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

interface DashboardBurgerMenuProps {
    onSelect: (id: SectionKey) => void;
    active: string;
}

const DashboardBurgerMenu: React.FC<DashboardBurgerMenuProps> = ({
    onSelect,
    active,
}) => {
    const { user, signOut } = useAuth();

    const displayName = user?.user_metadata.user_name || user?.email;

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
                <div className="absolute bottom-0 right-0 w-full flex justify-between items-center border-t px-6 py-2">
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
                                    onClick={() => signOut()}
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

export default memo(DashboardBurgerMenu);
