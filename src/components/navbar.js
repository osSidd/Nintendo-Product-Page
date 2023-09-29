import {Link} from 'gatsby'
import * as React from 'react'
//import '../styles/navbar.css'

export default function Navbar(){
    return (
        <div className="bg-hero-bg py-2">
            <nav className="w-10/12 m-auto">
                <h1 className="text-hero-logo text-logo font-semibold">Header Logo</h1>
                {/* <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/projects" className='link'>Projects</Link> */}
            </nav>
        </div>
        
    )
}