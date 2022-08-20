/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				primary_color_purple: 'rgb(215, 172, 208)',
				primary_color_purple_hex: '#D7ACD0',
				primary_color_white: 'rgb(255, 255, 255)',
				primary_color_white_hex: '#FFFFFF',
				secondary_color_purple: 'rgb(231, 196, 221)',
				secondary_color_purple_hex: '#E7C4DD',
				secondary_color_blue: 'rgb(176, 226, 250)',
				secondary_color_blue_hex: '#B0E2FA',
				shader_pink: 'rgb(246, 226, 238)',
				shader_pink_hex: '#F6E2EE',
			},
		},
	},
	plugins: [],
};
