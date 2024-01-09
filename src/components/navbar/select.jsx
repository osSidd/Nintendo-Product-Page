import { useState } from "react"
import MenuHeading from "./MenuHeading"

export default function Select(){
    const optArr = ['All categories', 'Games', 'Hardware', 'Merchandise', 'News & Events', 'Support']
    const [clicked, setClicked] = useState(false)
    const [option, setOption] = useState(optArr[0])
    return(
        <div tabIndex={-1} onBlur={e => {e.relatedTarget === null && setClicked(false)}} onClick={() => setClicked(prev => !prev)} className="relative">
             <MenuHeading
                menuText={option}
                endIcon={true}
            />
            {clicked ? <div className=" cursor-pointer absolute top-6 left-0 w-32 py-2 text-sm shadow-lg rounded-xl bg-white ">
                {
                    optArr.map(opt => (
                        <div key={opt} onClick={() => setOption(opt)} className="mt-2 hover:bg-slate-200 px-2">{opt}</div>
                    ))
                }
            </div> : null}
        </div>
    )
}