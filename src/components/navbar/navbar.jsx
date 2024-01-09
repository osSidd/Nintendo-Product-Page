import { useEffect, useState } from "react";
import DropDownMenu from "./dropDownMenu";
import InfoSection from "./infoSection";
import Offers from "./offers";
import UserMenu from "./userMenu";
import debounce from "../../utils/debounce";

export default function Navbar(){

    const [display, setDisplay] = useState(false)

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
            <div className="fixed top-0 left-0 w-full z-50 bg-white">
                <div className="">
                    <UserMenu/>
                    <DropDownMenu/>
                </div>
            </div>
            <div className="mt-2">
                <Offers/>
            </div>
            <InfoSection display={display}/>

        </nav>
    )
}