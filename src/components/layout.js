import Navbar from './navbar'
import * as React from 'react'
//import '../styles/layout.css'
import Footer from './footer'

export default function Layout({children}){
    return (
        <div className='layout-home'>
            <Navbar/>
            
            {children}
            <Footer/>
        </div>
    )
}