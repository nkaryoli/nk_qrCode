import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../../hooks/theme-provider';
import Header from './header/Header';

const Layout = () => {
    useScrollToTop();
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <div className="grid-background"></div>
            <main className="min-h-screen flex flex-col items-center justify-between">
                <Header />
                <Outlet />
            </main>
        </ThemeProvider>
    );
};

export default Layout;
