/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue,css}'],
	theme: {
		fontFamily: {

		},
		extend: {
			fontFamily: {
				kumbh: ['Kumbh Sans Variable', ...defaultTheme.fontFamily.sans],
			  },
			  colors: {
				orangeCustom: "#ff7d1a",
				paleOrangeCustomCustom: "#ffede0",
				hoverOrange: "#fdaa69",
				veryDarkBlueCustom: "#1d2025",
				darkGrayishBlueCustom: "#68707d",
				grayisBlueCustom: "#b6bcc8",
				lightBrayishBlueCustom: "#f7f8fd",
			  },
			  keyframes: {
				bounce2: {
				  '0%': {
					transform: 'scale(0)',
	
				  },
				  '50%': {
					transform: 'scale(1.4)',
				  },
				  '100%': {
					transform: 'scale(1)',
				  },
				},
				bounce3: {
					'0%': {
					  transform: 'scale(0)',
	  
					},
					'100%': {
					  transform: 'scale(1)',
					},
				},
				bounce4: {
					'0%': {
					  transform: 'scale(0)',
	  
					},
					'100%': {
					  transform: 'scale(1)',
					},
				},
			  },	
			  animation: {
				"bounce2": 'bounce2 0.5s',
				"bounce3": 'bounce3 0.2s',
				"bounce4": 'bounce4 0.75s'
			  },
		},
	},
	plugins: [],
}
