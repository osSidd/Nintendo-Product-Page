export default function CarouselCard(){
    return (
        <div className='border border-border max-w-xs rounded-2xl overflow-hidden cursor-pointer'>
            <img className="transition-all duration-500 ease-in-out" src="https://assets.nintendo.com/image/upload/ar_16:9,b_auto:border,c_lpad/b_white/f_auto/q_auto/dpr_1.5/c_scale,w_300/ncom/software/switch/70010000048967/06239b4e0fc9c468b2e031e7df0add51a23f0c2dd2b4fb6107d1cd886675043b" alt="ooblets" />
            <div className="px-4 py-4">
                <h3 className="font-semibold">Ooblets</h3>
                <p className="text-sm mb-10">9/1/22</p>
                <p className="bg-red-600 w-fit rounded-full px-2 pb-0.5 text-white text-xs font-semibold">Sale ends: 15 hr.</p>
                <div className="flex items-center mt-2">
                    <p className="font-bold">$19.99</p>
                    <p className='ml-4 line-through'>$29.99</p>
                </div>
                <div className="flex items-center justify-between mt-2">
                    <p className="border-l-2 border-red-400 pl-2">Nintendo Switch</p>
                    <span>heart</span>
                </div>
            </div>
        </div>
    )
}