import { QrCode } from 'lucide-react';

const WelcomeLogIn = () => {
    return (
        <div className="w-full lg:max-w-[50%] flex flex-col items-center lg:p-16 relative">
            <h1 className="text-4xl font-semibold mb-6">
                Welcome Back!
            </h1>
            <p className="mt-6">We are very excited to see you.</p>
            <p>
                Please Sign into your{' '}
                <strong className="text-primary font-header text-lg ">
                    NK-QRcode
                </strong>{' '}
                account.
            </p>
            <img src="/qrCode.png" className="m-auto hidden lg:block" />
            <QrCode
                size={'35%'}
                className="hidden lg:block -rotate-45 absolute -left-20 -top-11 text-purple-500  rounded-lg"
            />
        </div>
    );
};

export default WelcomeLogIn;
