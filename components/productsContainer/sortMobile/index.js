import Image from "next/image";

const FilterMobile = () => {
    return (
        <div className="bg-white flex items-center justify-center rounded-md py-3 w-full">
            <Image src="/assets/icons/filter.svg" alt="filter icon" width="18" height="17" className="ml-2" />
            <div className="text-sm font-medium">
                فیلتر: <span>برند اپل</span>
            </div>
        </div>
    );
}

export default FilterMobile;