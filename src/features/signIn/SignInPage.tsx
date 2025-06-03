import { useTheme } from '@/hooks/theme-provider';
import { SignIn } from '@clerk/clerk-react';
import { motion } from 'framer-motion';

export function SignInPage() {
    const { theme } = useTheme();
    return (
        <section
            className={`w-full h-full min-h-screen flex flex-col items-center justify-center py-32 gap-9 background-signIn
				${theme === 'dark' ? "bg-[url('/bg-signIn.svg')]" : "bg-[url('/bg-signIn.svg')]"}`}
        >
            <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-5xl font-extrabold font-subtitle"
            >
                Welcome Back!
            </motion.h1>

            <div className="relative inline-block w-[450px] h-[390px]">
                <motion.div
                    initial={{ opacity: 0, x: -10, y: -10 }}
                    animate={{ opacity: 1, x: 0, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="absolute top-2 left-2 w-full h-full bg-gradient-to-br from-primary via-accent to-secondary rounded-2xl z-0"
                />
                <div className="relative rounded-2xl overflow-hidden z-10 ">
					<motion.div
						initial={{ opacity: 0, x: -20, y: -20 }}
						animate={{ opacity: 1, x: 0, y: 0 }}
						transition={{
							duration: 0.5,
							ease: "easeOut", 
							delay: 0.5
						}}
					>
						<SignIn
							appearance={{
								variables: {
									colorPrimary: '#FF5E1F',
									colorBackground: '#ffffff',
									colorTextOnPrimaryBackground:
										'#ffffff',
									borderRadius: '8px',
									colorText: '#2A2A2A',
								},
								elements: {
									formButtonPrimary: {
										height: '40px',
									},
									socialButtonsIconButton: {
										backgroundColor: '#FFEEDD',
										borderColor: '#FF5E1F',
										outlineColor: '#FF5E1F',
									},
									dividerLine: {
										color: '#FFEEDD',
									},
									headerTitle: {
										textDecorationColor: '#FF5E1F',
										fontSize: '24px',
									},
									headerSubtitle: {
										display: 'none',
									},
								},
							}}
						/>
					</motion.div>
                </div>
            </div>
        </section>
    );
}
