import Cart from "../icons/cart";
import Close from "../icons/close";
import Search from "../icons/search";
import User from "../icons/user";
import Wish from "../icons/wish";

export default function MobileMenu({toggleSearch, toggleDrawerDisplay, displayDrawer, displayMenu, toggleMobileMenu}){
    return (
        <div className="bg-white shadow-2xl fixed bottom-4 left-2 right-2 md:left-48 md:right-48 lg:left-2 lg:right-2 z-50 flex items-center justify-between px-8 h-16 rounded-full text-footer-heading">
            <span onClick={() => {
                toggleMobileMenu();
                if(displayDrawer) toggleDrawerDisplay();
            }}>
                {displayMenu ? <Close color='#484848' w={48}/> : <i className="fa fa-navicon text-3xl"></i>}
            </span>
            <a href="https://www.nintendo.com/us/wish-list/" target="_blank" rel="noreferrer">
                <Wish color='#484848' w={28}/>
            </a>
            <div className="bg-main p-4 mb-4 -mx-2 rounded-full" onClick={toggleSearch}>
                <Search w={32} color='white'/>
            </div>
            <a href="https://www.nintendo.com/us/cart/" target="_blank" rel="noreferrer">
                <Cart color='#484848' w={28}/>
            </a>
            <span onClick={() => {
                toggleDrawerDisplay();
                if(displayMenu) toggleMobileMenu();
            }}>
                {displayDrawer ? <Close color='#484848' w={48}/> : <User color='#484848' w={28}/>}
            </span>
        </div>
    )
}