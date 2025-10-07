import { PacmanLoader } from 'react-spinners';

export default function QREmptyState() {
    return (
        <div className="flex flex-col items-center justify-center p-7 text-center h-64 gap-9 w-[350px]">
            <PacmanLoader size={25} color="#fc4700" className="-ml-6" speedMultiplier={0.5} />
            <p className="text-foreground text-balance">
                This QR is hungry for content! Feed it with your ideas.
            </p>
        </div>
    );
}
