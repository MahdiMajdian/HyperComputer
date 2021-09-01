import React from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { IoMdShuffle } from "react-icons/io"

import modem from "../../assets/images/modem.webp"

const ProductItem = () => {
	return (
		<div>
			<div className="w-56 h-96 flex flex-col gap-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden">
				<img src={modem} />
				<p className="text-sm px-4 mb-auto text-gray-700 dark:text-white">
					مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2
				</p>
				<p className="text-left font-bold px-4 text-green-400">
					1,199,000 تومان
				</p>
				<div className="flex justify-around mb-4">
					<div>
						<AiOutlineShoppingCart className="general-btn bg-white hover:bg-green-100 shadow-lg hover:shadow-md dark:bg-gray-600 dark:hover:bg-green-500 dark:hover:text-white text-green-400" />
					</div>
					<div className="flex gap-2">
						<AiOutlineHeart className="general-btn bg-white hover:bg-red-100 shadow-lg hover:shadow-md dark:bg-gray-600 dark:hover:bg-red-500 dark:hover:text-white text-red-400" />

						<IoMdShuffle className="general-btn bg-white hover:bg-yellow-100 shadow-lg hover:shadow-md dark:bg-gray-600 dark:hover:bg-yellow-500 dark:hover:text-white text-yellow-400" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default ProductItem