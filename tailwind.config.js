/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			opacity: {
				hover: "0.08",
				focus: "0.12",
				active: "0.12",
				drag: "0.16",
			},
			colors: {
				"light-primary": "hsla(9, 66%, 39%, 1)",
				"light-hover-primary": "hsla(9, 66%, 39%, 0.08)",
				"light-active-primary": "hsla(9, 66%, 39%, 0.12)",
				"light-focus-primary": "hsla(9, 66%, 39%, 0.12)",
				"light-drag-primary": "hsla(9, 66%, 39%, 0.16)",

				"light-on-primary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-primary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-primary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-primary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-primary": "hsla(0, 0%, 100%, 0.16)",

				"light-primary-container": "hsla(12, 100%, 87%, 1)",
				"light-hover-primary-container": "hsla(12, 100%, 87%, 0.08)",
				"light-focus-primary-container": "hsla(12, 100%, 87%, 0.12)",
				"light-active-primary-container": "hsla(12, 100%, 87%, 0.12)",
				"light-drag-primary-container": "hsla(12, 100%, 87%, 0.16)",

				"light-on-primary-container": "hsla(2, 99%, 12%, 1)",
				"light-hover-on-primary-container": "hsla(2, 99%, 12%, 0.08)",
				"light-focus-on-primary-container": "hsla(2, 99%, 12%, 0.12)",
				"light-active-on-primary-container": "hsla(2, 99%, 12%, 0.12)",
				"light-drag-on-primary-container": "hsla(2, 99%, 12%, 0.16)",

				"light-secondary": "hsla(38, 100%, 27%, 1)",
				"light-hover-secondary": "hsla(38, 100%, 27%, 0.08)",
				"light-focus-secondary": "hsla(38, 100%, 27%, 0.12)",
				"light-active-secondary": "hsla(38, 100%, 27%, 0.12)",
				"light-drag-secondary": "hsla(38, 100%, 27%, 0.16)",

				"light-on-secondary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-secondary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-secondary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-secondary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-secondary": "hsla(0, 0%, 100%, 0.16)",

				"light-secondary-container": "#ffddba",
				"light-on-secondary-container": "#2b1700",
				"light-tertiary": "#964168",

				"light-on-tertiary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-tertiary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-tertiary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-tertiary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-tertiary": "hsla(0, 0%, 100%, 0.16)",

				"light-tertiary-container": "#ffd9e5",
				"light-on-tertiary-container": "#3e0022",
				"light-error": "#ba1a1a",

				"light-on-error": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-error": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-error": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-error": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-error": "hsla(0, 0%, 100%, 0.16)",

				"light-error-container": "#ffdad6",
				"light-on-error-container": "#410002",
				"light-bg": "#fdfbff",

				"light-on-bg": "hsla(218, 100%, 12%, 1)",
				"light-hover-on-bg": "hsla(218, 100%, 12%, 0.08)",
				"light-focus-on-bg": "hsla(218, 100%, 12%, 0.12)",
				"light-active-on-bg": "hsla(218, 100%, 12%, 0.12)",
				"light-drag-on-bg": "hsla(218, 100%, 12%, 0.16)",

				"light-surface": "#fdfbff",

				"light-on-surface": "hsla(218, 100%, 12%, 1)",
				"light-hover-on-surface": "hsla(218, 100%, 12%, 0.08)",
				"light-focus-on-surface": "hsla(218, 100%, 12%, 0.12)",
				"light-active-on-surface": "hsla(218, 100%, 12%, 0.12)",
				"light-drag-on-surface": "hsla(218, 100%, 12%, 0.16)",
				"light-disabled-on-surface": "hsla(218, 100%, 12%, 0.38)",

				"light-outline": "#85736f",
				"light-surface-variant": "#f5ddd9",
				"light-on-surface-variant": "#534340",
				"dark-primary": "#ffb4a6",
				"dark-on-primary": "#640d03",
				"dark-primary-container": "#832515",
				"dark-on-primary-container": "#ffdad3",
				"dark-secondary": "#ffb866",
				"dark-on-secondary": "#482900",
				"dark-secondary-container": "#673d00",
				"dark-on-secondary-container": "#ffddba",
				"dark-tertiary": "#ffb0ce",
				"dark-on-tertiary": "#5d1139",
				"dark-tertiary-container": "#792950",
				"dark-on-tertiary-container": "#ffd9e5",
				"dark-error": "#ffb4ab",
				"dark-on-error": "#690005",
				"dark-error-container": "#93000a",
				"dark-on-error-container": "#ffdad6",

				"dark-bg": "hsla(218, 100%, 12%, 1)",
				"dark-hover-bg": "hsla(218, 100%, 12%, 0.08)",
				"dark-focus-bg": "hsla(218, 100%, 12%, 0.12)",
				"dark-active-bg": "hsla(218, 100%, 12%, 0.12)",
				"dark-drag-bg": "hsla(218, 100%, 12%, 0.16)",

				"dark-on-bg": "#d6e3ff",

				"dark-surface": "hsla(218, 100%, 12%, 1)",
				"dark-hover-surface": "hsla(218, 100%, 12%, 0.08)",
				"dark-focus-surface": "hsla(218, 100%, 12%, 0.12)",
				"dark-active-surface": "hsla(218, 100%, 12%, 0.12)",
				"dark-drag-surface": "hsla(218, 100%, 12%, 0.16)",

				"dark-on-surface": "#d6e3ff",
				"dark-outline": "#a08c89",
				"dark-surface-variant": "#534340",
				"dark-on-surface-variant": "#d8c2bd",
			},
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
