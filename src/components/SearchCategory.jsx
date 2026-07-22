import axios from 'axios'
import React, { useEffect, useState } from 'react'

// import categoriesData from '../data/categoryData'

const SearchCategory = () => {
    const [categories, setCategories] = useState([])
    const colors = [
        "bg-blue-100",
        "bg-amber-100",
        "bg-green-100",
        "bg-purple-100",
        "bg-rose-100"
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

    return (
        <div>
            <section className='max-w-7xl mx-auto px-5 py-10'>
                {/* Heading */}
                <h2 className='text-3xl font-bold mb-8'>
                    Search By Category
                </h2>

                {/* cards */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {categories.map((category, index) => {
                        return (
                            <div
                                key={category.slug || index}
                                className='group bg-white rounded-3xl p-6 shadow-xl border border-gray-100 transition-all duration-300 hover:-translate-y-2 cursor-pointer'
                            >
                                {/* image */}
                                <div
                                    className={`w-28 h-28 mx-auto rounded-full flex items-center justify-center ${colors[index % colors.length]} group-hover:scale-110 transition-all duration-300`}
                                >
                                    <span className='text-xs font-bold text-gray-700 text-center px-2'>
                                        {category.name || category}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

export default SearchCategory