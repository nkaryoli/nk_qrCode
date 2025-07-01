import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { useAuth } from '@/hooks/AuthContext';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from '@/components/ui/menubar';
import { NavLink } from 'react-router-dom';

interface ActionButtonsProps {
    handleLogIn: () => void;
    handleSignUp: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
    handleLogIn,
    handleSignUp,
}) => {
    const { user, signOut } = useAuth();

    const displayName = user?.user_metadata.user_name || user?.email;

    return (
        <div className="flex items-center gap-3">
            {user ? (
                <Menubar>
                    <MenubarMenu>
                        <MenubarTrigger>
                            <div className="flex items-center gap-3 hover:text-primary">
                                {user.user_metadata.avatar_url && (
                                    <Avatar>
                                        <AvatarImage
                                            src={user.user_metadata.avatar_url}
                                        />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                )}
                                <span>{displayName}</span>
                            </div>
                        </MenubarTrigger>
                        <MenubarContent>
                            <MenubarItem>
                                <NavLink to={'/dashboard'}>
                                    Dashboard
                                </NavLink>
                                
                            </MenubarItem>
                            <MenubarItem>
                                <button 
                                    className='w-full'
                                    onClick={signOut}>
                                    SignOut
                                </button>
                            </MenubarItem>
                        </MenubarContent>
                    </MenubarMenu>
                </Menubar>
            ) : (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeOut',
                        }}
                    >
                        <Button
                            variant={'outline'}
                            onClick={handleLogIn}
                            className="w-24"
                        >
                            Log In
                        </Button>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                            duration: 0.7,
                            ease: 'easeOut',
                        }}
                    >
                        <Button
                            variant={'glow'}
                            onClick={handleSignUp}
                            className="w-24"
                        >
                            Sign Up
                        </Button>
                    </motion.div>
                </>
            )}
            
        </div>
    );
};

export default ActionButtons;
