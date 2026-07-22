import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import { FiShoppingBag, FiSearch, FiUser } from "react-icons/fi";
import { Link } from 'react-router';

const Navbar = () => {
    const [menubar, setManBar] = useState(false)

    // Scroll karne ke liye function
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setManBar(false); // Mobile menu close karne ke liye
    }

    return (
        <nav className='bg-[#F7F2EC] shadow-sm sticky top-0 z-50'>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='grid grid-cols-3 items-center h-20'>

                    {/* Brand Logo */}
                    <div onClick={() => scrollToSection('home')} className='flex items-center gap-2.5 cursor-pointer justify-start'>
                        <div className='bg-black text-white p-2.5 rounded-xl flex items-center justify-center shadow-md'>
                            <FiShoppingBag className='text-xl' />
                        </div>
                        <h1 className='text-2xl font-black tracking-tight text-gray-900'>
                            Shop-store<span className='text-amber-600'>.</span>
                        </h1>
                    </div>

                    {/* Desktop Menu with Smooth Scroll */}
                    <ul className='hidden md:flex justify-center gap-8 font-medium text-gray-700 text-sm tracking-wide'>
                        <Link to="/">
                            <li className='hover:text-black transition-colors cursor-pointer'>HOME
                            </li>
                        </Link>
                        <Link to="/categories">
                            <li className='hover:text-black transition-colors cursor-pointer'>Categories
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className='hover:text-black transition-colors cursor-pointer'>Products
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className='hover:text-black transition-colors cursor-pointer'> About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li className='hover:text-black transition-colors cursor-pointer'>Contact
                            </li>
                        </Link>
                    </ul>

                    {/* Right Actions */}
                    <div className='hidden md:flex items-center justify-end gap-5'>
                        <button className='p-2.5 rounded-full bg-[#EFE7DE] hover:bg-[#E5DCD2] text-gray-800 transition-colors cursor-pointer'>
                            <FiSearch className='text-lg' />
                        </button>

                        <button className='flex items-center gap-4 bg-black hover:bg-gray-800 text-white font-medium px-5 py-2.5 rounded-xl text-sm transition-all shadow-md cursor-pointer'>
                            <FiUser className='text-base' />
                            Login
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className='flex items-center justify-end md:hidden col-span-2 gap-3'>
                        <button className='p-2 rounded-full bg-[#EFE7DE] text-gray-800'>
                            <FiSearch className='text-lg' />
                        </button>
                        <button
                            className='text-2xl text-gray-900 focus:outline-none'
                            onClick={() => setManBar(!menubar)}
                        >
                            {menubar ? <IoMdClose /> : <CiMenuBurger />}
                        </button>
                    </div>

                </div>

                {/* Mobile Menu Links */}
                {menubar && (
                    <ul className="md:hidden flex flex-col items-center gap-4 pb-6 font-medium bg-[#F3ECE4] w-full absolute left-0 shadow-lg transition-all duration-300 border-b border-gray-200">
                        <Link to="/">
                            <li className='hover:text-black transition-colors cursor-pointer'>HOME
                            </li>
                        </Link>
                        <Link to="/categories">
                            <li className='hover:text-black transition-colors cursor-pointer'>Categories
                            </li>
                        </Link>
                        <Link to="/products">
                            <li className='hover:text-black transition-colors cursor-pointer'>Products
                            </li>
                        </Link>
                        <Link to="/about">
                            <li className='hover:text-black transition-colors cursor-pointer'> About
                            </li>
                        </Link>
                        <Link to="/contact">
                            <li className='hover:text-black transition-colors cursor-pointer'>Contact
                            </li>
                        </Link>
                        <div className='pt-2 w-3/4'>
                            <button className='w-full flex items-center justify-center gap-2 bg-black text-white font-medium py-2.5 rounded-xl text-sm shadow-md'>
                                <FiUser /> Login
                            </button>
                        </div>
                    </ul>
                )}
            </div>
        </nav>
    )
}

export default Navbar