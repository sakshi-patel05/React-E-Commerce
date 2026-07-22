import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductsDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios
            .get(`https://dummyjson.com/products/category/${id}`)
            .then((response) => {
                setProducts(response.data.products);
            })
            .catch((error) => {
                console.log(error)
            });
    }, [id]);

    return (
        <section className='max-w-7xl mx-auto px-5 py-12'>
            <h2 className='text-3xl font-black capitalize mb-8 text-gray-900 tracking-tight'>
                {id} Products
            </h2>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {products.map((product) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between p-4'
                    >
                        {/* Image Container */}
                        <div className='w-full h-52 bg-gray-50 rounded-2xl overflow-hidden flex items-center justify-center p-3 relative'>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className='w-full h-full object-cover rounded-xl group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>

                        {/* Product Details */}
                        <div className='py-4 flex flex-col flex-grow justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900 text-base line-clamp-1 group-hover:text-amber-700 transition-colors'>
                                    {product.title}
                                </h3>
                                <p className='text-gray-500 text-xs mt-1.5 line-clamp-2 leading-relaxed'>
                                    {product.description}
                                </p>
                            </div>

                            {/* Price Section */}
                            <div className='mt-4 flex items-center justify-between'>
                                <div>
                                    <span className='text-[10px] uppercase font-bold text-gray-400 block tracking-wider'>Price</span>
                                    <span className='text-xl font-black text-gray-900'>
                                        ₹{Math.round(product.price * 80)}
                                    </span>
                                </div>
                                <span className='text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md'>
                                    In Stock
                                </span>
                            </div>

                            {/* Buttons: Add to Cart & Buy Now */}
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

export default ProductsDetails