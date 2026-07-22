import React from 'react'

const Hero = () => {
    return (
        <section className='bg-[#F7F2EC] py-12 md:py-20'>
            <div className='max-w-7xl mx-auto px-5'>
                
                {/* Main Banner Card */}
                <div className='relative bg-[#F3ECE4] rounded-3xl p-8 md:p-14 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                    
                    {/* Background Decorative Circle / Shape */}
                    <div className='absolute right-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#E8DDD1] rounded-full -z-0 pointer-events-none'></div>

                    {/* Left Side Content */}
                    <div className='z-10 space-y-4 text-center md:text-left'>
                        <p className='text-xs md:text-sm uppercase tracking-widest text-gray-500 font-semibold'>
                            New Arrivals
                        </p>
                        
                        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 tracking-tight leading-none'>
                            JUST FOR <br />
                            <span className='text-gray-900 font-serif italic'>you</span>
                        </h1>

                        {/* Discount Badge Box */}
                        <div className='inline-block bg-black text-white px-5 py-2.5 rounded-lg text-sm md:text-base font-bold tracking-wide shadow-md'>
                            FOR ONLINE <span className='text-amber-400'>30%</span> ORDER <span className='text-amber-400'>OFF</span>
                        </div>

                        <div className='pt-4 flex justify-center md:justify-start gap-4'>
                            <button className='bg-black hover:bg-gray-800 text-white font-medium px-7 py-3 rounded-xl transition-all duration-300 cursor-pointer shadow-md'>
                                Shop Now
                            </button>
                        </div>
                    </div>


                </div>

            </div>
        </section>
    )
}

export default Hero