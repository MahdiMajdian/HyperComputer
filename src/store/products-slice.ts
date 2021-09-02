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
			id: 0,
			faTitle: "کیبورد بلوتوث تسکو TKM 7320B",
			enTitle: "TSCO TKM 7320B Bluetooth Keyboard",
			description:
				"به راحتی  در کافه، خانه، دفتر کارتان ، پیام های طولانی و ایمیلهای متنی خود را تایپ کنید.TKM 7320B یک کیبورد در کنار صفحه تاچ پد از برند TSCO است که نحوه اتصال آن از طریق بلوتوث بوده و قابلیت اتصال به تلفن‌همراه، تبلت و رایانه را داراست. این کیبورد TKM 7320B بسیار جمع و جور و باریک طراحی شده و برای افرادی که بیشتر وقت خود را به تایپ کردن می گذرانند و جابه‌ جایی‌ های زیادی دارند  یا با کمبود فضا مواجه هستند بسیار کاربردی است .این کیبورد دارای صفحه تاچ پد (برای سیستم PC ) ، دارای 80 کیلد برای انجام فعالیت‌های رایانه‌ای استدرطراحی TKM 7320B ، کلید‌های F1 تا F12 عملکردی دوگانه دارند و می‌توانند به‌عنوان کلید‌های مالتی مدیا کنترل صوتی و تصویری هم به کار روند.همچنین تنظیمات Setting و اینترنت Internet جهت دسترسی سریعتر بر روی صفحه کیبورد قرار داده شده است . این کیبورد تسکو انرژی مورد نیاز خود را از دو عدد باتری قلمی سایز AAA تأمین می‌کند.",
			rating: 4,
			brand: "TSCO",
			category: "کیبورد",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/thumbnail/1614463028-OUGNdrzvVRwL9UPO.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/2/1614463028-FvpR3PxfNs2C0a9N.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/2/1614463028-oeVUHh8k7JtFHJnO.jpg",
			],
			price: 729000,
		},
		{
			id: 1,
			faTitle: "کیبورد گرین GK-501",
			enTitle: "GREEN GK501 Official Multimedia Keyboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کیبورد",
			brand: "GREEN",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614465371-8DEcNYQim1IqMNPy.jpg",
			],
			price: 255000,
		},
		{
			id: 2,
			faTitle:
				"کیبورد مکانیکال گیمینگ کورسیر K70 RGB MK.2 CHERRY MX Speed",
			enTitle:
				"Corsair K70 RGB MK.2 CHERRY MX Speed Mechanical Gaming Keyboard",
			description:
				"K70 RGB MK.2 RAPIDFIRE، کیبورد مکانیکال گیمینگ در سایز 100% و از کیبوردهای بالارده شرکت کورسیر است که با هدف دوام و پایداری طراحی شده و مجهز به شاسی آلومینیومی، سوییچ‌های CHERRY MX Speed و نورپردازی غنی RGB به صورت مجزا برای هر کلید است. این کیبورد به واسطه داشتن 8 مگابایت حافظه داخلی و سه پروفایل کاربری، دارای عملکردهای ویژه و مستقل از نرم‌افزار کورسیر iCUE است. نرخ گزارش‌دهی کیبورد گیمینگ K70 RGB MK.2 RAPIDFIRE برابر 1000 هرتز است و این یعنی عدم ایجاد لگ و تأخیر در ارسال عملکرد کلیدها از کیبورد به سیستم. این کیبورد 1.25 کیلوگرم وزن دارد و به وسیله یک کابل ثابت USB 2.0 Type-A با پوشش بافته شده به سیستم متصل می‌شود.",
			rating: 4,
			category: "کیبورد",
			brand: "Corsair",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625053613-cCCuHXggGKo76OLV.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-07s8gc86aELmOKLF.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-IC6LHcfj173v74Ax.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-gIMAOxdIC2PY2ZRl.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053612-TvZYDBumzvSoh8kv.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053617-vOK51qM4mUpgSa6D.png",
			],
			price: 3425000,
		},
		{
			id: 3,
			faTitle:
				"کیبورد مکانیکال گیمینگ ای دیتا XPG SUMMONER SILVER Switch",
			enTitle:
				"ADATA XPG SUMMONER Silver Switch CHERRY MX Mechanical Keyboard",
			description:
				"ADATA XPG SUMMONER Silver Switch CHERRY MX Mechanical Keyboard",
			rating: 4,
			category: "کیبورد",
			brand: "ADATA",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1625903608-yGvHny6epmg2Msm4.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-1W5itnGdqVhd1sHf.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-aEWcgO9xSGLHE1Bi.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-qfTOoT3Ddw8e3PqT.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-ZHTCChnowGtbtpDs.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903611-DMup6UzIjv6lV0hQ.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903611-87BQagKKDR2cym97.jpg",
			],
			price: 2499000,
		},
		{
			id: 4,
			faTitle: "کیبورد مکانیکال گیمینگ کولرمستر CK550 V2 Red Switch",
			enTitle:
				"Cooler Master CK550 V2 Red Switch Wired Mechanical Gaming Keyboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کیبورد",
			brand: "Cooler Master",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614465371-8DEcNYQim1IqMNPy.jpg",
			],
			price: 3425000,
		},
		{
			id: 5,
			faTitle: "مادربرد ایسوس Z590 WIFI GUNDAM EDITION",
			enTitle: "ASUS Z590 WIFI GUNDAM EDITION LGA1200 11Gen Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628515750-oCBF147nZkl9LQxK.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515750-a30VZ9AMEqc72s1W.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515747-RBp6s8xrrG59UhON.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515746-TY0kordsuGOqPOlg.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515748-HbEZWazNrnLVGeqG.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515746-oGHN9Uk3Aeqk4RcC.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515748-xapi444h8Z9qIJ6P.png",
			],
			price: 8985000,
		},
		{
			id: 6,
			faTitle: "مادربرد ماینینگ بایواستار TB360-BTC PRO",
			enTitle: "Biostar TB360-BTC PRO 9th Gen LGA1151 Mining Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "Biostar",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628425362-zAjdeqPilBVCqOIo.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-i0rlGptMDzzIntCg.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-uKdMKQxlN5naAe90.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-aVWT8mtp1AWzMjEP.jpg",
			],
			price: 8100000,
		},
		{
			id: 7,
			faTitle: "مادربرد ام اس آی MAG A520M VECTOR WIFI",
			enTitle: "MSI MAG A520M VECTOR WIFI AMD AM4 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "MSI",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1626242594-7NeSF5l9NY2mWHpW.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242594-pf8AxfGMIh07IVF9.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-uKdMKQxlN5naAe90.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242594-hdp7uZ4DWWQPYApy.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242595-vxX0UXG8S0U6wqnD.jpg",
			],
			price: 2990000,
		},
		{
			id: 8,
			faTitle: "مادربرد ایسوس ROG Maximus XIII Extreme Glacial",
			enTitle:
				"ASUS ROG Maximus XIII Extreme Glacial 11th Gen LGA1200 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1626501039-jbz4gdkxKLQxqap0.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-JanLWGAFfQvYnhNq.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501038-5Z17xAUQkk8WGRCr.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-uFNerqxa9ZGtNKgR.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-HDq59wHvlVY83U3v.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-jGe7uN8oRbXKtvBz.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-9QudbZqtlKfD5O8I.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-nOGNdCuzqLLchgPZ.jpg",
			],
			price: 41500000,
		},
		{
			id: 9,
			faTitle: "مادربرد گیگابایت A520M DS3H",
			enTitle: "GIGABYTE A520M DS3H (rev. 1.x) AMD AM4 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "GIGABYTE",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628076147-QRAblDn18C3RpDQp.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076141-ZtvkzNOgjvHFHV6L.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076142-eclhoDkvT3WkkzVe.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076142-sYPivkekDuTRCt7N.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076143-YgWkBYXFpxPJvF8f.png",
			],
			price: 2220000,
		},
		{
			id: 10,
			faTitle: "کارت گرافیک پی ان وای NVIDIA T1000 4GB",
			enTitle: "PNY NVIDIA T1000 4GB GDDR6 128-bit Graphics card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "PNY",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/9/optimized/1630502783-WMNXGAam2bsQ1lft.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-A44VdHU73FJTxpRH.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-IDMBopik3lkyOFZp.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-FjmcR4TGDAwgwsFB.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502784-IBeBjNM5ZAlUX3et.jpg",
			],
			price: 18500000,
		},
		{
			id: 11,
			faTitle: "کارت گرافیک پلیت GTX 1050 Ti StormX 4G",
			enTitle: "Palit GeForce GTX 1050 Ti StormX 4GB GDDR5 Graphic Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "Palit",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629978021-t0AEpOdOCaEe3tlI.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978021-aRW72HBa9FkF0uWJ.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-WciltmzP9T0tNVPl.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-12tzI1WU4HP0z2vb.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-e7kv6kgC93HZ3Plu.jpg",
			],
			price: 10490000,
		},
		{
			id: 12,
			faTitle: "کارت گرافیک ایسوس CERBERUS GTX1050TI A4G",
			enTitle:
				"ASUS Cerberus GeForce GTX 1050 Ti Advanced Edition 4GB GDDR5 Graphices Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629881932-NmPjKTJBqnJvCoAu.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-R4lxoMDItLeGYCVS.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-ycxfAM3B7GTVNjsW.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881932-6VbwfigpeiRrwGNN.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-lvq1lni0WuMhFv6R.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881933-5hB1uyTWtHsO9gP3.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-vAkJnAAmP407E9AE.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-guNRUveOGqB4FWVA.jpg",
			],
			price: 11990000,
		},
		{
			id: 13,
			faTitle:
				"کارت گرافیک پی ان وای RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition",
			enTitle:
				"PNY GeForce RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition GDDR6 Graphics Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "PNY",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629792736-UEUiHpqCsyHpCwDK.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-RPyxynZPzRn8lHTV.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-SZyN3KAzN6KpwM6i.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-HnttGlga86ekvts1.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-AYUVv6Tum5mHdhGn.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-ZCQQemQVK2cRn3C7.jpg",
			],
			price: 27099000,
		},
		{
			id: 14,
			faTitle: "پردازنده بدون باکس اینتل Core i7 11700K Rocket Lake",
			enTitle:
				"Intel Core i7-11700K Rocket Lake LGA 1200 11th Gen Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/4/optimized/1618205294-pBaDjRPBIFrsxObd.jpg",
			],
			price: 10990000,
		},
		{
			id: 15,
			faTitle: "پردازنده بدون باکس ای ام دی Ryzen 5 5600X",
			enTitle: "AMD Ryzen 5 5600X AM4 Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625046706-SHVfs1v58coFC9mQ.jpg",
			],
			price: 9199000,
		},
		{
			id: 16,
			faTitle: "پردازنده بدون باکس ای ام دی Ryzen 3 4300GE",
			enTitle: "AMD Ryzen 3 4300GE AM4 Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625046706-SHVfs1v58coFC9mQ.jpg",
			],
			price: 4400000,
		},
		{
			id: 17,
			faTitle: "پردازنده اینتل Celeron G5905 Comet Lake",
			enTitle: "Intel Celeron G5905 Comet Lake LGA 1200 Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/5/optimized/1621247874-eskBv9vAl7rQZc8z.jpg",
			],
			price: 1780000,
		},
		{
			id: 18,
			faTitle: "پردازنده اینتل CORE i9-9900K Coffee Lake",
			enTitle: "Intel Core i9-9900K Coffee Lake 9th Gen Processer",
			description:
				"پردازنده قدرتمند Core i9 9900K یکی از جدیدترین محصولات خانواده Coffee Lake بر پایه سوکت 1151 است که با داشتن 8 هسته اصلی Core و 16 رشته پردازش Thread میتواند تمامی فعالیتهای رایانه ای حال حاضر اعم از اجرای نسل جدید بازیهای رایانه ای را به راحتی مدیریت و پردازش نماید. فرکانس پایه این پردازنده بر روی رقم 3.6 گیگاهرتز تنظیم شده است که با استفاده از تکنولوژی Max Turbo تا رقم 5 گیگاهرتز نیز افزایش می یابد که این میزان برای اجرای بازیهای رایانه ای بسیار ایده آل و کارآمد خواهد بود. حافظه کَش مورد استفاده در این پردازنده از نوع هوشمند بوده و دارای حجمی معادل 16 مگابایت است. توان مصرفی استاندارد این محصول 95 وات است که به دلیل عدم وجود فن و هیت سینک خنک کننده در داخل بسته بندی آن می بایست از یک خنک کننده مناسب برای انتقال و دفع حرارت استفاده نمود. پشتیبانی از رابط PCI Express 3.0 و حافظه های 2 کاناله DDR4 در کنار پردازنده گرافیکی مجتمع Intel UHD Graphics 630 از دیگر امکانات موجود در این پردازنده است.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614458297-F93vUtMkaB86rSxq.jpg",
			],
			price: 8990000,
		},
		{
			id: 19,
			faTitle: "پردازنده ای ام دی Ryzen 5 5600X",
			enTitle: "AMD Ryzen 5 5600X AM4 Processor",
			description:
				"پردازنده قدرتمند Core i9 9900K یکی از جدیدترین محصولات خانواده Coffee Lake بر پایه سوکت 1151 است که با داشتن 8 هسته اصلی Core و 16 رشته پردازش Thread میتواند تمامی فعالیتهای رایانه ای حال حاضر اعم از اجرای نسل جدید بازیهای رایانه ای را به راحتی مدیریت و پردازش نماید. فرکانس پایه این پردازنده بر روی رقم 3.6 گیگاهرتز تنظیم شده است که با استفاده از تکنولوژی Max Turbo تا رقم 5 گیگاهرتز نیز افزایش می یابد که این میزان برای اجرای بازیهای رایانه ای بسیار ایده آل و کارآمد خواهد بود. حافظه کَش مورد استفاده در این پردازنده از نوع هوشمند بوده و دارای حجمی معادل 16 مگابایت است. توان مصرفی استاندارد این محصول 95 وات است که به دلیل عدم وجود فن و هیت سینک خنک کننده در داخل بسته بندی آن می بایست از یک خنک کننده مناسب برای انتقال و دفع حرارت استفاده نمود. پشتیبانی از رابط PCI Express 3.0 و حافظه های 2 کاناله DDR4 در کنار پردازنده گرافیکی مجتمع Intel UHD Graphics 630 از دیگر امکانات موجود در این پردازنده است.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614458297-F93vUtMkaB86rSxq.jpg",
			],
			price: 8990000,
		},
	],
	mostVisited: [
		{
			id: 0,
			faTitle: "کیبورد بلوتوث تسکو TKM 7320B",
			enTitle: "TSCO TKM 7320B Bluetooth Keyboard",
			description:
				"به راحتی  در کافه، خانه، دفتر کارتان ، پیام های طولانی و ایمیلهای متنی خود را تایپ کنید.TKM 7320B یک کیبورد در کنار صفحه تاچ پد از برند TSCO است که نحوه اتصال آن از طریق بلوتوث بوده و قابلیت اتصال به تلفن‌همراه، تبلت و رایانه را داراست. این کیبورد TKM 7320B بسیار جمع و جور و باریک طراحی شده و برای افرادی که بیشتر وقت خود را به تایپ کردن می گذرانند و جابه‌ جایی‌ های زیادی دارند  یا با کمبود فضا مواجه هستند بسیار کاربردی است .این کیبورد دارای صفحه تاچ پد (برای سیستم PC ) ، دارای 80 کیلد برای انجام فعالیت‌های رایانه‌ای استدرطراحی TKM 7320B ، کلید‌های F1 تا F12 عملکردی دوگانه دارند و می‌توانند به‌عنوان کلید‌های مالتی مدیا کنترل صوتی و تصویری هم به کار روند.همچنین تنظیمات Setting و اینترنت Internet جهت دسترسی سریعتر بر روی صفحه کیبورد قرار داده شده است . این کیبورد تسکو انرژی مورد نیاز خود را از دو عدد باتری قلمی سایز AAA تأمین می‌کند.",
			rating: 4,
			brand: "TSCO",
			category: "کیبورد",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/thumbnail/1614463028-OUGNdrzvVRwL9UPO.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/2/1614463028-FvpR3PxfNs2C0a9N.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/2/1614463028-oeVUHh8k7JtFHJnO.jpg",
			],
			price: 729000,
		},
		{
			id: 1,
			faTitle: "کیبورد گرین GK-501",
			enTitle: "GREEN GK501 Official Multimedia Keyboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کیبورد",
			brand: "GREEN",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614465371-8DEcNYQim1IqMNPy.jpg",
			],
			price: 255000,
		},
		{
			id: 2,
			faTitle:
				"کیبورد مکانیکال گیمینگ کورسیر K70 RGB MK.2 CHERRY MX Speed",
			enTitle:
				"Corsair K70 RGB MK.2 CHERRY MX Speed Mechanical Gaming Keyboard",
			description:
				"K70 RGB MK.2 RAPIDFIRE، کیبورد مکانیکال گیمینگ در سایز 100% و از کیبوردهای بالارده شرکت کورسیر است که با هدف دوام و پایداری طراحی شده و مجهز به شاسی آلومینیومی، سوییچ‌های CHERRY MX Speed و نورپردازی غنی RGB به صورت مجزا برای هر کلید است. این کیبورد به واسطه داشتن 8 مگابایت حافظه داخلی و سه پروفایل کاربری، دارای عملکردهای ویژه و مستقل از نرم‌افزار کورسیر iCUE است. نرخ گزارش‌دهی کیبورد گیمینگ K70 RGB MK.2 RAPIDFIRE برابر 1000 هرتز است و این یعنی عدم ایجاد لگ و تأخیر در ارسال عملکرد کلیدها از کیبورد به سیستم. این کیبورد 1.25 کیلوگرم وزن دارد و به وسیله یک کابل ثابت USB 2.0 Type-A با پوشش بافته شده به سیستم متصل می‌شود.",
			rating: 4,
			category: "کیبورد",
			brand: "Corsair",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625053613-cCCuHXggGKo76OLV.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-07s8gc86aELmOKLF.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-IC6LHcfj173v74Ax.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053614-gIMAOxdIC2PY2ZRl.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053612-TvZYDBumzvSoh8kv.png",
				"https://www.lioncomputer.com/uploads/image/2021/6/1625053617-vOK51qM4mUpgSa6D.png",
			],
			price: 3425000,
		},
		{
			id: 3,
			faTitle:
				"کیبورد مکانیکال گیمینگ ای دیتا XPG SUMMONER SILVER Switch",
			enTitle:
				"ADATA XPG SUMMONER Silver Switch CHERRY MX Mechanical Keyboard",
			description:
				"ADATA XPG SUMMONER Silver Switch CHERRY MX Mechanical Keyboard",
			rating: 4,
			category: "کیبورد",
			brand: "ADATA",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1625903608-yGvHny6epmg2Msm4.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-1W5itnGdqVhd1sHf.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-aEWcgO9xSGLHE1Bi.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-qfTOoT3Ddw8e3PqT.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903609-ZHTCChnowGtbtpDs.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903611-DMup6UzIjv6lV0hQ.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1625903611-87BQagKKDR2cym97.jpg",
			],
			price: 2499000,
		},
		{
			id: 4,
			faTitle: "کیبورد مکانیکال گیمینگ کولرمستر CK550 V2 Red Switch",
			enTitle:
				"Cooler Master CK550 V2 Red Switch Wired Mechanical Gaming Keyboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کیبورد",
			brand: "Cooler Master",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614465371-8DEcNYQim1IqMNPy.jpg",
			],
			price: 3425000,
		},
		{
			id: 5,
			faTitle: "مادربرد ایسوس Z590 WIFI GUNDAM EDITION",
			enTitle: "ASUS Z590 WIFI GUNDAM EDITION LGA1200 11Gen Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628515750-oCBF147nZkl9LQxK.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515750-a30VZ9AMEqc72s1W.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515747-RBp6s8xrrG59UhON.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515746-TY0kordsuGOqPOlg.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515748-HbEZWazNrnLVGeqG.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515746-oGHN9Uk3Aeqk4RcC.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628515748-xapi444h8Z9qIJ6P.png",
			],
			price: 8985000,
		},
		{
			id: 6,
			faTitle: "مادربرد ماینینگ بایواستار TB360-BTC PRO",
			enTitle: "Biostar TB360-BTC PRO 9th Gen LGA1151 Mining Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "Biostar",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628425362-zAjdeqPilBVCqOIo.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-i0rlGptMDzzIntCg.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-uKdMKQxlN5naAe90.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-aVWT8mtp1AWzMjEP.jpg",
			],
			price: 8100000,
		},
	],
	bestSellers: [
		{
			id: 7,
			faTitle: "مادربرد ام اس آی MAG A520M VECTOR WIFI",
			enTitle: "MSI MAG A520M VECTOR WIFI AMD AM4 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "MSI",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1626242594-7NeSF5l9NY2mWHpW.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242594-pf8AxfGMIh07IVF9.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628425362-uKdMKQxlN5naAe90.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242594-hdp7uZ4DWWQPYApy.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626242595-vxX0UXG8S0U6wqnD.jpg",
			],
			price: 2990000,
		},
		{
			id: 8,
			faTitle: "مادربرد ایسوس ROG Maximus XIII Extreme Glacial",
			enTitle:
				"ASUS ROG Maximus XIII Extreme Glacial 11th Gen LGA1200 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/7/optimized/1626501039-jbz4gdkxKLQxqap0.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-JanLWGAFfQvYnhNq.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501038-5Z17xAUQkk8WGRCr.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-uFNerqxa9ZGtNKgR.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501049-HDq59wHvlVY83U3v.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-jGe7uN8oRbXKtvBz.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-9QudbZqtlKfD5O8I.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/7/1626501039-nOGNdCuzqLLchgPZ.jpg",
			],
			price: 41500000,
		},
		{
			id: 9,
			faTitle: "مادربرد گیگابایت A520M DS3H",
			enTitle: "GIGABYTE A520M DS3H (rev. 1.x) AMD AM4 Motherboard",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "مادربورد",
			brand: "GIGABYTE",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1628076147-QRAblDn18C3RpDQp.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076141-ZtvkzNOgjvHFHV6L.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076142-eclhoDkvT3WkkzVe.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076142-sYPivkekDuTRCt7N.png",
				"https://www.lioncomputer.com/uploads/image/2021/8/1628076143-YgWkBYXFpxPJvF8f.png",
			],
			price: 2220000,
		},
		{
			id: 10,
			faTitle: "کارت گرافیک پی ان وای NVIDIA T1000 4GB",
			enTitle: "PNY NVIDIA T1000 4GB GDDR6 128-bit Graphics card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "PNY",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/9/optimized/1630502783-WMNXGAam2bsQ1lft.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-A44VdHU73FJTxpRH.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-IDMBopik3lkyOFZp.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502783-FjmcR4TGDAwgwsFB.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/9/1630502784-IBeBjNM5ZAlUX3et.jpg",
			],
			price: 18500000,
		},
		{
			id: 11,
			faTitle: "کارت گرافیک پلیت GTX 1050 Ti StormX 4G",
			enTitle: "Palit GeForce GTX 1050 Ti StormX 4GB GDDR5 Graphic Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "Palit",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629978021-t0AEpOdOCaEe3tlI.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978021-aRW72HBa9FkF0uWJ.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-WciltmzP9T0tNVPl.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-12tzI1WU4HP0z2vb.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629978022-e7kv6kgC93HZ3Plu.jpg",
			],
			price: 10490000,
		},
		{
			id: 12,
			faTitle: "کارت گرافیک ایسوس CERBERUS GTX1050TI A4G",
			enTitle:
				"ASUS Cerberus GeForce GTX 1050 Ti Advanced Edition 4GB GDDR5 Graphices Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629881932-NmPjKTJBqnJvCoAu.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-R4lxoMDItLeGYCVS.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-ycxfAM3B7GTVNjsW.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881932-6VbwfigpeiRrwGNN.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-lvq1lni0WuMhFv6R.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881933-5hB1uyTWtHsO9gP3.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-vAkJnAAmP407E9AE.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-guNRUveOGqB4FWVA.jpg",
			],
			price: 11990000,
		},
	],
	recommended: [
		{
			id: 13,
			faTitle:
				"کارت گرافیک پی ان وای RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition",
			enTitle:
				"PNY GeForce RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition GDDR6 Graphics Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "PNY",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629792736-UEUiHpqCsyHpCwDK.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-RPyxynZPzRn8lHTV.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-SZyN3KAzN6KpwM6i.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-HnttGlga86ekvts1.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-AYUVv6Tum5mHdhGn.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-ZCQQemQVK2cRn3C7.jpg",
			],
			price: 27099000,
		},
		{
			id: 14,
			faTitle: "پردازنده بدون باکس اینتل Core i7 11700K Rocket Lake",
			enTitle:
				"Intel Core i7-11700K Rocket Lake LGA 1200 11th Gen Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/4/optimized/1618205294-pBaDjRPBIFrsxObd.jpg",
			],
			price: 10990000,
		},
		{
			id: 15,
			faTitle: "پردازنده بدون باکس ای ام دی Ryzen 5 5600X",
			enTitle: "AMD Ryzen 5 5600X AM4 Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625046706-SHVfs1v58coFC9mQ.jpg",
			],
			price: 9199000,
		},
		{
			id: 16,
			faTitle: "پردازنده بدون باکس ای ام دی Ryzen 3 4300GE",
			enTitle: "AMD Ryzen 3 4300GE AM4 Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/6/optimized/1625046706-SHVfs1v58coFC9mQ.jpg",
			],
			price: 4400000,
		},
		{
			id: 17,
			faTitle: "پردازنده اینتل Celeron G5905 Comet Lake",
			enTitle: "Intel Celeron G5905 Comet Lake LGA 1200 Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/5/optimized/1621247874-eskBv9vAl7rQZc8z.jpg",
			],
			price: 1780000,
		},
		{
			id: 18,
			faTitle: "پردازنده اینتل CORE i9-9900K Coffee Lake",
			enTitle: "Intel Core i9-9900K Coffee Lake 9th Gen Processer",
			description:
				"پردازنده قدرتمند Core i9 9900K یکی از جدیدترین محصولات خانواده Coffee Lake بر پایه سوکت 1151 است که با داشتن 8 هسته اصلی Core و 16 رشته پردازش Thread میتواند تمامی فعالیتهای رایانه ای حال حاضر اعم از اجرای نسل جدید بازیهای رایانه ای را به راحتی مدیریت و پردازش نماید. فرکانس پایه این پردازنده بر روی رقم 3.6 گیگاهرتز تنظیم شده است که با استفاده از تکنولوژی Max Turbo تا رقم 5 گیگاهرتز نیز افزایش می یابد که این میزان برای اجرای بازیهای رایانه ای بسیار ایده آل و کارآمد خواهد بود. حافظه کَش مورد استفاده در این پردازنده از نوع هوشمند بوده و دارای حجمی معادل 16 مگابایت است. توان مصرفی استاندارد این محصول 95 وات است که به دلیل عدم وجود فن و هیت سینک خنک کننده در داخل بسته بندی آن می بایست از یک خنک کننده مناسب برای انتقال و دفع حرارت استفاده نمود. پشتیبانی از رابط PCI Express 3.0 و حافظه های 2 کاناله DDR4 در کنار پردازنده گرافیکی مجتمع Intel UHD Graphics 630 از دیگر امکانات موجود در این پردازنده است.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614458297-F93vUtMkaB86rSxq.jpg",
			],
			price: 8990000,
		},
	],
	mostRecent: [
		{
			id: 19,
			faTitle: "پردازنده ای ام دی Ryzen 5 5600X",
			enTitle: "AMD Ryzen 5 5600X AM4 Processor",
			description:
				"پردازنده قدرتمند Core i9 9900K یکی از جدیدترین محصولات خانواده Coffee Lake بر پایه سوکت 1151 است که با داشتن 8 هسته اصلی Core و 16 رشته پردازش Thread میتواند تمامی فعالیتهای رایانه ای حال حاضر اعم از اجرای نسل جدید بازیهای رایانه ای را به راحتی مدیریت و پردازش نماید. فرکانس پایه این پردازنده بر روی رقم 3.6 گیگاهرتز تنظیم شده است که با استفاده از تکنولوژی Max Turbo تا رقم 5 گیگاهرتز نیز افزایش می یابد که این میزان برای اجرای بازیهای رایانه ای بسیار ایده آل و کارآمد خواهد بود. حافظه کَش مورد استفاده در این پردازنده از نوع هوشمند بوده و دارای حجمی معادل 16 مگابایت است. توان مصرفی استاندارد این محصول 95 وات است که به دلیل عدم وجود فن و هیت سینک خنک کننده در داخل بسته بندی آن می بایست از یک خنک کننده مناسب برای انتقال و دفع حرارت استفاده نمود. پشتیبانی از رابط PCI Express 3.0 و حافظه های 2 کاناله DDR4 در کنار پردازنده گرافیکی مجتمع Intel UHD Graphics 630 از دیگر امکانات موجود در این پردازنده است.",
			rating: 4,
			category: "پردازنده",
			brand: "AMD",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/2/optimized/1614458297-F93vUtMkaB86rSxq.jpg",
			],
			price: 8990000,
		},
		{
			id: 12,
			faTitle: "کارت گرافیک ایسوس CERBERUS GTX1050TI A4G",
			enTitle:
				"ASUS Cerberus GeForce GTX 1050 Ti Advanced Edition 4GB GDDR5 Graphices Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "ASUS",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629881932-NmPjKTJBqnJvCoAu.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-R4lxoMDItLeGYCVS.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-ycxfAM3B7GTVNjsW.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881932-6VbwfigpeiRrwGNN.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-lvq1lni0WuMhFv6R.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881933-5hB1uyTWtHsO9gP3.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881931-vAkJnAAmP407E9AE.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629881934-guNRUveOGqB4FWVA.jpg",
			],
			price: 11990000,
		},
		{
			id: 13,
			faTitle:
				"کارت گرافیک پی ان وای RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition",
			enTitle:
				"PNY GeForce RTX 3060 12GB XLR8 Gaming REVEL EPIC-X RGB Single Fan Edition GDDR6 Graphics Card",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "کارت گرافیک",
			brand: "PNY",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/8/optimized/1629792736-UEUiHpqCsyHpCwDK.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-RPyxynZPzRn8lHTV.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-SZyN3KAzN6KpwM6i.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792733-HnttGlga86ekvts1.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-AYUVv6Tum5mHdhGn.jpg",
				"https://www.lioncomputer.com/uploads/image/2021/8/1629792734-ZCQQemQVK2cRn3C7.jpg",
			],
			price: 27099000,
		},
		{
			id: 14,
			faTitle: "پردازنده بدون باکس اینتل Core i7 11700K Rocket Lake",
			enTitle:
				"Intel Core i7-11700K Rocket Lake LGA 1200 11th Gen Tray Processor",
			description:
				"لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.",
			rating: 4,
			category: "پردازنده",
			brand: "Intel",
			images: [
				"https://www.lioncomputer.com/uploads/image/2021/4/optimized/1618205294-pBaDjRPBIFrsxObd.jpg",
			],
			price: 10990000,
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
