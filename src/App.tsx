import React, { useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import "./App.css"
import Layout from "./components/layout/Layout"
import { routes } from "./router/router"

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
		<BrowserRouter>
			<Layout themeToggle={themeToggle}>{routes}</Layout>
		</BrowserRouter>
	)
}

export default App
