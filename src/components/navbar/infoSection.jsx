import DownloadBtn from "../downloadBtn";

export default function InfoSection({display}){
    return(
        <div className={`${display ? 'flex' : 'hidden'} items-center justify-between py-3 px-16 bg-nav-info`}>
            <h2 className="text-xl font-semibold">Stardew Valley</h2>
            <div className="flex items-center">
                <span className="text-xs font-medium">Digital</span>
                <span className="mr-4 ml-2 text-lg font-semibold">$14.99</span>
                <DownloadBtn text='text-xs' img="mr-2 w-4" px='px-10' py='py-2' rounded='rounded-full'/>
            </div>
        </div>
    )
}