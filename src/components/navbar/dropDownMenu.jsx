import MenuHeading from './MenuHeading'
import store from '../../assets/navbar/store.svg'
import games from '../../assets/navbar/games.svg'
import NintendoSwitch from '../../assets/navbar/switch.svg'
import news from '../../assets/navbar/news.svg'
import play from '../../assets/navbar/play.svg'

export default function DropDownMenu(){
    return(
        <div className='flex items-center justify-center pt-2 border-t border-b border-gray-300'>
            <div className='mr-7 border-b-4 border-main pb-2'>
                <MenuHeading
                    startIcon={store}
                    menuText='My Nintendo Store'
                    endIcon={true}
                />
            </div>
            <div className='mr-7 pb-3'>
                <MenuHeading
                    startIcon={games}
                    menuText='Games'
                    endIcon={true}
                />
            </div>
            <div className='mr-7  pb-3'>
                <MenuHeading
                    startIcon={NintendoSwitch}
                    menuText='Nintendo Switch'
                    endIcon={true}
                />
            </div>
            <div className='mr-7  pb-3'>
                <MenuHeading
                    startIcon={news}
                    menuText='News & Events'
                />
            </div>
            <div className=' pb-3'>
                <MenuHeading
                    startIcon={play}
                    menuText='Play Nintendo'
                    endIcon={true}
                />
            </div>
        </div>
    )
}