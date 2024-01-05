import { useState } from 'react'
import indicators from '../../static/heroImgs.json'

export default function LightBox({toggleModal=undefined, modalDisplay}){

    const [imgIndex, setImgIndex] = useState(0)
    const [animateClass, setAnimateClass] = useState('')

    function removeAnimation(){
        setTimeout(() => {
            setAnimateClass('')
        }, 500)
    }
    console.log(animateClass)
    function toggleImage(id=null, index=null){
        removeAnimation()
        switch(id){
            case 'L':
                setImgIndex(prev => prev === 0 ? indicators.length - 1 : prev - 1)
                setAnimateClass('animate-translate-img-right')
                return
            case 'R':
                setImgIndex(prev => prev === indicators.length - 1 ? 0 : prev + 1)
                setAnimateClass('animate-translate-img-left')
                return
            default:
                setImgIndex(index)
                setAnimateClass(index > imgIndex ? 'animate-translate-img-left' : 'animate-translate-img-right')
                return 
        }
    }

    return(
        <div className=" lg:w-7/12">
            <div className=" relative overflow-hidden">
                <span onClick={toggleModal} className={`z-20 absolute ${modalDisplay ? 'block': 'hidden'} text-white text-4xl right-4 top-2`} ><i className='pointer-events-none fa fa-close'></i></span>
                <img className={`${animateClass} rounded-2xl`} src={indicators[imgIndex]} alt="lightbox" />
                <div onClick={modalDisplay ? undefined : toggleModal} className={`opacity-0 hover:opacity-100 transition-opacity duration-300 flex ${modalDisplay ? 'cursor-pointer' : 'cursor-zoom-in'} absolute top-0 w-full h-full px-10 justify-between items-center text-white text-6xl z-0`}>
                    <span onClick={(e) => {e.stopPropagation(); toggleImage('L')}}><i className=" cursor-pointer fa fa-angle-left font-extrabold z-10"></i></span>
                    <span onClick={(e) => {e.stopPropagation(); toggleImage('R')}}><i className="cursor-pointer fa fa-angle-right font-extrabold z-10"></i></span>
                </div>
            </div>
            <div className='overflow-hidden mt-5'>
                <div className='flex w-screen'>
                    {
                        indicators.map((item, index, arr) => (
                            <div key={item} className='w-24 mr-4 relative'>
                                <img onClick={() => toggleImage(null, index)} className='opacity-60 hover:opacity-100 cursor-pointer w-full rounded-lg' src={item} alt="" />
                                <div className={`${index === imgIndex ? 'block' : 'hidden'} h-1 w-4/5 absolute bottom-0 right-1  mx-1 bg-red-600`}></div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>

    )
}