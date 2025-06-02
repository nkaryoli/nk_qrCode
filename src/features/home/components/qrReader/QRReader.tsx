import QrScannerModal from '@/features/home/components/qrReader/QrScannerModal'

const QRReader = () => {
	return (
		<section className="w-full max-w-[1100px] m-auto md:flex md:justify-between md:items-center gap-10 ">
			<div className="max-w-md space-y-6 drop-shadow-[0_0_3px_var(--background)]" >
				<h1 className="text-3xl md:text-4xl font-bold tracking-wide">
					Scan & Discover with our <span className='text-primary'>QR Reader!!</span>
				</h1>
				<p className='text-xl tracking-widest'>
					Scan any QR code in seconds and access its content instantly.  
					It’s fast, easy, and secure!
				</p>
				<QrScannerModal />
			</div>
			<div className='p-9 pr-11 bg-card rounded-ss-[150px] rounded-ee-[150px] rounded-3xl'>
				<img src='/reader-img1.svg' className='w-72'/>
			</div>
		</section>
	)
}

export default QRReader