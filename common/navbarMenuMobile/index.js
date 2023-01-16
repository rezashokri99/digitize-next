import { RiHome5Fill } from 'react-icons/ri';
import { BiCategory } from 'react-icons/bi';
import { HiShoppingBag } from 'react-icons/hi';
import { useState } from 'react';




const NavbarMenuMobile = () => {
    const [showTab, setShowTab] = useState(1);

    const setShowTabHandler = (value) => {
        setShowTab(value)
    }

    return (
        <ul className=" z-10 w-full flex md:hidden justify-between fixed bottom-0 bg-white rounded-t-md shadow-[0_-4px_12px_rgba(0,0,0,0.1)] px-7">
            <li onClick={() => setShowTabHandler(1)} className={`${showTab === 1 ? "text-slate-800" : "text-gray-500"} font-bold flex items-center py-3`}>
                <RiHome5Fill className='text-3xl ml-1' />
                {
                    showTab === 1 &&
                    "خانه"
                }
            </li>
            <li onClick={() => setShowTabHandler(2)} className={`${showTab === 2 ? "text-slate-800" : "text-gray-500"} font-bold flex items-center py-3`}>
                <BiCategory className='text-3xl ml-1' />
                {
                    showTab === 2 &&
                    "دسته بندی"
                }
            </li>
            <li onClick={() => setShowTabHandler(3)} className={`${showTab === 3 ? "text-slate-800" : "text-gray-500"} font-bold flex items-center py-3`}>
                <HiShoppingBag className='text-3xl ml-1' />
                {
                    showTab === 3 &&
                    "سبد خرید"
                }
            </li>
        </ul>
    );
}

export default NavbarMenuMobile;