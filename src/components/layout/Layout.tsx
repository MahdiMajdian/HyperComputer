import React from "react"
import Footer from "./Footer"
import Header from "./Header"

interface ILayout {
	themeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Layout: React.FC<ILayout> = (props) => {
	return (
		<>
			<Header themeToggle={props.themeToggle} />
			<main>{props.children}</main>
			<Footer />
		</>
	)
}

export default Layout
