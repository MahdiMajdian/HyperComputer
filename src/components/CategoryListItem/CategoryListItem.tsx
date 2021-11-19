import React from "react"

const CategoryListItem = (props: any) => {
	return (
		<div className="h-40 my-auto flex">
			<div className="rounded-lg flex flex-col w-28 sm:w-24 md:w-32 lg:w-36 xl:w-48 py-8  gap-4 justify-end items-center bg-gray-200 dark:bg-gray-800 dark:text-white transition transform hover:scale-110">
				<img src={props.img} alt='category list item' className="w-12 h-auto" />
				<p>{props.text}</p>
			</div>
		</div>
	)
}

export default CategoryListItem
