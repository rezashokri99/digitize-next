import Image from "next/image";


const SingleProductImage = () => {
    return (
        <div className="col-span-12 lg:col-span-4 mb-9">
            <div className='relative w-full h-64 mt-6 mb-3 sm:h-72 rounded-lg'>
                <Image className='absolute' src="/assets/images/iphone-13.png" alt="search icon" fill objectFit='contain' />
            </div>
            <ul className="flex items-center justify-center gap-x-2">
                <li className="border border-gray-400 rounded-md p-1">
                    <Image src="/assets/images/iphone-13.png" alt="search icon" width={45} height={45} />
                </li>
                <li className="border border-gray-400 rounded-md p-1">
                    <Image src="/assets/images/iphone-13.png" alt="search icon" width={45} height={45} />
                </li>
                <li className="border border-gray-400 rounded-md p-1">
                    <Image src="/assets/images/iphone-13.png" alt="search icon" width={45} height={45} />
                </li>
            </ul>
        </div>
    );
}

export default SingleProductImage;