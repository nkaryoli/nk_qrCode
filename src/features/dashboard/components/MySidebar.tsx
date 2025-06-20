import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
} from '@/components/ui/sheet';
import {
    CirclePlus,
    PanelLeft,
    ScanQrCode,
    Settings,
    SwatchBook,
} from 'lucide-react';

import { NavLink } from 'react-router-dom';

const items = [
    { title: 'New QR', id: 'new-qr', icon: CirclePlus },
    { title: 'My QR Codes', id: 'saved-qr', icon: ScanQrCode },
    { title: 'Templates', id: 'my-templates', icon: SwatchBook },
    { title: 'Settings', id: 'user-settings', icon: Settings },
];

type SectionKey = 'new-qr' |'saved-qr' | 'my-templates' | 'user-settings' ;

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
    return (
        <>
            <Sheet modal={false} open>
                <SheetContent
                    side={'left'}
                    showClose={false}
                    data-sidebar="sidebar"
                    data-mobile="true"
                    className={`
                        transition-all duration-300 px-2 bg-gradient-to-b from-white to-muted
                        ${isOpen ? 'w-64' : 'w-16'} 
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
                                    ${isOpen ? 'w-fit opacity-100 ml-3' : 'w-0 opacity-0 pointer-events-none'}
                                `}
                            >
                                <img src="/img-logo.svg" className="w-7 mr-1" />
                                NK-QRCode
                            </NavLink>
                            <button
                                onClick={() => setIsOpen((prev) => !prev)}
                                aria-label="Cerrar sidebar"
                                className={`
                                    absolute z-50 bg-white rounded-sm shadow p-1 border border-muted  hover:bg-muted
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
                                                h-9 px-3 hover:bg-muted w-full rounded-sm flex items-center gap-1 overflow-hidden
												${active === item.id ? 'bg-muted text-primary font-bold' : ''}
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
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MySidebar;
