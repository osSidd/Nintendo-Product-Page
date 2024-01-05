export default function BreadCrumbs(){
    return (
        <div className="text-sm">
            <a className="font-semibold mr-2" href="https://www.nintendo.com/us/store/">Store</a>
            <span><i className="fa fa-angle-right mr-2"></i></span>
            <a className="font-semibold mr-2" href="https://www.nintendo.com/us/store/games/">Games</a>
            <span><i className="fa fa-angle-right mr-2"></i></span>
            <span className="font-semibold">Stardrew Valley</span>
        </div>
    )
}