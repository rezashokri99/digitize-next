import { useState } from "react";
import Switch from "react-switch";

const Payment = () => {
    const [showDiscount, setShowDiscount] = useState(false);

    return (
        <>
            <div className={` ${showDiscount ? "h-[310px] md:h-[330px]" : "h-32"} transition-all duration-300 bg-white rounded-lg p-5 md:rounded-md md:py-4 md:px-2 lg:p-5`}>
                <div className="flex items-center justify-between mb-6">
                    <span className="text-slate-800 font-bold md:text-sm lg:text-base">مجموع قیمت:</span>
                    <span className="text-orange-600 font-bold md:text-sm lg:text-base">72,650,000 تومان</span>
                </div>
                <div>
                    <div className="flex items-center mb-7">
                        <span className="md:text-sm lg:text-base">
                            کد تخفیف دارم
                        </span>
                        <Switch className="mr-2" onHandleColor="#f97316" onColor="#fdba74" offHandleColor="#6b7280" offColor="#d1d5db" onChange={() => setShowDiscount(prevState => !prevState)} checked={showDiscount} />
                    </div>

                    <div className={`${showDiscount ? "opacity-100 block" : "opacity-0 hidden"} transition-all duration-700`}>
                        <div className="flex md:flex-col lg:flex-row items-center md:items-start lg:items-center justify-between">
                            <span className="md:mb-2 lg:mb-0 text-slate-800 md:text-sm lg:text-base">کد تخفیف:</span>
                            <div className="flex items-center">
                                <input
                                    type="text"
                                    className="w-24 py-[7px] px-4 rounded-tr rounded-br border-y border-r border-gray-500 focus:border-none focus:outline-orange-500"
                                    placeholder="124ABC" />
                                <button className="py-2 px-4 bg-orange-500 text-white rounded-l">
                                    تایید
                                </button>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-6">
                            <span className="text-slate-700 text-sm">تخفیف:</span>
                            <span className="text-slate-700 text-sm">72,650,000 تومان</span>
                        </div>
                        <div className="flex items-center justify-between mt-12">
                            <span className="text-slate-800 font-bold md:text-sm lg:text-base">قیمت نهایی:</span>
                            <span className="text-orange-600 font-bold md:text-sm lg:text-base">72,650,000 تومان</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="hidden md:flex flex-col gap-y-3 mt-6 w-full ">
                <button className="w-full py-2 rounded bg-orange-500 text-white text-lg font-bold">
                    ادامه فرآیند خرید
                </button>
                <button onClick={() => setShowCollapseModal(false)} className="w-full py-2 text-lg font-bold rounded bg-orange-50 text-orange-600 border-2 border-orange-500">
                    انصراف از خرید
                </button>
            </div>
        </>
    );
}

export default Payment;