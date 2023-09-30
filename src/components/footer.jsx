export default function Footer(){
    return (
        <div className='bg-footer-bg py-6'>
            <div className='wrapper text-center text-footer-text text-sm'>
                Copyright &copy; {new Date().getFullYear()} Launchpad by <a href="https://github.com/osSidd" target="_blank" className='text-blue-400 font-semibold'>osSidd</a>
            </div>
        </div>
    )
}