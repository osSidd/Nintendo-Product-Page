import DownloadBtn from "../downloadBtn";

export default function InfoSection({display, mobile=null}){
    const lgClass = `${display ? 'top-20' : 'top-3'} hidden lg:flex w-full`
    const xsClass = `${display ? 'bottom-12 pt-6 pb-16' : 'bottom-6 pt-0 pb-0'} flex lg:hidden right-2 left-2 md:right-48 md:left-48 rounded-t-xl rounded-b-2xl`
    return(
        <div className={`${mobile ? xsClass : lgClass} transition-all duration-700 fixed items-center justify-between z-20 lg:pt-6 lg:pb-3 px-2 md:px-4 lg:px-16 bg-nav-info`}>
            <h2 className="hidden lg:block text-xl font-semibold">Stardew Valley</h2>
            <div className="w-full lg:w-auto flex items-center justify-between lg:justify-start">
                <div className="block lg:flex items-center">
                    <div className="text-xs font-medium">Digital</div>
                    <div className="mr-4 lg:ml-2 xxs:text-sm xs:text-lg  font-semibold">$14.99</div>
                </div>        
                <DownloadBtn text='text-xs' img="mr-2 w-4" px='px-6 xs:px-10' py='py-2' rounded='rounded-full'/>
            </div>
        </div>
    )
}