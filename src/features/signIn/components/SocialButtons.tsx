import { Button } from '@/components/ui/button';

type SocialButtonsProps = {
    signInWithGoogle: () => void;
    signInWithGithub: () => void;
};

const SocialButtons = ({ signInWithGoogle, signInWithGithub }: SocialButtonsProps) => {
    return (
        <div className="flex flex-col gap-3">
            <Button
                onClick={signInWithGoogle}
                variant="outline"
                className="bg-gray-300"
            >
                <img
                    src="https://www.svgrepo.com/show/355037/google.svg"
                    alt="Google"
                    width={20}
                    height={20}
                />
                Continue with Google
            </Button>

            <button
                onClick={signInWithGithub}
                className="w-full h-10 rounded-md shadow-md bg-black text-white flex items-center justify-center gap-3
                                            hover:bg-zinc-800 hover:scale-[103%] transition"
            >
                <img
                    src="/githubIcon.svg"
                    alt="GitHub"
                    width={20}
                    height={20}
                />
                Continue with GitHub
            </button>
        </div>
    );
};

export default SocialButtons;
