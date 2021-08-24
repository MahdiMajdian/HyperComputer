import React from "react"
import Header from "./Header"

interface IHeader {}

const Layout: React.FC<IHeader> = (props) => {
	return (
		<>
			<Header />
			<main>{props.children}</main>
		</>
	)
}

export default Layout
