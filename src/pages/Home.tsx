import React from "react"
import construction from "../assets/images/construction.png"
import slide1 from "../assets/images/slide-1.webp"
import slide2 from "../assets/images/slide-2.webp"
import slide3 from "../assets/images/slide-3.webp"
const Home = () => {
	return (
		<div className="py-36 flex flex-col items-center bg-gray-200 dark:bg-gray-900 transition duration-300  min-h-screen">
			<div className="w-full max-w-7xl h-auto px-10 flex gap-4 md:gap-0 flex-col md:flex-row justify-between">
				<div className="bg-white overflow-hidden rounded-lg shadow-md flex items-center w-full">
					<img src={slide3} alt="" />
				</div>
				<div className=" md:w-96 md:mr-6 gap-4 md:gap-0 flex md:flex-col justify-between">
					<div className="w-full rounded-lg shadow-md overflow-hidden mb-6">
						<img src={slide1} alt="" />
					</div>
					<div className="w-full rounded-lg shadow-md overflow-hidden mb-6 md:mb-0">
						<img src={slide1} alt="" />
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home
