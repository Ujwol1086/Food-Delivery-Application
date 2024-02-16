import React from 'react'
import { useNavigate } from 'react-router-dom';


function Login()
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
                            navigate('/resturant')
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
                    <span className="flex text-white px-4 py-2 cursor-pointer hover:text-slate-200">
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
            <div className=' absolute flex mx-auto my-32 bg-indigo-400 w-[50rem] h-96 top-0 right-[25%]'>
                <img src={'https://www.ntu.ac.uk/__data/assets/image/0036/1849077/DSC06821.jpg'} alt='' className='w-1/2 object-cover' />
                <form className="max-w-xs mx-auto my-6 justify-items-end">
                    <div className="mb-4">
                        Don't have an account? <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer" onClick={() =>
                        {
                            navigate('/create');
                        }}>Create one</span>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="email" id="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your email" required />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" placeholder="Enter your password" required />
                    </div>
                    <div className="items-center mb-4">
                        <div className="flex items-center">
                            <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">Remember me</label>
                        </div>
                        <div className="text-sm mt-4">
                            <a href="/" className="font-medium text-indigo-600 hover:text-indigo-500">Forgot your password?</a>
                        </div>
                    </div>
                    <div>
                        <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
