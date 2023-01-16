import AppbarMobile from "common/appbarMobile/appbarMobile";
import smartWatchLogo from "../../public/assets/images/smartwatch.svg";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { FreeMode, Autoplay, Navigation, Pagination } from "swiper";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import styles from './category.module.css';
import NavbarMenuMobile from "common/navbarMenuMobile";


const CategoryContainer = () => {
    return (
        <div className="container mx-auto xl:max-w-7xl">
                {/* app bar */}
                <AppbarMobile />
                <div className="mt-7">
                    <Swiper
                        dir="rtl"
                        loop={false}
                        autoplay={{
                            delay: 4000,
                        }}
                        draggable={true}
                        slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 340px
                            340: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            // when window width is >= 680px
                            380: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6.5,
                            },
                            1280: {
                                slidesPerView: 8,
                            },
                        }}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                    >
                        <p className="absolute top-0 left-3 cursor-pointer z-10 text-orange-500 dark:text-orange-600 text-sm">مشاهده همه</p>
                        <SwiperSlide>
                            <div className="relative w-[150px] h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                <p className="text-slate-800  text-center">تلفن همراه</p>
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/phone.svg" alt="search icon" fill objectFit='contain' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="apple" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/apple.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="apple">اپل</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="xiaomi" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/xiaomi.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="xiaomi">شیائومی</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="huawei" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/huawei.png" alt="search icon" fill objectFit='contain' />
                                </div>

                                <p id="huawei">هواوی</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/samsung.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">سامسونگ</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/asus.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">ایسوس</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/caterpillar.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">کاتر پیلار</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/honor.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">آنر</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/nokia.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">نوکیا</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/sony.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">sony</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/lenovo.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">لنوو</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/Meizu.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">میزو</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="samsung" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/oneplus.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="samsung">وان پلاس</p>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                    <hr className="my-4" />

                    <Swiper
                        dir="rtl"
                        loop={false}
                        autoplay={{
                            delay: 4000,
                        }}
                        draggable={true}
                        slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 340px
                            340: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            // when window width is >= 680px
                            380: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6.5,
                            },
                            1280: {
                                slidesPerView: 8,
                            },
                        }}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                    >
                        <p className="absolute top-0 left-3 cursor-pointer z-10 text-orange-500 dark:text-orange-600 text-sm">مشاهده همه</p>
                        <SwiperSlide>
                            <div className="relative w-[150px] h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                <p className="text-slate-800  text-center">لپ تاپ</p>
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/laptop.svg" alt="search icon" fill objectFit='contain' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="apple" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/asus.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="asus">ایسوس</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="lenovo" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/lenovo.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="lenovo">لنوو</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="apple" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/apple.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="apple">اپل</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="msi" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/msi.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="msi">ام اس آی</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="hp" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/hp.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="hp">اچ پی</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div id="microsoft" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/microsoft.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="microsoft">مایکروسافت</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div id="dell" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/dell.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="dell">دل</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div id="razer" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/razer.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="razer">ریزر</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div id="acer" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/acer.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="acer">ایسر</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <hr className="my-4" />

                    <Swiper
                        dir="rtl"
                        loop={false}
                        autoplay={{
                            delay: 4000,
                        }}
                        draggable={true}
                        slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 340px
                            340: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            // when window width is >= 680px
                            380: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6.5,
                            },
                            1280: {
                                slidesPerView: 8,
                            },
                        }}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                    >
                        <p className="absolute top-0 left-3 cursor-pointer z-10 text-orange-500 dark:text-orange-600 text-sm">مشاهده همه</p>
                        <SwiperSlide>
                            <div className="relative w-[150px] h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                <p className="text-slate-800 text-center">ساعت هوشمند</p>
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/smartwatch.svg" alt="search icon" fill objectFit='contain' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="apple" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/xiaomi.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="xiaomi">شیائومی</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="xiaomi" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/apple.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="apple">اپل</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="huawei" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/huawei.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="huawei">هواوی</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div id="amazfit" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/amazfit.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="amazfit">آمازفیت</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="garmin" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/garmin.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="garmin">گارمین</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="lenovo" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/lenovo.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="lenovo">لنوو</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="honor" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/honor.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="honor">آنر</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                    <hr className="my-4" />

                    <Swiper
                        dir="rtl"
                        loop={false}
                        autoplay={{
                            delay: 4000,
                        }}
                        draggable={true}
                        slidesPerView={2}
                        breakpoints={{
                            // when window width is >= 340px
                            340: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            // when window width is >= 680px
                            380: {
                                width: 450,
                                slidesPerView: 3,
                            },
                            800: {
                                slidesPerView: 5,
                            },
                            1024: {
                                slidesPerView: 6.5,
                            },
                            1280: {
                                slidesPerView: 8,
                            },
                        }}
                        centeredSlides={false}
                        spaceBetween={30}
                        grabCursor={true}
                    >
                        <p className="absolute top-0 left-3 cursor-pointer z-10 text-orange-500 dark:text-orange-600 text-sm">مشاهده همه</p>
                        <SwiperSlide>
                            <div className="relative w-[150px] h-48 bg-gray-200 pt-4 rounded-lg overflow-hidden">
                                <p className="text-slate-800 text-center">کنسول بازی</p>
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/gaming-console.png" alt="search icon" fill objectFit='contain' />
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="sony" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/sony.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="sony">سونی</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="xbox" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/xbox.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="xbox">ایکس باکس</p>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide >
                            <div id="nintendo" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/nintendo.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="nintendo">نینتندو</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide >
                            <div id="logitech" className="w-36 h-40 p-2 cursor-pointer rounded-lg overflow-hidden bg-white flex flex-col justify-around items-center">
                                <div className='mb-5 relative w-full h-full rounded-lg'>
                                    <Image className='absolute' src="/assets/images/logitech.png" alt="search icon" fill objectFit='contain' />
                                </div>
                                <p id="logitech">لاجیتک</p>
                            </div>
                        </SwiperSlide>

                    </Swiper>
                </div>
                <NavbarMenuMobile />
            </div>
    );
}
 
export default CategoryContainer;