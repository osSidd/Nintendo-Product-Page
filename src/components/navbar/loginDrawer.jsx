import Account from "../icons/account"
import Close from "../icons/close"
import Order from "../icons/order"
import Redeem from "../icons/redeem"
import Store from "../icons/store"

export default function LoginDrawer({toggleClick, mobile=false}){

    const btnClass = 'font-semibold text-xl w-full py-3 rounded-xl text-center block'
    const bottomBtns = 'font-semibold w-full py-3 bg-white flex items-center pl-8 pr-6'
    
    return(
        <div style={{height: mobile ? '70vh' : '100vh'}} className={`w-full rounded-t-3xl bg-nav-info ${mobile ? 'overflow-clip' : 'px-6 overflow-y-scroll'} pb-8 `}>
            <div className={`flex ${mobile ? 'justify-center bg-white py-6 px-4': 'justify-between mt-8'} items-center`}>
                <h2 className={`${mobile ? 'text-lg ml-auto' : 'text-xl'} font-bold`}>Log in / Sign up</h2>
                <span className={`cursor-pointer ${mobile ? 'ml-auto' : ''}`} onClick={toggleClick}><Close/></span>
            </div>
            <div className={`${mobile ? 'h-full overflow-y-auto pb-20 px-4' : ''}`}>
                <div className={`bg-white px-8 py-4 rounded-xl mt-8`}>
                    <img src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_300/Dev/Global%20Navigation/unauthd-asset.png" alt="login" />
                    <div>
                        <p className="font-semibold">With a free account, you can</p>
                        <div>
                            <p className="flex items-center mt-1">
                                <span className="mr-2"><Check/></span>
                                <span className="font-semibold text-sm">Shop online</span>
                            </p>
                            <p className="flex items-center mt-1">
                                <span className="mr-2"><Check/></span>
                                <span className="font-semibold text-sm">Earn My Nintendo points</span>
                            </p>
                            <p className="flex items-center mt-1">
                                <span className="mr-2"><Check/></span>
                                <span className="font-semibold text-sm">Save a Wish List</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="mt-5">
                    <a className={`${btnClass} bg-main text-white`} href="https://accounts.nintendo.com/authorize_guide?type=mixed&redirect_uri=https%3A%2F%2Faccounts.nintendo.com%2Fconnect%2F1.0.0%2Fauthorize%3Fclient_id%3D01fe027acd6bc0cf%26display%3Dtouch%26interacted%3D1%26prompt%3Dconsent%26redirect_uri%3Dhttps%253A%252F%252Fwww.nintendo.com%26response_mode%3Dweb_message%26response_type%3Dcode%2Bid_token%26scope%3DeshopDemo%2BeshopDevice%2BeshopPrice%2BfamilyMember%2Bmission%253AanyClients%2BmissionStatus%253AanyClients%2BmissionStatus%253Aprogress%2Bopenid%2BparentalControlSetting%2BpointTransaction%2BpointWallet%2Buser%2Buser.birthday%2Buser.email%2Buser.membership%2Buser.mii%2Buser.wishlist%26state%3D72e7607b474ec04a60c01f7c55fabed2%26web_message_target%3Dop-frame%26web_message_uri%3Dhttps%253A%252F%252Faccounts.nintendo.com" target="_blank" rel="noreferrer">Log in</a>
                </div>
                <div className="mt-4">
                    <a className={`${btnClass} bg-white border border-main text-main`} href="https://accounts.nintendo.com/authorize_age_gate_us?redirect_uri=https%3A%2F%2Fwww.nintendo.com%2Fus%2Fstore%2Fproducts%2Fstardew-valley-switch%2F&lang=en-us&_gl=1*syxdh1*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTIxMTcyOC4zMi4xLjE3MDUyMTY4MDYuMC4wLjA." target="_blank" rel="noreferrer">Sign up</a>
                </div>
                <div className="mt-5">
                    <a href="https://www.nintendo.com/us/orders/" className={`${bottomBtns} rounded-2xl flex items-center`}>
                        <span className="mr-2 text-main"><Order/></span>
                        <span>Order status</span>
                    </a>
                </div>
                <div className="mt-8 rounded-2xl overflow-hidden">
                    <div>
                        <a href="https://my.nintendo.com/?_gl=1*l3sg9q*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTIxOTcyNC4zMy4wLjE3MDUyMTk3MjQuMC4wLjA." className={`${bottomBtns} border-b border-gray-300 flex items-center`}>
                            <span className="mr-2 fill-main"><Store/></span>
                            <span>My Nintendo</span>
                            <span className="ml-auto"><Link/></span>
                        </a>
                    </div>
                    <div>
                        <a href="https://ec.nintendo.com/redeem/?_gl=1*1ocaxru*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTIxOTcyNC4zMy4wLjE3MDUyMTk3MjQuMC4wLjA.#/" className={`${bottomBtns} border-b border-gray-300 flex items-center `}>
                            <span className="mr-2 text-main"><Redeem/></span>
                            <span>Redeem code</span>
                            <span className="ml-auto"><Link/></span>
                        </a>
                    </div>
                    <div>
                        <a href="https://accounts.nintendo.com/?_gl=1*1gii9pc*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNTIxOTcyNC4zMy4wLjE3MDUyMTk3MjQuMC4wLjA." className={`${bottomBtns} flex items-center`}>
                            <span className="mr-2 text-main"><Account/></span>
                            <span>Account settings</span>
                            <span className="ml-auto"><Link/></span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

function Check(){
    return (
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="11" role="presentation" alt="" data-testid="CheckmarkIcon" size="11" color="currentColor"><path fill="currentColor" d="M26.737 2L12.786 21.945 4.047 15.82.5 20.394 14.204 30 31.5 5.274 26.737 2z"></path></svg>
    )
}

function Link(){
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="14" role="presentation" alt="" data-testid="OffsiteIcon" size="14" color="currentColor"><path d="M12.7 5.3v4H4V28h17.3v-8.7h4v10c0 1.5-1.2 2.7-2.7 2.7h-20C1.2 32 0 30.8 0 29.3V8c0-1.5 1.2-2.7 2.7-2.7h10zM32 0v16h-4V6.8L15.1 19.9 12.2 17l13-13H16V0h16z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path></svg>
    )
}