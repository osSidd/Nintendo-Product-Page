import MenuHeading from "./MenuHeading";
import support from '../../assets/navbar/support.svg'
import wish from '../../assets/navbar/wish.svg'
import cart from '../../assets/navbar/cart.svg'
import user from '../../assets/navbar/user.svg'
import logo from '../../assets/footer/nintendo.svg'
import search from '../../assets/navbar/search.svg'

export default function UserMenu(){
    return(
        <div className="flex ">
            <div className="flex items-center w-5/12">
                <div className="bg-main w-fit px-6 py-4 mr-auto">
                    <img className='w-16' src={logo} alt="nintendo" />
                </div>
                <div className="flex items-center justify-between border-b border-gray-400 w-96">
                    <MenuHeading
                        startIcon={search}
                        menuText='Search'
                    />
                    <MenuHeading
                        menuText='All categories'
                        endIcon={true}
                    />
                </div>
            </div>
            <div className="ml-auto flex items-center mr-4">
                <div className='mr-7'>
                    <MenuHeading
                        startIcon={support}
                        menuText='Support'
                    />
                </div>
                <div className='mr-7'>
                    <MenuHeading
                        startIcon={wish}
                        menuText='Wish List'
                    />
                </div>
                <div className='mr-7'>
                    <MenuHeading
                        startIcon={cart}
                        menuText='Cart'
                    />
                </div>
                <div className='mr-7'>
                    <MenuHeading
                        startIcon={user}
                        menuText='Log in / Sign up'
                    />
                </div>
                <img 
                    src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp' 
                    alt="region" 
                />
            </div>
        </div>
    )
}