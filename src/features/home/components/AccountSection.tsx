import { Button } from '@/components/ui/button';

const AccountSection = () => {
    return (
        <section className="w-full flex flex-col md:flex-row gap-16 max-w-4xl m-auto py-20">

                <img src="/create-img.svg" className='w-64 mx-9' />
            
            <div className="space-y-6 max-w-lg">
				<p className="mb-3">Save</p>
                <h1 className="text-2xl leading-[3rem] font-medium mb-3">
                    Manage your QR Codes with ease
                </h1>
                <p>
                    With our account creation feature, you can easily save your
                    QR codes for future use. Reuse them anytime, ensuring you
                    never lose your valuable creations.
                </p>
                <Button className="w-36">Sign Up</Button>
            </div>
        </section>
    );
};

export default AccountSection;
