import { useState } from "react";
import DropDownMenu from "./dropDownMenu";
import InfoSection from "./infoSection";
import Offers from "./offers";
import UserMenu from "./userMenu";

export default function Navbar(){

    const [display, setDisplay] = useState(false)

    return (
        <nav className="relative pt-20">
            <div className="fixed top-0 left-0 w-full z-50 bg-white">
                <div className="z-40">
                    <UserMenu/>
                    <DropDownMenu/>
                </div>
                <InfoSection display={display}/>
            </div>
            <div className="mt-2">
                <Offers/>
            </div>
        </nav>
    )
}