import nintendo from '../../assets/footer/nintendo.svg'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagram.svg'
import twitter from '../../assets/footer/twitter.svg'
import youtube from '../../assets/footer/youtube.svg'

export default function Social(){
    return(
        <section className='flex flex-col md:flex-row justify-center md:justify-start items-center px-4 bg-main py-8'>
            <a className='md:mr-auto' href="https://www.nintendo.com/" target='_blank' rel='noreferrer' title='Nintendo Homepage'>
                <img src={nintendo} alt="nintendo"  className=''/>
            </a>
            <div className='w-8/12 md:w-auto mt-6 md:mt-0 flex flex-row justify-between md:justify-start'>
                <a href="https://www.facebook.com/NintendoAmerica/" target='_blank' rel='noreferrer' title='Nintendo on facebook'>
                    <img src={facebook} alt="facebook"/>
                </a>
                <a className='md:ml-14' href="https://www.instagram.com/nintendoamerica/" target='_blank' rel='noreferrer' title='Nintendo on instagram'>
                    <img src={instagram} alt="instagram"/>
                </a>
                <a className='md:ml-14' href="https://twitter.com/NintendoAmerica" target='_blank' rel='noreferrer' title='Nintendo on twitter'>
                    <img src={twitter} alt="twitter" />
                </a>
                <a className='md:ml-14' href="https://www.youtube.com/nintendo" target='_blank' rel='noreferrer' title='Nintendo on youtube'>
                    <img src={youtube} alt="youtube" />
                </a>
            </div>
        </section>
    )
}