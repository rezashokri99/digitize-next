import Image from "next/image";
import FilterDesktop from "./filterDesktop";
import CategoryDesktop from "./categoryDesktop";


const SidebarDesktop = ({ showFilter }) => {

    return (
        <>
            <div className={`bg-white py-5 px-1 h-fit max-h-[calc(100vh_-_310px)] ${showFilter && "overflow-y-scroll"}`}>
                {/* Category in desktop */}
                <CategoryDesktop />
                {/* Filter in desktop */}
                {
                    showFilter && <FilterDesktop />
                }
            </div>

            {/* banner */}
            <div className="mt-4 relative w-full h-48 rounded-lg flex justify-center">
                <Image className='absolute' src="/assets/images/smart-watch.png" alt="search icon" fill />
            </div>
        </>
    );
}

export default SidebarDesktop;