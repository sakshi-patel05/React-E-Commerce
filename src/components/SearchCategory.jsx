import axios from 'axios'
import React, { useEffect, useState } from 'react'

import categoriesData from '../data/categoriesData'

const SearchCategory = () => {
    const [categories, setCategories] = useState([])

    // api data fetch
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
            <section className='max-w-7xl ma-auto px-5 py-10'>
                {/* Heading */}
                <h2 className='text-3xl font-bold md-8'>
                    Search By Category
                </h2>

                {/* cards */}
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {categories.map((category, index) => {
                        const categoryImage = categoryImage.find(
                            (item) => item.slug === category.slug
                        );
                        return (
                            <div
                                key={category.slug}
                                className='group bg-white rounded-3xl p-6 shadow-2xl border border-gray-100 transition-all duration-300 hover:-translate-2.5'
                            >
                                {/* image */}
                                <div
                                    className='w-28 h-28 mx-auto rounded-br-full flex items-center justify-center ${colors[index%colors.lenght]
                     } group-hover:scale-110 transition-all duration-300'
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
