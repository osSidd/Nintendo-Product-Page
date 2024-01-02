import footerLinks from '../../static/footerLinks.json'
import esrb from '../../assets/esrb.svg'

export default function FooterLinks(){
    return (
        <section
            className='grid grid-cols-4 gap-y-8 px-4 pt-12 pb-32 relative'
        >
            {
                footerLinks.map(links => (
                    <ul className='[&>li+li]:mt-1 pl-8 border-l border-border' key={links.heading.href}>
                        <h3 className='mb-4'>
                            <a className='text-footer-heading text-lg font-bold underline-offset-4 decoration-main decoration-2 hover:underline' href={links.heading.href} target='_blank' rel='noreferrer'>{links.heading.label}</a>
                        </h3>
                        {
                            links.links.map(link => (
                                <li key={link.href}>
                                    <a className='text-main font-semibold underline-offset-4 decoration-main decoration-2 hover:underline' href={link.href}>{link.label}</a>
                                </li>
                            ))
                        }
                    </ul>
                ))
            }
            <a href="https://www.esrb.org/EPCConfirm/891/" rel='noreferrer' target='_blank'>
                <img className='absolute bottom-6 right-0 w-1/6' src={esrb} alt="esrb" />
            </a>
        </section>
    )
}