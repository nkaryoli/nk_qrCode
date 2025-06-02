import { useTheme } from "@/hooks/theme-provider";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";

const HomePage = () => {
	const { theme } = useTheme();
	return (
		<div className="w-full">
			<section className={`w-full background-hero h-screen relative 
				${theme === "dark" ? "bg-[url('/hero-dark.svg')]" : "bg-[url('/hero-light.svg')]"}`
			}>
				<HeroSection />
			</section>
			<HowItWorks />
		</div>
	)
}

export default HomePage