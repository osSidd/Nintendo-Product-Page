import CarouselCard from "./carouselCard";
import products from '../../static/otherProducts.json'
import { useState } from "react";

export default function Carousel(){
    const [x, setX] = useState(0)

    function translateX(e){
        const id = e.target.id
        switch(id){
            case 'R':{
                setX(prev => prev + 19.5)
                break
            }
            case 'L':{
                setX(prev => prev - 19.5)
                break
            }
        }
    }
console.log(x)
    return(
        <div className="mt-8 mb-12 px-6 overflow-hidden relative">
            <div 
                style={{transform: x ? `translateX(${x}rem)`: null}} 
                className="mt-6 flex items-start transition-all duration-500 ease-out w-full"
            >
                {
                    products.map(product => (
                        <CarouselCard
                            key={product.img}
                            product={product}
                        />
                    ))
                }
            </div>
            {x > -250 ? <CarouselButton
                id='L'
                content='right'
                handleClick={translateX}
            /> : null }
            {x ? <CarouselButton
                id='R'
                content='left'
                handleClick={translateX}
            /> : null}
        </div>
    )
}

function CarouselButton({id, content, handleClick}){
    return (
        <button 
            id={id} 
            onClick={handleClick} 
            className={`bg-gray-800 opacity-10 hover:opacity-60 border-none p-4 absolute top-0 ${content}-0 h-full w-20 rounded-lg`}
        >
            <i className={`text-8xl text-white font-extrabold fa fa-angle-${content} pointer-events-none`}></i>
        </button>
    )
}