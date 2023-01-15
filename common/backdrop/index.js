const Backdrop = ({showbackdrop, setClose}) => {
    return (
        <div 
        onClick={() => setClose(false)} 
        className={`${showbackdrop ? "translate-y-0" : "-translate-y-full"} duration-300 fixed inset-0 z-10 bg-stone-100 opacity-60 w-screen h-screen`}

        ></div>
    );
}
 
export default Backdrop;