import React from 'react'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

const Contact = () => {
    return (
        <div className='bg-[#F7F2EC] py-16'
        id='contact'
        >
            <div className='max-w-7xl mx-auto px-5'>
                
                {/* Header */}
                <div className='text-center max-w-2xl mx-auto mb-16'>
                    <span className='text-xs font-bold tracking-widest text-amber-700 uppercase bg-[#EFE7DE] px-3 py-1 rounded-full'>
                        Get In Touch
                    </span>
                    <h2 className='text-3xl md:text-5xl font-black text-gray-900 mt-4 tracking-tight'>
                        We’d Love To Hear From You
                    </h2>
                    <p className='text-gray-600 text-base mt-4'>
                        Have a question about an order, products, or just want to say hello? Drop us a message below.
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
                    
                    {/* Left Side: Contact Info */}
                    <div className='bg-[#F3ECE4] p-8 md:p-12 rounded-3xl border border-[#E8DDD1] space-y-8'>
                        <h3 className='text-2xl font-bold text-gray-900'>Contact Information</h3>
                        
                        <div className='flex items-start gap-4'>
                            <div className='bg-black text-white p-3 rounded-xl text-xl'>
                                <FiMapPin />
                            </div>
                            <div>
                                <h4 className='font-bold text-gray-900'>Our Office Location</h4>
                                <p className='text-sm text-gray-600 mt-1'>123 Fashion Street, Market Road, New Delhi, India</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='bg-black text-white p-3 rounded-xl text-xl'>
                                <FiPhone />
                            </div>
                            <div>
                                <h4 className='font-bold text-gray-900'>Phone Number</h4>
                                <p className='text-sm text-gray-600 mt-1'>+91 98765 43210</p>
                            </div>
                        </div>

                        <div className='flex items-start gap-4'>
                            <div className='bg-black text-white p-3 rounded-xl text-xl'>
                                <FiMail />
                            </div>
                            <div>
                                <h4 className='font-bold text-gray-900'>Email Address</h4>
                                <p className='text-sm text-gray-600 mt-1'>support@shopstore.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Side: Contact Form */}
                    <div className='bg-white p-8 md:p-12 rounded-3xl shadow-lg border border-gray-100'>
                        <form onSubmit={(e) => e.preventDefault()} className='space-y-6'>
                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>Your Name</label>
                                <input 
                                    type='text' 
                                    placeholder='Enter your name' 
                                    className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors text-sm'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>Your Email</label>
                                <input 
                                    type='email' 
                                    placeholder='Enter your email' 
                                    className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors text-sm'
                                />
                            </div>

                            <div>
                                <label className='block text-sm font-semibold text-gray-700 mb-2'>Your Message</label>
                                <textarea 
                                    rows='4' 
                                    placeholder='Type your message here...' 
                                    className='w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:border-black transition-colors text-sm resize-none'
                                ></textarea>
                            </div>

                            <button 
                                type='submit' 
                                className='w-full bg-black hover:bg-gray-800 text-white font-medium py-3.5 rounded-xl text-sm transition-all shadow-md cursor-pointer'
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact