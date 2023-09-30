import service from '../../assets/services.png'

export default function Figure(){
    return (
        <figure className=''>
            <img src={service} alt="service"/>
            <figcaption className='text-center text-sm mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</figcaption>
        </figure>
    )
}