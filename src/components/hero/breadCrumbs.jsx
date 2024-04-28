export default function BreadCrumbs(){
    return (
        <div className="text-xs">
            <a className="font-semibold mr-3 text-footer-heading" href="https://www.nintendo.com/us/store/">Store</a>
            <span><i className="fa fa-angle-right mr-3"></i></span>
            <a className="font-semibold mr-3 text-footer-heading" href="https://www.nintendo.com/us/store/games/">Games</a>
            <span><i className="fa fa-angle-right mr-3"></i></span>
            <span className="font-semibold">Stardrew Valley</span>
        </div>
    )
}