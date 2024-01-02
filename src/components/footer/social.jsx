import nintendo from '../../assets/nintendo.svg'
import facebook from '../../assets/footer/facebook.svg'
import instagram from '../../assets/footer/instagram.svg'
import twitter from '../../assets/footer/twitter.svg'
import youtube from '../../assets/footer/youtube.svg'

export default function Social(){
    return(
        <section className='flex items-center px-4 bg-main py-8'>
            <a className='mr-auto' href="https://www.nintendo.com/" target='_blank' rel='noreferrer' title='Nintendo Homepage'>
                <img src={nintendo} alt="nintendo"  className=''/>
            </a>
            <a href="https://www.facebook.com/NintendoAmerica/" target='_blank' rel='noreferrer' title='Nintendo on facebook'>
                <img src={facebook} alt="facebook"/>
            </a>
            <a className='ml-14' href="https://www.instagram.com/nintendoamerica/" target='_blank' rel='noreferrer' title='Nintendo on instagram'>
                <img src={instagram} alt="instagram"/>
            </a>
            <a className='ml-14' href="https://twitter.com/NintendoAmerica" target='_blank' rel='noreferrer' title='Nintendo on twitter'>
                <img src={twitter} alt="twitter" />
            </a>
            <a className='ml-14' href="https://www.youtube.com/nintendo" target='_blank' rel='noreferrer' title='Nintendo on youtube'>
                <img src={youtube} alt="youtube" />
            </a>
        </section>
    )
}