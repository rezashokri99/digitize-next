import Image from "next/image";

const AppbarMobile = () => {
    return (
        <div className="flex md:hidden items-center justify-between mt-11 mb-5 px-5">
            <div>logo</div>
            <div className="text-slate-orginal font-bold text-base">ساعت هوشمند</div>
            <div className="w-8 h-8 bg-white shadow rounded-md flex items-center justify-center">
                <Image src="/assets/icons/search.svg" alt="search icon" width="20" height="20" />
            </div>
        </div>
    );
}

export default AppbarMobile;