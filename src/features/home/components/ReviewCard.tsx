import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Star } from "lucide-react";

interface ReviewCardProps {
    user: string;
    text: string;
    rating?: number;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ user, text, rating = 5 }) => {
    return (
        <Card className="h-full">
            <CardHeader>
                <div className="flex justify-between py-2 border-b">
                    <h3 className="text-lg pb-1 lg:pb-0">{user}</h3>
                    <div className="flex space-x-1">
                        {Array.from({ length: rating }).map((_, i) => (
                            <Star key={i} size={18} className="text-secondary" fill="currentColor" />
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
