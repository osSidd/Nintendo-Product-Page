import logo from '../../assets/footer/nintendo.svg'
import SearchBar from "./searchBar";
import Select from "./select";

export default function LogoSearch({displaySearch, toggleSearch}){
    return (
        <div className="flex items-center w-full lg:w-6/12">
            <a href="https://www.nintendo.com/us/" className="mr-4 hidden lg:block">
                <div className="bg-main w-fit px-6 py-2" >
                    <img className='h-8' src={logo} alt="nintendo" />
                </div>
            </a>
            <div className="flex items-center justify-between border-b border-main lg:border-gray-400  w-full mr-4 lg:mr-16 ml-4 mt-2 lg:mt-0  lg:ml-0 pr-2 py-1">
                <SearchBar displaySearch={displaySearch} toggleSearch={toggleSearch}/>
                <Select/>
            </div>
        </div>
    )
}