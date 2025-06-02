import { Star } from "lucide-react";

interface ReviewCardProps {
    user: string;
    text: string;
    rating?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, text, rating = 5 }) => {
    return (
        <div className="w-[300px] md:[400px] lg:w-full lg:max-w-md h-full min-h-56 bg-white shadow-lg p-5 rounded-lg border border-primary-300 shadow-primary-300">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between px-4 py-2 border-b">
                <h3 className="text-primary-100 text-lg pb-1 lg:pb-0">{user}</h3>
                <div className="flex space-x-2">
                    {Array.from({ length: rating }).map((_, i) => (
                        <Star key={i} className="text-yellow-400 w-5 h-5" fill="currentColor" />
                    ))}
                </div>
            </div>
            <p className="text-gray-700 p-4">{text}</p>
        </div>
    );
};

export default ReviewCard;
