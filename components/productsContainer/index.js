import AppbarMobile from "common/appbarMobile/appbarMobile";
import Image from "next/image";
import { HiSortDescending } from "react-icons/hi";
import { CiMobile3 } from "react-icons/ci";
import { BsLaptop } from "react-icons/bs";
import { TbDeviceWatch } from "react-icons/tb";
import { BiHome } from "react-icons/bi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoWalletOutline, IoChevronDown } from "react-icons/io5";
import FilterMobile from "./filterMobile";
import Products from "./products";
import SortMobile from "./sortMobile";
import { useState } from "react";

const ProductsContainer = () => {
    const [brand, setBrand] = useState(false);
    const [colors, setColors] = useState(false);
    const [price, setPrice] = useState(false);
    

    return (
        <>
            {/* app bar */}
            <AppbarMobile />
            {/* sort & filter */}
            <div className="flex md:hidden items-center justify-between gap-x-2 mb-9 px-5">
                <SortMobile />
                <FilterMobile />
            </div>
            <div className="w-full grid grid-cols-12 grid-rows-[54px_minmax(600px,_1fr)] gap-x-5 gap-y-11 md:px-6">
                <div className="bg-white hidden md:block md:col-span-3 xl:col-span-2 row-span-2 py-6 px-1 h-fit">
                    <div className="mb-5">
                        <h4 className="font-bold text-lg text-orange-500 mb-1 pr-3">دسته بندی</h4>
                        <div className="flex w-full py-3 px-3 rounded hover:bg-gray-100 text-slate-800">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <CiMobile3 className="absolute w-5 h-5 top-1.5 right-1" />
                            </div>
                            <span>تلفن همراه</span>
                        </div>
                        <div className="flex w-full py-3 px-3 rounded hover:bg-gray-100 text-gray-400">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <BsLaptop className="absolute w-4.5 h-4.5 top-1.5 right-1.5" />
                            </div>
                            <span>لپ تاپ</span>
                        </div>
                        <div className="flex w-full py-3 px-3 rounded hover:bg-gray-100 text-gray-400">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <TbDeviceWatch className="absolute w-5 h-5 top-1.5 right-1" />
                            </div>
                            <span>ساعت هوشمند</span>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg text-orange-500 mb-1 pr-3">فیلتر</h4>
                        
                        <div className="flex w-full py-3 px-3">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <BiHome className="absolute w-5 h-5 top-1.5 right-1" />
                            </div>
                            <div className="w-full">
                                <button onClick={() => setBrand(prevState => !prevState)} className="flex items-center justify-between mb-2">
                                    <span>برند محصول</span>
                                    <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${brand ? "rotate-180" : ""}`} />
                                </button>
                                <ul className={`w-full ${brand ? "block" : "hidden"}`}>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">اپل</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">سامسونگ</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">شیائومی</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">هواوی</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex w-full py-3 px-3">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <HiOutlineColorSwatch className="absolute w-4.5 h-4.5 top-1.5 right-1.5" />
                            </div>
                            <div className="w-full">
                                <button onClick={() => setColors(prevState => !prevState)} className="flex items-center justify-between mb-2">
                                    <span>رنگ محصول</span>
                                    <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${colors ? "rotate-180" : ""}`} />
                                </button>
                                <ul className={`w-full ${colors ? "block" : "hidden"}`}>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">اپل</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">سامسونگ</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">شیائومی</label>
                                    </li>
                                    <li className="w-full py-2 flex items-center">
                                        <input type="checkbox" className="ml-2 cursor-pointer" />
                                        <label className="cursor-pointer">هواوی</label>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="flex w-full py-3 px-3">
                            <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                <HiOutlineColorSwatch className="absolute w-4.5 h-4.5 top-1.5 right-1.5" />
                            </div>
                            <div className="w-full">
                                <button onClick={() => setPrice(prevState => !prevState)} className="flex items-center justify-between mb-2">
                                    <span>رنگ محصول</span>
                                    <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${price ? "rotate-180" : ""}`} />
                                </button>
                                <div className={`w-full ${price ? "block" : "hidden"}`}>
                                    
                                </div>
                            </div>
                        </div>

                    </div>


                </div>
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
                <div className="col-span-12 md:col-span-9 xl:col-span-10 px-4 md:px-0">
                    <Products />
                </div>
            </div>
        </>
    );
}

export default ProductsContainer;