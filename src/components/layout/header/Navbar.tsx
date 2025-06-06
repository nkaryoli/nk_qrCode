import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { navigationLinks } from '@/constants';

interface NavbarProps {
  handleClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ handleClick }) => {
  return (
    <NavigationMenu className="flex items-center font-semibold">      
      <NavigationMenuList className='space-x-6'>
        
        {navigationLinks.map(({ to, label }) => (
          <NavigationMenuItem key={to}>
            <NavigationMenuLink asChild>
                <NavLink to={to} 
                  className={({isActive}) => 
                    `${isActive 
                      ? 'text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-primary transition-colors duration-200'
                  }`}
                > 
                  {label}
                </NavLink>
              </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <NavigationMenuItem>
          <NavigationMenuLink asChild>
            <HashLink
              smooth
              to="/#qr-reader"
              className="hover:text-primary transition-colors duration-200"
            >
              QR Reader
            </HashLink>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <Button 
          variant={"sunset"}
          onClick={handleClick}
        >
          Create QR
        </Button>       
      </NavigationMenuList>
      
    </NavigationMenu>
  )
}

export default Navbar;