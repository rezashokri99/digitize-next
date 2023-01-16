import { CiMobile3 } from "react-icons/ci";
import { BsLaptop } from "react-icons/bs";
import { TbDeviceWatch } from "react-icons/tb";


const CategoryDesktop = () => {
    return (
        <div className="mb-5">
            <h4 className="font-bold text-lg text-orange-500 mb-1 pr-3">دسته بندی</h4>
            <div className="flex w-full py-3 px-3 rounded cursor-pointer hover:bg-gray-100 text-slate-800">
                <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                    <CiMobile3 className="absolute w-5 h-5 top-1.5 right-1" />
                </div>
                <span>تلفن همراه</span>
            </div>
            <div className="flex w-full py-3 px-3 rounded cursor-pointer hover:bg-gray-100 text-gray-400">
                <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                    <BsLaptop className="absolute w-4.5 h-4.5 top-1.5 right-1.5" />
                </div>
                <span>لپ تاپ</span>
            </div>
            <div className="flex w-full py-3 px-3 rounded cursor-pointer hover:bg-gray-100 text-gray-400">
                <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                    <TbDeviceWatch className="absolute w-5 h-5 top-1.5 right-1" />
                </div>
                <span>ساعت هوشمند</span>
            </div>
        </div>
    );
}

export default CategoryDesktop;