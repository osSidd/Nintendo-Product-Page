import Platform from "../platform";

export default function CarouselCard({product}){
    return (
        <div className='flex-shrink-0 mr-6 border border-border w-72 rounded-2xl overflow-hidden cursor-pointer'>
            <img className="transition-all duration-500 ease-in-out" src={product.img} alt="ooblets" />
            <div className="px-4 py-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm mb-10">{product.date}</p>
                {product.offer ? <p className="bg-red-600 w-fit rounded-full px-2 py-0.5 text-white text-xs font-semibold">
                    {product.offer}
                </p>: null}
                <div className="flex items-center mt-2">
                    <p className="font-bold">${product.sellingPrice || product.mrp}</p>
                    {product.sellingPrice ? <p className='ml-4 line-through'>${product.mrp}</p>: null}
                    {product.discount ? <p className="ml-4 bg-red-600 px-4 text-white">{product.discount}%</p> : null}
                </div>
                <Platform platform={product.platform} icon={true}/>
            </div>
        </div>
    )
}