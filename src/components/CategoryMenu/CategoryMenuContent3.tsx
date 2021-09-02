import React from "react"

const CategoryMenuContent1 = () => {
	return (
		<div className="grid grid-cols-6 p-4">
			<div>
				<p className="p-4 text-center">Razer</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>5950x</li>
					<li>5700X</li>
					<li>5700G</li>
				</ul>
			</div>
			<div>
				<p className="p-4 text-center">EVGA</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>5950x</li>
					<li>5700X</li>
					<li>5700G</li>
				</ul>
			</div>
			<div>
				<p className="p-4 text-center">Corsair</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>5950x</li>
					<li>5700X</li>
					<li>5700G</li>
				</ul>
			</div>
			<div>
				<p className="p-4 text-center">Logitech</p>
				<ul className="pt-4 text-center flex flex-col gap-4">
					<li>5950x</li>
					<li>5700X</li>
					<li>5700G</li>
				</ul>
			</div>
		</div>
	)
}

export default CategoryMenuContent1
