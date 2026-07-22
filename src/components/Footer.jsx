import React from 'react'
import { FiShoppingBag, FiMail, FiPhone, FiMapPin, FiInstagram, FiFacebook, FiTwitter, FiLinkedin } from 'react-icons/fi'

const Footer = () => {
    return (
        <footer className='bg-[#EFE7DE] text-gray-800 pt-16 pb-8 border-t border-[#E2D6CB]'>
            <div className='max-w-7xl mx-auto px-5'>
                
                {/* Top Grid Section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12'>
                    
                    {/* Column 1: Brand Info (2 spans on large screens) */}
                    <div className='lg:col-span-2 space-y-4'>
                        <div className='flex items-center gap-2.5 cursor-pointer'>
                            <div className='bg-black text-white p-2.5 rounded-xl flex items-center justify-center shadow-md'>
                                <FiShoppingBag className='text-xl' />
                            </div>
                            <h1 className='text-2xl font-black tracking-tight text-gray-900'>
                                Shop-store<span className='text-amber-600'>.</span>
                            </h1>
                        </div>
                        <p className='text-gray-600 text-sm leading-relaxed max-w-sm'>
                            Your ultimate destination for modern fashion, lifestyle essentials, and exclusive collections delivered seamlessly to your doorstep.
                        </p>
                        {/* Social Icons */}
                        <div className='flex items-center gap-3 pt-2'>
                            <a href='#' className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm'>
                                <FiInstagram />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm'>
                                <FiFacebook />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm'>
                                <FiTwitter />
                            </a>
                            <a href='#' className='w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm'>
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='space-y-4'>
                        <h4 className='text-base font-bold text-gray-900 tracking-wide uppercase'>Quick Links</h4>
                        <ul className='space-y-2.5 text-sm text-gray-600 font-medium'>
                            <li><a href='#home' className='hover:text-black transition-colors'>Home</a></li>
                            <li><a href='#products' className='hover:text-black transition-colors'>Products</a></li>
                            <li><a href='#about' className='hover:text-black transition-colors'>About Us</a></li>
                            <li><a href='#contact' className='hover:text-black transition-colors'>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Customer Service */}
                    <div className='space-y-4'>
                        <h4 className='text-base font-bold text-gray-900 tracking-wide uppercase'>Customer Care</h4>
                        <ul className='space-y-2.5 text-sm text-gray-600 font-medium'>
                            <li><a href='#' className='hover:text-black transition-colors'>Privacy Policy</a></li>
                            <li><a href='#' className='hover:text-black transition-colors'>Terms & Conditions</a></li>
                            <li><a href='#' className='hover:text-black transition-colors'>Shipping & Returns</a></li>
                            <li><a href='#' className='hover:text-black transition-colors'>FAQs</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter / Contact Info */}
                    <div className='space-y-4'>
                        <h4 className='text-base font-bold text-gray-900 tracking-wide uppercase'>Stay Updated</h4>
                        <p className='text-xs text-gray-600 leading-relaxed'>
                            Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
                        </p>
                        <form onSubmit={(e) => e.preventDefault()} className='space-y-2'>
                            <input 
                                type='email' 
                                placeholder='Enter your email' 
                                className='w-full px-4 py-2.5 rounded-xl bg-white border border-gray-200 text-xs focus:outline-none focus:border-black'
                            />
                            <button className='w-full bg-black hover:bg-amber-700 text-white font-medium py-2.5 rounded-xl text-xs transition-all shadow-md cursor-pointer'>
                                Subscribe
                            </button>
                        </form>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className='border-t border-[#DED0C3] pt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 font-medium'>
                    <p>© 2026 Shop-store. All rights reserved.</p>
                    <p className='mt-2 sm:mt-0'>Design with ❤️ for E-Commerce</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer