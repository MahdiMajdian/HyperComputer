import React from "react"
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai"
import { IoIosArrowBack, IoIosArrowForward, IoMdShuffle } from "react-icons/io"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/swiper.min.css"
import "swiper/components/pagination/pagination.min.css"
import "./ProductDetails.css"

import SwiperCore, { Pagination } from "swiper"
import { useAppSelector } from "../hooks"
import { FaCircle } from "react-icons/fa"
import ProductItem from "../components/ProductItem/ProductItem"

SwiperCore.use([Pagination])

const ProductDetails = () => {
	const mostVisited = useAppSelector((state) => state.products.mostVisited)
	const images = useAppSelector((state) => state.products.items[2].images)
	const pagination = {
		clickable: true,
		renderBullet: function (index: number, className: string) {
			return `<span class="${className}"> <img src='${images[index]}' />  </span>`
		},
	}
	return (
		<div className="py-36 flex flex-col gap-6 items-center bg-gray-200 dark:bg-gray-900 transition duration-300  min-h-screen">
			<div className="w-full max-w-7xl h-auto px-10 grid gap-4">
				<a href="">
					<p className="text-left text-sm p-4 pb-0 text-gray-500">
						اشکال در جزئیات
					</p>
				</a>
				<div className="grid grid-cols-1 md:grid-cols-5 rounded-lg bg-white dark:bg-gray-800">
					<div className="col-span-2">
						<div className="flex gap-4 p-6 text-gray-400">
							<AiOutlineHeart className="w-5 h-5 cursor-pointer" />
							<IoMdShuffle className="w-5 h-5 cursor-pointer" />
							<AiOutlineShareAlt className="w-5 h-5 cursor-pointer" />
						</div>
						<div className="">
							<Swiper
								pagination={pagination}
								className=" detail-swiper py-6">
								{images.map((img) => (
									<SwiperSlide>
										<img src={img} alt="" />
									</SwiperSlide>
								))}
							</Swiper>
						</div>
					</div>
					<div className="col-span-3 px-10 pt-6">
						<div className="dark:text-white flex justify-between">
							<div>
								<h1 className="text-lg font-medium">
									موس گیمینگ کورسیر GLAIVE RGB Aluminum
								</h1>
								<p className="text-xs text-gray-500">
									Corsair GLAIVE RGB Aluminum Wired Gaming
									Mouse
								</p>
							</div>
							<div className="px-4">
								<img
									src="https://www.lioncomputer.com/uploads/image/2021/2/1614437344-tX8Tuk7o3Nb3fvqs.jpg"
									alt=""
								/>
							</div>
						</div>
						<div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-4">
							<div className="text-sm dark:text-gray-400 ">
								<p>پارت نامبر: CH-9302111-NA</p>
								<p>نوع اتصال: کابل USB</p>
								<p>نوع حسگر: Optical</p>
								<p>حداکثر دقت حسگر: 16.000 نقطه بر اینچ</p>
								<p>طول عمر کلیدها: 50.000.000 کلیک</p>
								<p>دارای نورپردازی RGB</p>
							</div>
							<div className="grid gap-4">
								<div className="rounded-lg bg-gray-300 dark:bg-gray-600 p-4 text-white">
									Asus
								</div>
								<span className="text-xs flex gap-1">
									<p className="dark:text-gray-300">
										وضعیت محصول:{" "}
									</p>
									<p className="text-green-500">موجود</p>
								</span>
								<h1 className="text-green-400 text-2xl text-center font-medium">
									1745000 تومان
								</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="rounded-lg bg-white dark:bg-gray-800 grid gap-4 p-8">
					<div className="flex items-center gap-2 mb-4">
						<FaCircle className="bg-white bg-opacity-10 rounded-full p-1 text-green-400" />
						<h1 className="font-medium text-xl dark:text-white">توضیح محصول</h1>
					</div>
					<p className="leading-10 text-sm dark:text-white">
						"K70 RGB MK.2 RAPIDFIRE، کیبورد مکانیکال گیمینگ در سایز
						100% و از کیبوردهای بالارده شرکت کورسیر است که با هدف
						دوام و پایداری طراحی شده و مجهز به شاسی آلومینیومی،
						سوییچ‌های CHERRY MX Speed و نورپردازی غنی RGB به صورت
						مجزا برای هر کلید است. این کیبورد به واسطه داشتن 8
						مگابایت حافظه داخلی و سه پروفایل کاربری، دارای عملکردهای
						ویژه و مستقل از نرم‌افزار کورسیر iCUE است. نرخ گزارش‌دهی
						کیبورد گیمینگ K70 RGB MK.2 RAPIDFIRE برابر 1000 هرتز است
						و این یعنی عدم ایجاد لگ و تأخیر در ارسال عملکرد کلیدها
						از کیبورد به سیستم. این کیبورد 1.25 کیلوگرم وزن دارد و
						به وسیله یک کابل ثابت USB 2.0 Type-A با پوشش بافته شده
						به سیستم متصل می‌شود."
					</p>
				</div>
			</div>
		</div>
	)
}

export default ProductDetails
