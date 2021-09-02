import { createSlice } from "@reduxjs/toolkit"

// const defaultState = {
// 	items: [
// 		{
// 			id: 1,
// 			faTitle: "",
// 			enTitle: "",
// 			description: "",
// 			rating: 4.5,
// 			images: [],
// 			price: 0,
// 		},
// 	],
// 	mostVisited: [],
// 	bestSellers: [],
// }
interface IItem {
	id: number
	faTitle: string
	enTitle: string
	description: string
	rating: number
	images: string[]
	price: number
	brand: string
	category: string
}
interface IProducts {
	items: IItem[]
	mostVisited: IItem[]
	bestSellers: IItem[]
	recommended: IItem[]
	mostRecent: IItem[]
}

const initialState: IProducts = {
	items: [
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
	],
	mostVisited: [
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
	],
	bestSellers: [
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
	],
	recommended: [
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
	],
	mostRecent: [
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
		{
			id: 1,
			faTitle: "مودم روتر بی سیم تی پی لینک +TD-W8961N ADSL2",
			enTitle: "TP-Link TD-W8961N 300Mbps Wireless N ADSL2+ Modem Router",
			description:
				"مودم‌های روتر TD-W8961N جزو یکی از قدرتمندترین تجهیزات شبکه‌‌ی موجود در بازار محسوب می‌شوند و با دارا بودن تمامی استانداردهای ADSL2+ می‌توانند عملکرد، کارایی و قابلیت اطمینان بالا را با کمترین هزینه در خدمت شما قرار دهند. با کمک این مودم می‌توانید به آسانی یک شبکه‌ی بی‌سیم ایمن ایجاد کرده و اینترنت پر سرعت را با تجهیزات مختلف به اشتراک بگذارید. مودم TD-W8961N کاملا مناسب استفاده‌ی خانگی و شرکتی است و می‌توانید فعالیت هایی نظیر تماشا و دانلود فیلم، موسیقی، فایل‌های مختلف و یا استفاده همزمان از چندین پرینتر را به سادگی و با سرعت انجام دهید.",
			rating: 4,
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/thumbnail/1630393935-xePZEU5d3fvxPam8.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-sTbpOb4d6dqBK08C.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1630393936-CffemHAsiUq8a0ae.jpg",
			],
			price: 479000,
			category: "graphic-cart",
			brand: "amd",
		},
	],
}

const productsSlice = createSlice({
	name: "products",
	initialState: initialState,
	reducers: {
		addProduct() {},
	},
})

export const productsActions = productsSlice.actions
export default productsSlice
