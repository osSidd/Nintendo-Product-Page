export default function Wrapper({children, x, y, t, b}){
    return (
        <div className={`px-4 md:px-16 pt-16 pb-24`}>
            {children}
        </div>
    )
}