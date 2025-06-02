import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
    user: string;
    text: string;
    rating?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, text, rating = 5 }) => {
    return (
        <Card className="w-[300px] md:[400px] lg:w-full lg:max-w-md h-full min-h-56  shadow-lg p-5 rounded-lg border border-primary-300 shadow-primary-300">
            <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center justify-between py-2 border-b">
                    <h3 className="text-primary text-lg pb-1 lg:pb-0">{user}</h3>
                    <div className="flex space-x-2">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} className="text-secondary w-5 h-5" fill="currentColor" />
                        ))}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                <p>{text}</p>
            </CardContent>
        </Card>
    );
};

export default ReviewCard;
