import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Mail, Lock } from 'lucide-react';

interface LogInFormProps {
    handleLogIn: (e: React.FormEvent<HTMLFormElement>) => void;
    setEmail: (email: string) => void;
    setPassword: (password: string) => void;
}

const LogInForm: React.FC<LogInFormProps> = ({handleLogIn, setEmail, setPassword}) => {
    return (
        <form onSubmit={handleLogIn} className="w-full flex flex-col gap-4">
            <div className="flex flex-col gap-2">
                <Label htmlFor="email" className="text-white">
                    Email
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
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                    <Checkbox id="remember" />
                    <Label
                        htmlFor="remember"
                        className="text-sm font-normal text-white"
                    >
                        Remember me
                    </Label>
                </div>
                <button className="text-sm text-primary hover:underline ml-1">
                    Forgot password?
                </button>
            </div>
            <Button type="submit">Sign In</Button>
        </form>
    );
};

export default LogInForm;
