import topics from '../../static/topics.json'
import store from '../../static/store.json'

import Platform from '../platform'
import LogoSearch from './logoSearch'
import Close from '../icons/close'

export default function TopicsNProducts({displaySearch, toggleSearch}){
    return(
        <div className='h-full'>
            <div className='flex items-center justify-between'>
                <LogoSearch displaySearch={displaySearch} toggleSearch={toggleSearch} />
                <div className="ml-auto mr-6 mt-3 cursor-pointer" onClick={toggleSearch}><Close/></div>
            </div>
            <div className='pl-32 pt-8'>
                <h2 className=' text-footer-heading font-bold mb-2'>Trending topics</h2>
                <div className='flex flex-col'>
                    {
                        topics.map(topic => (
                            <a key={topic.label} href={topic.href} rel='noreferrer' target='_blank' className='mt-2 text-main font-bold'>{topic.label}</a>
                        ))
                    }
                </div>
                <h2 className=' text-footer-heading font-bold mb-2 mt-8'>Top store products</h2>
                <div className='grid grid-cols-2 gap-x-4 gap-y-4 w-2/3 mt-4'>
                    {
                        store.map(str => (
                            <a key={str.label} href={str.href} target='_blank' rel='noreferrer'>
                            <div className='overflow-hidden h-20 flex items-center border border-gray-300 rounded-3xl'>
                                <img className='h-full w-40' src={str.img} alt="image"/>
                                <div className='w-full mx-3 py-2'>
                                    <h3 className='font-semibold text-sm'>{str.label}</h3>
                                    <Platform platform={str.platform} icon={true}/>
                                </div>
                            </div>
                            </a>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}