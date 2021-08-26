import React from "react"
import { FiShoppingCart, FiUser, FiSearch } from "react-icons/fi"
import logo from "../../assets/images/logo.webp"
const Header = () => {
	return (
		<header className="w-screen h-20 flex justify-center bg-white dark:bg-gray-800 fixed">
			<div className="h-full w-full flex justify-around items-center mx-auto max-w-7xl text-gray-800 dark:text-white">
				<div>
					<img src={logo} alt="logo" className="h-10" />
				</div>

				<div className="w-96 flex items-center transition ease-in-out duration-500 hover:bg-gray-300 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700  rounded-full">
					<input
						className="w-full  text-sm bg-transparent transition ease-in-out duration-500 bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full dark:placeholder-white dark:text-white outline-none p-2.5"
						placeholder="دنبال چه چیزی می گردید؟"
					/>
					<a href="#" className="p-2.5">
						<FiSearch />
					</a>
				</div>

				<div className="flex items-center gap-4">
					<div className="">
						<p className="text-gray-500 text-xs py-1">
							با ما تماس بگیرید
						</p>
						<p className="text-sm py-1">021-87700265</p>
					</div>
					<div className="flex ">
						<button className="relative">
							<FiShoppingCart className="btn drop-shadow-lg" />
							<div className="absolute -top-1 -right-2 iransans text-2xs font-bold flex justify-center items-center text-gray-600 bg-yellow-400 rounded-full w-5 h-4">
								24
							</div>
						</button>
					</div>
					<button>
						<FiUser className="btn drop-shadow-lg" />
					</button>
				</div>
			</div>
		</header>
	)
}

export default Header
