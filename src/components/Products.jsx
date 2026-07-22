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
            className='max-w-7xl mx-auto px-5 py-14'
        >
            {/* heading */}
            <div className='mb-12 text-center md:text-left'>
                <span className='text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3.5 py-1.5 rounded-full'>
                    Our Store
                </span>
                <h2 className='text-3xl md:text-4xl font-black text-gray-900 mt-3 tracking-tight'>
                    Featured Products
                </h2>
                <p className='text-gray-600 text-sm md:text-base mt-1.5'>
                    Explore our latest collection of premium items.
                </p>
            </div>

            {/* products grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between p-4'
                    >
                        {/* products image container */}
                        <div className='w-full h-56 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center relative p-3'>
                            {/* Discount Percentage Tag */}
                            <span className='absolute top-3 left-3 z-10 bg-amber-600 text-white text-[10px] font-bold uppercase px-2.5 py-1 rounded-full shadow-sm'>
                                {Math.round(product.discountPercentage || 15)}% OFF
                            </span>
                            <img 
                                src={product.thumbnail} 
                                alt={product.title}
                                className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500' 
                            />
                        </div>

                        {/* Product Details (Name & Description) */}
                        <div className='py-4 flex flex-col flex-grow justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900 text-base md:text-lg line-clamp-1 group-hover:text-amber-700 transition-colors'>
                                    {product.title}
                                </h3>
                                <p className='text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed'>
                                    {product.description}
                                </p>
                            </div>

                            {/* Price Section with Rupees & Discount */}
                            <div className='mt-4 flex items-center justify-between'>
                                <div>
                                    <span className='text-[10px] uppercase font-bold text-gray-400 block tracking-wider'>Price</span>
                                    <div className='flex items-center gap-2'>
                                        <span className='text-xl font-black text-gray-900'>
                                            ₹{Math.round(product.price * 80)}
                                        </span>
                                        <span className='text-xs text-gray-400 line-through'>
                                            ₹{Math.round(product.price * 80 * 1.25)}
                                        </span>
                                    </div>
                                </div>
                                <div className='text-right'>
                                    <span className='text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md'>
                                        In Stock
                                    </span>
                                </div>
                            </div>

                            {/* Two Buttons: Add to Cart & Buy Now */}
                            <div className='mt-5 grid grid-cols-2 gap-2.5 pt-3 border-t border-gray-100'>
                                <button className='bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-xs py-2.5 px-3 rounded-xl transition-all duration-300 cursor-pointer flex items-center justify-center'>
                                    Add to Cart
                                </button>
                                <button className='bg-black hover:bg-amber-600 text-white font-semibold text-xs py-2.5 px-3 rounded-xl transition-all duration-300 shadow-sm cursor-pointer flex items-center justify-center'>
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