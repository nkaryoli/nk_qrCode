import type { ReactNode } from 'react';

interface StepsCardProps {
    number: number;
    img: ReactNode;
    text: string;
}

const StepsCard: React.FC<StepsCardProps> = ({ number, img, text }) => {
    return (
        <div
            className="w-full max-w-lg h-36 items-center flex p-3 rounded-lg
                bg-gradient-to-br from-white via-white to-white border border-muted 
                hover:from-purple-300/20 hover:via-white hover:to-white hover:border hover:border-chart-5
            "
        >
            <div className=''>{img}</div>
            <div className='flex flex-col p-3 gap-3'>
                <span
                    className="font-medium bg-white rounded-full"
                >
                    Step {number}
                </span>
            <p>{text}</p>
            </div>
        </div>
    );
};

export default StepsCard;
