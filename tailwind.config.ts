import type { Config } from 'tailwindcss';

const config: Config = {
    darkMode: ["class"],
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
		screens: {
            sm: '480px',
            md: '678px',
            lg: '976px',
            xl: '1300px',
        },
		extend: {
			fontFamily: {
				header: [
					'Comfortaa',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'sans-serif'
				],
				subtitle: [
					'Nunito',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'sans-serif'
				],
				body: [
					'Quicksand',
					'system-ui',
					'-apple-system',
					'BlinkMacSystemFont',
					'sans-serif'
				]
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
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
					from: {
						height: '0'
    				},
    				to: {
    					height: 'var(--radix-accordion-content-height)'
    				}
    			},
    			'accordion-up': {
    				from: {
    					height: 'var(--radix-accordion-content-height)'
    				},
    				to: {
    					height: '0'
    				}
    			}
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out'
    		}
    	}
    },

}

export default config;
