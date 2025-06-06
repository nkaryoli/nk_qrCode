import { useTheme } from "@/hooks/theme-provider";
import HeroSection from "./components/HeroSection"
import HowItWorks from "./components/HowItWorks";
import WhyNK from "./components/WhyNKCode";
import ReviewCarousel from "./components/ReviewCarousel";
import QRReader from "./components/qrReader/QRReader";

const HomePage = () => {
	const { theme } = useTheme();
	return (
		<div className="w-full space-y-40">
			<section className={`w-full background-hero h-full min-h-screen relative
				${theme === "dark" ? "bg-[url('/hero-dark.svg')]" : "bg-[url('/hero-light.svg')]"}`
			}>
				<HeroSection />
			</section>
			<WhyNK/>
			<HowItWorks />
			<ReviewCarousel/>
			<div id="qr-reader" className="w-full m-auto bg-gradient-to-br from-input via via-chart-5 to-input py-20">
				<QRReader />
			</div>
		</div>
	)
}

export default HomePage