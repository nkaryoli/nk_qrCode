import { Button } from "@/components/ui/button";

const CTASection = () => {
    return (
        <section className="w-full py-24 px-9 lg:p-20 mt-20 bg-gradient-to-b from-input via-input to-transparent">
            <div className="max-w-4xl flex flex-col items-center lg:flex-row gap-9 m-auto  rounded-lg">
                <div className="space-y-6 w-fuul lg:w-3/5 p-3">
                    <h1 className="text-2xl font-medium">
                        Create your QR Code today!
                    </h1>
                    <p>
                        Experience the benefits of our service now. Join us now
                        to design and customize your own QR codes effortlessly
                        and efficiently.
                    </p>
					<Button>Create QR</Button>
					<Button variant={'neon'} className='ml-3 bg-transparent'>Sign Up</Button>

                </div>
                <div className="pt-9 pl-9 pr-2 w-64 lg:w-2/5 flex items-center rounded-ss-xl rounded-es-[120px] rounded-se-sm rounded-ee-xl bg-white">
                    <img src="/img-cta.svg" alt="" className="drop-shadow-[1px_1px_1px_var(--primary)]" />
                </div>
            </div>
        </section>
    );
};

export default CTASection;
