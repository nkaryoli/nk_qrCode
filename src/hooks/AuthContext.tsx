import { supabase } from '@/supabase/supabaseClient';
import type { User } from '@supabase/supabase-js';
import { createContext, useContext, useEffect, useState } from 'react';

interface AuthContextType {
    user: User | null;
    signInWithGithub: () => void;
    signInWithGoogle: () => void;
    signOut: () => void;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signUpNewUser: (email: string, password: string) => Promise<{ success: boolean; data: any }>;
    SignInUser: (
        email: string,
        password: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ) => Promise<{ success: boolean; data: any }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        supabase.auth.getSession().then(({ data: { session } }) => {
            setUser(session?.user ?? null);
        });

        const { data: listener } = supabase.auth.onAuthStateChange(
            (_, session) => {
                setUser(session?.user ?? null);
            }
        );

        return () => {
            listener.subscription.unsubscribe();
        };
    }, []);

    const SignInUser = async (email: string, password: string) => {
        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email: email,
                password: password,
            });
            if (error) {
                console.log('Error signing in:', error.message);
                return { success: false, data: null };
            }
            console.log('Sign-in successful:', data);
            return { success: true, data };
        } catch (error) {
            console.log('Unexpected error signing in:', error);
            return { success: false, data: null };
        }
    };

    const signUpNewUser = async (email: string, password: string) => {
        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });
        if (error) {
            console.log('Error signing up:', error.message);
            return { success: false, data: null };
        }
        return { success: true, data };
    };

    const signInWithGithub = () => {
        supabase.auth.signInWithOAuth({ provider: 'github' });
    };

    const signInWithGoogle = () => {
        supabase.auth.signInWithOAuth({ provider: 'google' });
    };

    const signOut = () => {
        supabase.auth.signOut();
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                SignInUser,
                signUpNewUser,
                signInWithGoogle,
                signInWithGithub,
                signOut,
            }}
        >
            {' '}
            {children}{' '}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within a QRProvider');
    return context;
};
