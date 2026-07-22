import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Products = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        axios.get("https://dummyjson.com/products")
            .then((response) => {
                setProducts(response.data.products)
            })
    }, [])

    return (
        <section 
            id='products'
            className='w-full max-w-7xl mx-auto px-3 sm:px-5 py-10 sm:py-14'
        >
            {/* heading */}
            <div className='mb-8 sm:mb-12 text-center md:text-left'>
                <span className='text-[10px] sm:text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full'>
                    Our Store
                </span>
                <h2 className='text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 mt-2.5 sm:mt-3 tracking-tight'>
                    Featured Products
                </h2>
                <p className='text-gray-600 text-xs sm:text-sm md:text-base mt-1 sm:mt-1.5'>
                    Explore our latest collection of premium items.
                </p>
            </div>

            {/* products grid - Mobile par exactly 2 columns */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between p-2.5 sm:p-4'
                    >
                        {/* products image container */}
                        <div className='w-full h-32 sm:h-52 bg-gray-50 rounded-xl sm:rounded-2xl overflow-hidden flex items-center justify-center relative p-2'>
                            {/* Discount Percentage Tag */}
                            <span className='absolute top-2 left-2 z-10 bg-amber-600 text-white text-[9px] sm:text-[10px] font-bold uppercase px-2 py-0.5 sm:py-1 rounded-full shadow-sm'>
                                {Math.round(product.discountPercentage || 15)}% OFF
                            </span>
                            <img 
                                src={product.thumbnail} 
                                alt={product.title}
                                className='w-full h-full object-cover rounded-lg sm:rounded-xl group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>

                        {/* Product Details (Name & Description) */}
                        <div className='py-2.5 sm:py-4 flex flex-col flex-grow justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900 text-xs sm:text-base line-clamp-1 group-hover:text-amber-700 transition-colors'>
                                    {product.title}
                                </h3>
                                <p className='text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-2 leading-relaxed'>
                                    {product.description}
                                </p>
                            </div>

                            {/* Price Section with Rupees & Discount */}
                            <div className='mt-3 flex items-center justify-between'>
                                <div>
                                    <span className='text-[9px] sm:text-[10px] uppercase font-bold text-gray-400 block tracking-wider'>Price</span>
                                    <div className='flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2'>
                                        <span className='text-xs sm:text-xl font-black text-gray-900'>
                                            ₹{Math.round(product.price * 80)}
                                        </span>
                                        <span className='text-[9px] sm:text-xs text-gray-400 line-through'>
                                            ₹{Math.round(product.price * 80 * 1.25)}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Two Buttons: Add to Cart & Buy Now */}
                            <div className='mt-3.5 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 pt-2.5 border-t border-gray-100'>
                                <button className='bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-[10px] sm:text-xs py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center'>
                                    Add to Cart
                                </button>
                                <button className='bg-black hover:bg-amber-600 text-white font-semibold text-[10px] sm:text-xs py-1.5 sm:py-2.5 px-1 sm:px-3 rounded-lg sm:rounded-xl transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center'>
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div> 
                ))}
            </div>
        </section>
    )
}

export default Products