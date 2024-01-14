import MenuHeading from "./MenuHeading";

import Support from "../icons/support";
import Wish from "../icons/wish";
import Cart from '../icons/cart';
import User from "../icons/user";
import Close from '../icons/close';
import LogoSearch from "./logoSearch";
import LoginDrawer from "./loginDrawer";

export default function UserMenu({displaySearch, toggleSearch}){

    return(
        <div className="flex">
            <LogoSearch displaySearch={displaySearch} toggleSearch={toggleSearch}/>
            {displaySearch ? <div className="ml-auto mr-6 mt-3 cursor-pointer" onClick={toggleSearch}><Close/></div> : <div className="ml-auto flex items-center mr-4">
                <div className='mr-6'>
                    <MenuHeading
                        startIcon={<Support w={18}/>}
                        menuText='Support'
                        href="https://en-americas-support.nintendo.com/?_gl=1*14havt1*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDYwOTI1Ni4yMy4xLjE3MDQ2MTI2ODUuMC4wLjA."
                    />
                </div>
                <div className='mr-6'>
                    <MenuHeading
                        startIcon={<Wish w={18}/>}
                        menuText='Wish List'
                        href="https://www.nintendo.com/us/wish-list/"
                    />
                </div>
                <div className='mr-6'>
                    <MenuHeading
                        startIcon={<Cart w={18}/>}
                        menuText='Cart'
                        href="https://www.nintendo.com/us/cart/"
                    />
                </div>
                <div className='mr-6'>
                    <MenuHeading
                        startIcon={<User w={18}/>}
                        menuText='Log in / Sign up'
                    />
                </div>
                <a href="https://www.nintendo.com/us/regionselector/">
                    <img 
                        className="rounded-sm"
                        src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp' 
                        alt="region" 
                    />
                </a>
            </div>}
            <LoginDrawer/>
        </div>
    )
}