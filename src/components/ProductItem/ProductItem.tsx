import React from "react"
import { AiOutlineHeart, AiOutlineShoppingCart } from "react-icons/ai"
import { IoMdShuffle } from "react-icons/io"
import { FaHandshake } from "react-icons/fa"

import modem from "../../assets/images/modem.webp"
import { Link } from "react-router-dom"
interface IProductItem {
	id: number
	name: string
	price: number
	img: string
	badge?: string
}
const ProductItem: React.FC<IProductItem> = (props) => {
	return (
		<div>
			<Link to={`/product/${props.id}`}>
				<div className="w-56 h-96 flex flex-col relative gap-4 bg-gray-100 dark:bg-gray-800 dark:text-white rounded-lg overflow-hidden">
					{props.badge && (
						<div className="absolute top-2 left-2 flex items-center gap-2 opacity-80 hover:opacity-100 rounded-full bg-yellow-300 py-1 px-4 text-xs font-bold text-gray-700">
							<FaHandshake />
							<p>{props.badge}</p>
						</div>
					)}
					<img src={props.img} />
					<p className="text-sm px-4 mb-auto text-gray-700 dark:text-white">
						{props.name}
					</p>
					<p className="text-left font-bold px-4 text-green-400">
						{props.price} تومان
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
			</Link>
		</div>
	)
}

export default ProductItem
