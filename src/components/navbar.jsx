import icon from '../assets/favicon.png'

export default function Navbar(){
    return (
        <div className="bg-hero-bg pt-4">
            <nav className="wrapper m-auto flex items-center">
                <img src={icon} alt="icon" className='w-12 mr-4'/>
                <h1 className="text-hero-logo text-logo font-semibold">Launchpad</h1>
                {/* <Link to="/" className='link'>Home</Link>
                <Link to="/about" className='link'>About</Link>
                <Link to="/projects" className='link'>Projects</Link> */}
            </nav>
        </div>
        
    )
}