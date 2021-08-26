module.exports = {
	purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
	darkMode: "class",
	theme: {
		extend: {
			fontSize: {
				"2xs": ".625rem",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
}
