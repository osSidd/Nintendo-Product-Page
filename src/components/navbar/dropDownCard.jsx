export default function DropDownCard({CardIcon, label}){
    return(
        <div className={`mx-4 text-center hover:fill-white hover:text-white [&>div:first-child]:hover:bg-main [&>div:last-child]:hover:text-main transition-colors duration-400 ease-in-out`}>
            <div className={`border border-gray-300 rounded-2xl ${typeof(CardIcon) === 'string' ? 'w-auto ' : 'w-28'} h-16 pt-1 flex justify-center items-center`}>
                {typeof(CardIcon) === 'string' ? <img src={CardIcon} alt="card image" className="w-5/6"/> : <CardIcon w={42}/>}
            </div>
            <div className="text-gray-600 text-sm mt-2">
                {label}
            </div>
        </div>
    )
}