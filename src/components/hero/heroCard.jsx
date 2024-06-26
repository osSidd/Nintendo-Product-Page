import BreadCrumbs from "./breadCrumbs";
import LightBox from "./lightbox";
import EsrbRating from '../esrbRating'
import HeroText from "./heroText";

export default function HeroCard({toggleModal, modalDisplay}){
    return(
        <div className="bg-white pt-4 px-4 lg:pt-6 lg:px-12 pb-8 lg:pb-20 lg:absolute top-10 right-4 left-4 -bottom-6 shadow-lg rounded-2xl">
            <BreadCrumbs/>
            <div className="mt-6 flex flex-col md:flex-row items-between md:items-start justify-between">
                <LightBox toggleModal={toggleModal} modalDisplay={modalDisplay}/>
                <HeroText/>
            </div>
            <div className="hidden md:block w-5/12 mt-8">
                <EsrbRating/>
            </div>
        </div>
    )
}