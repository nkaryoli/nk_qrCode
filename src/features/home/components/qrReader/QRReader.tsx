import QrScannerModal from '@/features/home/components/qrReader/QrScannerModal';

const QRReader = () => {
    return (
        <section id="qr-reader" className="w-full px-9 py-20 lg:p-24">
            <div className="max-w-4xl m-auto flex flex-col-reverse lg:flex-row md:justify-between items-center gap-6">
                <div className="max-w-lg text-balance flex flex-col gap-6 items-center lg:items-start text-center lg:text-start">
                    <p className="mt-3">Scan</p>
                    <h1 className="text-2xl font-medium text-purple-950">
                        Scan & Discover with our{' '}
                        <span className="text-primary">QR Reader!!</span>
                    </h1>
                    <p>
                        Scan any QR code in seconds and access its content
                        instantly. It’s fast, easy, and secure!
                    </p>
                    <QrScannerModal />
                </div>
                <div className="py-6 px-9 lg:bg-white border border-primary w-fit rounded-ss-[120px] rounded-ee-[120px] shadow-[15px_15px_0px_var(--primary)]">
                    <img src="/qrReaderImg.svg" className="w-28 lg:w-40" />
                </div>
            </div>
        </section>
    );
};

export default QRReader;
