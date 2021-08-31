import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "../pages/Home"
export const routes = (
	<>
		<Switch>
			<Route path="/" exact>
				<Redirect to="/shop" />
			</Route>
			<Route path="/shop">
				<Home />
			</Route>
		</Switch>
	</>
)
