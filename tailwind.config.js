module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', '../components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			animation: {
				'slide-left': 'slide-left 0.4s ease-in-out forwards',
				'slide-right': 'slide-right 0.4s ease-in-out forwards',
				'slide-right-in': 'slide-right-in 0.4s ease-in-out forwards',
				'slide-right-out': 'slide-right-out 0.4s ease-in-out forwards',
				'slide-top': 'slide-top 1s ease-in-out forwards',
				'slide-top-out': 'slide-top-out 1s ease-in-out forwards',
				popUp: 'popUp 0.7s ease-in-out forwards',
			},
			keyframes: {
				'slide-left': {
					'0%': { transform: 'translateX(-1500px)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-right': {
					'0%': { transform: 'translateX(1500px)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-top': {
					'0%': { transform: 'translateY(-200px)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-top-out': {
					'0%': { transform: 'translateY(100px)' },
					'100%': { transform: 'translateY(0)' },
				},
				'slide-right-in': {
					'0%': { transform: 'translateX(500px)' },
					'100%': { transform: 'translateX(0)' },
				},
				'slide-right-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(500px)' },
				},

				popUp: {
					from: { transform: 'translateY(200px)', opacity: '0.4' },
					to: { transform: 'translateY(0px)', opacity: '1' },
				},
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [require('tailwind-scrollbar-hide')],
};
