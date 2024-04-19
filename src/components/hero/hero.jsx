import { useState } from "react";
import HeroCard from "./heroCard";
import Portal from "./portal";
import './hero.css'

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
        <section id="hero-section" className="bg-hero-bg lg:min-h-screen relative">
            <HeroCard toggleModal={toggleModal} modalDisplay={modalDisplay}/>
            <Portal modalDisplay={modalDisplay} toggleModal={toggleModal}/>
        </section>
    )
}