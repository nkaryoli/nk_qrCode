import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';

interface SignUpFormProps {
    handleSignUp: (e: React.FormEvent<HTMLFormElement>) => void;
    setName: (value: string) => void;
    setLastname: (value: string) => void;
    setEmail: (value: string) => void;
    setPassword: (value: string) => void;
}

const SignUpForm: React.FC<SignUpFormProps> = ({ handleSignUp, setName, setLastname, setEmail, setPassword }) => {
    return (
        <form onSubmit={handleSignUp} className="w-full flex flex-col gap-4">
            <div className="flex gap-3">
                <div className="flex flex-col gap-2">
                    <Label htmlFor="name" className="text-white">
                        First name
                    </Label>
                    <div className="flex items-center gap-2 border rounded-sm  h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                        <Input
                            id="name"
                            type="name"
                            placeholder="Name"
                            className="border-0 shadow-none focus-visible:ring-0"
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-2">
                    <Label htmlFor="lastname" className="text-white">
                        Last name
                    </Label>
                    <div className="flex items-center gap-2 border rounded-sm h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                        <Input
                            id="lastname"
                            type="lastname"
                            placeholder="Lastname"
                            className="border-0 shadow-none focus-visible:ring-0"
                            onChange={(e) => setLastname(e.target.value)}
                        />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white">
                    Email address
                </Label>
                <div className="flex items-center gap-2 border rounded-sm px-3 h-10 focus-within:ring-2 focus-within:ring-ring bg-white">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email"
                        className="border-0 shadow-none focus-visible:ring-0"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
            </div>

            {/* Password */}
            <div className="flex flex-col gap-2">
                <Label htmlFor="password" className="text-white">
                    Password
                </Label>
                <div className="flex items-center gap-2 bg-white border rounded-sm  px-3 h-10 focus-within:ring-2 focus-within:ring-ring">
                    <Lock className="h-5 w-5 text-muted-foreground" />
                    <Input
                        id="password"
                        type="password"
                        placeholder="Enter your password"
                        className="border-0 shadow-none focus-visible:ring-0"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
            </div>

            {/* Submit */}
            <Button type="submit" className="mt-2">
                Sign In
            </Button>
        </form>
    );
};

export default SignUpForm;
