import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import { useAuth } from '@/hooks/AuthContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import {
    CirclePlus,
    LogOut,
    PanelLeft,
    ScanQrCode,
    Settings,
    SwatchBook,
} from 'lucide-react';
import { useEffect } from 'react';

import { NavLink } from 'react-router-dom';

export const items = [
    { title: 'New QR', id: 'new-qr', icon: CirclePlus },
    { title: 'My QR Codes', id: 'saved-qr', icon: ScanQrCode },
    { title: 'Templates', id: 'my-templates', icon: SwatchBook },
    { title: 'Settings', id: 'user-settings', icon: Settings },
];

export type SectionKey =
    | 'new-qr'
    | 'saved-qr'
    | 'my-templates'
    | 'user-settings';

interface MySidebarProps {
    onSelect: (id: SectionKey) => void;
    active: string;
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MySidebar: React.FC<MySidebarProps> = ({
    onSelect,
    active,
    isOpen,
    setIsOpen,
}) => {
    const isMobile = useIsMobile(1200);
    const { user, signOut } = useAuth();

    useEffect(() => {
        if (isMobile) {
            setIsOpen(false);
        }
    }, [isMobile, setIsOpen]);

    const displayName = user?.user_metadata.user_name || user?.email;

    return (
        <>
            <Sheet modal={false} open>
                <SheetContent
                    side={'left'}
                    showClose={false}
                    data-sidebar="sidebar"
                    data-mobile="true"
                    className={`
                        transition-all duration-300 px-2 bg-gradient-to-b from-white via-purple-50 to-purple-700/50
                        ${isOpen ? 'w-72' : 'w-16'} 
                    `}
                >
                    <SheetHeader>
                        <SheetTitle className="flex items-center h-9">
                            <NavLink
                                to="/"
                                className={`flex items-center
                                    bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text 
                                    text-2xl font-header font-bold text-transparent 
                                    transition-opacity duration-500 delay-300
                                    ${isOpen ? 'w-fit opacity-100 ml-4' : 'w-0 opacity-0 pointer-events-none'}
                                `}
                            >
                                <img src="/img-logo.svg" className="w-7 mr-1" />
                                NK-QRCode
                            </NavLink>
                            
                            <button
                                disabled={isMobile}
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-label="Cerrar sidebar"
                                className={`
                                    absolute z-50 bg-white rounded-sm shadow p-1 border border-muted  hover:bg-purple-600/5
                                    transition-all duration-500
                                    ${isOpen ? 'right-3' : 'right-4'}
                                `}
                            >
                                <PanelLeft
                                    size={22}
                                    strokeWidth={1.3}
                                    className="hover:text-primary"
                                />
                            </button>
                        </SheetTitle>
                        <SheetDescription asChild>
                            <ul className="space-y-1 pt-6">
                                {items.map((item) => (
                                    <li key={item.title}>
                                        <button
                                            onClick={() => {
                                                onSelect(item.id as SectionKey);
                                            }}
                                            className={`
                                                h-11 hover:bg-purple-600/5 w-full rounded-sm flex items-center overflow-hidden transition-all duration-500
                                                ${isOpen ? 'px-6 gap-5' : 'px-3'}
												${active === item.id ? 'bg-purple-600/5 text-primary font-bold' : 'font-medium'}
											`}
                                        >
                                            <item.icon
                                                strokeWidth={1.4}
                                                size={22}
                                            />
                                            <span
                                                className={`
                                                    transition-opacity duration-500  
                                                    ${isOpen ? 'w-fit text-start opacity-100' : 'w-0 opacity-0 overflow-hidden'}
                                                `}
                                            >
                                                {item.title}
                                            </span>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </SheetDescription>
                    </SheetHeader>
                    <div className={`absolute bottom-0 right-0 w-full flex justify-between items-center border-t bg-black/5 py-2
                        ${isOpen ? ' px-6' : 'px-4'}
                    `}>
                        {user && (
                            <div className="flex justify-between w-full">
                                <div className={`flex items-center gap-3
                                    ${isOpen ? 'block' : 'hidden'}
                                `}>
                                    {user.user_metadata.avatar_url && (
                                        <Avatar>
                                            <AvatarImage
                                                src={
                                                    user.user_metadata
                                                        .avatar_url
                                                }
                                            />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <span className="text-black/80 font-medium">
                                        {displayName}
                                    </span>
                                </div>

                                <Button
                                    variant="outline"
                                    size={'icon'}
                                    onClick={() => signOut()}
                                    className="w-7 h-8 border-none shadow-none rounded-sm"
                                    title="Log out"
                                >
                                    <LogOut />
                                </Button>
                            </div>
                        )}
                    </div>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MySidebar;
