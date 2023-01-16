import AppbarMobile from "common/appbarMobile/appbarMobile";
import Colors from "common/colors";
import { AiOutlineShop } from "react-icons/ai";
import { FiShield } from "react-icons/fi";
import { TbTruck } from "react-icons/tb";
import { useState } from "react";
import SidebarDesktop from "common/sidebarDesktop";
import BreadCrumb from "common/breadCrumb";
import SingleProductImage from "./SingleProductImage";

const SingleProduct = () => {
    const [showText, setShowText] = useState(false);
    const [information, setInformation] = useState(1);

    return (
        <>
            {/* app bar in mobile */}
            <AppbarMobile showLogo={false} />

            <div className="container mx-auto xl:max-w-7xl px-5">
                
                <div className="w-full md:grid grid-cols-12 grid-rows-[54px_minmax(600px,_1fr)] gap-x-5 gap-y-4">
                    {/* sort & filter & category in desktop */}
                    <div className=" hidden md:block md:col-span-3 xl:col-span-2 row-span-2 sticky top-0">
                        <SidebarDesktop showFilter={false} />
                    </div>

                    {/* Breadcrumb */}
                    <BreadCrumb />

                    <div className="col-span-12 md:col-span-9 xl:col-span-10">
                        {/* product */}
                        <div className="grid grid-cols-12 lg:bg-white lg:p-8 lg:rounded">
                            {/* product image */}
                            <SingleProductImage />
                            <div className="col-span-12 lg:col-span-4 lg:mt-6">
                                {/* product name & product colors */}
                                <div>
                                    <p className='text-center lg:text-right mr-2 mb-1 text-slate-800 font-medium'>
                                        گوشی آیفون 13 128 گیگابایت
                                    </p>
                                    <p className='text-center lg:text-right mr-2 text-sm mb-11 lg:mb-5 text-gray-500'>
                                        Apple Iphone 13 128 GB
                                    </p>
                                    <hr className="hidden lg:block mb-5 ml-4" />
                                    <div className="flex items-center justify-around mb-7 lg:mb-3">
                                        <p>انتخاب رنگ</p>
                                        <Colors />
                                    </div>
                                </div>
                                {/* Product features in desktop */}
                                <div className="hidden lg:block rounded-xl bg-white lg:bg-transparent lg:shadow-none p-4 shadow-sm mb-3">
                                    <h5 className="font-bold text-lg text-slate-800 mb-4">ویژگی های کالا: </h5>
                                    <ul>
                                        <li className="mb-1">
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                حافظه داخلی:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">128 گیگابایت</p>
                                        </li>
                                        <li className="mb-1">
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                بازه اندازه صفحه نمایش:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">6.0 اینچ</p>
                                        </li>
                                        <li >
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                شبکه های ارتباطی:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">2G&nbsp; 3G&nbsp; 4G&nbsp; 5G</p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            {/* product shoping info, ... and buy section in desktop */}
                            <div className="hidden lg:flex flex-col justify-between col-span-12 lg:col-span-4 bg-gray-200 p-4 lg:mr-8 xl:mr-14 max-h-[280px] max-w-[256px] rounded ">
                                <div className="flex items-center justify-start flex-wrap gap-2">
                                    <div className="flex items-end">
                                        <div className="relative w-5 h-5 bg-slate-300 rounded-full mb-1 ml-2">
                                            <AiOutlineShop className="absolute w-5 h-5 top-1.5 right-1" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-800">تلفن همراه: </span>
                                        <span className="text-xs text-slate-600 mr-2">دیجی تایز</span>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="relative w-5 h-5 bg-slate-300 rounded-full mb-1 ml-2">
                                            <FiShield className="absolute w-5 h-5 top-1.5 right-1" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-800">گارانتی: </span>
                                        <span className="text-xs text-slate-600 mr-2">18 ماه زرین</span>
                                    </div>
                                    <div className="flex items-end">
                                        <div className="relative w-5 h-5 bg-slate-300 rounded-full mb-1 ml-2">
                                            <TbTruck className="absolute w-5 h-5 top-1.5 right-1" />
                                        </div>
                                        <span className="text-xs font-bold text-slate-800">ارسال توسط: </span>
                                        <span className="text-xs text-slate-600 mr-2">انبار تهران</span>
                                    </div>
                                </div>
                                <div>
                                    <p className="text-orange-500 text-left mb-1 font-medium text-xl">28,250,000 تومان</p>
                                    <button className="bg-orange-500 text-white rounded py-3 px-3 w-full flex-1">
                                        اضافه به سبد خرید
                                    </button>
                                </div>
                            </div>
                            {/* product shoping info, ... in mobile */}
                            <div className="lg:hidden col-span-12 flex items-center justify-center flex-wrap gap-2 mb-7">
                                <div className="flex items-end">
                                    <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                        <AiOutlineShop className="absolute w-5 h-5 top-1.5 right-1" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800">تلفن همراه: </span>
                                    <span className="text-xs text-slate-600 mr-2">دیجی تایز</span>
                                </div>
                                <div className="flex items-end">
                                    <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                        <FiShield className="absolute w-5 h-5 top-1.5 right-1" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800">گارانتی: </span>
                                    <span className="text-xs text-slate-600 mr-2">18 ماه زرین</span>
                                </div>
                                <div className="flex items-end">
                                    <div className="relative w-5 h-5 bg-slate-200 rounded-full mb-1 ml-2">
                                        <TbTruck className="absolute w-5 h-5 top-1.5 right-1" />
                                    </div>
                                    <span className="text-xs font-bold text-slate-800">ارسال توسط: </span>
                                    <span className="text-xs text-slate-600 mr-2">انبار تهران</span>
                                </div>
                            </div>

                            <div className="col-span-12">
                                {/* Product features in mobile */}
                                <div className="lg:hidden rounded-xl bg-white lg:bg-transparent lg:shadow-none p-4 shadow-sm mb-3">
                                    <h5 className="font-bold text-lg text-slate-800 mb-5">ویژگی های کالا: </h5>
                                    <ul>
                                        <li className="mb-1">
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                حافظه داخلی:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">128 گیگابایت</p>
                                        </li>
                                        <li className="mb-1">
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                بازه اندازه صفحه نمایش:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">6.0 اینچ</p>
                                        </li>
                                        <li >
                                            <p className="text-slate-600 relative pr-3">
                                                <span className="w-1.5 h-1.5 rounded-full bg-orange-600 absolute top-2.5 right-0.5"></span>
                                                شبکه های ارتباطی:
                                            </p>
                                            <p className="pr-3 font-medium text-slate-800">2G&nbsp; 3G&nbsp; 4G&nbsp; 5G</p>
                                        </li>
                                    </ul>
                                </div>

                                {/* Product review */}
                                <div className="rounded-xl bg-white lg:bg-transparent lg:shadow-none p-4 shadow-sm mb-3">
                                    <h5 className="font-bold text-lg text-slate-800 mb-5">نقد و بررسی این محصول: </h5>
                                    <ul className={`relative pb-8 lg:pb-1`}>
                                        <p className="text-slate-600 text-sm text-justify">
                                            بالاخره انتظار آیفون دوستان به سر رسید و در اواسط سپتامبر 2021، این غول تکنولوژی از آیفون ۱۳ خود رونمایی کرد. علاقه‌مندان به این برند مشتاقند که با قابلیت‌های این مدل جدید بیشتر آشنا شوند. به نظر شما چه ویژگی‌هایی آیفون ۱۳ را از نسل قبلی‌اش متمایز می‌کند؟ آیا قیمت آیفون ۱۳ مشابه با سایر نسخه‌های پیشین در زمان رونمایی است؟ مشخصات ایفون ۱۳ در مقایسه با سری‌های قبل تا چه اندازه‌ بهبود یافته است؟ قبل از اینکه به سراغ جواب تک تک این سوالات برویم، نگاهی به مهمترین ارتقاءهای نسخه استاندارد این نسل جدید ایفون می‌اندازیم....
                                        </p>
                                        <p className={`${showText ? "block" : "hidden"} lg:block text-slate-600 text-sm text-justify`}>
                                            <br />
                                            در این سری جدید کاهش اندک ناچ، یک جهش بزرگ برای آیفون به شمار می‌رود. این بهترین توصیف برای جزئی‌ترین ارتقای گوشی‌های این برند تا این مدل است. چه بخواهید چه نخواهید، گوشی آیفون 13 همچنان یکی از قدرتمندترین‌ و پرفروش‌ترین گوشی‌‌ها در بازار موبایل است که علاوه بر جلب توجه کاربران جدید، دارندگان مدل‌های قبل را نیز به ارتقاء گوشیشان ترغیب کرده است.
                                            <br />
                                            <br />
                                            این ناچ بدنام برای اولین بار در طراحی مدل‌های سال 2017 استفاده شد و در عرض چند ماه در کل صنعت گوشی‌های هوشمند گسترش یافت. برای اولین بار طی چهار سال گذشته، اپل در راستای روند حذف ناچ گوشی اندازه آن را در آیفون ۱۳ کمی کوچک کرد.
                                            <br />
                                            البته مسلماً این تنها تغییر در مدل استاندارد این سری نیست، صفحه نمایش 6.1 اینچی Super Retina XDR OLED با Dolby Vision با روشنایی بالاتر، قدرتمندترین تراشه موبایلی که تا به امروز دیده‌اید و سه دوربین 12 مگاپیکسلی فوق‌العاده (دو تا در پنل پشت و یکی در جلو) از جمله مواردیست که این گوشی را از سایرین متمایز می‌کند. تغییرات دیگر شامل فضای ذخیره سازی دو برابری، باتری بزرگ‌تر و چند ترفند نرم‌افزاری انحصاری برای دوربین، مانند حالت سینمایی و سبک‌های عکاسی است.
                                            <br />
                                            <br />
                                            قیمت ایفون ۱۳ از 800 دلار شروع می‌شود که می‌توان گفت ردپای محدوده‌ی قیمتی سایر همتایان نسل پیشین را دنبال کرده است. در عمل قیمت گوشی آیفون ۱۳ تفاوت فاحشی با برچسب قیمتی نسل قبل ندارد، البته همه‌ی کاربران این حقیقت را می‌دانند که برند اپل به عنوان غول دنیای تکنولوژی، سیاست خاص خود را در قیمت‌گذاری دارد و به ازای مبلغی که دریافت می‌کند امکانات و کیفیت فوق‌العاده‌ای را به کاربر خود ارائه می‌دهد که همین موضوع بیانگر ارزش خرید بالای این محصول است. گرچه شاید قیمت ایفون ۱۳ به نسبت سایر گوشی‌ها و برندها بالاتر به نظر برسد ولی با این حال علاقه‌مندان و وفاداران به این برند برای خرید آن درنگ نمی‌کنند.
                                            <br />
                                            <br />
                                            بد نیست بدانید که نسل قبل گوشی‌های اپل در زمان ورود به بازار تفاوت قیمت فاحشی با نسل پیشین خود داشتند که البته به دلیل اضافه شدن تکنولوژی‌هایی مانند 5g بود. در واقع اپل هر دو نسخه از فناوری 5G (پهنای باند زیاد و کم) را در نسل پیشین گنجانده بود و همین امر باعث افزایش قیمت گوشی به ویژه در ایالات متحده شد. در سری 13 هم تمام نسخه‌ها از قابلیت 5G بهره می‌برند، ولی چون ویژگی جدیدی محسوب نمی‌شود، قیمت آیفون ۱۳ نسبت به نسل قبلی افزایش چشمگیری نیافته است.
                                        </p>
                                        {
                                            !showText &&
                                            <div className="lg:hidden">
                                                <div class="before:content-[''] w-full h-4 absolute bottom-2 right-0 opacity-90 bg-white"></div>
                                                <div class="before:content-[''] w-full h-4 absolute bottom-3 right-0 opacity-70 bg-white"></div>
                                                <div class="before:content-[''] w-full h-4 absolute bottom-4 right-0 opacity-60 bg-white"></div>
                                                <div class="before:content-[''] w-full h-4 absolute bottom-5 right-0 opacity-50 bg-white"></div>
                                                <div class="before:content-[''] w-full h-4 absolute bottom-6 right-0 opacity-40 bg-white"></div>
                                                <div class="before:content-[''] w-full h-4 absolute bottom-7 right-0 opacity-30 bg-white"></div>
                                            </div>
                                        }

                                        <button onClick={() => setShowText(prevState => !prevState)} className="lg:hidden absolute -bottom-2 -left-1 cursor-pointer text-orange-500">
                                            {
                                                showText ?
                                                    "بستن مطالب" :
                                                    "ادامه مطالب"
                                            }
                                        </button>

                                    </ul>
                                </div>

                                {/* more Product features */}
                                <div className="rounded-xl bg-white lg:bg-transparent lg:shadow-none p-4 shadow-sm pb-6 ">
                                    <ul className="lg:hidden bg-gray-200 py-1 gap-x-1 flex items-center justify-evenly rounded-full min-w-[240px] max-w-[260px] mx-auto mb-8">
                                        <li
                                            onClick={() => setInformation(1)}
                                            className={`${information === 1 ? "bg-white shadow text-slate-800" : "hover:bg-gray-300"} duration-300 px-4 py-1 rounded-full  text-gray-600`}
                                        >دوربین</li>
                                        <li
                                            onClick={() => setInformation(2)}
                                            className={`${information === 2 ? "bg-white shadow text-slate-800" : "hover:bg-gray-300"} duration-300 px-4 py-1 rounded-full text-gray-600`}
                                        >طراحی</li>
                                        <li
                                            onClick={() => setInformation(3)}
                                            className={`${information === 3 ? "bg-white shadow text-slate-800" : "hover:bg-gray-300"} duration-300 px-4 py-1 rounded-full  text-gray-600`}
                                        >باتری</li>
                                    </ul>
                                    <div className="lg:mb-6">
                                        <h5 className={`${information === 1 ? "block" : "hidden"} lg:block font-bold text-lg text-slate-800 mb-4`}>دوربین:</h5>
                                        <p className={`${information === 1 ? "block" : "hidden"} lg:block text-sm text-slate-600`}>
                                            بررسی دوربین آیفون 13 را با معرفی ویژگی‌های لنز اصلی آن آغاز می‌کنیم. دوربین اصلی به‌کار رفته در سری آیفون 13 از نوع واید و 12 مگاپیکسلی است؛ با این تفاوت که میزان گشودگی دیافراگم این دوربین در مدل‌های استاندارد و مینی f/1.6 است؛ درحالی‌که این عدد در مدل‌های پرو و پرو مکس به f/1.5 می‌رسد. بنابراین؛ iPhone 13 Pro و Pro Max توانایی دریافت 14 درصد نور بیش‌تر را دارند. بررسی دوربین آیفون 13 نشان می‌دهد، مدل‌های پرو و پرو مکس امسال به‌ترتیب 100 و 40 درصد بیش‌تر از نمونه‌های نسل قبل خود موفق به جذب نور در تاریکی می‌شوند که این مسئله بیان‌گر تلاش اپل برای به‌دست آوردن عنوان بهترین دوربین گوشی 2021 است.
                                        </p>
                                    </div>
                                    <div className="lg:mb-6">
                                        <h5 className={`${information === 2 ? "block" : "hidden"} lg:block font-bold text-lg text-slate-800 mb-4`}>طراحی:</h5>
                                        <p className={`${information === 2 ? "block" : "hidden"} lg:block text-sm text-slate-600`}>
                                            آیفون 13 جدید مانند آیفون 12 به صفحه نمایش 6.1 اینچی مجهز شده است. همانطور که در تصویر مشخص است، این دستگاه هم از شارژر مغناطیسی پشتیبانی می‌کند و این موضوع چندان عجیب به نظر . اما خبر نسبتا خوب اینست که اپل طرحی را برای تأیید راهی FCC کرده که نشان شارژر MagSafe سرعت بالاتر، یعنی بیشتر از 15 وات خواهد داشت.همانطور که پیش‌تر در خبرها اعلام کردیم، رویداد اپل 14 سپتامبر (23 شهریور) ساعت 21.30 به وقت ایران برگزار خواهد شد. پیش از این در خبرها اعلام کردیم که احتمال رونمایی از چه محصولاتی در این مراسم وجود دارد و چه محصولاتی قرار نیست رونمایی شوند. 4 گوشی آیفون 13 مینی، آیفون 13، آیفون 13 پرو و آیفون 13 پرو مکس در کنار ساعت‌های هوشمند اپل واچ سری 7 محتمل‌ترین محصولات مراسم فردا هستند. البته اپل به احتمال بسیار زیاد از نسخه جدید سیستم عامل‌های خود از جمله iOS و WatchOS نیز رونمایی خواهد کرد. با این حال، برای کسب اطلاعات بیشتر می‌تواند به تگ آیفون 13 مراجعه بفرمایید.
                                        </p>
                                    </div>
                                    <div className="lg:mb-6">
                                        <h5 className={`${information === 3 ? "block" : "hidden"} lg:block font-bold text-lg text-slate-800 mb-4`}>باتری:</h5>
                                        <p className={`${information === 3 ? "block" : "hidden"} lg:block text-sm text-slate-600`}>
                                            باتری یکی از بخش‌هایی بود که آیفون‌های جدید در آن پیشرفت خوبی داشتند. به‌خصوص آیفون ۱۳ پرو مکس که به نظر می‌رسد بتواند حتی یک سری از پرچم‌داران اندرویدی را هم در زمینه‌ی طول عمر باتری پشت سر بگذارد. گفته می‌شود پیشرفت باتری سری آیفون ۱۳ به لطف افزایش ظرفیت باتری و همچنین پردازنده‌ی کم‌مصرف آن‌قدری بهبود داشته که حتی آیفون ۱۳ مینی هم دیگر از این لحاظ مشکلی ندارد.
                                            تستی که در ادامه قرار است به آن بپردازیم توسط وب‌سایت PhoneArena و در شرایط آزمایشگاهی انجام گرفت. مثل همیشه در سه بخش وب‌گردی، تماشای ویدیو از یوتیوب و انجام بازی شاهد اعمال سنگین‌ترین تست‌ها روی آیفون‌ها هستیم تا ببینیم این گوشی‌ها چند ساعت می‌توانند دوام بیاورند. لازم به ذکر است در هر بخش، آنقدر آن کار تکرار می‌شود تا گوشی خاموش شود.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* buy secion in mobile */}
                            <div className="lg:hidden fixed bottom-0 left-0 bg-white w-full rounded-t-md shadow-[0_-4px_12px_rgba(0,0,0,0.1)] z-10">
                                <div className="flex items-center justify-around py-2 px-5 gap-x-2 max-h-[75px]">

                                    <button className="bg-orange-500 text-white rounded py-3 px-3 w-2/3 sm:max-w-[290px] flex-1">
                                        اضافه به سبد خرید
                                    </button>
                                    <p className="w-1/3 sm:max-w-[150px] text-center">
                                        28,250,000 تومان
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleProduct;