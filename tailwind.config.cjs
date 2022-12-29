/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: {
				DEFAULT: {
				  css: {
					color: '#333',
					a: {
					  color: '#f7a072',
					  '&:hover': {
						color: '#b5e2fa',
					  },
					},
				  },
				},
			  },
			  colors: {
				primary: '#b5e2fa',
				secondary: '#f7a072',
				tertiary: '#f9f7f3'
			  },
		},
	},
	plugins: [
		require('@tailwindcss/typography'),

	],
}
