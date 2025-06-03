import { SignUp } from '@clerk/clerk-react';
import { motion } from 'framer-motion';
import { useTheme } from '@/hooks/theme-provider';

const SignUpPage = () => {
	const { theme } = useTheme();

	return (
		<section
			className={`w-full h-full min-h-screen flex flex-col items-center justify-center pt-32 pb-11 gap-9 background-signIn
				${theme === 'dark' ? "bg-[url('/bg-signUp.svg')]" : "bg-[url('/bg-signUp.svg')]"}`}
		>
			<div className='space-y-4'>
				<motion.h1 
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					className="text-5xl font-extrabold font-subtitle"
				>
					Welcome to NK-QRCode!
				</motion.h1>
				<motion.p 
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1, delay: 0.5 }}
					className='text-center text-lg'
				>
					Please enter your details.
				</motion.p>
			</div>
			<div className="relative inline-block w-[450px] min-h-[538px]">
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
						<SignUp
							signInUrl='/sign-in'
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
										backgroundColor: '#FFF9F5',
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
									footer: {
										background:'#ffffff',
									},
									card: {
										borderBottom: 'none',
									}
								},
							}}
						/>
					</motion.div>
				</div>
			</div>
		</section>
	)
}

export default SignUpPage;