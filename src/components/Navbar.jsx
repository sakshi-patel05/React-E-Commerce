import React, { useState } from 'react'
import { CiMenuBurger } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";


const Navbar = () => {
    const [menubar, setManBar] = useState(false)
    console.log(menubar);

    return (
        <nav className='bg-white shadow-md'>
            <div className='max-w-7xl mx-auto px-5'>
                <div className='flex justify-between items-center h-16'>
                    <h1 className='text-2xl font-bold text-blue-600'>
                        Shop-store
                    </h1>

                    <ul className='hidden md:flex gap-8 font-medium'>
                        <li className='cursor-pointer hover:text-blue-600'>HOME</li>
                        <li className='cursor-pointer hover:text-blue-600'>About</li>
                        <li className='cursor-pointer hover:text-blue-600'>Card</li>
                        <li className='cursor-pointer hover:text-blue-600'>Contact</li>
                    </ul>

                    <button
                        className='md:hidden'
                        onClick={() => {
                            setManBar(!menubar)
                        }}
                    >
                        {(menubar) ? (<IoMdClose />) : (<CiMenuBurger />

                        )}
                    </button>

                </div>
                {/* Mobile menu*/}
                {menubar && (
                    <ul className="md:hidden flex flex-col items-center gap-5 pb-6 font-medium bg-white w-full absolute left-0 shadow-lg transition-all duration-300">
                        <li className="cursor-pointer hover:text-blue-600 w-full text-center py-2">HOME</li>
                        <li className="cursor-pointer hover:text-blue-600 w-full text-center py-2">About</li>
                        <li className="cursor-pointer hover:text-blue-600 w-full text-center py-2">Card</li>
                        <li className="cursor-pointer hover:text-blue-600 w-full text-center py-2">Contact</li>
                    </ul>
                )}

            </div>
        </nav>

    )
}

export default Navbar
