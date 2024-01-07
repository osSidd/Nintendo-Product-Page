export default function debounce(fn, delay){
    let id

    return () => {
        clearTimeout(id)
        let context = this
        id = setTimeout(() => fn.call(context, arguments), delay)
    }
}