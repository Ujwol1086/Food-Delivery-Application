import React from 'react'
import { useNavigate } from 'react-router-dom'

function Create()
{
    const navigate = useNavigate();
    return (
        <div>
            <header className="flex justify-between bg-gray-800 text-white p-3">
                <h1 className="text-3xl font-bold">Food Delivery</h1>
                <nav className="mt-2">
                    <ul className="flex space-x-16 text-lg">
                        <li><span className="hover:text-gray-300 cursor-pointer" onClick={() =>
                        {
                            navigate('/home')
                        }}>Home</span></li>
                        <li><span className="hover:text-gray-300 cursor-pointer" onClick={() =>
                        {
                            navigate('/resturant');
                        }}>Resturant</span></li>
                        <li><span className="hover:text-gray-300 cursor-pointer" onClick={() =>
                        {
                            navigate('/contact-us');
                        }}>Contact Us</span></li>
                        <li><span className="hover:text-gray-300 cursor-pointer">Blog</span></li>
                    </ul>
                </nav>
                <div className='flex'>
                    <input type="text" className="border border-gray-300 rounded-full px-10 " placeholder="Search..." />
                    <span className="flex text-white px-4 py-2 cursor-pointer hover:text-slate-200" onClick={() => navigate('/login')}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                        Login
                    </span>
                    <span className='mt-2 mr-4'>|</span>
                    <span className='flex mt-2 mr-4 cursor-pointer hover:text-slate-200'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                        </svg>
                        Cart
                    </span>
                </div>
            </header>
            <img src={'https://st3.depositphotos.com/7893620/16690/i/450/depositphotos_166903868-stock-photo-food-background-vegetarian-concept.jpg'} alt='' className='relative w-full h-[41.3rem] object-cover' />
            <div className='absolute mx-auto my-7 p-1 h-auto bg-slate-300 top-16 right-[33%]'>
                <div className='mx-auto my-7 w-[30rem]'>
                    <div className="text-center mb-2">
                        Already have an account? <a href="#create" className="text-indigo-500 hover:text-indigo-600" onClick={() => 
                        {
                            navigate('/login');
                        }
                        }>Sign In</a>
                    </div>
                    <h2 className="text-2xl font-bold text-center">Sign Up</h2>
                    <form className="max-w-md mx-auto my-6 grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
                            <input type="text" id="fullName" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your full name" required />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                        </div>
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                            <input type="password" id="confirmPassword" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Confirm your password" required />
                        </div>
                    </form>
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">Accept Terms & Conditions</label>
                            </div>
                        </div>
                        <div className='max-w-xl items-center'>
                            <button type="submit" className="w-3/5 flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Create Account</button>
                        </div>

                    </div>
                </div>
            </div >
        </div >
    )
}

export default Create
