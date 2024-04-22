import Cart from "../icons/cart";
import Close from "../icons/close";
import Search from "../icons/search";
import User from "../icons/user";
import Wish from "../icons/wish";

export default function MobileMenu({toggleSearch, toggleDrawerDisplay, displayDrawer}){
    return (
        <div className="bg-white shadow-2xl fixed bottom-4 left-2 right-2 md:left-48 md:right-48 lg:left-2 lg:right-2 z-50 flex items-center justify-between px-8 h-16 rounded-full">
            <span><i className="fa fa-navicon text-3xl"></i></span>
            <a href="https://www.nintendo.com/us/wish-list/" target="_blank" rel="noreferrer">
                <Wish w={28}/>
            </a>
            <div className="bg-main p-4 mb-4 -mx-2 rounded-full" onClick={toggleSearch}>
                <Search w={32} color='white'/>
            </div>
            <a href="https://www.nintendo.com/us/cart/" target="_blank" rel="noreferrer">
                <Cart w={28}/>
            </a>
            <span onClick={toggleDrawerDisplay}>
                {displayDrawer ? <Close w={48}/> : <User w={28}/>}
            </span>
        </div>
    )
}