export default function DropDownCard({CardIcon, label}){
    return(
        <div className="mx-4 text-center hover:text-white [&>div:first-child]:hover:bg-main [&>div:last-child]:hover:text-main transition-colors duration-500 ease-in-out">
            <div className="border border-gray-300 rounded-2xl w-28 h-16 flex justify-center items-center ">
                <CardIcon/>
            </div>
            <div className="text-gray-600 text-sm mt-2">
                {label}
            </div>
        </div>
    )
}