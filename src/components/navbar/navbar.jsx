import DropDownMenu from "./dropDownMenu";
import Offers from "./offers";
import UserMenu from "./userMenu";

export default function Navbar(){
    return (
        <nav>
            <UserMenu/>
            <DropDownMenu/>
            <Offers/>
        </nav>
    )
}