import { useState } from 'react'

import MenuHeading from './MenuHeading'
import DropDownMenuSection from './dropDownMenuSection'

import dropdownObj from '../../static/dropdown'

import Store from '../icons/store'
import Games from '../icons/games'
import Switch from '../icons/switch'
import News from '../icons/news'
import Play from '../icons/play'

export default function DropDownMenu(){

    const [clicked, setClicked] = useState({
        store: false,
        games: false,
        switch: false,
        play: false
    })

    function toggleClicked(name){
        setClicked(prev => {
            let obj = {}
            for(let i in prev){
                if(i === name) obj[i] = !prev[i]
                else obj[i] = false
            }
            return obj
        })
    }

    return(
        <div className='flex items-center justify-center pt-2 border-t border-b border-gray-300 z-40 relative'>
            <div className='mr-10 border-b-4 border-main pb-1'>
                <MenuHeading
                    startIcon={<Store color='#e60012' w={16}/>}
                    menuText='My Nintendo Store'
                    endIcon={true}
                    color='text-main'
                    clicked={clicked.store}
                    toggleClicked={() => toggleClicked('store')}
                />
                <DropDownMenuSection toggleClicked={toggleClicked} clicked={clicked.store} dropdownObj={dropdownObj.store} store={true} />
            </div>
            <div className='mr-10 pb-2'>
                <MenuHeading
                    startIcon={<Games w={16}/>}
                    menuText='Games'
                    endIcon={true}
                    clicked={clicked.games}
                    toggleClicked={() => toggleClicked('games')}
                />
                <DropDownMenuSection toggleClicked={toggleClicked} clicked={clicked.games} dropdownObj={dropdownObj.games} />
            </div>
            <div className='mr-10  pb-2'>
                <MenuHeading
                    startIcon={<Switch w={16}/>}
                    menuText='Nintendo Switch'
                    endIcon={true}
                    clicked={clicked.switch}
                    toggleClicked={() => toggleClicked('switch')}
                />
                <DropDownMenuSection toggleClicked={toggleClicked} clicked={clicked.switch} dropdownObj={dropdownObj.switch} />
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
                    clicked={clicked.play}
                    toggleClicked={() => toggleClicked('play')}
                />
                <DropDownMenuSection toggleClicked={toggleClicked} clicked={clicked.play} dropdownObj={dropdownObj.play} />
            </div>
        </div>
    )
}