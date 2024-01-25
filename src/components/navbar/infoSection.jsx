import DownloadBtn from "../downloadBtn";

export default function InfoSection({display, mobile=null}){
    const lgClass = `${display ? 'top-20' : 'top-3'} hidden lg:flex w-full`
    const xsClass = `${display ? 'bottom-12 pt-6 pb-16' : 'bottom-6 pt-0 pb-0'} flex md:hidden right-2 left-2 rounded-t-xl rounded-b-2xl`
    return(
        <div className={`${mobile ? xsClass : lgClass} transition-all duration-700 fixed items-center justify-between z-20 md:pt-6 md:pb-3 px-2 md:px-16 bg-nav-info`}>
            <h2 className="hidden md:block text-xl font-semibold">Stardew Valley</h2>
            <div className="w-full md:w-auto flex items-center justify-between md:justify-start">
                <div className="block md:flex items-center">
                    <div className="text-xs font-medium">Digital</div>
                    <div className="mr-4 md:ml-2 text-lg font-semibold">$14.99</div>
                </div>        
                <DownloadBtn text='text-xs' img="mr-2 w-4" px='px-10' py='py-2' rounded='rounded-full'/>
            </div>
        </div>
    )
}