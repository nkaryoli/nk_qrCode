import { Input } from '@/components/ui/input';
import QRConfigForm from '@/features/custom/components/QRConfigForm/QRConfigForm';
import { useQR } from '@/hooks/QRContext';
import GridItem from './GridItem';
import HomeQRPreview from './HomeQRPreview';

const QRGenerator = () => {
    const { qrConfig, handleContentChange } = useQR();

    return (
        <div className="w-full max-w-md lg:max-w-3xl grid grid-cols-5 gap-2 bg-purple-300/20 backdrop-blur-xl p-2 rounded-xl z-10">
            <div className="col-span-5">
                <GridItem number={1} title="Type the content for your QR Code">
                    <Input
                        id="content"
                        value={qrConfig.data}
                        onChange={(e) => handleContentChange(e.target.value)}
                        placeholder="https://expample.com"
                        className="placeholder:text-foreground/50 placeholder:text-sm text-sm"
                    />
                </GridItem>
            </div>

            <div className="col-span-5 lg:col-span-3">
                <GridItem
                    number={2}
                    title="Customize it to your liking (Optional)"
                >
                    <div
                        className={`${!qrConfig.data ? 'pointer-events-none opacity-60 pt-2 pb-9' : 'pt-2'}`}
                    >
                        <QRConfigForm />
                    </div>
                </GridItem>
            </div>

            <div className="col-span-5 lg:col-span-2">
                <GridItem number={3} title="Download it">
                    <HomeQRPreview />
                </GridItem>
            </div>
        </div>
    );
};

export default QRGenerator;
