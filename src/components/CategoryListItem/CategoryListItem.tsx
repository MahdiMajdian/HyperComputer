import React from "react"

const ProductListItem = (props: any) => {
	return (
		<div className="h-40 my-auto flex">
			<div className="rounded-lg flex flex-col py-8 px-12 gap-4 justify-end items-center bg-gray-200 dark:bg-gray-800 dark:text-white transition transform hover:scale-110">
				<img src={props.img} className="w-12 h-auto" />
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default ProductListItem
