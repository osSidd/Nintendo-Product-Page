import specIcons from '../../static/specIcons'
import specData from '../../static/specs.json'

export default function Details(){
    return (
        <div className='mb-32'>
            <ul className='[&>li:first-child]:border-t border-border text-footer-heading'>
                {
                    specIcons.map((icon, index) => (
                        <li className='flex items-start lg:items-center border-b border-border py-4 px-2' key={icon.id}>
                            <img className='mr-4' src={icon.icon} alt='icon' />
                            <p className='grid md:grid-cols-12 items-center w-full'>
                                <span className='font-semibold text-lg md:col-start-1 md:col-span-4'>{specData[index].label}</span>
                                <span className='md:col-start-5 md:col-end-12'>
                                    {
                                        specData[index].content.map((d, dIndex, arr) => (
                                            <span 
                                                key={d.href ? d.label : d}
                                            >
                                                {d.href ? 
                                                <a 
                                                    className='text-main font-semibold underline decoration-2 underline-offset-4 mr-4' 
                                                    href={d.href} 
                                                    target='_blank' 
                                                    rel='noreferrer'
                                                >{d.label}</a> : 
                                                `${d}${dIndex !== arr.length-1 ? ',' : ''} `}
                                            </span>
                                        ))
                                    }
                                </span>
                            </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}