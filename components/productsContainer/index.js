import Products from "./products";
// mobile
import AppbarMobile from "common/appbarMobile/appbarMobile";
import FilterMobile from "./filterMobile";
import SortMobile from "./sortMobile";
// desktop
import SidebarDesktop from "components/sidebarDesktop";
import AppbarDesktop from "components/sidebarDesktop/AppbarDesktop";
import NavbarMenuMobile from "components/navbarMenuMobile";



const ProductsContainer = () => {

    return (
        <div className="container mx-auto xl:max-w-7xl">
            {/* app bar */}
            <AppbarMobile />
            {/* sort & filter */}
            <div className="flex md:hidden items-center justify-between gap-x-2 mb-9 px-5">
                <SortMobile />
                <FilterMobile />
            </div>
            <div className="w-full md:grid grid-cols-12 grid-rows-[54px_minmax(600px,_1fr)] gap-x-5 gap-y-11 md:px-6">
                <div className=" hidden md:block md:col-span-3 xl:col-span-2 row-span-2 sticky top-0">
                    <SidebarDesktop showFilter={true} />
                </div>
                <AppbarDesktop />
                <div className="col-span-12 md:col-span-9 xl:col-span-10 px-4 md:px-0">
                    <Products />
                </div>
            </div>
            <NavbarMenuMobile />
        </div>
    );
}

export default ProductsContainer;