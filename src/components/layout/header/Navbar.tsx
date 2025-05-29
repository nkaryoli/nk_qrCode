import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';
import { navigationLinks } from '@/constants';

const Navbar = () => {
  const navigate = useNavigate();

  const handleClick = () => {
      navigate('/QrGenerator');
  }
  
  return (
    <NavigationMenu className="flex items-center">      
      <NavigationMenuList>
        {navigationLinks.map(({ to, label }) => (
          <NavigationMenuItem key={to}>
            <NavigationMenuLink>
                <NavLink to={to} className="pr-6" >
                  {label}
                </NavLink>
              </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
        <Button 
          onClick={handleClick}
        >
          Create QR
        </Button>
      </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Navbar;