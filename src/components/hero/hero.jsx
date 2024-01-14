import { useState } from "react";
import HeroCard from "./heroCard";
import LightBox from "./lightbox";

export default function Hero(){

    const [modalDisplay, setModalDisplay] = useState(false)

    function toggleModal(){
        let body = document.querySelector('body')
        if(modalDisplay){
            body.style.overflow = 'auto'
        }
        else{
            body.style.overflow = 'hidden'
        }
        
        setModalDisplay(prev => !prev)


    }

    return (
        <section className="bg-hero-bg lg:min-h-screen relative">
            <HeroCard toggleModal={toggleModal} modalDisplay={modalDisplay}/>
            <div className={`${modalDisplay ? 'block' : 'hidden'} transition-display duration-500 ease-in-out backdrop-blur backdrop-contrast-70 absolute w-full h-screen top-0 left-0 flex items-center justify-center z-50`}>
                <LightBox toggleModal={toggleModal} modalDisplay={modalDisplay}/>
            </div>
        </section>
    )
}