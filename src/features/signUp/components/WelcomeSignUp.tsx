import { QrCode } from "lucide-react";

const WelcomeSignUp = () => {
    return (
        <div className="w-full text-center flex flex-col items-center lg:pt-24 lg:p-16 relative">
            <h1 className="text-4xl font-medium mb-6 text-purple-950">
                Hello friend!
            </h1>
            <p className="mt-6">We are glad you are joining us.</p>
            <p className="pt-2">
                Please provide the information to register
                <br /> your{' '}
                <strong className="text-primary font-header text-lg ">
                    NK-QRcode
                </strong>{' '}
                account.
            </p>
            <img
                src="/img-signup3.svg"
                className="w-[160px] m-auto rounded-bl-[100px] hidden lg:block drop-shadow-[1px_2px_1px_var(--chart-4)]"
                style={{ transform: 'rotateY(180deg)' }}
            />
            <QrCode
                size={'35%'}
                className="hidden lg:block -rotate-45 absolute -right-20 -top-11 text-purple-500"
            />
        </div>
    );
};

export default WelcomeSignUp;
