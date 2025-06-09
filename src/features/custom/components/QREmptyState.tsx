import { PacmanLoader } from 'react-spinners';

export default function QREmptyState() {
    return (
        <div className="flex flex-col items-center justify-center p-7.5 text-center h-64 gap-9">
            <PacmanLoader size={25} color="#FF5E1F" className="-ml-6" speedMultiplier={0.5} />
            <p className="text-foreground text-balance">
                This QR is hungry for content! Feed it with your ideas.
            </p>
        </div>
    );
}
