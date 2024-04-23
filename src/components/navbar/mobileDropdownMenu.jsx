import Angle from "../icons/angle";
import Close from "../icons/close";
import Games from "../icons/games";
import News from "../icons/news";
import Play from "../icons/play";
import Store from "../icons/store";
import Support from "../icons/support";
import Switch from "../icons/switch";

export default function MobileDropdownMenu({toggleMobileMenu}){

    const language = 'https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp'

    return (
        <div className=" bg-nav-info rounded-t-3xl pb-8 overflow-clip">
            <div className="flex items-center justify-center px-4 py-6 border-b border-gray-300 bg-white">
                <h2 className="ml-auto font-semibold text-lg">Menu</h2>
                <div className="ml-auto" onClick={toggleMobileMenu}>
                    <Close/>
                </div>
            </div>
            <div className="max-h-72 overflow-y-auto">
                <DropdownItems Icon={<Store color='#e60012'/>} label='My Nintendo Store' drawer={true}/>
                <DropdownItems Icon={<Games color='#e60012'/>} label='Games' drawer={true}/>
                <DropdownItems Icon={<Switch color='#e60012'/>} label='Nintendo Switch' drawer={true}/>
                <DropdownItems Icon={<News color='#e60012'/>} label='News & Events' drawer={false}/>
                <DropdownItems Icon={<Play color='#e60012'/>} label='Play Nintendo' drawer={true}/>
                <div className="mt-4">
                    <DropdownItems Icon={<Support color='#e60012'/>} label='Support' drawer={false}/>
                    <DropdownItems Icon={<img className="rounded" src={language} alt="language"/>} label='Change Region' drawer={false}/>
                </div>
            </div>
        </div>
    )
}

function DropdownItems({Icon, label, drawer=false}){
    return (
        <div className="flex items-center px-6 py-4 border-b border-gray-300 bg-white">
            <div className="mr-2">
                {Icon}
            </div>
            <p className="font-semibold">{label}</p>
            <div className="ml-auto">
                {
                    drawer ? <Angle/> : null
                }
            </div>
        </div>
    )
}