import { Button } from '@/components/ui/button';

const AccountSection = () => {
    return (
        <section
            className="w-full  
                bg-gradient-to-br from-input via-muted to-muted px-6 py-14 lg:p-20
            "
        >
            <div className='max-w-4xl flex flex-col items-center lg:flex-row gap-6 lg:gap-14 m-auto'>
            
            <div className='bg-gradient-to-r from-muted via-white to-muted drop-shadow-[5px_5px_0] rounded-sm p-9'>
                <img src="/img-create.svg" className="w-20 lg:w-44" />
            </div>
            <div className="space-y-6 text-center lg:text-start">
                <p className="mb-3">Save</p>
                <h1 className="text-2xl leading-[3rem] font-medium mb-3">
                    Manage your QR Codes with ease
                </h1>
                <p  className='text-balance'>
                    With our account creation feature, you can easily save your
                    QR codes for future use. Reuse them anytime, ensuring you
                    never lose your valuable creations.
                </p>
                <Button className="w-36">Sign Up</Button>
            </div>    
            </div>
        </section>
    );
};

export default AccountSection;
