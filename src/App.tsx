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

	const toggle = () => {
		if (darkMode === "dark") {
			localStorage.theme = "light"
			setdarkMode("light")
		} else {
			localStorage.theme = "dark"
			setdarkMode("dark")
		}
	}

	return (
		<Layout>
			<div className="font-semibold text-xl text-center">
				<p>Toggle Dark Mode:</p>
				<button
					className="bg-green-500 shadow m-4 rounded p-2 text-white"
					onClick={toggle}>
					Dark mode
				</button>
			</div>
		</Layout>
	)
}

export default App
