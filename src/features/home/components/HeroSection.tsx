import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const HeroSection = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/QrGenerator');
    }

    return (
        <div className="absolute top-[38vh] left-[50vw] flex flex-col items-center justify-center space-y-6 text-center tracking-widest">
            <h1 className="text-5xl font-extrabold font-subtitle ">Create and Customize<br/> Stunning
                <span className="text-accent font-extrabold"> QR Code </span>
            </h1>
            
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full text-xl md:text-xl text-text-200 font-bodyText tracking-wide">
                Share your QR codes in seconds. Effortless and free!!
            </motion.p>
            <Button 
                variant={'sunset'}
                size={'lg'}
                className="w-64"
                onClick={handleClick}
            >
                Get Started
            </Button>
        </div>
    )
};

export default HeroSection;