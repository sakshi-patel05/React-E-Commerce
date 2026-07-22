import axios from 'axios'
import React, { useEffect, useState } from 'react'
import categoriesData from '../data/categoryData'

const SearchCategory = () => {
    const [categories, setCategories] = useState([])
    const colors =[
        "bg-yellow-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-orange-100",
        "bg-indigo-100",
        "bg-emerald-100",
        "bg-rose-100",
        "bg-amber-100",
        "bg-violet-100",
        "bg-fuchsia-100",
        "bg-lime-100",
        "bg-stone-100",
        "bg-neutral-100",
        "bg-fuchsia-100"
    ]

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
            id='category'
        >
            <div className='max-w-7xl mx-auto px-3 sm:px-5'>

                {/* Section Header */}
                <div className='text-center md:text-left mb-8 sm:mb-10'>
                    <span className='text-[10px] sm:text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3 py-1 rounded-full'>
                        Collections
                    </span>
                    <h2 className='text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-2 sm:mt-3 tracking-tight'>
                        Explore Popular Categories
                    </h2>
                    <p className='text-gray-600 text-xs sm:text-sm md:text-base mt-1'>
                        Browse through our exclusive selection curated just for your lifestyle.
                    </p>
                </div>

                {/* Cards Grid - Mobile par 2 columns */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'>
                    {categories.slice(0,12).map((category, index) => {
                        const categoryImage = categoriesData.find(
                            (item) => item.slug === category.slug
                        );

                        // Category name aur slug nikalne ke liye
                        const title = category.name || category.slug.replace('-', ' ');

                        return (
                            <div
                                key={category.slug}
                                className={`group ${colors[index % colors.length]} rounded-2xl sm:rounded-3xl p-3 sm:p-6 shadow-sm hover:shadow-xl border border-[#E8DDD1] transition-all duration-300 hover:-translate-y-1 sm:hover:-translate-y-2 flex flex-col justify-between cursor-pointer relative overflow-hidden`}
                            >
                                {/* Top Content: Image & Title */}
                                <div>
                                    {/* Image Container - Mobile par choti aur rounded/circle */}
                                    <div className='w-20 h-20 sm:w-full sm:h-44 mx-auto sm:mx-0 rounded-full sm:rounded-2xl overflow-hidden shadow-inner mb-3 sm:mb-5 border border-[#E5DBCF] flex items-center justify-center bg-white/50'>
                                        <img
                                            src={categoryImage?.image}
                                            alt={category.slug}
                                            className='w-full h-full object-cover rounded-full sm:rounded-none group-hover:scale-110 transition-transform duration-500'
                                        />
                                    </div>

                                    {/* Category Title */}
                                    <h3 className='text-sm sm:text-lg font-bold text-gray-900 capitalize tracking-wide mb-1 sm:mb-2 text-center sm:text-left line-clamp-1'>
                                        {category.name}
                                    </h3>

                                    {/* Paragraph / Description Added */}
                                    <p className='text-[10px] sm:text-xs md:text-sm text-gray-600 line-clamp-2 leading-relaxed text-center sm:text-left hidden sm:block'>
                                        Discover the latest trends and best deals in premium {title.toLowerCase()}. Shop now to upgrade your collection.
                                    </p>
                                </div>

                                {/* Bottom Action Button */}
                                <div className='pt-3 sm:pt-6'>
                                    <button className='w-full bg-black hover:bg-gray-800 text-white text-[10px] sm:text-xs md:text-sm font-semibold py-2 sm:py-3 px-2 sm:px-4 rounded-xl transition-all duration-300 shadow-md group-hover:bg-amber-600 cursor-pointer flex items-center justify-center gap-1 sm:gap-2'>
                                        <span className='truncate'>Explore {category.name}</span>
                                        <span className='group-hover:translate-x-1 transition-transform hidden sm:inline'>→</span>
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