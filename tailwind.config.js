module.exports = {
	mode: "jit",
	purge: ["./src/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {},
		colors: {
			white: "#fff",
			teal: {
				100: "#e6fffa",
				200: "#b2f5ea",
				300: "#81e6d9",
				400: "#4fd1c5",
				500: "#38b2ac",
				600: "#319795",
				700: "#2c7a7b",
				800: "#285e61",
				900: "#234e52"
			},
			gray: {
				100: "#f7fafc",
				200: "#edf2f7",
				300: "#e2e8f0",
				400: "#cbd5e0",
				500: "#a0aec0",
				600: "#718096",
				700: "#4a5568",
				800: "#2d3748",
				900: "#1a202c"
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
}
