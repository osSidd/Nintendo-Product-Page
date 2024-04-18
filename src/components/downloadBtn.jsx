import download from '../assets/hero/download.svg'

export default function DownloadBtn({mt, lgMt, py, px, rounded, text='lg:text-xl', img='mr-3'}){
    return (
        <a className={`${mt} lg:${lgMt} flex justify-center items-center ${py} ${px} bg-main text-white ${rounded}`} href="https://ec.nintendo.com/title_purchase_confirm?title=70010000001801&_gl=1*1g3aizb*_ga*Njg1ODgwMzAxLjE3MDQwMDU2NDI.*_ga_F6ERC4HMNZ*MTcwNDQzMzc0OS4xNS4xLjE3MDQ0MzUwODYuMC4wLjA." target='_blank' rel='noreferrer'>
            <img className={`${img}`} src={download} alt="download" />
            <span className={`xxs:text-sm ${text} font-bold`}>Direct Download</span>  
        </a>
    )
}