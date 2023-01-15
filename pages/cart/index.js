import AppbarMobile from "common/appbarMobile/appbarMobile";
import NavbarMenuMobile from "components/navbarMenuMobile";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import Switch from "react-switch";


const Cart = () => {
    const [showDiscount, setShowDiscount] = useState(false);

    return (
        <>
            <AppbarMobile showLogo={false} />
            <div className="container mx-auto xl:max-w-7xl px-5 pb-36">
                <div className="grid grid-cols-12 md:grid-rows-[54px_minmax(600px,_1fr)] md:gap-x-7">
                    <div className="hidden md:flex items-center justify-between col-span-12 md:col-span-8">
                        <h4 className="text-slate-800 text-xl font-bold">سبد خرید</h4>
                        <button className="text-orange-500 text-sm font-bold">برگشت به خانه</button>
                    </div>
                    <div className="col-span-12 md:col-span-8 grid grid-cols-12 gap-y-3 md:rounded-md md:overflow-hidden md:gap-y-0 mb-9">
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-span-12 relative shadow rounded-lg md:rounded-none bg-white flex justify-between items-center px-4 md:border-b">
                            <div className='mb-5 relative w-12 h-24 rounded-lg'>
                                <Link href={`/product/1`}>
                                    <Image className='absolute' src="/assets/icons/image-7.png" alt="search icon" fill objectFit='contain' />
                                </Link>
                            </div>
                            <div className="flex flex-col justify-between gap-y-4">
                                <Link href={`/product/1`}>
                                    <p className='mb-2 font-medium text-slate-800 text-right'>
                                        ساعت هوشمند اپل سری 6
                                    </p>
                                </Link>
                                <p className='mb-2 text-orange-600 font-medium text-right'>
                                    48,200,000 تومان
                                </p>
                            </div>
                            <VscChromeClose className="absolute top-3 left-3 text-orange-400" />
                            <div className="flex mt-auto pb-5">
                                <div className="flex items-center gap-x-1">
                                    <span className="flex items-center justify-center text-md font-light w-4 h-4 rounded-full bg-gray-200 text-gray-500">+</span>
                                    <span className="border border-orange-400 rounded-sm px-1">1</span>
                                    <span className="flex items-center justify-center text-2xl w-4 h-4 rounded-full bg-orange-200 text-orange-500">-</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:row-span-2">
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
                                                className="w-24 py-[7px] px-4 rounded-tr rounded-br border-y border-r border-gray-500 hover:border-none"
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
                    </div>
                </div>

            </div>
            <div className="block md:hidden fixed bottom-16 w-full px-5">
                <button className="w-full bg-orange-500 text-white rounded py-3 px-3 z-10">
                    ادامه فرآیند خرید
                </button>

            </div>
            <NavbarMenuMobile />

        </>
    );
}

export default Cart;

export const getStaticProps = async () => {
    return {
        props: {
            DontShowFooter: true
        }
    }
}