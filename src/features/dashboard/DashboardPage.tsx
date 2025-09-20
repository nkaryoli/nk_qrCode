import { useState } from 'react';
import MySidebar from './components/MySidebar';
import MyQRs from './components/userQRs/MyQRs';
import MyTemplates from './components/userTemplates/MyTemplates';
import UserSettings from './components/settings/UserSettings';
import NewQRSection from './components/newQR/NewQRSection';
import { QRProvider } from '@/hooks/QRContext';
import { useIsMobile } from '@/hooks/useIsMobile';
import { NavLink } from 'react-router-dom';
import DashboardBurgerMenu from './components/DashboardBurgerMenu';
import type { QRCode } from '@/supabase/types';

type DashboardComponent = {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    component: React.ComponentType<any>;
    props?: Record<string, unknown>;
};

const DashboardContent = () => {
    const [active, setActive] = useState<string>('new-qr');
    const [isOpen, setIsOpen] = useState<boolean>(true);
    const isMobile = useIsMobile(900);

    const [qrs] = useState<QRCode[]>([]);




    const handleSidebarSelect = (id: string) => {
        setActive(id);
    };

    const components: Record<string, DashboardComponent> = {
        'saved-qr': { component: MyQRs, props: { qrs, handleSidebarSelect } },
        'my-templates': { component: MyTemplates },
        'user-settings': { component: UserSettings },
        'new-qr': { component: NewQRSection },
    };

    const { component: ActiveComponent, props } =
        components[active] || components['saved-qr'];

    return (
        <section className="w-full flex flex-col lg:flex-row justify-center">
            {isMobile ? (
                <div className="flex items-center justify-between p-6 pb-0">
                    <NavLink
                        to="/"
                        className="flex items-center justify-center bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-2xl md:text-3xl font-header font-bold text-transparent"
                    >
                        <img src="/img-logo.svg" className="w-6 md:w-8 mr-1" />
                        NK-QRCode
                    </NavLink>
                    <DashboardBurgerMenu
                        onSelect={handleSidebarSelect}
                        active={active}
                    />
                </div>
            ) : (
                <aside
                    className={`transition-all duration-500 ${isOpen ? 'w-72' : 'w-16'}`}
                >
                    <MySidebar
                        onSelect={handleSidebarSelect}
                        active={active}
                        isOpen={isOpen}
                        setIsOpen={setIsOpen}
                    />
                </aside>
            )}
            <div className="w-full h-full flex-1 pt-6 lg:pt-0">
                <ActiveComponent {...props} />
            </div>
        </section>
    );
};

const DashboardPage = () => {
    return (
        <QRProvider>
            <DashboardContent />
        </QRProvider>
    );
};

export default DashboardPage;
