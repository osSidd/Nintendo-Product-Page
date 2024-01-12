import MenuHeading from './MenuHeading'

import dropdownObj from '../../static/dropdown'

import Store from '../icons/store'
import Games from '../icons/games'
import Switch from '../icons/switch'
import News from '../icons/news'
import Play from '../icons/play'
import DropDownMenuSection from './dropDownMenuSection'

export default function DropDownMenu(){
    return(
        <div className='flex items-center justify-center pt-2 border-t border-b border-gray-300 z-50 relative'>
            <div className='mr-10 border-b-4 border-main pb-1'>
                <MenuHeading
                    startIcon={<Store color='#e60012' w={16}/>}
                    menuText='My Nintendo Store'
                    endIcon={true}
                    color='text-main'
                />
            </div>
            <div className='mr-10 pb-2'>
                <MenuHeading
                    startIcon={<Games w={16}/>}
                    menuText='Games'
                    endIcon={true}
                />
            </div>
            <div className='mr-10  pb-2'>
                <MenuHeading
                    startIcon={<Switch w={16}/>}
                    menuText='Nintendo Switch'
                    endIcon={true}
                />
            </div>
            <div className='mr-10  pb-2'>
                <MenuHeading
                    startIcon={<News w={16}/>}
                    menuText='News & Events'
                    href='https://www.nintendo.com/us/whatsnew/'
                />
            </div>
            <div className=' pb-2'>
                <MenuHeading
                    startIcon={<Play w={16}/>}
                    menuText='Play Nintendo'
                    endIcon={true}
                />
                <DropDownMenuSection dropdownObj={dropdownObj.play} />
            </div>
        </div>
    )
}