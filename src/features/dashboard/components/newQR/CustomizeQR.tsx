import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

import { ArrowLeft, ArrowRight } from 'lucide-react';
import QRConfigForm from '../QRConfigForm/QRConfigForm';

interface CustomizeProps {
    setActive: (active: string) => void;
}

const CustomizeQR: React.FC<CustomizeProps> = ({ setActive }) => {
    return (
        <div className="w-full h-full flex flex-col gap-6">
            <Card className="border-none lg:pt-4 lg:pb-6 lg:px-3 shadow-lg shadow-purple-700/10">
                <CardHeader>
                    <h2 className="text-lg font-medium text-purple-950">
                        Customize your QR Code
                    </h2>
                </CardHeader>
                <CardContent>
                    <QRConfigForm />
                </CardContent>
            </Card>
            <div className="flex items-center justify-end gap-4">
                <Button
                    size={'sm'}
                    variant={'outline'}
                    onClick={() => setActive('content')}
                    className='opacity-80'
                >
                    <ArrowLeft />
                    Back
                </Button>
                <Button 
                    size={'sm'} 
                    onClick={() => setActive('download')}
                >
                    Next
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default CustomizeQR;
