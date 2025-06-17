import { useScrollToTop } from '@/hooks/useScrollToTop';
import { Outlet } from 'react-router-dom';
import { ThemeProvider } from '../../hooks/theme-provider';
import Header from './header/Header';
import Footer from './footer/Footer';

const Layout = () => {
    useScrollToTop();
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <Header />
            <main className="flex flex-col items-center justify-between">
                <Outlet />
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default Layout;
