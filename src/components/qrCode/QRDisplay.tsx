/* eslint-disable react-hooks/exhaustive-deps */
import { forwardRef, memo, useEffect, useImperativeHandle, useMemo, useRef } from 'react';
import QRCodeStyling, { type Options as QRCodeOptions } from 'qr-code-styling';

export interface QRDisplayRef {
    download: (fileName?: string) => void;
}

interface QRDisplayProps {
    config: QRCodeOptions;
    className?: string;
}

const QRDisplay = memo(
    forwardRef<QRDisplayRef, QRDisplayProps>(({ config, className }, ref) => {
        const qrRef = useRef<HTMLDivElement>(null);
        const qrCodeRef = useRef<QRCodeStyling | null>(null);

        const qrConfig = useMemo(() => ({
            data: config.data,
            image: config.image || undefined,
            width: config.width,
            height: config.height,
            margin: config.margin,
            dotsOptions: config.dotsOptions,
            cornersSquareOptions: config.cornersSquareOptions,
            cornersDotOptions: config.cornersDotOptions,
            backgroundOptions: config.backgroundOptions,
            imageOptions: config.imageOptions,
        }), [
            config.data,
            config.image,
            config.width,
            config.margin,
            JSON.stringify(config.dotsOptions),
            JSON.stringify(config.cornersSquareOptions),
            JSON.stringify(config.cornersDotOptions),
            JSON.stringify(config.backgroundOptions),
            JSON.stringify(config.imageOptions),
        ]);

        
        useEffect(() => {
            if (!qrCodeRef.current) {
                qrCodeRef.current = new QRCodeStyling(qrConfig);
                if (qrRef.current) qrCodeRef.current.append(qrRef.current);
            } else {
                qrCodeRef.current.update(qrConfig);
            }
        }, [qrConfig]);

        useImperativeHandle(ref, () => ({
            download: (fileName = 'qr-code') => {
                qrCodeRef.current?.download({ name: fileName, extension: 'png' });
            },
        }));

        return (
            <div className={`flex justify-center ${className || ''}`}>
                <div ref={qrRef} />
            </div>
        );
    }),
    (prevProps, nextProps) => {
        return (
            prevProps.config.data === nextProps.config.data &&
            prevProps.config.image === nextProps.config.image &&
            prevProps.config.width === nextProps.config.width &&
            prevProps.config.margin === nextProps.config.margin &&
            JSON.stringify(prevProps.config.dotsOptions) === JSON.stringify(nextProps.config.dotsOptions) &&
            JSON.stringify(prevProps.config.cornersSquareOptions) === JSON.stringify(nextProps.config.cornersSquareOptions) &&
            JSON.stringify(prevProps.config.cornersDotOptions) === JSON.stringify(nextProps.config.cornersDotOptions) &&
            JSON.stringify(prevProps.config.backgroundOptions) === JSON.stringify(nextProps.config.backgroundOptions) &&
            JSON.stringify(prevProps.config.imageOptions) === JSON.stringify(nextProps.config.imageOptions)
        );
    }
);

export default QRDisplay;