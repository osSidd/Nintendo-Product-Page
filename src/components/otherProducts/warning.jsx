export default function Warning(){
    return (
        <div className="[&>div+div]:mt-2">
            <Content>
                WARNING: If you have epilepsy or have had seizures or other unusual reactions to flashing lights or patterns, consult a doctor before playing video games. All users should read the Health and Safety Information available in the system settings before using this software.
            </Content>
            <Content>
                Nintendo Switch Online membership (sold separately) and Nintendo Account required for online play. Not available in all countries. Internet access required for online features. Terms apply. <a href="http://nintendo.com/switch-online?_gl=1*1uip2v1*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDI5NTA3Ny42LjEuMTcwNDI5NTA4Mi4wLjAuMA.." rel="noreferrer" target="_blank">nintendo.com/switch-online</a>
            </Content>
            <Content>                
                Stardew Valley © ConcernedApe LLC 2016-2020. All rights reserved.
            </Content>
        </div>
    )
}

function Content({children}){
    return (
        <div className='leading-5 font-light'>
            <small>
                {children}
            </small>
        </div>
    )
}