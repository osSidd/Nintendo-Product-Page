import Search from "../icons/search";

export default function SearchBar({displaySearch, toggleSearch}){
    return (
        <div className={`flex items-center cursor-pointer hover:fill-main ${!displaySearch && '[&>input]:placeholder:hover:text-main'} w-8/12`}>
            <Search/>
            <label htmlFor="search" className="hidden"></label>
            <input onClick={displaySearch ? undefined : toggleSearch} type="search" id="search" name="search" placeholder={`${displaySearch ? 'Search for games, hardware, news, etc ': 'Search'}`} className='outline-none ml-2 cursor-pointer w-full text-sm'/>
        </div>
    )
}