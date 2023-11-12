import React from 'react'

export default function Main() {
  return (
    <main className=''>
        <div className="w-full">
            <div className="grid grid-cols-3 gap-10">
                <div className="w-full col-start-1 col-end-3">
                    <picture className='w-full h-auto'>
                        <source className='' media="(min-width: 768px)" srcset="./image-web-3-desktop.jpg" />
                        <img src="./image-web-3-mobile.jpg" alt="Web3 Img" />
                    </picture>

                </div>
                <div className="row-span-2 bg-slate-950 px-6 py-8 ">
                    <h2 className='text-orange-400 text-2xl' >
                        New
                    </h2>
                    <ul>
                            <li className='py-6 border-b-2 border-grey-300'>
                                <h3 className='text-neutral-300 pb-4 text-lg hover:text-orange-400 cursor-pointer font-bold'>
                                    Hydrigen vs Electric Cars
                                </h3>
                                <p className='text-md text-gray-500'>
                                    Will hydrogen-fueled cars ever catch up to EVs?

                                </p>
                            </li>
                            <li className='py-6 border-b-2 border-grey-300'>
                                <h3 className='text-neutral-300 pb-4 text-lg hover:text-orange-400 cursor-pointer font-bold'>
                                    The Downsides of Ai Artistry
                                </h3>
                                <p className='text-md text-gray-500'>
                                    What are the possible adverse effects of on-demand image generation?                       
                                </p>
                            </li>
                            <li className='py-6'>
                                <h3 className='text-neutral-300 pb-4 text-lg hover:text-orange-400 cursor-pointer font-bold'>
                                    Is VC Funding Drying Up?
                                </h3>
                                <p className='text-md text-gray-500'>
                                    Private funding by VC firms is down 50% YOY. 
                                    We take a look at what that means.                       
                                </p>
                            </li>

                    </ul>
                </div>
                <div className='grid place-center'>
                    <h1 className='text-slate-950 text-5xl font-extrabold'>
                        The Bright Future of Web 3.0?
                    </h1>

                </div>
                <div className='flex flex-col gap-8'>
                    <p className='gray-500 text-md'>
                        We dive into the evolution of the web that
                        claims to put the power of the platforms back into
                        the hands of the people. But is it really 
                        fulfilling its promise?
                    </p>
                    <button className='text-neutral-300 bg-red-500 h-10 w-40 capitalize'>
                        Read More
                    </button>
                </div>



            </div>
            
        </div>
        <div className='flex gap-8 mt-20 flex-wrap sm:flex-nowrap '>
            <div className='flex gap-6 grow-1'>
            
                    <img src="./image-retro-pcs.jpg" alt="" className='w-28 h-32 float-left' />
                
                <div className="detail">
                    <h3 className='text-gray-500 font-bold text-3xl pb-3'>
                        01
                    </h3>
                    <p className='text-slate-950 text-md pb-2 font-bold hover:text-red-500 cursor-pointer'>
                        Reviving Retro PCs
                    </p>
                    <p className='text-gray-500 text-md'>
                        What happens when old PCs are give modern upgrades?
                    </p>
                </div>
            </div>
            <div className='flex gap-4 grow-1'>
                    <img src="./image-top-laptops.jpg" alt="" className='w-28 h-32 float-left' />
  
                <div className="detail">
                    <h3 className='text-gray-500 font-bold text-3xl pb-3'>
                        02
                    </h3>
                    <p className='text-slate-950 text-md pb-2 font-bold hover:text-red-500 cursor-pointer'>
                        Top 10 Laptops of 2022
                    </p>
                    <p className='text-gray-500 text-md'>
                        Our best picks for various needs and budgets.
                    </p>
                </div>
            </div>
            <div className='flex gap-6 grow-1'>

                    <img src="./image-gaming-growth.jpg" alt="" className='w-28 h-32 float-left' />

                <div className="detail">
                    <h3 className='text-gray-500 font-bold text-3xl pb-3'>
                        03
                    </h3>
                    <p className='text-slate-950 text-md pb-2 font-bold hover:text-red-500 cursor-pointer'>
                        The Growth of Gaming
                    </p>
                    <p className='text-gray-500 text-md'>
                        How the pandemic has sparked fresh opportunites.
                    </p>
                </div>
            </div>
        </div>




    </main>
  )
}
