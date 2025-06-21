import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ArrowRight } from 'lucide-react';

interface ContentProps {
    title?: string;
    setTitle: (title: string) => void;
    value: string;
    onChange: (value: string) => void;
    setActive: (active: string) => void;
}

const QRContent: React.FC<ContentProps> = ({
    title,
    value,
    onChange,
    setActive,
    setTitle,
}) => {
    return (
        <div className="w-full h-full flex flex-col gap-6">
            <Card className="border-none lg:pt-4 lg:pb-6 lg:px-3">
                <CardHeader>
                    <h2 className="text-lg font-medium text-purple-950">
                        QR Code Content
                    </h2>
                </CardHeader>
                <CardContent>
                    <div>
                        <Label htmlFor="title" className="ml-1">
                            Title
                        </Label>
                        <Input
                            id="title"
                            type="text"
                            value={title ?? ''}
                            placeholder="My QR Code"
                            onChange={(e) => setTitle(e.target.value)}
                            className="h-9"
                        />
                    </div>
                    <div className="mt-4">
                        <Label htmlFor="content" className="ml-1">
                            Content
                        </Label>
                        <Input
                            id="content"
                            value={value}
                            onChange={(e) => onChange(e.target.value)}
                            placeholder="https://expample.com"
                            className="h-9"
                        />
                    </div>
                </CardContent>
            </Card>
            <Button
                disabled={!value || !title}
                size={'sm'}
                onClick={() => setActive('customize')}
                className="w-fit self-end flex "
            >
                Next
                <ArrowRight />
            </Button>
        </div>
    );
};

export default QRContent;
