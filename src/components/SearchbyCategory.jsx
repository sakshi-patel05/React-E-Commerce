import React from 'react'
import categoriesData from '../data/categoriesData' // Apni local file import ki

const SearchCategory = () => {
    return (
        <div className='bg-[#F7F2EC] py-12'>
            <section className='max-w-7xl mx-auto px-5'>
                {/* Heading */}
                <h2 className='text-3xl font-extrabold text-gray-900 mb-8 text-center md:text-left'>
                    Search By Category
                </h2>

                {/* Cards Grid */}
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6'>
                    {categoriesData.map((category, index) => {
                        return (
                            <div
                                key={index}
                                className='group bg-white rounded-3xl p-5 shadow-md hover:shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer flex flex-col items-center text-center'
                            >
                                {/* Bade aur Sundar Image Container */}
                                <div className='w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-inner bg-gray-100 mb-4'>
                                    <img 
                                        src={category.image} 
                                        alt={category.slug} 
                                        className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                    />
                                </div>

                                {/* Category Name / Slug */}
                                <h3 className='text-sm md:text-base font-bold text-gray-800 capitalize tracking-wide'>
                                    {category.slug.replace('-', ' ')}
                                </h3>
                                <p className='text-xs text-gray-400 mt-1'>Explore Now</p>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default SearchCategory