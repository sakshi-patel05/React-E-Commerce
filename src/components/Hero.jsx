import React from 'react'

const Hero = () => {
    return (
        <section className='bg-[#F7F2EC] py-12 md:py-20'>
            <div className='max-w-7xl mx-auto px-5'>
                
                {/* Main Banner Card */}
                <div className='relative bg-[#F3ECE4] rounded-3xl p-8 md:p-14 overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                    
                    {/* Background Decorative Circle / Shape */}
                    <div className='absolute right-10 top-1/2 -translate-y-1/2 w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-[#E8DDD1] rounded-full -z-0 pointer-events-none'></div>

                    

                </div>

            </div>
        </section>
    )
}

export default Hero