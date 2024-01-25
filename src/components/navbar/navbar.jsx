import { useEffect, useState } from "react";

import debounce from "../../utils/debounce";
import logo from '../../assets/footer/nintendo.svg';

import DropDownMenu from "./dropDownMenu";
import InfoSection from "./infoSection";
import Offers from "./offers";
import UserMenu from "./userMenu";
import TopicsNProducts from "./TopicsNProducts";
import StoreMenu from "../icons/storemenu";
import MobileMenu from "./mobileMenu";


export default function Navbar(){

    const [display, setDisplay] = useState(false)
    const [displaySearch, setDisplaySearch] = useState(false)

    function toggleSearch(){
        setDisplaySearch(prev => !prev)
    }

    function show(){
        const top = document.documentElement.scrollTop
        if(top >= 450) setDisplay(true)
        else setDisplay(false)
        console.log(top)
    }

    useEffect(() => {
        window.addEventListener('scroll', debounce(show, 250))

        return () => {
            window.removeEventListener('scroll', show)
        }
    }, [])

    return (
        <nav className="relative lg:pt-20">
            <div className="flex lg:hidden items-center bg-main px-4 py-2">
                <a href="https://www.nintendo.com/us/">
                    <img src={logo} className="w-20" alt="mobile-logo"/>
                </a>
                <a href="https://www.nintendo.com/us/" className="ml-auto text-white">
                    <StoreMenu xs={true}/>
                </a>
                <a href="https://www.nintendo.com/us/regionselector/" className="ml-1">
                    <img src="https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp" alt="region" />
                </a>
            </div>
            <div className='flex lg:hidden items-center border-l border-gray-400 px-4 py-4 text-center text-sm '>
                {/* <img className='mr-2' src={coins} alt='coins' /> */}
                <p className="mx-auto w-fit">
                    <span className='mr-1'>Earn</span>
                    <a className='underline mr-1 font-bold' href="https://my.nintendo.com/about_gold_point?_gl=1*14cicqn*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDUyMTUxMi4yMi4xLjE3MDQ1MjI3OTMuMC4wLjA." target="_blank" rel="noreferrer">My Nintendo Points
                    </a>
                    <span>on digital games</span>
                </p>
            </div>
            <div className="hidden lg:block fixed top-0 left-0 w-full z-30 bg-white">
                <div className="">
                    <UserMenu displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                    <DropDownMenu/>
                </div>
            </div>
            <div className="mt-2 hidden lg:block">
                <Offers/>
            </div>
            <InfoSection display={display}/>
            {displaySearch ? <div className="hidden lg:block absolute top-0 w-full z-30 pb-20 bg-white min-h-fit backdrop-contrast-150"><TopicsNProducts displaySearch={displaySearch} toggleSearch={toggleSearch}/> </div> : null}
            <div className="block md:hidden">
                <MobileMenu/>
            </div>
        </nav>
    )
}