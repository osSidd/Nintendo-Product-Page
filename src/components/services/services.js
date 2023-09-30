import * as React from 'react'
import Figure from './figure'

export default function Services(){
    return(
        <div className='wrapper'>
            <div className='py-32'>
                <h1 className='text-center text-sub-heading font-extrabold'>Services</h1>
                <div className='grid grid-cols-4 gap-10 mt-8'>
                    <Figure/>
                    <Figure/>
                    <Figure/>
                    <Figure/>
                </div>
            </div>
        </div>
    )
}

