import React from "react"

interface IHeader {}

const Layout: React.FC<IHeader> = (props) => {
	return (
		<>
			<main>{props.children}</main>
		</>
	)
}

export default Layout
