/** @type {import('tailwindcss').Config} */

module.exports =  {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
    theme: {
    	container: {
    		center: true,
    		padding: '2rem',
    		screens: {
    			'2xl': '1400px'
    		}
    	},
    	extend: {
    		colors: {
				light: {
					'100': '#333F4E',
					'200': '#A3B2C7',
					'300': '#F2F5F9',
					'400': '#F2F4F8'
				},
				dark: {
					'100': '#04050C',
					'200': '#131524',
					300: "#131619",
					400: "#1A1D21",
					500: "#363A3D",
					600: "#76828D",
					700: "#ABB8C4",
				},
				
				brand: {
					'100': '#EA6365',
					DEFAULT: '#FA7275'
				},
    			fill: {
    				'1': 'rgba(255, 255, 255, 0.10)'
    			},
    			bankGradient:'#0179FE',
    			indigo: {
    				'500': '#6172F3',
    				'700': '#3538CD'
    			},
    			success: {
    				'25': '#F6FEF9',
    				'50': '#ECFDF3',
    				'100': '#D1FADF',
    				'600': '#039855',
    				'700': '#027A48',
    				'900': '#054F31'
    			},
    			pink: {
    				'25': '#FEF6FB',
    				'100': '#FCE7F6',
    				'500': '#EE46BC',
    				'600': '#DD2590',
    				'700': '#C11574',
    				'900': '#851651'
    			},
    			blue: {
    				'25': '#F5FAFF',
    				'100': '#D1E9FF',
    				'500': '#2E90FA',
    				'600': '#1570EF',
    				'700': '#175CD3',
    				'900': '#194185'
    			},
    			sky: {
    				'1': '#F3F9FF'
    			},
    			black2: {
    				'1': '#00214F',
    				'2': '#344054',
    				'3': '#0000'
    			},
    			gray: {
    				'25': '#FCFCFD',
    				'200': '#EAECF0',
    				'300': '#D0D5DD',
    				'500': '#667085',
    				'600': '#475467',
    				'700': '#344054',
    				'900': '#101828'
    			}
    		},
    		backgroundImage: {
    			'appointments': 'url("/img/bank_icons/business-solution.jpg")',
    			'bank-gradient': 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',
    			'gradient-mesh': 'url("/icons/gradient-mesh.svg")',
    			'bank-green-gradient': 'linear-gradient(90deg, #01797A 0%, #489399 100%)',
				appointment: "url('/assets/images/appointments-bg.png')",
				pending: "url('/assets/images/pending-bg.png')",
				cancelled: "url('/assets/images/cancelled-bg.png')",
    		},
    		boxShadow: {
    			form: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
    			chart: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
    			profile: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
    			creditCard: '8px 10px 16px 0px rgba(0, 0, 0, 0.05)'
    		},
    		fontFamily: {
    			inter: 'var(--font-inter)',
    			'ibm-plex-serif': 'var(--font-ibm-plex-serif)'
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
    			},
    			
    		},
    		animation: {
    			'accordion-down': 'accordion-down 0.2s ease-out',
    			'accordion-up': 'accordion-up 0.2s ease-out',
    			
    		}
    	}
    },
  plugins: [require("tailwindcss-animate")],
}  

