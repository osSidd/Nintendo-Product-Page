import { useState } from 'react'
import './menu.css'
export default function MenuHeading({startIcon=null, menuText, endIcon=null, color='', href=''}){
    
    const [menuItemClicked, setMenuItemClicked] = useState(false)

    return (
        <a href={href} onClick={e => {!href && e.preventDefault(); setMenuItemClicked(prev => !prev)}} target='_blank' rel='noreferrer'>
            <div className="flex items-center change transition-colors duration-400 ease-in-out cursor-pointer">
                {startIcon ? startIcon: null}
                <span className={`mx-2 font-semibold text-sm ${color}`}>{menuText}</span>
                {endIcon ? <span><i className={`text-xl font-bold fa fa-angle-down ${menuItemClicked ? 'rotate-180' : 'rotate-0'} transition-transform duration-300 ease-in-out mt-0.5 ${color}`}></i></span> : null}
            </div>
        </a>
    )
}