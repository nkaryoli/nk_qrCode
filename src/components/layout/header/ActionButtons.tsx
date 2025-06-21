import { ModeToggle } from '@/components/ModeToggle';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { CirclePlus, QrCode, Settings, SwatchBook } from 'lucide-react';

interface ActionButtonsProps {
    handleLogIn: () => void;
    handleSignUp: () => void;
}
const ActionButtons: React.FC<ActionButtonsProps> = ({
    handleLogIn,
    handleSignUp,
}) => {
    return (
        <div className="flex items-center">
            <ClerkLoading>
                <Skeleton className="h-9 w-24 mr-3" />
            </ClerkLoading>
            <ClerkLoaded>
                <SignedOut>
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
                            className="w-24 mr-3"
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
                            className="w-24 mr-3"
                        >
                            Sign Up
                        </Button>
                    </motion.div>
                </SignedOut>
            </ClerkLoaded>
            <SignedIn>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                        duration: 0.5,
                        ease: 'easeOut',
                    }}
                    className="h-8 w-8 ml-16 mr-3 flex justify-end rounded-full bg-gradient-to-br from-primary via-accent to-secondary p-0.5"
                >
                    <UserButton
                        appearance={{
                            elements: {
                                userButtonPopoverFooter: 'hidden',
                                userButtonPopoverActionButton__manageAccount:
                                    'hidden',
                                userButtonPopoverCard:
                                    'w-72 !bg-gradient-to-b !from-transparent !via-white/70 !to-white rounded-b-lg rounded-t-[0px] mt-2.5 shadow-md',
                                userPreviewMainIdentifierText__userButton:
                                    'text-primary text-[16px] font-bold',
                                userButtonPopoverMain:
                                    'bg-transparent backdrop-blur-md rounded-t-[0px]',
                                userButtonPopoverActions: '',
                                userButtonPopoverActionButton:
                                    'hover:text-primary font-medium text-[16px] gap-0',
                                userButtonPopoverCustomItemButton:
                                    'hover:text-primary font-medium text-[16px] !border-none gap-0',
                            },
                        }}
                    >
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="New QR"
                                labelIcon={<CirclePlus size={16} />}
                                href="/dashboard"
                            />
                        </UserButton.MenuItems>
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="My QR Codes"
                                labelIcon={<QrCode size={16} />}
                                href="/dashboard"
                            />
                        </UserButton.MenuItems>
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="My Templates"
                                labelIcon={<SwatchBook size={16} />}
                                href="/dashboard"
                            />
                        </UserButton.MenuItems>
                        <UserButton.MenuItems>
                            <UserButton.Link
                                label="Settings"
                                labelIcon={<Settings size={16} />}
                                href="/dashboard"
                            />
                        </UserButton.MenuItems>
                    </UserButton>
                </motion.div>
            </SignedIn>
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.5,
                    ease: 'easeOut',
                    delay: 0.4,
                }}
            >
                <ModeToggle />
            </motion.div>
        </div>
    );
};

export default ActionButtons;
