import Platform from '../platform'
import download from '../../assets/hero/download.svg'
export default function HeroText(){
    return(
        <div className='lg:w-5/12 mt-2 lg:mt-0 pl-10'>
            <Platform platform='Nintendo Switch'/>
            <h1 className='text-xl lg:text-3xl font-bold mt-4 lg:mt-6'>Stardew Valley</h1>
            <div className='flex justify-between mt-2 lg:mt-6'>
                <span className='text-2xl font-bold'>$14.99</span>
                <span><i className='fa fa-heart-o text-2xl font-bold text-main'></i></span>
            </div>
            <div className='flex items-center mt-4 lg:mt-8'>
                <img className='mr-2 w-6' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_100/Design%20System/Component%20Library/Icon/my-nintendo-gold-coin.png" alt="coin" />
                <small>Eligible for up to <span className='font-bold'>75</span> Gold Points</small>
            </div>
            <a className='mt-6 lg:mt-8 flex justify-center items-center py-4 px-4 bg-main text-white rounded-xl' href="https://ec.nintendo.com/title_purchase_confirm?title=70010000001801&_gl=1*1g3aizb*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDQzMzc0OS4xNS4xLjE3MDQ0MzUwODYuMC4wLjA." target='_blank' rel='noreferrer'>
                <img className='mr-3' src={download} alt="download" />
                <span className='lg:text-xl font-bold'>Direct Download</span>  
            </a>
            <div className='mt-2 text-center lg:text-left'>
                <small>This item will be sent to your system automatically after purchase.</small>
            </div>
        </div>
    )
}