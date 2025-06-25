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
        <section className="w-full h-full space-y-6">
            <div className='flex items-center justify-between px-6'>
                <CreateBreadcrumb isActive={active} />
                {isMobile && (
                    <QRPreviewMobile
                        qrRef={qrRef}
                        qrConfig={qrConfig}
                    />
                )}
            </div>
            <div className="w-full h-full min-h-[calc(100vh-120px)] flex-1 flex justify-between lg:gap-9 xl:gap-11 bg-purple-600/5 p-6 lg:p-9 lg:rounded-md">
                <div className="w-full h-full rounded-md">
                    <ActiveComponent {...props} />
                </div>
                <aside className="lg:w-[300px] xl:w-[350px] flex-none hidden lg:block">
                    <PreviewQR />
                </aside>
            </div>
        </section>
    );
};

export default NewQRSection;
