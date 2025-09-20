import type { QRCode } from '@/supabase/types';
import { PacmanLoader } from 'react-spinners';
import { Button } from '@/components/ui/button';
import { Plus, QrCode } from 'lucide-react';
import TemplateCard from './TemplateCard';

interface MyQRsProps {
    qrs: QRCode[];
    isLoading?: boolean;
    handleSidebarSelect: (id: string) => void;
}

const MyQRs: React.FC<MyQRsProps> = ({
    qrs,
    isLoading = false,
    handleSidebarSelect,
}) => {
    if (isLoading) {
        return (
            <div className="w-full h-[50vh] flex items-center justify-center">
                <PacmanLoader size={50} color="#db073d" speedMultiplier={0.5} />
            </div>
        );
    }

    if (qrs?.length === 0) {
        return (
            <div className="w-full h-[50vh] flex flex-col items-center justify-center gap-6">
                <div className="text-center space-y-3">
                    <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                        <QrCode className="w-8 h-8 text-primary" />
                    </div>
                    <h2 className="text-2xl font-semibold">No QR Codes Yet</h2>
                    <p className="text-muted-foreground">
                        Create your first custom QR code and start sharing!
                    </p>
                </div>
                <Button
                    size="lg"
                    onClick={() => handleSidebarSelect('new-qr')}
                    className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                    Create Your First QR
                </Button>
            </div>
        );
    }

    return (
        <div className="w-full min-h-screen p-6 md:p-14 flex flex-col items-center justify-center gap-0 md:gap-9 bg-purple-50">
            <div className="w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-6">
                    <h1 className="text-3xl font-bold mb-2">My QR Codes</h1>
                    <p className="text-lg">
                        Gestiona y utiliza tus templates de códigos QR
                        personalizados
                    </p>
                </div>
                <Button
                    onClick={() => handleSidebarSelect('new-qr')}
                >
                    <Plus className="w-5 h-5" />
                    Crear Nuevo
                </Button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 relative z-10 py-10 max-w-7xl mx-auto">
                {qrs.map((qr) => (
                    <TemplateCard
                        key={qr.id}
                        qrTemplate={qr.qr_template}
                        qr_id={qr.id}
                    />
                ))}
            </div>
        </div>
    );
};

export default MyQRs;
