import { useState } from "react";
import { motion } from "framer-motion";
import { reviews } from "../../../constants";
import ReviewCard from "./ReviewCard";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const ReviewCarousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextReview = () => {
        setCurrentIndex((prev) => (prev + 1) % (reviews.length - 1));
    };

    const prevReview = () => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length - 1) % (reviews.length - 1));
    };

    return (
        <div className="w-full max-w-[1400px] mx-auto relative px-4 md:px-9 lg:px-16 my-32">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">What our users say about us</h2>
            <div className="overflow-hidden relative">
                <motion.div
                    className="flex transition-transform duration-300 ease-out my-9"
                    style={{ width: `${reviews.length * 42}%` }}
                    animate={{ x: `-${(currentIndex * 30) / 2}%` }}
                    transition={{ duration: 0.3 }}
                >
                    {reviews.map((review, idx) => (
                    <motion.div
                        key={idx}
                        className="w-1/2 p-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <ReviewCard user={review.user} text={review.text} rating={review.rating} />
                    </motion.div>
                    ))}
                </motion.div>
            </div>
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-1/2">
                <Button
                    variant='neon'
                    size={'rounded'}
                    onClick={prevReview}
                >
                    <ArrowLeft/>
                </Button>
                <Button
                    variant='neon'
                    size={'rounded'}
                    onClick={nextReview}
                >
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default ReviewCarousel;
