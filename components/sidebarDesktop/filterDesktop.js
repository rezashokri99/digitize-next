import { BiHome } from "react-icons/bi";
import { HiOutlineColorSwatch } from "react-icons/hi";
import { IoWalletOutline, IoChevronDown } from "react-icons/io5";
import Slider from 'rc-slider';
import { useState } from "react";

const FilterDesktop = () => {
    const [brandCollapse, setBrandCollapse] = useState(false);
    const [colorsCollapse, setColorsCollapse] = useState(false);
    const [priceCollapse, setPriceCollapse] = useState(false);
    const [highPriceFilter, setHighPriceFilter] = useState(5080000);
    const [lowPriceFilter, setLowPriceFilter] = useState(2150000);


    return (
        <div>
            <h4 className="font-bold text-lg text-orange-500 mb-1 pr-3">فیلتر</h4>

            <div className="flex w-full py-3 px-3">
                <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                    <BiHome className="absolute w-5 h-5 top-1.5 right-1" />
                </div>
                <div className="w-full">
                    <button onClick={() => setBrandCollapse(prevState => !prevState)} className="flex items-center justify-between mb-2">
                        <span>برند محصول</span>
                        <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${brandCollapse ? "rotate-180" : ""}`} />
                    </button>
                    <ul className={`w-full ${brandCollapse ? "block" : "hidden"}`}>
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
                    <button onClick={() => setColorsCollapse(prevState => !prevState)} className="flex items-center justify-between mb-2">
                        <span>رنگ محصول</span>
                        <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${colorsCollapse ? "rotate-180" : ""}`} />
                    </button>
                    <ul className={`w-full ${colorsCollapse ? "block" : "hidden"}`}>
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
                    <IoWalletOutline className="absolute w-4.5 h-4.5 top-1.5 right-1.5" />
                </div>
                <div className="w-full">
                    <button onClick={() => setPriceCollapse(prevState => !prevState)} className="flex items-center justify-between mb-2">
                        <span>محدوده قیمت</span>
                        <IoChevronDown className={`mr-4 mt-0.5 duration-300 ${priceCollapse ? "rotate-180" : ""}`} />
                    </button>
                    <div className={`w-full pl-5 mt-5 ${priceCollapse ? "block" : "hidden"}`}>
                        <Slider range min={2150000} max={5080000} allowCross={false} defaultValue={[lowPriceFilter, highPriceFilter]} onChange={(e) => {
                            setLowPriceFilter(e[0])
                            setHighPriceFilter(e[1])
                        }} />
                        <div className="flex justify-between items-center mt-2">
                            <p className="text-xs">{highPriceFilter}</p>
                            <p className="text-xs">{lowPriceFilter}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-4 mt-4">
                <button className="w-full py-2 rounded bg-orange-500 text-white">
                    اعمال فیلتر
                </button>
            </div>

        </div>
    );
}

export default FilterDesktop;