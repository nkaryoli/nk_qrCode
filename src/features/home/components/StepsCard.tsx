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
            className="rounded-3xl bg-gradient-to-br from-chart-5 via-white to-chart-5 border-none shadow-lg
				relative transition-all duration-500 ease-in overflow-hidden group 
                hover:overflow-visible hover:shadow-lg hover:shadow-chart-5 hover:scale-105 hover:border-primary
            "
        >
            <div className="bg-white/60 h-full w-full p-6 rounded-3xl">
                <CardHeader className="flex items-center text-center p-0">
                    <CardTitle>
                        <span
                            className="text-chart-5 text-4xl font-bold absolute top-0 right-0 pl-3 pb-3 bg-white opacity-70 pr-1
								flex items-center justify-center rounded-tr-3xl rounded-bl-3xl transition-all duration-500 ease-out
								group-hover:text-5xl group-hover:-right-0 group-hover:opacity-100 group-hover:delay-100 
								group-hover:py-3 group-hover:px-5 group-hover:border border-chart-5
							"
                        >
                            {number}
                        </span>
                    </CardTitle>
                    <CardDescription>{img}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-lg text-balance py-3">{text}</p>
                </CardContent>
            </div>
        </Card>
    );
};

export default StepsCard;
