/**
 * @format
 * @type {import('tailwindcss').Config}
 */

module.exports = {
	content: ["./app/**/*.{js,jsx,ts,tsx}"],
	darkMode: "class",
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
				"light-disabled-primary": "hsla(9, 66%, 39%, 0.38)",

				"light-on-primary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-primary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-primary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-primary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-primary": "hsla(0, 0%, 100%, 0.16)",
				"light-disabled-on-primary": "hsla(9, 66%, 39%, 0.38)",

				"light-primary-container": "hsla(12, 100%, 87%, 1)",
				"light-hover-primary-container": "hsla(12, 100%, 87%, 0.08)",
				"light-focus-primary-container": "hsla(12, 100%, 87%, 0.12)",
				"light-active-primary-container": "hsla(12, 100%, 87%, 0.12)",
				"light-drag-primary-container": "hsla(12, 100%, 87%, 0.16)",
				"light-disabled-primary-container": "hsla(12, 100%, 87%, 0.38)",

				"light-on-primary-container": "hsla(2, 99%, 12%, 1)",
				"light-hover-on-primary-container": "hsla(2, 99%, 12%, 0.08)",
				"light-focus-on-primary-container": "hsla(2, 99%, 12%, 0.12)",
				"light-active-on-primary-container": "hsla(2, 99%, 12%, 0.12)",
				"light-drag-on-primary-container": "hsla(2, 99%, 12%, 0.16)",
				"light-disabled-on-primary-container":
					"hsla(12, 100%, 87%, 0.38)",

				"light-secondary": "hsla(38, 100%, 27%, 1)",
				"light-hover-secondary": "hsla(38, 100%, 27%, 0.08)",
				"light-focus-secondary": "hsla(38, 100%, 27%, 0.12)",
				"light-active-secondary": "hsla(38, 100%, 27%, 0.12)",
				"light-drag-secondary": "hsla(38, 100%, 27%, 0.16)",
				"light-disabled-secondary": "hsla(38, 100%, 27%, 0.38)",

				"light-on-secondary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-secondary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-secondary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-secondary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-secondary": "hsla(0, 0%, 100%, 0.16)",
				"light-disabled-on-secondary": "hsla(38, 100%, 87%, 0.38)",

				"light-secondary-container": "hsla(38, 100%, 87%, 1)",
				"light-hover-secondary-container": "hsla(38, 100%, 87%, 0.08)",
				"light-focus-secondary-container": "hsla(38, 100%, 87%, 0.12)",
				"light-active-secondary-container": "hsla(38, 100%, 87%, 0.12)",
				"light-drag-secondary-container": "hsla(38, 100%, 87%, 0.16)",
				"light-disabled-secondary-container":
					"hsla(38, 100%, 87%, 0.38)",

				"light-on-secondary-container": "hsla(40, 100%, 9%, 1)",
				"light-hover-on-secondary-container":
					"hsla(40, 100%, 9%, 0.08)",
				"light-focus-on-secondary-container":
					"hsla(40, 100%, 9%, 0.12)",
				"light-active-on-secondary-container":
					"hsla(40, 100%, 9%, 0.12)",
				"light-drag-on-secondary-container": "hsla(40, 100%, 9%, 0.16)",
				"light-disabled-on-secondary-container":
					"hsla(38, 100%, 87%, 0.38)",

				"light-tertiary": "hsla(329, 33%, 38%, 1)",
				"light-hover-tertiary": "hsla(329, 33%, 38%, 0.08)",
				"light-focus-tertiary": "hsla(329, 33%, 38%, 0.12)",
				"light-active-tertiary": "hsla(329, 33%, 38%, 0.12)",
				"light-drag-tertiary": "hsla(329, 33%, 38%, 0.16)",
				"light-disabled-tertiary": "hsla(329, 33%, 38%, 0.38)",

				"light-on-tertiary": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-tertiary": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-tertiary": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-tertiary": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-tertiary": "hsla(0, 0%, 100%, 0.16)",
				"light-disabled-on-tertiary": "hsla(0, 0%, 100%, 0.38)",

				"light-tertiary-container": "hsla(340, 100%, 91%, 1)",
				"light-hover-tertiary-container": "hsla(340, 100%, 91%, 0.08)",
				"light-focus-tertiary-container": "hsla(340, 100%, 91%, 0.12)",
				"light-active-tertiary-container": "hsla(340, 100%, 91%, 0.12)",
				"light-drag-tertiary-container": "hsla(340, 100%, 91%, 0.16)",
				"light-disabled-tertiary-container":
					"hsla(340, 100%, 91%, 0.38)",

				"light-on-tertiary-container": "hsla(322, 100%, 12%, 1)",
				"light-hover-on-tertiary-container":
					"hsla(322, 100%, 12%, 0.08)",
				"light-focus-on-tertiary-container":
					"hsla(322, 100%, 12%, 0.12)",
				"light-active-on-tertiary-container":
					"hsla(322, 100%, 12%, 0.12)",
				"light-drag-on-tertiary-container":
					"hsla(322, 100%, 12%, 0.16)",
				"light-disabled-on-tertiary-container":
					"hsla(0, 0%, 100%, 0.38)",

				"light-error": "hsla(0, 75%, 45%, 1)",
				"light-hover-error": "hsla(0, 75%, 45%, 0.08)",
				"light-focus-error": "hsla(0, 75%, 45%, 0.12)",
				"light-active-error": "hsla(0, 75%, 45%, 0.12)",
				"light-drag-error": "hsla(0, 75%, 45%, 0.16)",
				"light-disabled-error": "hsla(0, 75%, 45%, 0.38)",

				"light-on-error": "hsla(0, 0%, 100%, 1)",
				"light-hover-on-error": "hsla(0, 0%, 100%, 0.08)",
				"light-focus-on-error": "hsla(0, 0%, 100%, 0.12)",
				"light-active-on-error": "hsla(0, 0%, 100%, 0.12)",
				"light-drag-on-error": "hsla(0, 0%, 100%, 0.16)",

				"light-error-container": "hsla(7, 100%, 90%, 1)",
				"light-hover-error-container": "hsla(7, 100%, 90%, 0.08)",
				"light-focus-error-container": "hsla(7, 100%, 90%, 0.12)",
				"light-active-error-container": "hsla(7, 100%, 90%, 0.12)",
				"light-drag-error-container": "hsla(7, 100%, 90%, 0.16)",
				"light-disabled-error-container": "hsla(7, 100%, 90%, 0.38)",

				"light-on-error-container": "hsla(351, 99%, 13%, 1)",
				"light-hover-on-error-container": "hsla(351, 99%, 13%, 0.08)",
				"light-focus-on-error-container": "hsla(351, 99%, 13%, 0.12)",
				"light-active-on-error-container": "hsla(351, 99%, 13%, 0.12)",
				"light-drag-on-error-container": "hsla(351, 99%, 13%, 0.16)",
				"light-disabled-on-error-container": "hsla(0, 0%, 100%, 0.38)",

				"light-bg": "hsla(60, 100%, 98%, 1)",
				"light-hover-bg": "hsla(60, 100%, 98%, 0.08)",
				"light-focus-bg": "hsla(60, 100%, 98%, 0.12)",
				"light-active-bg": "hsla(60, 100%, 98%, 0.12)",
				"light-drag-bg": "hsla(60, 100%, 98%, 0.16)",
				"light-disabled-bg": "hsla(60, 100%, 98%, 0.38)",

				"light-on-bg": "hsla(218, 100%, 12%, 1)",
				"light-hover-on-bg": "hsla(218, 100%, 12%, 0.08)",
				"light-focus-on-bg": "hsla(218, 100%, 12%, 0.12)",
				"light-active-on-bg": "hsla(218, 100%, 12%, 0.12)",
				"light-drag-on-bg": "hsla(218, 100%, 12%, 0.16)",

				"light-surface": "hsla(300, 100%, 99%, 1)",
				"light-hover-surface": "hsla(300, 100%, 99%, 0.08)",
				"light-focus-surface": "hsla(300, 100%, 99%, 0.12)",
				"light-active-surface": "hsla(300, 100%, 99%, 0.12)",
				"light-drag-surface": "hsla(300, 100%, 99%, 0.16)",
				"light-disabled-surface": "hsla(300, 100%, 99%, 0.38)",

				"light-on-surface": "hsla(9, 12%, 11%, 1)",
				"light-hover-on-surface": "hsla(9, 12%, 11%, 0.08)",
				"light-focus-on-surface": "hsla(9, 12%, 11%, 0.12)",
				"light-active-on-surface": "hsla(9, 12%, 11%, 0.12)",
				"light-drag-on-surface": "hsla(9, 12%, 11%, 0.16)",
				"light-disabled-on-surface": "hsla(9, 12%, 11%, 0.38)",

				"light-outline": "hsla(15, 10%, 51%, 1)",
				"light-hover-outline": "hsla(15, 10%, 51%, 0.08)",
				"light-focus-outline": "hsla(15, 10%, 51%, 0.12)",
				"light-active-outline": "hsla(15, 10%, 51%, 0.12)",
				"light-drag-outline": "hsla(15, 10%, 51%, 0.16)",
				"light-disabled-outline": "hsla(15, 10%, 51%, 0.38)",

				"light-surface-variant": "hsla(9, 63%, 87%, 1)",
				"light-hover-surface-variant": "hsla(9, 63%, 87%, 0.08)",
				"light-focus-surface-variant": "hsla(9, 63%, 87%, 0.12)",
				"light-active-surface-variant": "hsla(9, 63%, 87%, 0.12)",
				"light-drag-surface-variant": "hsla(9, 63%, 87%, 0.16)",
				"light-disabled-surface-variant": "hsla(9, 63%, 87%, 0.38)",

				"light-on-surface-variant": "hsla(30, 11%, 28%, 1)",
				"light-hover-on-surface-variant": "hsla(30, 11%, 28%, 0.08)",
				"light-focus-on-surface-variant": "hsla(30, 11%, 28%, 0.12)",
				"light-active-on-surface-variant": "hsla(30, 11%, 28%, 0.12)",
				"light-drag-on-surface-variant": "hsla(30, 11%, 28%, 0.16)",
				"light-disabled-on-surface-variant": "hsla(30, 11%, 28%, 0.38)",

				"light-surface-low": "hsla(9, 6%, 96%, 1)",

				"dark-surface-low": "hsla(9, 6%, 10%, 1)",

				"dark-primary": "hsla(6, 100%, 78%, 1)",
				"dark-hover-primary": "hsla(6, 100%, 78%, 0.08)",
				"dark-focus-primary": "hsla(6, 100%, 78%, 0.12)",
				"dark-active-primary": "hsla(6, 100%, 78%, 0.12)",
				"dark-drag-primary": "hsla(6, 100%, 78%, 0.16)",
				"dark-disabled-primary": "hsla(6, 100%, 78%, 0.38)",

				"dark-on-primary": "hsla(11, 98%, 20%, 1)",
				"dark-hover-on-primary": "hsla(11, 98%, 20%, 0.08)",
				"dark-focus-on-primary": "hsla(11, 98%, 20%, 0.12)",
				"dark-active-on-primary": "hsla(11, 98%, 20%, 0.12)",
				"dark-drag-on-primary": "hsla(11, 98%, 20%, 0.16)",
				"dark-disabled-on-primary": "hsla(11, 98%, 20%, 0.38)",

				"dark-primary-container": "hsla(351, 99%, 13%, 1)",
				"dark-hover-primary-container": "hsla(351, 99%, 13%, 0.08)",
				"dark-focus-primary-container": "hsla(351, 99%, 13%, 0.12)",
				"dark-active-primary-container": "hsla(351, 99%, 13%, 0.12)",
				"dark-drag-primary-container": "hsla(351, 99%, 13%, 0.16)",
				"dark-disabled-primary-container": "hsla(351, 99%, 13%, 0.38)",

				"dark-on-primary-container": "hsla(12, 100%, 90%, 1)",
				"dark-hover-on-primary-container": "hsla(12, 100%, 90%, 0.08)",
				"dark-focus-on-primary-container": "hsla(12, 100%, 90%, 0.12)",
				"dark-active-on-primary-container": "hsla(12, 100%, 90%, 0.12)",
				"dark-drag-on-primary-container": "hsla(12, 100%, 90%, 0.16)",
				"dark-disabled-on-primary-container":
					"hsla(12, 100%, 90%, 0.38)",

				"dark-secondary": "hsla(38, 100%, 70%, 1)",
				"dark-hover-secondary": "hsla(38, 100%, 70%, 0.08)",
				"dark-focus-secondary": "hsla(38, 100%, 70%, 0.12)",
				"dark-active-secondary": "hsla(38, 100%, 70%, 0.12)",
				"dark-drag-secondary": "hsla(38, 100%, 70%, 0.16)",
				"dark-disabled-secondary": "hsla(38, 100%, 70%, 0.38)",

				"dark-on-secondary": "hsla(20, 100%, 14%, 1)",
				"dark-hover-on-secondary": "hsla(20, 100%, 14%, 0.08)",
				"dark-focus-on-secondary": "hsla(20, 100%, 14%, 0.12)",
				"dark-active-on-secondary": "hsla(20, 100%, 14%, 0.12)",
				"dark-drag-on-secondary": "hsla(20, 100%, 14%, 0.16)",
				"dark-disabled-on-secondary": "hsla(20, 100%, 14%, 0.38)",

				"dark-secondary-container": "hsla(36, 100%, 20%, 1)",
				"dark-hover-secondary-container": "hsla(36, 100%, 20%, 0.08)",
				"dark-focus-secondary-container": "hsla(36, 100%, 20%, 0.12)",
				"dark-active-secondary-container": "hsla(36, 100%, 20%, 0.12)",
				"dark-drag-secondary-container": "hsla(36, 100%, 20%, 0.16)",
				"dark-disabled-secondary-container":
					"hsla(36, 100%, 20%, 0.38)",

				"dark-on-secondary-container": "hsla(30, 100%, 86%, 1)",
				"dark-hover-on-secondary-container":
					"hsla(30, 100%, 86%, 0.08)",
				"dark-focus-on-secondary-container":
					"hsla(30, 100%, 86%, 0.12)",
				"dark-active-on-secondary-container":
					"hsla(30, 100%, 86%, 0.12)",
				"dark-drag-on-secondary-container": "hsla(30, 100%, 86%, 0.16)",
				"dark-disabled-on-secondary-container":
					"hsla(30, 100%, 86%, 0.38)",

				"dark-tertiary": "hsla(330, 100%, 80%, 1)",
				"dark-hover-tertiary": "hsla(330, 100%, 80%, 0.08)",
				"dark-focus-tertiary": "hsla(330, 100%, 80%, 0.12)",
				"dark-active-tertiary": "hsla(330, 100%, 80%, 0.12)",
				"dark-drag-tertiary": "hsla(330, 100%, 80%, 0.16)",
				"dark-disabled-tertiary": "hsla(330, 100%, 80%, 0.38)",

				"dark-on-tertiary": "hsla(329, 68%, 22%, 1)",
				"dark-hover-on-tertiary": "hsla(329, 68%, 22%, 0.08)",
				"dark-focus-on-tertiary": "hsla(329, 68%, 22%, 0.12)",
				"dark-active-on-tertiary": "hsla(329, 68%, 22%, 0.12)",
				"dark-drag-on-tertiary": "hsla(329, 68%, 22%, 0.16)",
				"dark-disabled-on-tertiary": "hsla(329, 68%, 22%, 0.38)",

				"dark-tertiary-container": "hsla(329, 34%, 28%, 1)",
				"dark-hover-tertiary-container": "hsla(329, 34%, 28%, 0.08)",
				"dark-focus-tertiary-container": "hsla(329, 34%, 28%, 0.12)",
				"dark-active-tertiary-container": "hsla(329, 34%, 28%, 0.12)",
				"dark-drag-tertiary-container": "hsla(329, 34%, 28%, 0.16)",
				"dark-disabled-tertiary-container": "hsla(329, 34%, 28%, 0.38)",

				"dark-on-tertiary-container": "hsla(345, 100%, 90%, 1)",
				"dark-hover-on-tertiary-container":
					"hsla(345, 100%, 90%, 0.08)",
				"dark-focus-on-tertiary-container":
					"hsla(345, 100%, 90%, 0.12)",
				"dark-active-on-tertiary-container":
					"hsla(345, 100%, 90%, 0.12)",
				"dark-drag-on-tertiary-container": "hsla(345, 100%, 90%, 0.16)",
				"dark-disabled-on-tertiary-container":
					"hsla(345, 100%, 90%, 0.38)",

				"dark-error": "hsla(6, 100%, 78%, 1)",
				"dark-hover-error": "hsla(6, 100%, 78%, 0.08)",
				"dark-focus-error": "hsla(6, 100%, 78%, 0.12)",
				"dark-active-error": "hsla(6, 100%, 78%, 0.12)",
				"dark-drag-error": "hsla(6, 100%, 78%, 0.16)",
				"dark-disabled-error": "hsla(6, 100%, 78%, 0.38)",

				"dark-on-error": "hsla(351, 100%, 20%, 1)",
				"dark-hover-on-error": "hsla(351, 100%, 20%, 0.08)",
				"dark-focus-on-error": "hsla(351, 100%, 20%, 0.12)",
				"dark-active-on-error": "hsla(351, 100%, 20%, 0.12)",
				"dark-drag-on-error": "hsla(351, 100%, 20%, 0.16)",
				"dark-disabled-on-error": "hsla(351, 100%, 20%, 0.38)",

				"dark-error-container": "hsla(352, 100%, 29%, 1)",
				"dark-hover-error-container": "hsla(352, 100%, 29%, 0.08)",
				"dark-focus-error-container": "hsla(352, 100%, 29%, 0.12)",
				"dark-active-error-container": "hsla(352, 100%, 29%, 0.12)",
				"dark-drag-error-container": "hsla(352, 100%, 29%, 0.16)",
				"dark-disabled-error-container": "hsla(352, 100%, 29%, 0.38)",

				"dark-on-error-container": "hsla(7, 100%, 90%, 1)",
				"dark-hover-on-error-container": "hsla(7, 100%, 90%, 0.08)",
				"dark-focus-on-error-container": "hsla(7, 100%, 90%, 0.12)",
				"dark-active-on-error-container": "hsla(7, 100%, 90%, 0.12)",
				"dark-drag-on-error-container": "hsla(7, 100%, 90%, 0.16)",
				"dark-disabled-on-error-container": "hsla(7, 100%, 90%, 0.38)",

				"dark-bg": "hsla(9, 12%, 11%, 1)",
				"dark-hover-bg": "hsla(9, 12%, 11%, 0.08)",
				"dark-focus-bg": "hsla(9, 12%, 11%, 0.12)",
				"dark-active-bg": "hsla(9, 12%, 11%, 0.12)",
				"dark-drag-bg": "hsla(9, 12%, 11%, 0.16)",
				"dark-disabled-bg": "hsla(9, 12%, 11%, 0.38)",

				"dark-on-bg": "hsla(11, 31%, 90%, 1)",
				"dark-hover-on-bg": "hsla(11, 31%, 90%, 0.08)",
				"dark-focus-on-bg": "hsla(11, 31%, 90%, 0.12)",
				"dark-active-on-bg": "hsla(11, 31%, 90%, 0.12)",
				"dark-drag-on-bg": "hsla(11, 31%, 90%, 0.16)",
				"dark-disabled-on-bg": "hsla(11, 31%, 90%, 0.38)",

				"dark-surface": "hsla(9, 12%, 11%, 1)",
				"dark-hover-surface": "hsla(9, 12%, 11%, 0.08)",
				"dark-focus-surface": "hsla(9, 12%, 11%, 0.12)",
				"dark-active-surface": "hsla(9, 12%, 11%, 0.12)",
				"dark-drag-surface": "hsla(9, 12%, 11%, 0.16)",
				"dark-disabled-surface": "hsla(9, 12%, 11%, 0.38)",

				"dark-on-surface": "hsla(11, 31%, 90%, 1)",
				"dark-hover-on-surface": "hsla(11, 31%, 90%, 0.08)",
				"dark-focus-on-surface": "hsla(11, 31%, 90%, 0.12)",
				"dark-active-on-surface": "hsla(11, 31%, 90%, 0.12)",
				"dark-drag-on-surface": "hsla(11, 31%, 90%, 0.16)",
				"dark-disabled-on-surface": "hsla(11, 31%, 90%, 0.38)",

				"dark-outline": "hsla(8, 11%, 63%, 1)",
				"dark-hover-outline": "hsla(8, 11%, 63%, 0.08)",
				"dark-focus-outline": "hsla(8, 11%, 63%, 0.12)",
				"dark-active-outline": "hsla(8, 11%, 63%, 0.12)",
				"dark-drag-outline": "hsla(8, 11%, 63%, 0.16)",
				"dark-disabled-outline": "hsla(8, 11%, 63%, 0.38)",

				"dark-surface-variant": "hsla(30, 11%, 28%, 1)",
				"dark-hover-surface-variant": "hsla(30, 11%, 28%, 0.08)",
				"dark-focus-surface-variant": "hsla(30, 11%, 28%, 0.12)",
				"dark-active-surface-variant": "hsla(30, 11%, 28%, 0.12)",
				"dark-drag-surface-variant": "hsla(30, 11%, 28%, 0.16)",
				"dark-disabled-surface-variant": "hsla(30, 11%, 28%, 0.38)",

				"dark-on-surface-variant": "hsla(12, 28%, 80%, 1)",
				"dark-hover-on-surface-variant": "hsla(12, 28%, 80%, 0.08)",
				"dark-focus-on-surface-variant": "hsla(12, 28%, 80%, 0.12)",
				"dark-active-on-surface-variant": "hsla(12, 28%, 80%, 0.12)",
				"dark-drag-on-surface-variant": "hsla(12, 28%, 80%, 0.16)",
				"dark-disabled-on-surface-variant": "hsla(12, 28%, 80%, 0.38)",
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
