import online from '../../assets/specs/online.svg'
export default function Online(){
    return(
        <div className='bg-online flex flex-col lg:flex-row justify-between rounded-2xl px-8'>
            <div className='mt-6 lg:max-w-lg text-footer-heading'>
                <img src={online} alt="online" />
                <p className='mt-6 text-xl font-bold text-footer-heading'>
                    Play online, access classic NES™ and Super NES™ games, and more with a Nintendo Switch Online membership.
                </p>
                <p className='mt-4 font-semibold'>
                    This game supports: <a className='text-main underline underline-offset-4 decoration-2 mr-3' href="https://www.nintendo.com/us/switch/online/" target='_blank' rel='noreferrer'>Online Play</a> <a className='text-main underline underline-offset-4 decoration-2' target='_blank' rel='noreferrer' href="https://www.nintendo.com/us/switch/online/">Save Cloud Data</a>
                </p>
                <a href="https://www.nintendo.com/us/switch/online/" target='_blank' rel='noreferrer'><button className='mt-5 bg-main text-white px-5 py-3 rounded-xl text-lg font-bold'>Learn more</button></a>
            </div>
            <img src="https://assets.nintendo.com/image/upload/f_auto,q_auto/v1605147657/ncom/en_US/merchandising/curated%20list/Games%20for%20core%20gamers/Pro-Controller-Hands.png" alt="online" />
        </div>
    )
}