import type { Config } from "tailwindcss";

export default {
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			blue: '#6A7B8C',
  			pink: '#C9A9A6',
  			lightpink: '#E9DDDB',
				yellow: '#F2C94C',
  		},
  		fontFamily: {
  			alexandria: [
  				'var(--font-alexandria)'
  			],
  			raleway: [
  				'var(--font-raleway)'
  			],
  			lora: [
  				'var(--font-lora)'
  			],
				barlow: [
					'var(--font-Barlow)'
				]
  		},
  		height: {
  			projects: 'calc(100vh - 168px)'
  		},
  		fontSize: {
  			fluid: 'clamp(2rem, 7.5vw, 150px)',
  			smallfluid: 'clamp(1rem, 8vw, 150px)'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					left: '0',
  					transform: 'translateY(0)'
  				},
  				'50%': {
  					left: 'calc(100% - 150px)',
  					transform: 'translateY(calc(100% - 150px))'
  				}
  			}
  		},
  		animation: {
  			float: 'float 20s ease-in-out infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
