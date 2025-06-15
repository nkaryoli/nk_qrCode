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
                            variant={'neon'}
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
                    <UserButton />
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
