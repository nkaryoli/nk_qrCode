import QrScannerModal from '@/features/home/components/qrReader/QrScannerModal'

const QRReader = () => {
	return (
		<section className="w-full max-w-4xl m-auto flex flex-col lg:flex-row md:justify-between md:items-center gap-10 px-9">
			<div className="max-w-md space-y-6 drop-shadow-[0_0_3px_var(--background)]" >
				<p className="mb-3">Scan</p>
				<h1 className="text-2xl font-medium">
					Scan & Discover with our <span className='text-primary'>QR Reader!!</span>
				</h1>
				<p>
					Scan any QR code in seconds and access its content instantly.  
					It’s fast, easy, and secure!
				</p>
				<QrScannerModal />
			</div>
			<div className='p-9 pr-11 bg-card w-fit rounded-ss-[150px] rounded-ee-[150px] rounded-3xl'>
				<img src='/qrReaderImg.svg' className='w-72'/>
			</div>
		</section>
	)
}

export default QRReader