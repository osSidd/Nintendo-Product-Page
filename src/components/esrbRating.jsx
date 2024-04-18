import esrb from '../assets/specs/esrbRating.svg'

export default function EsrbRating({shadow, pl, py}){
    return (
        <a className={`flex flex-col xxs:flex-row items-center bg-white ${py} pr-2 xxs:pl-4 ${pl} lg:pr-14 rounded-xl ${shadow}`} href="https://www.esrb.org/ratings-guide/" rel="noreferrer" target="_blank">
            <img className='w-12 lg:w-16' src={esrb} alt="esrb"/>
            <div className='ml-4 w-4/5 mt-3 lg:mt-0 lg:w-auto text-xs font-light'>
                <div className='border-b border-gray-500 pb-1'>
                    Fantasy Violence, Use of Alcohol, Use of Tobacco, Simulated Gambling, Mild Language, Mild Blood
                </div>
                <div className='mt-1'>
                    Users Interact
                </div>
            </div>
        </a>
    )
}