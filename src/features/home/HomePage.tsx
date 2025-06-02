import { useTheme } from "@/hooks/theme-provider";
import HeroSection from "./components/HeroSection"

const HomePage = () => {
	const { theme } = useTheme();
	return (
		<section className={`w-full background-hero h-screen relative 
			${theme === "dark" ? "bg-[url('/hero-dark.svg')]" : "bg-[url('/hero-light.svg')]"}`
		}>
			<HeroSection />
		</section>
	)
}

export default HomePage