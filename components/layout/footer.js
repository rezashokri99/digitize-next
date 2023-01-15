import Image from "next/image";
import { BsTelephoneFill } from "react-icons/bs";

const Footer = ({dontShowFooter}) => {
    return (
        <div className={`${dontShowFooter ? "hidden md:block" : "block"} mt-9 bg-white px-6 pt-8 pb-20`}>
            <div className="container mx-auto xl:max-w-7xl grid grid-cols-6">
                <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-9">
                    <h3 className="font-black text-2xl py-1 lg:py-3 pl-1 lg:pl-3 mb-4">
                        <span className="text-orange-500">دیجی</span> <span className="text-slate-800">تایز</span>
                    </h3>
                    <div className="text-slate-800">
                        <p>دیجی تایز عرضه کننده جدیدترین محصولات الکترونیک نظیر لپ تاپ , گوشی هوشمند و ساعت هوشمند می باشد.</p>
                        <p>دیجی تایز افتخار این را داشته که به <span className="font-bold text-orange-500">223,122 نفر</span> تا به اکنون خدمت رسانی داشته باشد.</p>
                    </div>
                </div>
                <div className="col-span-6 md:col-span-3 lg:col-span-2 mb-9">
                    <h3 className="font-bold mb-1 text-2xl text-slate-800">محصولات</h3>
                    <ul>
                        <li className="py-2 px-3 cursor-pointer text-slate-800 font-semibold rounded hover:bg-gray-200">تلفن همراه</li>
                        <li className="py-2 px-3 cursor-pointer text-slate-800 font-semibold rounded hover:bg-gray-200">لپ تاپ</li>
                        <li className="py-2 px-3 cursor-pointer text-slate-800 font-semibold rounded hover:bg-gray-200">ساعت هوشمند</li>
                    </ul>
                </div>
                <div className="col-span-6 lg:col-span-2">
                    <div className="relative w-full h-64 rounded-lg flex justify-center">
                        <Image className='absolute cursor-pointer' src="/assets/images/map.png" alt="search icon" fill />
                    </div>
                    <div className="text-center mt-3 text-gray-700">

                        <p className="flex items-center justify-center mb-1">
                            <input type="tel" value="021-123456" className="w-[90px] cursor-pointer" />
                            <BsTelephoneFill className="mr-0.5 mb-0.5 text-orange-500" />
                        </p>
                        <p className="cursor-pointer">info@digitize.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;