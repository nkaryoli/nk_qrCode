import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi,
} from '@/components/ui/carousel';
import { reviews } from '@/constants';

import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import ReviewCard from './ReviewCard';

const TestimonialsSection = () => {
    const [api, setApi] = React.useState<CarouselApi | null>(null);
    const [selectedIndex, setSelectedIndex] = React.useState(0);
    const isTablet = useIsMobile(1300);
    const isMobile = useIsMobile(678);

    useEffect(() => {
        if (!api) return;
        const interval = setInterval(() => {
            if (!api) return;
            if (api.selectedScrollSnap() === api.scrollSnapList().length - 1) {
                api.scrollTo(0);
            } else {
                api.scrollNext();
            }
        }, 5500);
        return () => clearInterval(interval);
    }, [api]);

    useEffect(() => {
        if (!api) return;
        if (isMobile){
            setSelectedIndex((api.selectedScrollSnap()));
            api.on('select', () => {
                setSelectedIndex((api.selectedScrollSnap()));
            });
        } else if (isTablet){
            setSelectedIndex((api.selectedScrollSnap()) + 1);
            api.on('select', () => {
                setSelectedIndex((api.selectedScrollSnap() + 1));
            });
        } else {
            setSelectedIndex((api.selectedScrollSnap()) + 2);
            api.on('select', () => {
                setSelectedIndex((api.selectedScrollSnap()) + 2);
            });
        }
    }, [api, isMobile, isTablet]);

    return (
        <section className="w-full py-9 lg:py-20">
            <div className="w-full space-y-4 m-auto">
                <h2 className="text-2xl font-medium text-center text-purple-950">
                    NK QR-Code Reviews
                </h2>
                <p className="text-center pb-6 text-lg">
                    Discover what our customers say about their encounters with
                    our versatile and user-friendly platform.
                </p>
                <Carousel
                    setApi={setApi}
                    opts={{
                        align: 'start',
                    }}
                    className="m-auto md:w-full"
                >
                    <CarouselContent>
                        {reviews.map((review, index) => (
                            <CarouselItem
                                key={index}
                                className={`md:basis-1/3 xl:basis-1/5 py-2 transition-all duration-300 ${
                                    selectedIndex === index
                                        ? 'scale-105 z-10'
                                        : 'scale-95'
                                }`}
                            >
                                <ReviewCard
                                    user={review.user}
                                    text={review.text}
                                    rating={review.rating}
                                    isActive={selectedIndex === index}
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    );
};

export default TestimonialsSection;
