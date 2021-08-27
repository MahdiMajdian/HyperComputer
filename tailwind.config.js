module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			fontSize: {
				"2xs": ".625rem",
			},
			maxWidth: {
				"8xl": "90rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
