import React from "react"
import {
	AiFillYoutube,
	AiOutlineTwitter,
	AiFillInstagram,
} from "react-icons/ai"
import { FiFilm } from "react-icons/fi"
import { FaTelegram, FaEnvelope } from "react-icons/fa"
const Footer = () => {
	return (
		<footer className="relative transition duration-300 bg-white dark:bg-gray-800 w-full h-96">
			<div className="mx-auto inset-x-0 w-full max-w-7xl p-6 flex flex-col items-center justify-center md:flex-row  md:justify-between gap-4 absolute -top-10 transition duration-300 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
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
		</footer>
	)
}

export default Footer
