import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const ProductsDetails = () => {
    const { id } = useParams()
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const colors = [
        "bg-yellow-100",
        "bg-pink-100",
        "bg-purple-100",
        "bg-orange-100",
        "bg-indigo-100",
        "bg-emerald-100",
        "bg-rose-100",
        "bg-amber-100",
        "bg-violet-100",
        "bg-fuchsia-100"
    ];

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://dummyjson.com/products/category/${id}`)
            .then((response) => {
                setProducts(response.data.products);
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
                setLoading(false);
            });
    }, [id]);

    // Agar data load ho raha hai toh Loader dikhayen
    if (loading) {
        return (
            <div className='min-h-[60vh] flex items-center justify-center bg-[#F7F2EC] px-4'>
                <div className='text-center space-y-5'>
                    <div className='w-10 h-10 sm:w-12 sm:h-12 border-4 border-amber-600 border-t-transparent rounded-full animate-spin mx-auto'></div>
                    <h2 className='text-lg sm:text-xl font-bold text-gray-800 tracking-wide'>Loading Products...</h2>
                </div>
            </div>
        );
    }

    return (
        <section className='max-w-7xl mx-auto px-3 sm:px-5 py-8 sm:py-12 min-h-[60vh]'>
            <h2 className='text-2xl sm:text-3xl font-black capitalize mb-6 sm:mb-8 text-gray-900 tracking-tight text-center sm:text-left'>
                {id} Products
            </h2>

            {/* Products Grid - Mobile par 2 columns */}
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6'>
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        className='group bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-1 sm:hover:-translate-y-2 transition-all duration-300 border border-gray-100 flex flex-col justify-between p-2.5 sm:p-4'
                    >
                        {/* Image Container with Dynamic Light Colors */}
                        <div className={`w-24 h-24 sm:w-36 sm:h-36 mx-auto ${colors[index % colors.length]} rounded-full overflow-hidden flex items-center justify-center p-2 relative shadow-inner border border-white/60`}>
                            <img
                                src={product.thumbnail}
                                alt={product.title}
                                className='w-full h-full object-cover rounded-full group-hover:scale-105 transition-transform duration-500'
                            />
                        </div>

                        {/* Product Details */}
                        <div className='py-2.5 sm:py-4 flex flex-col flex-grow justify-between'>
                            <div>
                                <h3 className='font-bold text-gray-900 text-xs sm:text-base line-clamp-1 group-hover:text-amber-700 transition-colors text-center sm:text-left'>
                                    {product.title}
                                </h3>
                                <p className='text-gray-500 text-[10px] sm:text-xs mt-1 line-clamp-2 leading-relaxed text-center sm:text-left'>
                                    {product.description}
                                </p>
                            </div>

                            {/* Price Section */}
                            <div className='mt-3 sm:mt-4 flex items-center justify-between'>
                                <div>
                                    <span className='text-[9px] sm:text-[10px] uppercase font-bold text-gray-400 block tracking-wider'>Price</span>
                                    <span className='text-xs sm:text-xl font-black text-gray-900'>
                                        ₹{Math.round(product.price * 80)}
                                    </span>
                                </div>
                                <span className='text-[9px] sm:text-[10px] uppercase font-bold text-emerald-600 bg-emerald-50 px-1.5 sm:px-2 py-0.5 rounded-md hidden sm:inline-block'>
                                    In Stock
                                </span>
                            </div>

                            {/* Buttons: Add to Cart & Buy Now */}
                            <div className='mt-3 sm:mt-5 grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2.5 pt-2.5 sm:pt-3 border-t border-gray-100'>
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

export default ProductsDetails