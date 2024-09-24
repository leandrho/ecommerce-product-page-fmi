/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {

		},
		extend: {
			fontFamily: {
				sans: ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
			  },
			  colors: {
				orangeCustom: "#ff7d1a",
				paleOrangeCustomCustom: "#ffede0",
				veryDarkBlueCustom: "#1d2025",
				darkGrayishBlueCustom: "#68707d",
				grayisBlueCustom: "#b6bcc8",
				lightBrayishBlueCustom: "#f7f8fd",
			  },
		},
	},
	plugins: [],
}
