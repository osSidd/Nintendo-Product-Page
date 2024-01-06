export default function MenuHeading({startIcon=null, menuText, endIcon=null }){
    return (
        <div className="flex items-center">
            {startIcon ? <img className="mr-1" src={startIcon} alt="start icon"/>: null}
            <span className="mr-2 font-semibold">{menuText}</span>
            {endIcon ? <span><i className="text-xl mt-1 font-bold fa fa-angle-down"></i></span> : null}
        </div>
    )
}