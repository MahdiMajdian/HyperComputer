import React from "react"

const CategoryMenuContent1 = () => {
	return (
		<div className="grid grid-cols-6 p-4">
			<div>
				<p className="p-4 text-center">Nvidia</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>RTX3090</li>
					<li>RTX3080</li>
					<li>RTX3070</li>
					<li>RTX3060</li>
					<li>RTX3060Ti</li>
					<li>RTX3050</li>
					<li>RTX3050Ti</li>
				</ul>
			</div>
			<div>
				<p className="p-4 text-center">AMD</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>6800M</li>
					<li>6700XT</li>
					<li>6700X</li>
					<li>6600X</li>
				</ul>
			</div>
		</div>
	)
}

export default CategoryMenuContent1
