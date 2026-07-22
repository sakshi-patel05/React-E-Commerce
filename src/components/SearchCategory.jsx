import axios from 'axios'
import React, { useEffect, useState } from 'react'
import categoriesData from '../data/categoryData'

const SearchCategory = () => {
    const [categories, setCategories] = useState([])

    // API data fetch
    useEffect(() => {
        axios
            .get("https://dummyjson.com/products/categories")
            .then((response) => {
                setCategories(response.data)
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!categories) {
        return <h1 className='text-center text-6xl'>Loding...</h1>
    }

    return (
        <div className='bg-[#F7F2EC] py-5'
            id='products'
        >
            <div className='max-w-7xl mx-auto px-5'>

                {/* Section Header */}
                <div className='text-center md:text-left mb-10'>
                    <span className='text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3 py-1 rounded-full'>
                        Collections
                    </span>
                    <h2 className='text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight'>
                        Explore Popular Categories
                    </h2>
                    <p className='text-gray-600 text-sm md:text-base mt-1'>
                        Browse through our exclusive selection curated just for your lifestyle.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                    {categories.map((category, index) => {
                        const categoryImage = categoriesData.find(
                            (item) => item.slug === category.slug
                        );

                        // Category name aur slug nikalne ke liye
                        // const title = category.name || category.slug.replace('-', ' ');

                        return (
                            <div
                                key={category.slug}
                                className='group bg-[#F3ECE4] rounded-3xl p-6 shadow-sm hover:shadow-xl border border-[#E8DDD1] transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between cursor-pointer relative overflow-hidden'
                            >
                                {/* Top Content: Image & Title */}
                                <div>
                                    {/* Image Container */}
                                    <div className='w-full h-44 rounded-2xl overflow-hidden shadow-inner bg-pink-400 mb-5 border border-[#E5DBCF] flex items-center justify-center'>
                                        <img
                                            src={categoryImage?.image}
                                            alt={category.slug}
                                            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500'
                                        />
                                    </div>

                                    {/* Category Title */}
                                    <h3 className='text-lg font-bold text-gray-900 capitalize tracking-wide mb-2'>
                                        {category.name}
                                    </h3>

                                    {/* Paragraph / Description Added */}
                                    <p className='text-xs md:text-sm text-gray-600 line-clamp-2 leading-relaxed'>
                                        Discover the latest trends and best deals in premium {name.toLowerCase()}. Shop now to upgrade your collection.
                                    </p>
                                </div>

                                {/* Bottom Action Button */}
                                <div className='pt-6'>
                                    <button className='w-full bg-black hover:bg-gray-800 text-white text-xs md:text-sm font-semibold py-3 px-4 rounded-xl transition-all duration-300 shadow-md group-hover:bg-amber-600 cursor-pointer flex items-center justify-center gap-2'>
                                        <span>Explore {category.name}</span>
                                        <span className='group-hover:translate-x-1 transition-transform'>→</span>
                                    </button>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default SearchCategory