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
        <Card
            className="rounded-3xl bg-transparent border-none shadow-none
				relative transition-all duration-500 ease-in overflow-hidden group 
                hover:overflow-visible 
            "
        >
            <CardHeader className="flex items-center text-center p-0">
                <CardTitle>
                    <span
                        className="text-gray-600 text-lg font-bold border border-white px-6
                                flex items-center justify-center rounded-full
							"
                    >
                        Step {number}
                    </span>
                </CardTitle>
                <CardDescription>{img}</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-center text-md text-balance py-3">{text}</p>
            </CardContent>
        </Card>
    );
};

export default StepsCard;
