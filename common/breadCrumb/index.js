import Link from "next/link";
import { BiLeftArrow } from "react-icons/bi";

const BreadCrumb = () => {
    return (
        <div className="flex items-center text-xs sm:text-sm md:px-5 rounded-md md:bg-white md:col-span-9 xl:col-span-10">
            <span className="flex items-center text-orange-500">تلفن همراه</span>
            <span className="flex items-center text-orange-500">
                <BiLeftArrow className="text-slate-800 mx-1" />
                برند آیفون
            </span>
            <span className="flex items-center text-slate-800">
                <BiLeftArrow className="text-slate-800 mx-1" />
                آیفون 13
            </span>
        </div>
    );
}

export default BreadCrumb;