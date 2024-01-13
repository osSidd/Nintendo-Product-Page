import DropDownCard from "./dropDownCard";

export default function DropDownMenuSection({clicked, dropdownObj}){
    console.log(dropdownObj)
    return(
        <div className={`${clicked ? 'flex' : 'hidden'} shadow-xl items-center justify-center absolute bg-white w-full h-40 px-44 top-12 left-0 z-40`}>
            {
                dropdownObj.map(obj => (
                    <a href={obj.href} target="_blank" rel="noreferrer" key={obj.id}>
                        <DropDownCard CardIcon={obj.icon} label={obj.label}/>
                    </a>
                ))
            }
        </div>
    )
}