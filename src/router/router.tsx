import React from "react"
import { Switch, Route, Redirect, Router } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
export const routes = (
	<>
		<Switch>
			<Route path="/" exact>
				<Redirect to="/shop" />
			</Route>
			<Route path="/shop">
				<Home />
			</Route>
			<Route path='*'>
				<NotFound/>
			</Route>
		</Switch>
	</>
)