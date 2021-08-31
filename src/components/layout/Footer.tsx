import React from "react"
import { Link } from "react-router-dom"
import {
	AiFillYoutube,
	AiOutlineTwitter,
	AiFillInstagram,
	AiFillPushpin,
	AiFillPhone,
} from "react-icons/ai"
import { FiFilm } from "react-icons/fi"
import {
	FaTelegram,
	FaEnvelope,
	FaCircle,
	FaMapMarkerAlt,
} from "react-icons/fa"
import enamad from "../../assets/images/enamad.png"
import karLogo from "../../assets/images/kar.svg"
const Footer = () => {
	return (
		<footer className="relative transition duration-300 bg-white dark:bg-gray-800 w-full h-auto pt-28">
			<div className="mx-auto inset-x-0 w-full max-w-5xl 2xl:max-w-7xl p-6 flex flex-col items-center justify-center md:flex-row  md:justify-between gap-4 absolute -top-32 md:-top-10 transition duration-300 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
				<p className=" ">عضویت در خبرنامه</p>
				<div className="flex rounded-full lg:w-full mx-auto transition duration-300 bg-green-100 dark:bg-gray-700  h-12 max-w-md px-4">
					<input
						className="w-full bg-transparent outline-none placeholder-gray-500 "
						placeholder="ایمیل خود را وارد کنید"
					/>
					<button>
						<FaEnvelope className="w-6 h-auto ml-4 mr-1 text-green-400" />
					</button>
				</div>

				<ul className="flex gap-4 mx-auto">
					<li className="rounded-xl bg-pink-100 w-10   h-14 flex items-center p-2 text-pink-600">
						<FiFilm className="w-full h-auto" />
					</li>
					<li className="rounded-xl bg-yellow-100 w-10     h-14 flex items-center p-1 text-yellow-600">
						<AiFillInstagram className="w-full h-auto" />
					</li>
					<li className="rounded-xl bg-blue-200 w-10   h-14 flex items-center p-1 text-blue-600">
						<FaTelegram className="w-full h-auto" />
					</li>
					<li className="rounded-xl bg-blue-100 w-10   h-14 flex items-center p-1 text-blue-500">
						<AiOutlineTwitter className="w-full h-auto" />
					</li>
					<li className="rounded-xl bg-red-100 w-10    h-14 flex items-center p-1 text-red-600">
						<AiFillYoutube className="w-full h-auto" />
					</li>
				</ul>
			</div>
			<div className="flex flex-col lg:flex-row gap-4 lg:gap-6 justify-center mx-10 lg:mx-4 pb-6">
				<div className="dark:text-gray-600 max-w-xl">
					<div className="flex items-center gap-4 dark:text-white font-semibold text-lg">
						<FaCircle className="bg-gray-100 rounded-full p-1 text-green-400" />
						<p>آدرس فروشگاه</p>
					</div>
					<ul className="mr-4 flex flex-col gap-4 mt-4 text-sm">
						<li className="flex gap-4">
							<span>
								<FaMapMarkerAlt className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							</span>
							<p>
								تهران ، خیابان ولیعصر ، نرسیده به میدان ولیعصر ،
								کوچه فیروزه ،ورودی برج جنوبی اداری مجتمع
								کامپیوتر ولیعصر، طبقه 2 واحد 55
							</p>
						</li>
						<li className="flex gap-4">
							<span>
								<FaEnvelope className="bg-gray-100 w-6 h-6 rounded-full p-1.5 text-green-400" />
							</span>
							<p>کد پستی: 1593739751</p>
						</li>
						<li className="flex gap-4">
							<span>
								<AiFillPushpin className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							</span>
							<p>
								خیابان ولیعصر ، نرسیده به میدان ولیعصر ، مجتمع
								کامپیوتر ولیعصر همکف تجاری راهروی D واحد 36
							</p>
						</li>
						<li className="flex gap-4">
							<span>
								<FaEnvelope className="bg-gray-100 w-6 h-6 rounded-full p-1.5 text-green-400" />
							</span>
							<p>کد پستی: 1593733356</p>
						</li>
					</ul>
				</div>
				<div className="dark:text-gray-600 max-w-lg">
					<div className="flex items-center gap-4 dark:text-white font-semibold text-lg ">
						<span>
							<FaCircle className="bg-gray-100 rounded-full p-1 text-green-400" />
						</span>
						<div className="flex items-center gap-2 flex-wrap">
							<p>شماره های تماس</p>
							<p className="text-sm font-normal text-green-400">
								( ساعات کاری از ۹:۳۰ صبح الی ۱۹ و پنجشنبه از
								۹:۳۰ تا ۱۴ )
							</p>
						</div>
					</div>
					<ul className="pr-4 pt-4 flex flex-col text-sm lg:flex-row lg:flex-wrap gap-4">
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>پشتیبانی: 87700265-021</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>بخش سخت افزار: داخلی 705-707</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>پشتیبانی: 87700265-021</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>بخش سخت افزار: داخلی 705-707</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>پشتیبانی: 87700265-021</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>بخش سخت افزار: داخلی 705-707</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>پشتیبانی: 87700265-021</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>بخش سخت افزار: داخلی 705-707</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>پشتیبانی: 87700265-021</p>
						</li>
						<li className="flex gap-4">
							<AiFillPhone className="bg-gray-100 w-6 h-6 rounded-full p-1 text-green-400" />
							<p>بخش سخت افزار: داخلی 705-707</p>
						</li>
					</ul>
				</div>
				<div className="flex justify-center">
					<span className="w-32 lg:w-28 2xl:w-40">
						<img src={enamad} className="w-full" />
					</span>
					<span className="w-28 lg:w-20 2xl:w-32">
						<img src={karLogo} />
					</span>
				</div>
			</div>
			<div className="mx-auto inset-x-0 w-full max-w-5xl 2xl:max-w-7xl">
				<ul className="flex justify-center gap-12 py-8 mx-8 flex-wrap dark:text-gray-300">
					<li>
						<Link to="/">خانه</Link>
					</li>
					<li>
						<a href="#">چرا هایپر</a>
					</li>
					<li>
						<a href="#">تالار گفتمان</a>
					</li>
					<li>
						<a href="#">تماس با ما</a>
					</li>
					<li>
						<a href="#">راهنمای خرید</a>
					</li>
					<li>
						<a href="#">شرایط گارانتی</a>
					</li>
					<li>
						<a href="#">اخبار</a>
					</li>
					<li>
						<a href="#">درباره ما</a>
					</li>
				</ul>
			</div>
			<div className="p-8 pt-4">
				<p className="text-sm text-gray-400 dark:text-gray-600 text-center">
					حق نشر ۱۴۰۰ تمامی حقوق برای لیون کامپیوتر محفوظ می‌باشد و
					هرگونه کپی‌برداری مستلزم کسب اجازۀ کتبی بوده و پیگرد قانونی
					خواهد داشت.
				</p>
			</div>
		</footer>
	)
}

export default Footer
