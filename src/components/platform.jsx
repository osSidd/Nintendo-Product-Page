export default function Platform({platform, icon=null}){
    return(
        <div className="flex items-center justify-between w-full mt-2">
            <p className="border-l-2 border-red-400 pl-2">{platform}</p>
            {icon ? <span><i className="fa fa-heart-o text-red-500 text-xl"></i></span>: null}
        </div>
    )
}