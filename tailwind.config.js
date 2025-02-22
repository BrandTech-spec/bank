/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		colors: {
  			p1: '#2EF2FF',
  			p2: '#3C52D9',
  			p3: '#C8EA80',
  			p4: '#EAEDFF',
  			p5: '#C4CBF5',
  			s1: '#080D27',
  			s2: '#0C1838',
  			s3: '#334679',
  			s4: '#1959AD',
  			s5: '#263466',
  			black: {
  				'100': '#05091D',
  				DEFAULT: '#000000'
  			},
  			light: {
  				'100': '#333F4E',
  				'200': '#A3B2C7',
  				'300': '#F2F5F9',
  				'400': '#F2F4F8'
  			},
  			dark: {
  				'100': '#04050C',
  				'200': '#131524',
  				'300': '#131619',
  				'400': '#1A1D21',
  				'500': '#363A3D',
  				'600': '#76828D',
  				'700': '#ABB8C4'
  			},
  			brand: {
  				'100': '#EA6365',
  				DEFAULT: '#FA7275'
  			},
  			fill: {
  				'1': 'rgba(255, 255, 255, 0.10)'
  			},
  			bankGradient: '#0179FE',
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
  			appointments: 'url("/img/bank_icons/business-solution.jpg")',
  			'bank-gradient': 'linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7))',
  			'gradient-mesh': 'url("/icons/gradient-mesh.svg")',
  			'bank-green-gradient': 'linear-gradient(90deg, #01797A 0%, #489399 100%)',
  			appointment:" url('/assets/images/appointments-bg.png')",
  			pending:"url('/assets/images/pending-bg.png')",
  			cancelled: "url('/assets/images/cancelled-bg.png')"
  		},
  		boxShadow: {
  			'100': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
  			'200': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 4px 10px #3391FF',
  			'300': '0px 4px 4px rgba(0, 0, 0, 0.25), 0px 16px 24px rgba(0, 0, 0, 0.25), inset 0px 3px 6px #1959AD',
  			'400': 'inset 0px 2px 4px 0 rgba(255, 255, 255, 0.05)',
  			'500': '0px 16px 24px rgba(0, 0, 0, 0.25), 0px -14px 48px rgba(40, 51, 111, 0.7)',
  			form: '0px 1px 2px 0px rgba(16, 24, 40, 0.05)',
  			chart: '0px 1px 3px 0px rgba(16, 24, 40, 0.10), 0px 1px 2px 0px rgba(16, 24, 40, 0.06)',
  			profile: '0px 12px 16px -4px rgba(16, 24, 40, 0.08), 0px 4px 6px -2px rgba(16, 24, 40, 0.03)',
  			creditCard: '8px 10px 16px 0px rgba(0, 0, 0, 0.05)'
  		},
  		spacing: {
  			'22': '88px',
  			'100': '100px',
  			'330': '330px',
  			'388': '388px',
  			'400': '400px',
  			'440': '440px',
  			'512': '512px',
  			'640': '640px',
  			'960': '960px',
  			'1230': '1230px',
  			'1/5': '20%',
  			'2/5': '40%',
  			'3/5': '60%',
  			'4/5': '80%',
  			'3/20': '15%',
  			'7/20': '35%',
  			'9/20': '45%',
  			'11/20': '55%',
  			'13/20': '65%',
  			'15/20': '75%',
  			'17/20': '85%',
  			'19/20': '95%'
  		},
  		zIndex: {
  			'1': '1',
  			'2': '2',
  			'4': '4'
  		},
  		lineHeight: {
  			'12': '48px'
  		},
  		borderRadius: {
  			'14': '14px',
  			'20': '20px',
  			'40': '40px',
  			half: '50%',
  			'7xl': '40px'
  		},
  		fontFamily: {
  			'ibm-plex-serif': 'var(--font-ibm-plex-serif)',
  			inter: [
  				'Inter',
  				'sans-serif'
  			],
  			poppins: [
  				'Poppins',
  				'sans-serif'
  			]
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
};
