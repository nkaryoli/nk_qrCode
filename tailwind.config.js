/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        fontFamily: {
            'header': ["'Comfortaa'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
            'subtitle': ["'Nunito'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"], 
            'body': ["'Quicksand'", "system-ui", "-apple-system", "BlinkMacSystemFont", "sans-serif"],
        },
        extend: {
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                // Colores de shadcn (ya integrados con tu paleta)
                background: 'var(--background)',
                foreground: 'var(--foreground)',
                card: {
                    DEFAULT: 'var(--card)',
                    foreground: 'var(--card-foreground)'
                },
                popover: {
                    DEFAULT: 'var(--popover)',
                    foreground: 'var(--popover-foreground)'
                },
                primary: {
                    DEFAULT: 'var(--primary)',
                    foreground: 'var(--primary-foreground)'
                },
                secondary: {
                    DEFAULT: 'var(--secondary)',
                    foreground: 'var(--secondary-foreground)'
                },
                muted: {
                    DEFAULT: 'var(--muted)',
                    foreground: 'var(--muted-foreground)'
                },
                accent: {
                    DEFAULT: 'var(--accent)',
                    foreground: 'var(--accent-foreground)'
                },
                destructive: {
                    DEFAULT: 'var(--destructive)',
                    foreground: 'var(--destructive-foreground)'
                },
                border: 'var(--border)',
                input: 'var(--input)',
                ring: 'var(--ring)',
                chart: {
                    '1': 'var(--chart-1)',
                    '2': 'var(--chart-2)',
                    '3': 'var(--chart-3)',
                    '4': 'var(--chart-4)',
                    '5': 'var(--chart-5)'
                },
                
                // Tus colores originales como clases adicionales
                'custom': {
                    'primary-100': '#009995',
                    'primary-200': '#67E8CB', 
                    'primary-300': '#E0E2E5',
                    'accent-100': '#FF6F75',
                    'accent-200': '#FAE3D9',
                    'bg-100': '#F9F1F5',
                    'bg-200': '#ffffff',
                    'bg-300': '#FAD9E6',
                }
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
}