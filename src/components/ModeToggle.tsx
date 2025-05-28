import { Moon, Sun } from "lucide-react"
import { useTheme } from "../hooks/theme-provider"

export function ModeToggle() {
	const { theme, setTheme } = useTheme()
	
	const isDark = theme === "dark" || 
		(theme === "system" && window.matchMedia("(prefers-color-scheme: dark)").matches)

	const toggleTheme = () => {
		setTheme(isDark ? "light" : "dark")
	}

	return (
		<button
			onClick={toggleTheme}
			className={`
				relative inline-flex items-center h-8 rounded-full w-16 p-1
				transition-all duration-300 ease-in-out focus:outline-none 
				focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
				focus-visible:ring-offset-background border border-border
				${isDark 
					? 'bg-gradient-to-r from-secondary to-[#009995]' 
					: 'bg-gradient-to-r from-secondary to-yellow-100'
				}
			`}
			role="switch"
			aria-checked={isDark}
			aria-label="Toggle theme"
		>
			<div
				className={`
					flex items-center justify-center w-6 h-6 rounded-full 
					bg-background shadow-lg transform transition-all duration-300 ease-in-out
					border border-border
					${isDark ? 'translate-x-8' : 'translate-x-0'}
				`}
			>
				{isDark ? (
					<Moon className="w-3 h-3 text-primary" />
				) : (
					<Sun className="w-3 h-3 text-yellow-600" />
				)}
			</div>
		</button>
	)
}