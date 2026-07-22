import React from 'react'
import { FiShoppingBag, FiMail, FiPhone, FiMapPin, FiInstagram, FiGithub, FiLinkedin } from 'react-icons/fi'
import { TbBrandWebflow } from "react-icons/tb";

const Footer = () => {
    return (
        <footer className='bg-[#EFE7DE] text-gray-800 pt-10 sm:pt-14 pb-6 border-t border-[#E2D6CB]'>
            <div className='max-w-7xl mx-auto px-4 sm:px-5'>

                {/* Top Grid Section */}
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 sm:mb-10'>

                    {/* Column 1: Brand Info */}
                    <div className='space-y-3'>
                        <div className='flex items-center gap-2.5 cursor-pointer'>
                            <div className='bg-black text-white p-2 rounded-xl flex items-center justify-center shadow-md'>
                                <FiShoppingBag className='text-lg' />
                            </div>
                            <h1 className='text-xl sm:text-2xl font-black tracking-tight text-gray-900'>
                                Shop-store<span className='text-amber-600'>.</span>
                            </h1>
                        </div>
                        <p className='text-gray-600 text-xs sm:text-sm leading-relaxed max-w-sm'>
                            Your ultimate destination for modern fashion and lifestyle essentials delivered seamlessly.
                        </p>
                        {/* Social Icons */}
                        <div className='flex items-center gap-2.5 pt-1'>
                            <a href='#' className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm text-sm'>
                                <FiInstagram />
                            </a>
                            <a href='https://sakshi-portfolio-kappa-five.vercel.app/' className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm text-sm'>
                                <TbBrandWebflow />
                            </a>
                            <a href='https://github.com/sakshi-patel05' className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm text-sm'>
                                <FiGithub />
                            </a>
                            <a href='https://www.linkedin.com/in/sakshi-patel-5a0999374/' className='w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-amber-700 transition-colors shadow-sm text-sm'>
                                <FiLinkedin />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div className='space-y-3'>
                        <h4 className='text-sm sm:text-base font-bold text-gray-900 tracking-wide uppercase'>Quick Links</h4>
                        <ul className='space-y-2 sm:space-y-2 text-xs sm:text-sm text-gray-600 font-medium'>
                            <li><a href='#home' className='hover:text-black transition-colors'>Home</a></li>
                            <li><a href='#products' className='hover:text-black transition-colors'>Products</a></li>
                            <li><a href='#about' className='hover:text-black transition-colors'>About Us</a></li>
                            <li><a href='#contact' className='hover:text-black transition-colors'>Contact Us</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Top 5 Categories (Customer Care ki jagah) */}
                    <div className='space-y-3'>
                        <h4 className='text-sm sm:text-base font-bold text-gray-900 tracking-wide uppercase'>Categories</h4>
                        <ul className='space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 font-medium'>
                            <li><a href='#category' className='hover:text-black transition-colors'>Beauty & Makeup</a></li>
                            <li><a href='#category' className='hover:text-black transition-colors'>Fragrances</a></li>
                            <li><a href='#category' className='hover:text-black transition-colors'>Furniture</a></li>
                            <li><a href='#category' className='hover:text-black transition-colors'>Groceries</a></li>
                            <li><a href='#category' className='hover:text-black transition-colors'>Home Decoration</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact Details (Subscribe ki jagah) */}
                    <div className='space-y-3'>
                        <h4 className='text-sm sm:text-base font-bold text-gray-900 tracking-wide uppercase'>Contact Us</h4>
                        <div className='space-y-2 text-xs sm:text-sm text-gray-600 font-medium'>
                            <div className='flex items-center gap-2'>
                                <FiMapPin className='text-amber-700 flex-shrink-0' />
                                <span>New Delhi, India</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FiPhone className='text-amber-700 flex-shrink-0' />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className='flex items-center gap-2'>
                                <FiMail className='text-amber-700 flex-shrink-0' />
                                <span>support@shopstore.com</span>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Bottom Copyright Bar */}
                <div className='border-t border-[#DED0C3] pt-4 flex flex-col sm:flex-row justify-between items-center text-[11px] sm:text-xs text-gray-500 font-medium'>
                    <p>© 2026 Shop-store. All rights reserved.</p>
                    <p className='mt-1 sm:mt-0'>Design with ❤️ for E-Commerce</p>
                </div>

            </div>
        </footer>
    )
}

export default Footer