import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from '@/components/ui/carousel';
import { reviews } from '@/constants';
import ReviewCard from './ReviewCard';

const TestimonialsSection = () => {
    return (
        <div className='w-full max-w-4xl space-y-4 m-auto'>
			<h2 className='text-2xl font-medium text-center'>NK QR-Code Reviews</h2>
			<p className='text-center pb-3'>Discover what our customers say about their encounters with our versatile and user-friendly platform.</p>
            <Carousel
                opts={{
                    align: 'start',
                }}
                className="w-[80%] m-auto md:w-full"
            >
                <CarouselContent>
                    {reviews.map((review, index) => (
                        <CarouselItem
                            key={index}
                            className="md:basis-1/2 lg:basis-1/3 pb-1"
                        >
                            <ReviewCard
                                user={review.user}
                                text={review.text}
                                rating={review.rating}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
    );
};

export default TestimonialsSection;
