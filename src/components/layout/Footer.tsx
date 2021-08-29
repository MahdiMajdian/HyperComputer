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
		<footer className="relative bg-white dark:bg-gray-800 w-full h-96">
			<div className="mx-auto inset-x-0 w-full max-w-7xl p-10 textw flex justify-between absolute -top-10 bg-white dark:bg-gray-800 dark:text-white rounded-lg shadow-lg">
				<p className="my-auto">عضویت در خبرنامه</p>
				<div className="flex rounded-full bg-green-100 dark:bg-gray-700 w-full h-12 max-w-lg px-4">
					<input
						className="w-full bg-transparent outline-none placeholder-gray-500 "
						placeholder="ایمیل خود را وارد کنید"
					/>
					<button>
						<FaEnvelope className="w-6 h-auto ml-4 mr-1 text-green-400" />
					</button>
				</div>
				<div>
					<ul className="flex gap-4">
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
			</div>
		</footer>
	)
}

export default Footer
