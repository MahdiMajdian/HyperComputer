import React from "react"
import { IoIosArrowForward, IoIosArrowBack, IoMdShuffle } from "react-icons/io"
import { FaCircle, FaRegKeyboard } from "react-icons/fa"
import slide1 from "../assets/images/slide-1.webp"
import slide2 from "../assets/images/slide-2.webp"
import slide3 from "../assets/images/slide-3.webp"
import ProductItem from "../components/ProductItem/ProductItem"
import CategoryListItem from "../components/CategoryListItem/CategoryListItem"
import category1 from "../assets/images/HomeCategory/1.svg"
import category2 from "../assets/images/HomeCategory/2.svg"
import category3 from "../assets/images/HomeCategory/3.svg"
import category4 from "../assets/images/HomeCategory/4.svg"
import category5 from "../assets/images/HomeCategory/5.svg"
import category6 from "../assets/images/HomeCategory/6.svg"
import CommentItem from "../components/CommentItem/CommentItem"
const Home: React.FC = () => {
	return (
		<div className="py-36 flex flex-col gap-6 items-center bg-gray-200 dark:bg-gray-900 transition duration-300  min-h-screen">
			<div className="w-full max-w-7xl h-auto px-10 flex gap-4 md:gap-0 flex-col md:flex-row justify-between">
				<div className="bg-white dark:bg-gray-800 overflow-hidden rounded-lg shadow-md flex items-center w-full">
					<img src={slide3} alt="" />
				</div>
				<div className=" md:w-96 md:mr-6 gap-4 md:gap-0 flex md:flex-col justify-between">
					<div className="w-full rounded-lg shadow-md overflow-hidden mb-6">
						<img src={slide1} alt="" />
					</div>
					<div className="w-full rounded-lg shadow-md overflow-hidden mb-6 md:mb-0">
						<img src={slide2} alt="" />
					</div>
				</div>
			</div>

			<div className="w-full max-w-7xl h-auto px-10">
				<div className="rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md">
					<div className="flex items-center gap-4 p-8">
						<FaCircle className="bg-gray-100 rounded-full p-1 text-green-400" />
						<h1 className="text-gray-700 dark:text-white text-xl font-medium">
							پرفروش‌ترین محصولات
						</h1>
					</div>

					<div className="w-full relative flex justify-center gap-8 pb-4 ">
						<div className="absolute right-0 inset-y-0 flex items-center pb-4">
							<div className="w-10 h-14 flex items-center justify-center bg-green-200 rounded-l-full">
								<IoIosArrowForward className="w-full h-auto p-2 text-green-500" />
							</div>
						</div>
						<div className="absolute left-0 inset-y-0 flex items-center pb-4">
							<div className="w-10 h-14 flex items-center justify-center bg-green-200 rounded-r-full">
								<IoIosArrowBack className="w-full h-auto p-2 text-green-500" />
							</div>
						</div>
						<div className="flex justify-center gap-8 overflow-x-auto">
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full h-auto bg-gray-200 dark:bg-gray-800 shadow-md">
				<div className=" max-w-7xl mx-auto">
					<h1 className="p-8 text-green-500 dark:text-green-400 text-xl font-medium">
						محصولات پیشنهادی
					</h1>

					<div className="w-full pb-4 px-10 relative">
						<div className="absolute right-10 inset-y-0 flex items-center pb-4">
							<div className="w-10 h-14 z-10 flex items-center justify-center bg-green-200 rounded-l-full">
								<IoIosArrowForward className="w-full h-auto p-2 text-green-500" />
							</div>
						</div>
						<div className="absolute left-10 z-10 inset-y-0 flex items-center pb-4">
							<div className="w-10 h-14 flex items-center justify-center bg-green-200 rounded-r-full">
								<IoIosArrowBack className="w-full h-auto p-2 text-green-500" />
							</div>
						</div>
						<div className="flex justify-center gap-8 overflow-x-auto">
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
							<ProductItem />
						</div>
					</div>
				</div>
			</div>
			<div className="w-full max-w-7xl h-auto px-10">
				<div className="flex flex-wrap sm:flex-nowrap justify-center rounded-lg sm:divide-x sm:divide-x-reverse divide-gray-300 dark:divide-gray-700 bg-gray-200 dark:bg-gray-800 shadow-md">
					<CategoryListItem img={category1} text="کنسول بازی" />
					<CategoryListItem img={category2} text="کارت گرافیک" />
					<CategoryListItem img={category3} text="مادربرد" />
					<CategoryListItem img={category4} text="مانیتور" />
					<CategoryListItem img={category5} text="پردازنده" />
					<CategoryListItem img={category6} text="کیبورد و موس" />
				</div>
			</div>
			<div className="w-full max-w-7xl h-auto px-10">
				<div className="rounded-lg bg-gray-200 dark:bg-gray-800 shadow-md">
					<div className="flex p-8 gap-4">
						<div className="flex items-center gap-2">
							<FaCircle className="bg-white bg-opacity-10 rounded-full p-1 text-green-400" />
							<h1 className="text-green-400 text-sm font-medium">
								جدید ترین مادربورد
							</h1>
						</div>
						<div className="flex items-center gap-2">
							<FaCircle className="hidden bg-white bg-opacity-10 rounded-full p-1 text-green-400" />
							<h1 className="text-gray-500 text-sm font-medium">
								جدید ترین پردازنده
							</h1>
						</div>
						<div className="flex items-center gap-2">
							<FaCircle className="hidden bg-white bg-opacity-10 rounded-full p-1 text-green-400" />
							<h1 className="text-gray-500 text-sm font-medium">
								جدید ترین های کارت گرافیک
							</h1>
						</div>
					</div>

					<div className="w-full flex justify-center gap-8 pb-4 ">
						<div className="flex justify-center gap-8 overflow-x-auto">
							<ProductItem badge="جدید" />
							<ProductItem badge="جدید" />
							<ProductItem badge="جدید" />
							<ProductItem badge="جدید" />
						</div>
					</div>
				</div>
			</div>
			
		</div>
	)
}

export default Home
