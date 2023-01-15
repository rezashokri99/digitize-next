import { HiSortDescending } from "react-icons/hi";


const AppbarDesktop = () => {
    return (
        <div className="bg-white hidden md:flex items-center gap-x-1 md:col-span-9 xl:col-span-10 p-[6px]">
            <div className="bg-orange-200 rounded p-1">
                <HiSortDescending className='w-6 h-6 text-orange-600' />
            </div>
            <div className="p-2 duration-300 hover:bg-gray-100 cursor-pointer rounded font-bold text-slate-800 relative">
                محبوب ترین ها
                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-1 left-0"></span>
            </div>
            <div className="p-2 duration-300 hover:bg-gray-100 cursor-pointer rounded font-medium text-gray-400">پربازدید ترین ها</div>
            <div className="p-2 duration-300 hover:bg-gray-100 cursor-pointer rounded font-medium text-gray-400">گران ترین ها</div>
            <div className="p-2 duration-300 hover:bg-gray-100 cursor-pointer rounded font-medium text-gray-400">ارزان ترین ها</div>

        </div>
    );
}

export default AppbarDesktop;