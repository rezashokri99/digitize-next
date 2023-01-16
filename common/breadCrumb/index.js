import Link from "next/link";
import { ArrowLeft } from "react-iconly";
import { BiLeftArrow } from "react-icons/bi";

const BreadCrumb = () => {
    return (
        <div className="flex items-center text-xs sm:text-sm md:px-5 rounded-md md:bg-white md:col-span-9 xl:col-span-10">
            <span className="flex items-center text-orange-500">تلفن همراه</span>
            <span className="flex items-center text-orange-500">
                <ArrowLeft className="mx-1" set="bold" primaryColor="#1e293b"/>
                برند آیفون
            </span>
            <span className="flex items-center text-slate-800">
                <ArrowLeft className="mx-1" set="bold" primaryColor="#1e293b"/>
                آیفون 13
            </span>
        </div>
    );
}

export default BreadCrumb;