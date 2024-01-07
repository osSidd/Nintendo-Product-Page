import './menu.css'
export default function MenuHeading({startIcon=null, menuText, endIcon=null, color='', href='#' }){
    return (
        <a href={href} target='_blank' rel='noreferrer'>
            <div className="flex items-center change transition-colors duration-400 ease-in-out cursor-pointer">
                {startIcon ? startIcon: null}
                <span className={`mx-2 font-semibold text-sm ${color}`}>{menuText}</span>
                {endIcon ? <span><i className={`text-xl font-bold fa fa-angle-down ${color}`}></i></span> : null}
            </div>
        </a>
    )
}