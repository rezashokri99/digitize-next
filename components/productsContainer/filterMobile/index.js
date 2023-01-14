import { HiSortDescending } from "react-icons/hi";

const SortMobile = () => {
    return (
        <div className="bg-white flex items-center justify-center rounded-md py-3 w-full">
            <HiSortDescending className='w-5 h-5 ml-2 text-orange-600' />
            <div className="text-sm font-medium">
                <span>محبوب ترین ها</span>
            </div>
        </div>
    );
}

export default SortMobile;