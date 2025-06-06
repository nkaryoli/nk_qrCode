import type { Config } from 'tailwindcss';
import animate from "tailwindcss-animate";

const config: Config = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
		screens: {
            sm: '540px',
            md: '678px',
            lg: '900px',
            xl: '1300px',
        },
		extend: {
			fontFamily: {
				header: [
					'Work Sans',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'sans-serif'
				],
				body: [
					'Quicksand',
				
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 4px)',
				sm: 'calc(var(--radius) - 12px)'
			},
			colors: {
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
				}
			},
			opacity: {
				'0': '0',
				'10': '0.1',
				'20': '0.2',
				'30': '0.3',
				'40': '0.4',
				'50': '0.5',
				'60': '0.6',
				'70': '0.7',
				'80': '0.8',
				'90': '0.9',
				'100': '1'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'slide-in-from-left': {
					'0%': { transform: 'translateX(-100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-out-to-left': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(-100%)' },
				},
				'slide-in-from-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-out-to-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' },
				},
				'slide-in-from-top': {
					'0%': { transform: 'translateY(-100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-out-to-top': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(-100%)' },
				},
				'slide-in-from-bottom': {
					'0%': { transform: 'translateY(100%)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-out-to-bottom': {
					'0%': { transform: 'translateY(0)' },
					'100%': { transform: 'translateY(100%)' },
				},
				'fade-in-0': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				'fade-out-0': {
					'0%': { opacity: '1' },
					'100%': { opacity: '0' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'slide-in-from-left': 'slide-in-from-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out-to-left': 'slide-out-to-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-from-right': 'slide-in-from-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out-to-right': 'slide-out-to-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-from-top': 'slide-in-from-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out-to-top': 'slide-out-to-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-in-from-bottom': 'slide-in-from-bottom 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'slide-out-to-bottom': 'slide-out-to-bottom 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
				'fade-in-0': 'fade-in-0 0.2s ease-in',
				'fade-out-0': 'fade-out-0 0.2s ease-in',
			}
		}
    },
	plugins: [animate]
}

export default config;
