import Image from "next/image";
import Link from "next/link";
import { VscChromeClose } from "react-icons/vsc";

const Product = () => {
    return (
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
    );
}

export default Product;