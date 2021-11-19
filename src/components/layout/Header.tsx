import React from "react"
import {
	FiShoppingCart,
	FiUser,
	FiSearch,
	FiMoreHorizontal,
	FiChevronDown,
	FiPercent,
	FiSun,
	FiMoon,
	FiChevronLeft,
} from "react-icons/fi"
import { BiCoin } from "react-icons/bi"
import { FaDotCircle, FaHandshake } from "react-icons/fa"
import logo from "../../assets/images/logo.webp"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import CategoryMenuContent1 from "../CategoryMenu/CategoryMenuContent1"
import CategoryMenuContent2 from "../CategoryMenu/CategoryMenuContent2"
import CategoryMenuContent3 from "../CategoryMenu/CategoryMenuContent3"
import CategoryMenuContent4 from "../CategoryMenu/CategoryMenuContent4"
import { useAppSelector } from "../../hooks"

interface IHeader {
	themeToggle: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Header: React.FC<IHeader> = (props) => {
	const [isMenuVisible, setIsMenuVisible] = useState<boolean>(true)
	const [isCategoryOpen, setIsCategoryOpen] = useState<boolean>(false)
	const [isOtherOpen, setIsOtherOpen] = useState<boolean>(false)
	const [categoryContent, setCategoryContent] = useState<number>(1)
	useEffect(() => {
		let oldScroll = 0
		window.onscroll = () => {
			const newScroll = window.pageYOffset
			if (newScroll - oldScroll > 0) {
				setIsMenuVisible(false)
			} else if (newScroll - oldScroll < 0) {
				setIsMenuVisible(true)
			}
			oldScroll = newScroll
		}
	}, [])

	const cartQuantity = useAppSelector((state) => state.cart.totalQuantity)
	return (
		<header className="w-screen flex flex-col justify-center fixed text-gray-800 dark:text-white z-50">
			<div className="bg-white dark:bg-gray-800 w-full z-10 transition duration-300 ">
				<div className="h-20 w-full mx-auto max-w-8xl flex justify-between px-4 sm:px-10 lg:px-20 items-center ">
					<Link to="/">
						<img src={logo} alt="logo" className="h-10" />
					</Link>

					<div className="w-96 hidden md:flex items-center transition ease-in-out duration-200 hover:bg-gray-300 bg-gray-200 dark:bg-gray-600 dark:hover:bg-gray-700  rounded-full">
						<input
							className="w-full text-sm bg-transparent transition ease-in-out duration-200 bg-gray-200 dark:bg-gray-600 hover:bg-gray-200 dark:hover:bg-gray-600 rounded-full  dark:text-white outline-none p-2.5"
							placeholder="دنبال چه چیزی می گردید؟"
						/>
						<span className="p-2.5">
							<FiSearch />
						</span>
					</div>

					<div className="flex items-center gap-4">
						<div>
							<p className="text-gray-500 text-xs py-0.5">
								با ما تماس بگیرید
							</p>
							<p className="text-sm py-0.5">021-87700265</p>
						</div>
						<div className="hidden sm:flex gap-4">
							<button className="relative">
								<FiShoppingCart className="btn drop-shadow-lg" />
								<div className="absolute -top-1 -right-2 iransans text-2xs font-bold flex justify-center items-center text-gray-600 bg-yellow-400 rounded-full w-5 h-4">
									{cartQuantity}
								</div>
							</button>
							<button>
								<FiUser className="btn drop-shadow-lg" />
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* subHeader */}
			<div
				className={`bg-white dark:bg-gray-800 w-full transform transition duration-300 ${
					!isMenuVisible && "-translate-y-10"
				} shadow-md`}>
				<div
					className={`h-10 w-full relative text-xs sm:text-sm text-gray-600 dark:text-gray-200 flex justify-center md:justify-between px-0 sm:px-10 items-center mx-auto max-w-8xl`}>
					<div className="hidden md:block h-full">
						<ul className="flex gap-4 h-full">
							<li
								className="h-full font-medium flex items-center"
								onMouseEnter={() => setIsCategoryOpen(true)}
								onMouseLeave={() => setIsCategoryOpen(false)}
								onClick={() =>
									setIsCategoryOpen((prev) => !prev)
								}>
								<span className="flex items-center gap-1">
									<p>دسته بندی ها</p>
									<FiChevronDown className="text-green-400" />
								</span>
								{isCategoryOpen && (
									<div
										className="absolute top-10 w-full pl-20"
										onMouseOver={() =>
											setIsCategoryOpen(true)
										}>
										<div className="grid grid-cols-8 rounded-b-lg h-full w-full">
											<div className="col-span-2 bg-green-50 dark:bg-gray-700">
												<ul className="py-8 pr-6">
													<li
														className="flex items-center justify-between w-full py-4 px-4 hover:bg-green-200 dark:hover:bg-gray-800 rounded-r-lg"
														onMouseOver={() =>
															setCategoryContent(
																1
															)
														}>
														<div className="flex gap-2 items-center">
															<FaDotCircle className="text-green-400 w-2 h-2" />
															<p>پردازنده</p>
														</div>

														<FiChevronLeft className="text-green-400 w-4 h-4" />
													</li>
													<li
														className="flex items-center justify-between w-full py-4 px-4 hover:bg-green-200 dark:hover:bg-gray-800 rounded-r-lg"
														onMouseOver={() =>
															setCategoryContent(
																2
															)
														}>
														<div className="flex gap-2 items-center">
															<FaDotCircle className="text-green-400 w-2 h-2" />
															<p>کارت گرافیک</p>
														</div>

														<FiChevronLeft className="text-green-400 w-4 h-4" />
													</li>
													<li
														className="flex items-center justify-between w-full py-4 px-4 hover:bg-green-200 dark:hover:bg-gray-800 rounded-r-lg"
														onMouseOver={() =>
															setCategoryContent(
																3
															)
														}>
														<div className="flex gap-2 items-center">
															<FaDotCircle className="text-green-400 w-2 h-2" />
															<p>کیبورد</p>
														</div>

														<FiChevronLeft className="text-green-400 w-4 h-4" />
													</li>
													<li
														className="flex items-center justify-between w-full py-4 px-4 hover:bg-green-200 dark:hover:bg-gray-800 rounded-r-lg"
														onMouseOver={() =>
															setCategoryContent(
																4
															)
														}>
														<div className="flex gap-2 items-center">
															<FaDotCircle className="text-green-400 w-2 h-2" />
															<p>مادربورد</p>
														</div>

														<FiChevronLeft className="text-green-400 w-4 h-4" />
													</li>
												</ul>
											</div>
											<div className="col-span-6 bg-white dark:bg-gray-800">
												{categoryContent === 1 && (
													<CategoryMenuContent1 />
												)}
												{categoryContent === 2 && (
													<CategoryMenuContent2 />
												)}
												{categoryContent === 3 && (
													<CategoryMenuContent3 />
												)}
												{categoryContent === 4 && (
													<CategoryMenuContent4 />
												)}
											</div>
										</div>
									</div>
								)}
							</li>
							<li className="h-full font-medium flex items-center">
								<Link to="/why-hyper-computers">
									<p>چرا هایپر کامپیوتر</p>
								</Link>
							</li>
							<li className="h-full font-medium flex items-center">
								<Link to="/buyers-guide">
									<p>راهنمای خرید</p>
								</Link>
							</li>
							<li className="h-full font-medium flex items-center">
								<Link to="/guarantee">
									<p>شرایط گارانتی</p>
								</Link>
							</li>
							<li
								className="h-full font-medium flex items-center relative"
								onMouseEnter={() => setIsOtherOpen(true)}
								onMouseLeave={() => setIsOtherOpen(false)}>
								<span className="flex items-center gap-1">
									<p>سایر</p>
									<FiMoreHorizontal className="text-green-400" />
								</span>
								{isOtherOpen && (
									<div className="absolute w-56 top-10 bg-white dark:bg-gray-800 rounded-b-lg overflow-hidden">
										<ul className="w-full">
											<li className="p-4">
												<Link
													to="/buy-on-us"
													className="font-medium">
													خرید اقساطی
												</Link>
											</li>

											<li className="p-4">
												<Link
													to="/contact-us"
													className="font-medium">
													تماس با ما
												</Link>
											</li>

											<li className="p-4">
												<Link
													to="/faq"
													className="font-medium">
													سوالات متداول
												</Link>
											</li>

											<li className="p-4">
												<Link
													to="/about-us"
													className="font-medium">
													درباره ما
												</Link>
											</li>
										</ul>
									</div>
								)}
							</li>
						</ul>
					</div>
					<div>
						<ul className="flex gap-4">
							<li className="my-auto">
								<Link
									to="/buy-on-us"
									className="flex items-center gap-1">
									<BiCoin className="text-green-500 text-base" />
									<p>خرید اقساطی</p>
								</Link>
							</li>
							<li className="my-auto">
								<Link
									to="/sales"
									className="flex items-center gap-1">
									<FiPercent className="text-green-500 text-base" />
									<p>فروش ویژه</p>
								</Link>
							</li>
							<li className="my-auto">
								<Link
									to="/second-hand-items"
									className="flex items-center gap-1">
									<FaHandshake className="text-green-500 text-base" />
									<p>دست دوم</p>
								</Link>
							</li>
							<li className="flex  items-center my-auto">
								<button
									onClick={props.themeToggle}
									className="flex overflow-hidden w-5 h-5 relative rounded-full">
									<FiMoon className="w-full h-full text-green-500 transform transition duration-700 absolute translate-x-5 dark:translate-x-0" />
									<FiSun className="w-full h-full text-yellow-500 transform transition duration-700 absolute translate-x-0 dark:-translate-x-5" />
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header
