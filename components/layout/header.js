import Image from "next/image";

const Header = () => {

    return (
        <div className="hidden md:block bg-white py-2 mb-5 shadow h-[73px] sticky top-0 z-10">
            <div className="container mx-auto xl:max-w-7xl md:px-6 flex items-center justify-between">
                {/* navbar */}
                <ul className="flex items-center gap-x-2">
                    <li className="font-black text-2xl py-1 lg:py-3 pl-1 lg:pl-3">
                        <span className="text-orange-500">دیجی</span> <span className="text-slate-800">تایز</span>
                    </li>
                    <li className="relative font-medium text-lg py-3 px-1 lg:px-3 cursor-pointer rounded hover:bg-gray-100">
                        خانه
                        <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2 left-1"></span>
                    </li>
                    <li className="font-medium text-lg py-3 px-1 lg:px-3 cursor-pointer rounded hover:bg-gray-100">تلفن همراه</li>
                    <li className="font-medium text-lg py-3 px-1 lg:px-3 cursor-pointer rounded hover:bg-gray-100">لپ تاپ</li>
                    <li className="font-medium text-lg py-3 px-1 lg:px-3 cursor-pointer rounded hover:bg-gray-100">ساعت هوشمند</li>
                </ul>
                {/* search */}
                <div className="w-1/3">
                    <div className="w-full bg-stone-100 text-gray-300 rounded-md py-3 px-3 flex items-start">
                        <Image className="ml-2" src="/assets/icons/search.svg" alt="search icon" width="22" height="22" />
                        <input className="text-slate-800 bg-transparent border-none outline-none w-11/12" type="text" placeholder="جستجوی نام محصول، نام برند، نام مدل و ..." />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;