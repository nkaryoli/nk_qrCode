/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useContext, useEffect, useState } from 'react';
import type { User, Session } from '@supabase/supabase-js';
import { supabase } from '@/supabase/supabaseClient';

interface AuthContextType {
    user: User | null;
    session: Session | null;
    isLoading: boolean;
    signInWithGithub: () => void;
    signInWithGoogle: () => void;
    signOut: () => Promise<void>;
    signInWithPassword: (
        email: string,
        password: string
    ) => Promise<{ success: boolean; data: unknown }>;
    signUpNewUser: (
        email: string,
        password: string,
        profileData?: { first_name?: string; last_name?: string; }
    ) => Promise<{ success: boolean; data: unknown }>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [session, setSession] = useState<Session | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    /**
     * Asegura que exista un registro en `profiles` para el user.id.
     * Solo se ejecuta cuando hay una sesión confirmada.
     */
    const ensureProfileExists = async (user: User) => {
        try {
            if (!user) return;

            // Verificar que el email esté confirmado antes de crear el perfil
            const emailConfirmed = (user.email_confirmed_at ?? null) !== null;
            if (!emailConfirmed) {
                console.log('Email no confirmado: no se crea profile todavía.');
                return;
            }

            const meta = (user.user_metadata ?? {}) as Record<string, any>;
            const first_name = meta.first_name ?? null;
            const last_name = meta.last_name ?? null;

            const { error } = await supabase
                .from('profiles')
                .upsert(
                    {
                        id: user.id,
                        first_name,
                        last_name,
                        updated_at: new Date().toISOString(),
                    },
                    { onConflict: 'id' }
                );

            if (error) {
                console.error('Error upserting profile:', error.message || error);
                throw error;
            } else {
                console.log('Profile upsert realizado para user:', user.id);
            }
        } catch (err) {
            console.error('ensureProfileExists error:', err);
            throw err;
        }
    };

    useEffect(() => {
        let mounted = true;
        let authListener: { subscription: { unsubscribe: () => void } } | null = null;

        const initializeAuth = async () => {
            try {
                setIsLoading(true);
                
                // Obtener sesión actual
                const { data: { session: currentSession }, error } = await supabase.auth.getSession();
                
                if (!mounted) return;
                
                if (error) {
                    console.error('Error getting session:', error);
                    return;
                }

                setSession(currentSession);
                setUser(currentSession?.user ?? null);

                // Solo crear perfil si hay sesión y email confirmado
                if (currentSession?.user && currentSession.user.email_confirmed_at) {
                    await ensureProfileExists(currentSession.user);
                }
            } catch (err) {
                console.error('Auth initialization error:', err);
            } finally {
                if (mounted) {
                    setIsLoading(false);
                }
            }
        };

        initializeAuth();

        // Configurar listener de cambios de autenticación
        const { data: listener } = supabase.auth.onAuthStateChange(
            async (event, newSession) => {
                if (!mounted) return;

                console.log('Auth state changed:', event, newSession?.user?.id);

                try {
                    setSession(newSession);
                    setUser(newSession?.user ?? null);

                    // Manejar diferentes eventos de auth
                    switch (event) {
                        case 'SIGNED_IN':
                            if (newSession?.user) {
                                // Esperar un momento para asegurar que todo esté listo
                                setTimeout(async () => {
                                    if (mounted && newSession.user?.email_confirmed_at) {
                                        await ensureProfileExists(newSession.user);
                                    }
                                }, 1000);
                            }
                            break;
                            
                        case 'SIGNED_OUT':
                            // Limpiar estado inmediatamente
                            setUser(null);
                            setSession(null);
                            break;
                            
                        case 'USER_UPDATED':
                            if (newSession?.user?.email_confirmed_at) {
                                await ensureProfileExists(newSession.user);
                            }
                            break;
                            
                        default:
                            break;
                    }
                } catch (err) {
                    console.error('Auth state change handler error:', err);
                }
            }
        );

        authListener = listener as { subscription: { unsubscribe: () => void } };

        return () => {
            mounted = false;
            if (authListener?.subscription) {
                authListener.subscription.unsubscribe();
            }
        };
    }, []);

    const signInWithPassword = async (email: string, password: string) => {
        try {
            setIsLoading(true);
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password,
            });

            if (error) {
                console.error('Error signing in:', error.message);
                return { success: false, data: null };
            }
            return { success: true, data };
        } catch (err) {
            console.error('signInWithPassword unexpected error:', err);
            return { success: false, data: null };
        } finally {
            setIsLoading(false);
        }
    };

    const signUpNewUser = async (
        email: string,
        password: string,
        profileData?: { first_name?: string; last_name?: string; }
    ) => {
        try {
            setIsLoading(true);
            const devRedirect =
                (import.meta.env.VITE_DEV_REDIRECT_URL as string) ?? 'http://localhost:5173/auth/callback';
            const prodRedirect =
                (import.meta.env.VITE_PROD_REDIRECT_URL as string) ?? 'https://miapp.com/auth/callback';

            const redirectTo = import.meta.env.MODE === 'development' ? devRedirect : prodRedirect;

            const { data, error } = await supabase.auth.signUp({
                email,
                password,
                options: {
                    data: profileData ?? {},
                    emailRedirectTo: redirectTo,
                },
            });

            if (error) {
                console.error('Error signing up:', error.message);
                return { success: false, data: null };
            }

            // IMPORTANTE: No establecer el usuario aquí porque no hay sesión activa
            // hasta que se confirme el email
            return { success: true, data };
        } catch (err) {
            console.error('signUpNewUser error:', err);
            return { success: false, data: null };
        } finally {
            setIsLoading(false);
        }
    };

    const signInWithGithub = () => {
        supabase.auth.signInWithOAuth({ provider: 'github' });
    };

    const signInWithGoogle = () => {
        supabase.auth.signInWithOAuth({ provider: 'google' });
    };

    const signOut = async () => {
        try {
            setIsLoading(true);
            
            // Limpiar estado local primero para respuesta inmediata
            setUser(null);
            setSession(null);
            
            // Luego hacer signOut en Supabase
            const { error } = await supabase.auth.signOut();
            
            if (error) {
                console.error('signOut error from supabase.auth.signOut():', error);
                // Si hay error, volver a cargar el estado real
                const { data: { session: currentSession } } = await supabase.auth.getSession();
                setSession(currentSession);
                setUser(currentSession?.user ?? null);
                return;
            }

            console.log('Signed out successfully');
            
            // Forzar una limpieza adicional
            setTimeout(async () => {
                const { data: { session: verifySession } } = await supabase.auth.getSession();
                if (verifySession) {
                    console.warn('Session still exists after signOut, forcing cleanup');
                    setSession(null);
                    setUser(null);
                }
            }, 500);
            
        } catch (err) {
            console.error('Unexpected signOut error:', err);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                session,
                isLoading,
                signInWithGithub,
                signInWithGoogle,
                signOut,
                signInWithPassword,
                signUpNewUser,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
};