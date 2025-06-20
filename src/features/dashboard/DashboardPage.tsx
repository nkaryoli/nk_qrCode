import { useState } from 'react';
import MySidebar from './components/MySidebar';
import MyQRs from './components/userQRs/MyQRs';
import MyTemplates from './components/userTemplates/MyTemplates';
import UserSettings from './components/settings/UserSettings';
import NewQR from './components/newQR/NewQR';

type DashboardComponent = {
    component: React.ComponentType<Record<string, unknown>>;
    props?: Record<string, unknown>;
};

const DashboardPage = () => {
    const [active, setActive] = useState<string>('saved-qr');
    const [isOpen, setIsOpen] = useState<boolean>(true);

    const handleSidebarSelect = (id: string) => {
        setActive(id);
    };

    const components: Record<string, DashboardComponent> = {
        'saved-qr': { component: MyQRs },
        'my-templates': { component: MyTemplates },
        'user-settings': { component: UserSettings },
        'new-qr': { component: NewQR },
    };

    const { component: ActiveComponent, props } = components[active] || components['saved-qr'];

    return (
        <section className="w-full flex justify-center py-32 gap-9">
            <aside
                className={`transition-all duration-500 ${isOpen ? 'w-64' : 'w-16'}`}
            >
                <MySidebar
                    onSelect={handleSidebarSelect}
                    active={active}
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                />
            </aside>
            <div className="w-full flex-1">
                <ActiveComponent {...props} />
            </div>
        </section>
    );
};

export default DashboardPage;
