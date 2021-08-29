import React, { useEffect, useState } from "react"
import "./App.css"
import Layout from "./components/layout/Layout"

function App() {
	const [darkMode, setdarkMode] = useState<string>(
		localStorage.theme || "light"
	)
	if (darkMode === "dark") {
		document.documentElement.classList.add("dark")
	} else {
		document.documentElement.classList.remove("dark")
	}
	useEffect(() => {
		window
			.matchMedia("(prefers-color-scheme: dark)")
			.addEventListener("change", (event) => {
				console.log("run")
				// if (!("theme" in localStorage)) {
				if (event.matches) {
					setdarkMode("dark")
				} else {
					setdarkMode("light")
				}
				// }
			})
	}, [])

	const themeToggle = () => {
		if (darkMode === "dark") {
			localStorage.theme = "light"
			setdarkMode("light")
		} else {
			localStorage.theme = "dark"
			setdarkMode("dark")
		}
	}

	return (
		<Layout themeToggle={themeToggle}>
			<div className="h-screen pt-32 font-semibold text-xl text-center transition duration-300 bg-gray-200 dark:bg-gray-900 min-h-screen">
				<p className="mt-8 dark:text-white">Toggle Dark Mode:</p>
				<button
					className="bg-green-500 shadow m-4 rounded p-2 text-white"
					onClick={themeToggle}>
					Dark mode
				</button>
			</div>
			<div className="h-screen pt-32 font-semibold text-xl text-center transition duration-300 bg-gray-200 dark:bg-gray-900 min-h-screen">
				<p className="mt-8 dark:text-white">Toggle Dark Mode:</p>
				<button
					className="bg-green-500 shadow m-4 rounded p-2 text-white"
					onClick={themeToggle}>
					Dark mode
				</button>
			</div>
		</Layout>
	)
}

export default App
