import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { MonitorSmartphone, QrCode, Smile } from 'lucide-react'

const ExploreSection = () => {
  return (
	<div className='w-full max-w-4xl space-y-6 text-center'>
		<p className="mb-3">Innovate</p>
		<h1 className='text-2xl text-center font-medium m-0'>Explore Our Exciting Features Today!</h1>
		<p className='max-w-2xl m-auto'>Our app is designed for Effortless QR code generation. 
			With user-friendly tools, anyone can create amzing, 
			personalized codes in minutes.
		</p>
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-14 max-w-6xl'>
			<Card className='border-none shadow-none'>
				<CardHeader className='px-0'>
					<CardTitle>
						<Smile size={50} className='m-auto text-primary'/>
						<h1 className='pt-6 text-lg font-normal leading-8'>User-Friendly Interface for Everyone</h1>
					</CardTitle>
				</CardHeader>
				<CardDescription>
					<p>No tecnical skills are required to get started.</p>
				</CardDescription>
			</Card>
			<Card className='border-none shadow-none'>
				<CardHeader>
					<CardTitle>
						<QrCode size={50} className='m-auto text-primary' />
						<h1 className='pt-6 text-lg font-normal leading-8'>Hight-Quality QR Codes for ALK Uses</h1>
					</CardTitle>
				</CardHeader>
				<CardDescription>
					<p>No tecnical askills are required to det starteOur QR codes are crisp and reliable.</p>
				</CardDescription>
			</Card>
			<Card className='border-none shadow-none'>
				<CardHeader>
					<CardTitle>
						<MonitorSmartphone size={50} className='m-auto text-primary' />
						<h1 className='pt-6 text-lg font-normal leading-8'>Compatible with Multiple Platforms and Devices</h1>
					</CardTitle>
				</CardHeader>
				<CardDescription>
					<p>Access your codes anywhere, anytime with ease.</p>
				</CardDescription>
			</Card>
		</div>
	</div>
  )
}

export default ExploreSection