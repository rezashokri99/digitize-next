import { TiTick } from 'react-icons/ti';


const Colors = () => {
    return (
        <div className='flex'>
            <div className='ring-2 ring-orange-500 ring-offset-1 ring-offset-white flex justify-center items-center text-white rounded-full -mr-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-orange-500'>
                <TiTick className='' />
            </div>
            <div className='flex justify-center items-center text-white rounded-full -mr-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-green-500'></div>
            <div className='flex justify-center items-center text-white rounded-full -mr-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-yellow-500'></div>
            <div className='flex justify-center items-center text-white rounded-full -mr-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-blue-500'></div>
            <div className='flex justify-center items-center text-white rounded-full -mr-0.5 w-4 h-4 sm:w-5 sm:h-5 bg-purple-500'></div>
        </div>
    );
}

export default Colors;