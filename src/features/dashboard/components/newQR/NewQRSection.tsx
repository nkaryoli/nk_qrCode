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
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { createQr } from '@/api/qrApi';
import { toast } from 'sonner';
import { useAuth } from '@/hooks/AuthContext';

type ComponentKey = 'content' | 'customize' | 'download';

const NewQRSection = () => {
    const [active, setActive] = useState<ComponentKey>('content');
    const { qrRef, title, setTitle, qrConfig, handleContentChange } = useQR();
    const { handleDownload } = useQRManager();
    const isMobile = useIsMobile(900);
    const { user } = useAuth();
    const [ isSaved, setIsSaved ] = useState<boolean>(false);
    const [ isDownloaded, setIsDownloaded ] = useState<boolean>(false);
    const queryClient = useQueryClient();
    
    const mutation = useMutation({
        mutationFn: createQr,
        onSuccess: async () => {
            setIsSaved(true);
            toast('QR has been saved sucssesfully! 🎉', {
                description: "Check 'My QR Codes' section to view it.",
            });
            queryClient.invalidateQueries();
            await queryClient.refetchQueries();
        },
        onError: (error: any) => {
            toast('Error saving QR: ' + error.message);
        },
    });

    const saveQr = () => {
        const qr_data = qrConfig.data;
        const user_id = user?.id ?? '';
        const qr_template = qrConfig;

        mutation.mutate({ title, qr_data, user_id, qr_template });
    };

    const onDownload = () => {
        if (qrRef.current) {
            handleDownload(qrRef);
            setIsDownloaded(true);
            toast('QR Code downloaded successfully!');
        }
    };

    const onNewQR = () => {
        setTitle('');
        handleContentChange('');
        setActive('content');
        setIsSaved(false);
        setIsDownloaded(false);
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
            props: { setActive, onDownload, saveQr, isSaved, isDownloaded, onNewQR },
        },
    };

    const { component: ActiveComponent, props } =
        components[active] || components['content'];

    return (
        <section className="w-full h-full space-y-6 lg:p-9">
            <div className="flex items-center justify-between px-6">
                <CreateBreadcrumb isActive={active} />
                {isMobile && (
                    <QRPreviewMobile qrRef={qrRef} qrConfig={qrConfig} />
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
