import tvMode from '../../assets/specs/tvMode.svg'
import tableMode from '../../assets/specs/tableMode.svg'
import handMode from '../../assets/specs/handMode.svg'
import EsrbRating from '../esrbRating'

export default function ModesNRating(){
    return (
        <div className='mb-12 flex flex-col lg:flex-row gap-x-8 gap-y-4 lg:gap-y-0'>
            <div className='lg:w-1/2 pt-6 pb-12 px-10 bg-online rounded-xl'>
                <p className='text-center font-semibold mb-4'>ESRB rating</p>
                <EsrbRating shadow='shadow-lg' pl='pl-8' py='py-4'/>
            </div>
            <div className='lg:w-1/2 pt-6 pb-12 px-10 bg-online rounded-xl'>
                <p className='text-center font-semibold mb-4'>Supported play modes</p>
                <div>
                    <div className='flex flex-col lg:flex-row items-center justify-between'>
                        <div>
                            <img className='lg:w-36 bg-footer-heading px-12 py-4 rounded-xl shadow-lg' src={tvMode} alt="tv mode"/>
                            <p className='text-center font-semibold mt-4'>TV</p>
                        </div>
                        <div className='mt-4 lg:mt-0'>
                            <img className='bg-footer-heading px-12 py-4 rounded-xl shadow-lg' src={tableMode} alt="table mode"/>
                            <p className='text-center font-semibold mt-4'>Tabletop</p>
                        </div>
                        <div className='mt-4 lg:mt-0'>
                            <img className='bg-footer-heading px-12 py-4 rounded-xl shadow-lg' src={handMode} alt="hand mode"/>
                            <p className='text-center font-semibold mt-4'>Handheld</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}