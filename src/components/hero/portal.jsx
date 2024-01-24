import { createPortal } from "react-dom";
import LightBox from "./lightbox";

export default function Portal({modalDisplay, toggleModal}){
    const y = window.scrollY
    let el = <div 
                style={{top: y}}
                className={`${modalDisplay ? 'block' : 'hidden'} transition-display duration-500 ease-in-out backdrop-blur backdrop-contrast-70 absolute w-full h-screen left-0 flex items-center justify-center z-50`}>
                    <LightBox toggleModal={toggleModal} modalDisplay={modalDisplay}/>
            </div>
    return createPortal(el, document.getElementById('modals'))
}