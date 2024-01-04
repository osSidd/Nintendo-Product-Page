export default function Wrapper({children, x=16, y, t=16, b=24}){
    return (
        <div className={`px-4 md:px-${x} pt-${t} pb-${b}`}>
            {children}
        </div>
    )
}