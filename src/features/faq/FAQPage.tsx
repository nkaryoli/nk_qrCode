import { motion } from "framer-motion"
import Faqs from "./components/Faqs"

const FAQPage = () => {
	return (
		<section className="w-full h-fit min-h-screen relative flex justify-end items-end">
			<div className="absolute top-40 left-[15vw]">
				<motion.h2
					className="text-3xl font-headerText text-primary-100 text-center mb-8"
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 1 }}
				>
					FAQS
				</motion.h2>
				<Faqs/>
			</div>
			<img src="/hero-faqs.svg" alt="" className="w-[50vw]"/>
		</section>
	)
}

export default FAQPage