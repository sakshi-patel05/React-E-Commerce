import React from 'react'

const About = () => {
    return (
        <div className='bg-[#F7F2EC] py-16'
        id='about'
        >
            <div className='max-w-7xl mx-auto px-5'>
                
                {/* Header */}
                <div className='text-center max-w-2xl mx-auto mb-16'>
                    <span className='text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3 py-1 rounded-full'>
                        About Our Store
                    </span>
                    <h2 className='text-3xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight'>
                        We Bring Quality & Style Right To Your Doorstep
                    </h2>
                    <p className='text-gray-600 text-base mt-4 leading-relaxed'>
                        Welcome to Shop-store, your number one source for all things fashion, lifestyle, and modern daily essentials. We're dedicated to giving you the very best products with a focus on dependability and customer satisfaction.
                    </p>
                </div>

                {/* Features Grid */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-16'>
                    <div className='bg-[#F3ECE4] p-8 rounded-3xl border border-[#E8DDD1] text-center space-y-3'>
                        <div className='w-14 h-14 bg-black text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-md'>
                            🚚
                        </div>
                        <h3 className='text-xl font-bold text-gray-900'>Fast Free Delivery</h3>
                        <p className='text-sm text-gray-600'>
                            Enjoy fast and reliable shipping on all your orders with zero hidden delivery charges.
                        </p>
                    </div>

                    <div className='bg-[#F3ECE4] p-8 rounded-3xl border border-[#E8DDD1] text-center space-y-3'>
                        <div className='w-14 h-14 bg-black text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-md'>
                            ⭐
                        </div>
                        <h3 className='text-xl font-bold text-gray-900'>100% Quality Assured</h3>
                        <p className='text-sm text-gray-600'>
                            Every single product goes through rigorous quality checks to ensure premium standards.
                        </p>
                    </div>

                    <div className='bg-[#F3ECE4] p-8 rounded-3xl border border-[#E8DDD1] text-center space-y-3'>
                        <div className='w-14 h-14 bg-black text-white rounded-2xl mx-auto flex items-center justify-center text-2xl font-bold shadow-md'>
                            💬
                        </div>
                        <h3 className='text-xl font-bold text-gray-900'>24/7 Support</h3>
                        <p className='text-sm text-gray-600'>
                            Our friendly support team is always here to help you out with any questions or issues.
                        </p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default About