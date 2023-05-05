/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			keyframes: {
				pulsing: {
					"0%, 100%": { transform: "scale(1)" },
					"50%": { transform: "scale(1.1)" },
				},
			},
			animation: {
				pulsing: "pulsing 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			},
		},
	},
	plugins: [],
};
