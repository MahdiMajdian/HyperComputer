import React from "react"
import logo from "../assets/images/logo.webp"
import { IoMdClose } from "react-icons/io"
import { Link } from "react-router-dom"
const NotFound = () => {
	return (
		<div className="pt-32 transition duration-300 flex flex-col items-center justify-center bg-gray-200 dark:bg-gray-900 min-h-screen">
			<div className="flex flex-col gap-4 items-center justify-center mb-32">
				<h1 className="text-9xl text-red-400">404</h1>
				<h1 className='text-xl font-medium dark:text-gray-300'>صفحه مورد نظر یافت نشد</h1>
				<p className='dark:text-gray-500'>
					متاسفانه صفحه‌ای که به دنبال آن بودید حذف یا منتقل شده است.
				</p>
                <Link to='/' className='bg-green-500 rounded text-white p-2 transition duration-200 shadow-sm hover:shadow-md'>برو به صفحه اصلی</Link>
			</div>
			<img src={logo} />
			<p className="pt-4 text-gray-600 font-mono ">
				Error 404 - Page Not Found
			</p>
		</div>
	)
}

export default NotFound
