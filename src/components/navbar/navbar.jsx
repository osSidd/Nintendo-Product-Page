import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu";
import InfoSection from "./infoSection";
import Offers from "./offers";
import UserMenu from "./userMenu";
import debounce from "../../utils/debounce";
import TopicsNProducts from "./TopicsNProducts";


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
        <nav className="relative pt-20">
            <div className="fixed top-0 left-0 w-full z-30 bg-white">
                <div className="">
                    <UserMenu displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                    <DropDownMenu/>
                </div>
            </div>
            <div className="mt-2">
                <Offers/>
            </div>
            <InfoSection display={display}/>
            {displaySearch ? <div className="absolute top-0 w-full z-30 pb-20 bg-white min-h-fit backdrop-contrast-150"><TopicsNProducts displaySearch={displaySearch} toggleSearch={toggleSearch}/> </div> : null}
        </nav>
    )
}