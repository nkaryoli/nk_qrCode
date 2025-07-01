import { HashLink } from 'react-router-hash-link';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import { ModeToggle } from '@/components/ModeToggle';

const Navbar = () => {
    return (
        <NavigationMenu className="flex items-center">
            <NavigationMenuList className="space-x-6 mt-1">
                <NavigationMenuItem>
                    <HashLink
                        smooth
                        to="/#qr-reader"
                        className="font-medium hover:text-primary transition-colors duration-200"
                    >
                        QR Reader
                    </HashLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <HashLink
                        smooth
                        to="/#faq"
                        className="font-medium hover:text-primary transition-colors duration-200"
                    >
                        FAQs
                    </HashLink>
                </NavigationMenuItem>
                <ModeToggle />
            </NavigationMenuList>
        </NavigationMenu>
    );
};

export default Navbar;
