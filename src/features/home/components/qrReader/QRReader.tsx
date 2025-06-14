import QrScannerModal from '@/features/home/components/qrReader/QrScannerModal'

const QRReader = () => {
	return (
		<section className="w-full p-9 lg:p-20">
			<div className='p-9 max-w-4xl m-auto flex flex-col-reverse lg:flex-row md:justify-center items-center gap-6  rounded-xl shadow-[0px_0px_5px_var(--primary)]'>
				
			<div className="max-w-lg text-balance space-y-6 text-center lg:text-start" >
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
			<div className='py-6 px-9 lg:bg-white border border-primary w-fit rounded-ss-[120px] rounded-ee-[120px] shadow-[15px_15px_0px_var(--primary)]'>
				<img src='/qrReaderImg.svg' className='w-28 lg:w-40'/>
			</div>
			</div>
		</section>
	)
}

export default QRReader