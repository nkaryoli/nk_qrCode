import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import type { ReactNode } from 'react';

interface StepsCardProps {
    number: number;
    img: ReactNode;
    text: string;
}

const StepsCard: React.FC<StepsCardProps> = ({ number, img, text }) => {
    return (
        <Card className="bg-gradient-to-br from-purple-200 via-white to-purple-200 border-none  max-w-56 w-full" >
            <CardHeader className="flex items-center text-center pb-0">
                <CardTitle>
                    <span
                        className="text-lg bg-white px-6
                                flex items-center justify-center rounded-full
							"
                    >
                        Step {number}
                    </span>
                </CardTitle>
            </CardHeader>
            <CardContent>
                <CardDescription>{img}</CardDescription>
                <p className="text-center text-md text-balance py-3">{text}</p>
            </CardContent>
        </Card>
    );
};

export default StepsCard;
