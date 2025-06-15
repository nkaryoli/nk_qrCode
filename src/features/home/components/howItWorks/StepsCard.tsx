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
                bg-gradient-to-br from-white/40 via-white/30 to-white/10 border border-purple-100 
                hover:from-white/40 hover:via-white/80 hover:to-white/70 hover:border hover:border-purple-300 hover:drop-shadow-[1px_1px_2px_var(--chart-5)]
            "
        >
            <div className=''>{img}</div>
            <div className='flex flex-col p-3 gap-3'>
                <span
                    className="text-lg font-medium text-purple-950 rounded-full"
                >
                    Step {number}
                </span>
            <p>{text}</p>
            </div>
        </div>
    );
};

export default StepsCard;
