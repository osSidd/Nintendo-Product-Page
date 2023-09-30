import * as React from 'react'

export default function Testimonial(){
    return (
        <div className='bg-testimonial mt-10'>
            <div className='wrapper py-32 px-8 text-test-text'>
                <blockquote className='text-test-size italic leading-testimonial'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                </blockquote>
                <p className='text-right text-lg font-bold'>- John Smith, web dev at xyz</p>
            </div>
        </div>
    )
}