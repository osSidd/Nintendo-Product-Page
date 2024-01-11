import shipping from '../../assets/navbar/shipping.svg'
import coins from '../../assets/navbar/coins.svg'

export default function Offers(){
    return (
        <div className='flex items-center justify-center pb-3 pt-5 bg-online'>
            <div className='flex items-center mr-4'>
                <img className='mr-2' src={shipping} alt='shipping' />
                <p className='mr-1'>
                    <span className='mr-1 font-bold'>Free shipping</span>
                    on orders $50 or more.
                </p>
                <a className='underline' href="https://en-americas-support.nintendo.com/app/answers/detail/a_id/15575?_gl=1*kuu80u*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDUyMTUxMi4yMi4xLjE3MDQ1MjI3OTMuMC4wLjA." target="_blank" rel="noreferrer"> Restrictions apply.
                </a>
            </div>
            <div className='flex items-center border-l border-gray-400 pl-4'>
                <img className='mr-2' src={coins} alt='coins' />
                <p>
                    <span className='mr-1'>Earn</span>
                    <a className='underline mr-1 font-bold' href="https://my.nintendo.com/about_gold_point?_gl=1*14cicqn*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDUyMTUxMi4yMi4xLjE3MDQ1MjI3OTMuMC4wLjA." target="_blank" rel="noreferrer">My Nintendo Points
                    </a>
                    <span>on digital games</span>
                </p>
            </div>
        </div>
    )
}