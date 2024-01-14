import StoreMenu from "../icons/storemenu";
import DropDownStore from "./DropDownStore";
import DropDownCard from "./dropDownCard";
import Close from '../icons/close';

export default function DropDownMenuSection({clicked, dropdownObj, store=false, toggleClicked}){
    return(
        <div className={`${clicked ? 'block' : 'hidden'} shadow-xl absolute bg-white w-full top-12 left-0 z-40`}>
            <div onClick={toggleClicked} className="absolute right-4 top-4 cursor-pointer"><Close/></div>
            {
                store ? 
                <div className="h-80">
                    <div className="flex items-center justify-center pt-6 bg-main">
                        <a href="https://www.nintendo.com/us/store/" target="_blank" rel="noreferrer"><span className="mr-4 text-white"><StoreMenu w={24}/></span></a>
                    </div>
                    <div className="bg-[url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNDVweCIgaGVpZ2h0PSIxNHB4IiB2aWV3Qm94PSIwIDAgNDUgMTQiIHZlcnNpb249IjEuMSIKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDx0aXRsZT5TdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuPC90aXRsZT4KICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIGlkPSJTdG9yZWZyb250LWF3bmluZy1wYXR0ZXJuIiBmaWxsPSIjRTYwMDEyIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgICAgICA8cGF0aCBkPSJNNDUsMCBMMCwwIEwwLDEzLjc3MzY4IEMxLjMzMzAyMDAxLDEzLjgzNzcxOTMgMi42NDkxNDAxMywxMy40NTM5MDE4IDMuNzM4NzcsMTIuNjgzMzUgTDE5LjI4NDQ4LDEuNjI4NjYgQzIxLjM2NjIzOTQsMC4xNDgzMTg1OTggMjQuMTU3MDEwNiwwLjE0ODMxODU5OCAyNi4yMzg3NywxLjYyODY2IEw0MS43ODQ0OCwxMi42ODMzNSBDNDIuNzI4MzU2MywxMy4zNTAwNDM4IDQzLjg0NTI4NSwxMy43Mjg3NzYgNDUsMTMuNzczNjggTDQ1LDAgWiIgaWQ9IlBhdGgiPjwvcGF0aD4KICAgICAgICA8L2c+CiAgICA8L2c+Cjwvc3ZnPg==')] h-4 bg-contain"></div>
                    <div className="grid grid-cols-6 px-28 mt-4">
                        { dropdownObj.map(obj => (
                            <DropDownStore key={obj.label} obj={obj}/>
                        ))}
                    </div>
                    <div className='flex justify-center items-center mt-4'>
                        <a className="border border-main px-6 py-3 rounded-xl font-semibold text-main" href="https://www.nintendo.com/us/store/" target="_blank" rel="noreferrer">Shop all</a>
                    </div>
                </div>
                : 
                <div className="flex items-center h-40 px-44 justify-center">
                    {dropdownObj.map(obj => (
                        <a href={obj.href} target="_blank" rel="noreferrer" key={obj.id}>
                            <DropDownCard CardIcon={obj.icon} label={obj.label}/>
                        </a>
                    ))}
                </div>
            }
            
        </div>
    )
}