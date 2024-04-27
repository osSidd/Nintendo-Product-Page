import { useEffect, useState } from "react";

import debounce from "../../utils/debounce";
import logo from '../../assets/footer/nintendo.svg';
import coins from '../../assets/navbar/coins.svg'

import DropDownMenu from "./dropDownMenu";
import InfoSection from "./infoSection";
import Offers from "./offers";
import UserMenu from "./userMenu";
import TopicsNProducts from "./TopicsNProducts";
import StoreMenu from "../icons/storemenu";
import MobileMenu from "./mobileMenu";
import LoginDrawer from "./loginDrawer";
import MobileDropdownMenu from "./mobileDropdownMenu";


export default function Navbar(){

    const [display, setDisplay] = useState(false)
    const [displayDrawer, setDisplayDrawer] = useState(false)
    const [displayMenu, setDisplayMenu] = useState(false)
    const [displaySearch, setDisplaySearch] = useState(false)

    function toggleSearch(){
        setDisplaySearch(prev => !prev)
    }

    function toggleMobileMenu(){
        setDisplayMenu(prev => !prev)
    }

    function toggleDrawerDisplay(){
        setDisplayDrawer(prev => !prev)
    }

    function show(){
        const top = document.documentElement.scrollTop
        if(top >= 450) setDisplay(true)
        else setDisplay(false)
        // console.log(top)
    }

    useEffect(() => {
        window.addEventListener('scroll', debounce(show, 25))

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
            <div className='w-full flex lg:hidden items-center justify-center bg-gray-100 px-4 py-4 text-center text-sm '>
                <img className='mr-2' src={coins} alt='coins' />
                <p className="w-fit">
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
            <div className="relative">
                <InfoSection display={display}/>
            </div>
            {displaySearch ? 
                <div className="hidden lg:block fixed top-0 w-full z-30 pb-20 bg-white shadow-2xl min-h-fit">
                    <TopicsNProducts displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                </div> : 
                null
            }
            <div className="block lg:hidden">
                <div className="block lg:hidden fixed top-0 w-full pb-20 bg-white shadow-2xl min-h-fit" style={{zIndex:60, display: displaySearch ? 'block' : 'none'}}>
                    <TopicsNProducts displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                </div>
                <InfoSection display={display} mobile={true}/>
                <MobileMenu toggleSearch={toggleSearch} toggleDrawerDisplay={toggleDrawerDisplay} displayDrawer={displayDrawer} displayMenu={displayMenu} toggleMobileMenu={toggleMobileMenu}/>
                <div className={`fixed bottom-16 z-40 left-2 right-2 md:left-48 md:right-48 shadow-2xl ${displayMenu ? 'block' : 'hidden'}`}>
                    <MobileDropdownMenu displayMenu={displayMenu} toggleMobileMenu={toggleMobileMenu}/>
                </div>
                <div className={`z-20 fixed bottom-16 right-2 left-2 md:left-48 md:right-48 shadow-2xl  ${displayDrawer ? 'block' : 'hidden'} transition-all duration-700 ease-in-out`}>
                    <LoginDrawer toggleClick={toggleDrawerDisplay} mobile={true}/>
                </div>
            </div>
        </nav>
    )
}
