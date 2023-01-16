import AppbarMobile from "common/appbarMobile/appbarMobile";
import NavbarMenuMobile from "common/navbarMenuMobile";
import Payment from "./payment";
import Product from "./product";


const CartContainer = () => {


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
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                        <Product />
                    </div>
                    <div className="col-span-12 md:col-span-4 md:row-span-2">
                        <Payment />
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

export default CartContainer;