import { createPortal } from "react-dom";
import LightBox from "./lightbox";

export default function Portal({modalDisplay, toggleModal}){
    const y = window.scrollY
    console.log(y)
    let el = <div 
                style={{top: y}}
                className={`${modalDisplay ? 'block' : 'hidden'} transition-display duration-500 ease-in-out backdrop-blur-md backdrop-brightness-50 absolute w-full h-screen left-0 flex items-center justify-center z-50`}>
                    <LightBox toggleModal={toggleModal} modalDisplay={modalDisplay}/>
            </div>
    return createPortal(el, document.getElementById('modals'))
}