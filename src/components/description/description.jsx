import { useState } from 'react'
import Wrapper from '../wrapper'
export default function Description(){

    const [displayPara, setDisplayPara] = useState(false)

    function toggleDisplay(){
        setDisplayPara(prev => !prev)
    }
 
    return(
        <section>
            <Wrapper>
                <div className='flex flex-col lg:flex-row items-start'>
                    <div className='w-full lg:w-6/12 pr-6'>
                        <h2 className='text-xl font-bold'>You&apos;re moving to the valley...</h2>
                        <p className='mt-4'>
                            You’ve inherited your grandfather’s old farm plot in Stardew Valley. Armed with hand-me-down tools and a few coins, you set out to begin your new life. Can you learn to live off the land and turn these overgrown fields into a thriving home? It won’t be easy. Ever since Joja Corporation came to town, the old ways of life have all but disappeared. The community center, once the town’s most vibrant hub of activity, now lies in shambles. But the valley seems full of opportunity. With a little dedication, you might just be the one to restore Stardew Valley to greatness!
                        </p> 
                        <p className={`mt-4 ${displayPara ? '' : 'truncate'}`} >
                            Now with Multiplayer! Invite 1-3 players to join you in the valley! Players can work together to build a thriving farm, share resources, and build relationships with townspeople or each other. As more hands are better than one, players have the option to scale profit margin on produce sold for a more challenging experience.
                        </p>
                        <button className='text-main' onClick={toggleDisplay}>
                            {displayPara ? <span className='text-3xl font-extrabold mr-1'>&#8722;</span> :
                            <span className='text-3xl font-extrabold mr-1'>&#43;</span>}
                            <span className='text-xl font-bold'>Read more</span>
                        </button>
                        <div className='mt-1'>
                            <small>Software description provided by the publisher.</small>
                        </div>
                        <a className='bg-main text-white font-bold px-6 py-4 rounded-xl mt-4 block w-fit' href="http://www.stardewvalley.net/" target='_blank' rel='noreferrer'>Explore this game&apos;s official website</a>
                    </div>
                    <div className='mt-6 lg:mt-0 lg:w-6/12 rounded-2xl overflow-hidden'>
                        <img className='w-full' src="https://assets.nintendo.com/image/upload/f_auto/q_auto/dpr_1.5/c_scale,w_600/ncom/en_US/games/switch/s/stardew-valley-switch/hero" alt="description" />
                    </div>
                </div>
            </Wrapper>
        </section>
    )
}