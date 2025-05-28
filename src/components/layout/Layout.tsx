import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../../hooks/theme-provider';
import { ModeToggle } from '../ModeToggle';

const Layout = () => {
    useScrollToTop();
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="grid-background"></div>
            <main className="min-h-screen flex flex-col items-center justify-between">
                <div className="ml-4">
                    <ModeToggle />
                </div>
                <Outlet />
            </main>
        </ThemeProvider>
    );
};

export default Layout;
