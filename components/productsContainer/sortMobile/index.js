import Backdrop from "common/backdrop";
import { useState } from "react";
import { HiSortDescending } from "react-icons/hi";

const FilterMobile = () => {
    const [showCollapseModal, setShowCollapseModal] = useState(false);
    const [sort, setSort] = useState(1);


    return (
        <div className="w-full">
            <div onClick={() => setShowCollapseModal(true)} className="bg-white flex items-center justify-center rounded-md py-3 w-full">
                <HiSortDescending className='w-5 h-5 ml-2 text-orange-600' />
                <div className="text-sm font-medium">
                    <span>محبوب ترین ها</span>
                </div>
            </div>
            <div className={`${showCollapseModal ? "translate-y-0" : "translate-y-full"} duration-300 w-full fixed bottom-0 left-0 z-20 py-6 px-5 bg-white rounded-t-3xl min-h-[500px] max-h-[calc(100vh_-_20px)] overflow-y-scroll shadow-[0_-4px_12px_rgba(0,0,0,0.1)]`}>
                <h4 className="font-bold text-xl text-orange-500 mb-4">مرتب سازی: </h4>

                <ul className={`w-full flex flex-col mt-2 pr-3 gap-y-1`}>
                    <li className={`${sort === 1 && "border-r-4 border-r-orange-600 bg-gray-200"} w-full p-2 duration-300 rounded-l hover:bg-gray-100 cursor-pointer flex items-center`}>
                        محبوب ترین ها
                    </li>
                    <li className={`${sort === 2 && "border-r-4 border-r-orange-600 bg-gray-200"} w-full p-2 duration-300 rounded-l hover:bg-gray-100 cursor-pointer flex items-center`}>
                        پربازدید ترین ها
                    </li>
                    <li className={`${sort === 3 && "border-r-4 border-r-orange-600 bg-gray-200"} w-full p-2 duration-300 rounded-l hover:bg-gray-100 cursor-pointer flex items-center`}>
                        گران ترین ها
                    </li>
                    <li className={`${sort === 4 && "border-r-4 border-r-orange-600 bg-gray-200"} w-full p-2 duration-300 rounded-l hover:bg-gray-100 cursor-pointer flex items-center`}>
                        ارزان ترین ها
                    </li>
                </ul>

            </div>
            <Backdrop showbackdrop={showCollapseModal} setClose={setShowCollapseModal} />
        </div>
    );
}

export default FilterMobile;