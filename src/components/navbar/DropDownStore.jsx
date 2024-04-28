export default function DropDownStore({obj}){
    const Icon = obj.icon
    return(
        <div className="mx-auto">
            <a href={obj.href} rel="noreferrer" target="_blank" className="flex items-center">
                <span className="mr-2 text-main"><Icon color='#e60012'/></span>
                <span className="font-semibold hover:text-main">{obj.label}</span>
            </a>
            <div className="mt-2">
                {
                    obj.links.map(link => (
                        <div key={link.label} className="mt-1 hover:text-main">
                            <a className="text-sm" href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}