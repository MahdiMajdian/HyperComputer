import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import Home from "../pages/Home"
import NotFound from "../pages/NotFound"
import ProductDetails from "../pages/ProductDetails"
export const routes = (
	<>
		<Switch>
			<Route path="/" exact>
				<Redirect to="/shop" />
			</Route>
			<Route path="/shop">
				<Home />
			</Route>
			<Route path="/product/:productId">
				<ProductDetails />
			</Route>
			<Route path="*">
				<NotFound />
			</Route>
		</Switch>
	</>
)
