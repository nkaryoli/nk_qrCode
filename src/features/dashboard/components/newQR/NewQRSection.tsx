/* eslint-disable @typescript-eslint/no-explicit-any */
import { useQR } from '@/hooks/QRContext';
import QRContent from './QRContent';
import CustomizeQR from './CustomizeQR';
import DownloadQR from './DownloadQR';
import { useState } from 'react';
import CreateBreadcrumb from './CreateBreadcrumb';
import PreviewQR from './PreviewQR';
import { useQRManager } from '@/hooks/useQRManager';
import QRPreviewMobile from './QRPreviewMobile';
import { useIsMobile } from '@/hooks/useIsMobile';

type ComponentKey = 'content' | 'customize' | 'download';

const NewQRSection = () => {
    const [active, setActive] = useState<ComponentKey>('content');
    const { qrRef, title, setTitle, qrConfig, handleContentChange } = useQR();
    const { handleDownload, handleSaveQRCode } = useQRManager();
    const isMobile = useIsMobile(900);

    const handleSave = () => {
        handleSaveQRCode();
        console.log('QR Code saved successfully!');
    };
    const onDownload = () => {
        if (qrRef.current) {
            handleDownload(qrRef);
            console.log('QR Code downloaded successfully!');
        }
    };
    const components: Record<
        ComponentKey,
        { component: React.ComponentType<any>; props?: any }
    > = {
        content: {
            component: QRContent,
            props: {
                title: title,
                setTitle: setTitle,
                value: qrConfig.data,
                onChange: handleContentChange,
                setActive,
            },
        },
        customize: { component: CustomizeQR, props: { setActive } },
        download: {
            component: DownloadQR,
            props: { setActive, onDownload, handleSave },
        },
    };

    const { component: ActiveComponent, props } =
        components[active] || components['content'];

    return (
        <section className="w-full space-y-6 h-full min-h-[calc(100vh-120px)]">
            <div className='flex items-center justify-between'>
                <CreateBreadcrumb isActive={active} />
                {isMobile && (
                    <QRPreviewMobile
                        qrRef={qrRef}
                        qrConfig={qrConfig}
                    />
                )}
            </div>
            <div className="h-full flex lg:gap-6 bg-purple-600/5 p-4 lg:p-9 rounded-md">
                <div className="w-full h-full rounded-md">
                    <ActiveComponent {...props} />
                </div>
                <aside className="lg:w-[350px] xl:w-[500px]">
                    <PreviewQR />
                </aside>
            </div>
        </section>
    );
};

export default NewQRSection;
