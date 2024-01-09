import MenuHeading from "./MenuHeading";

import logo from '../../assets/footer/nintendo.svg'

import Support from "../icons/support";
import Wish from "../icons/wish";
import Cart from '../icons/cart';
import User from "../icons/user";
import SearchBar from "./searchBar";
import { useState } from "react";
import Select from "./select";

export default function UserMenu(){

    const [displaySearch, setDisplaySearch] = useState(false)

    function toggleSearch(){
        setDisplaySearch(prev => !prev)
    }
console.log(displaySearch    )
    return(
        
        <div className="flex ">
            <div className="flex items-center w-6/12">
                <a href="https://www.nintendo.com/us/" className="mr-4">
                    <div className="bg-main w-fit px-6 py-2" >
                        <img className='h-8' src={logo} alt="nintendo" />
                    </div>
                </a>
                <div className="flex items-center justify-between border-b border-gray-400 w-full mr-16 pr-2 py-1">
                    <SearchBar displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                   
                    <Select/>
                </div>
            </div>
            <div className="ml-auto flex items-center mr-4">
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
            </div>
        </div>
    )
}