import CopyrightLinks from '../../static/copyrightLinks.json'

export default function Copyright(){

    const linkClassStr = `
            text-copyright-links lg:font-semibold 
            underline-offset-4 decoration-2 hover:underline 
            transition-all duration-1000 ease-in-out md:whitespace-nowrap
        `

    return(
        <section className='flex flex-col lg:flex-row items-center justify-between px-4 py-8 bg-footer-bg'>
            <small className='md:w-5/12 xl:w-6/12 text-center lg:text-left text-copyright-address'>
                &copy; Nintendo. Games are property of their respective owners. Nintendo of America Inc. Headquarters are in Redmond, Washington, USA
            </small>
            <div className='mt-8 lg:mt-0 flex flex-col md:flex-row justify-center items-center md:w-6/12'>
                {
                    CopyrightLinks.map(link => (
                        <small key={link.href} className='ml-4 mt-2 md:mt-0'>
                            <a 
                                href={link.href} 
                                target='_blank' 
                                rel='noreferrer' 
                                className={linkClassStr + 'decoration-main'}
                            >
                                {link.label}
                            </a>
                        </small>
                    ))
                }
                <a className='mt-2 md:mt-0 flex ml-6 items-center' href='https://www.nintendo.com/us/regionselector/' rel='noreferrer' target='_blank'>
                    <img 
                        src='https://assets.nintendo.com/image/upload/c_scale,w_24,q_auto/ncom/global/flags-change-region/FlagUsaIconRegionSelect.webp' 
                        alt="region" 
                    />
                    <small className={linkClassStr + 'decoration-white ml-2 '}>
                        English (United States)
                    </small>
                </a>
            </div>
        </section>
    )
}