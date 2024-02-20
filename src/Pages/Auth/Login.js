import React from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';


function Login()
{
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div>
                <img src={'https://st3.depositphotos.com/7893620/16690/i/450/depositphotos_166903868-stock-photo-food-background-vegetarian-concept.jpg'} alt='' className='relative w-full h-[41.3rem] object-cover' />
                <div className=' absolute flex mx-auto my-32 bg-indigo-400 w-[50rem] h-96 top-0 right-[25%]'>
                    <img src={require("../../Images/food.jpg")} alt='' className='w-1/2 object-cover' />
                    <form className="max-w-xs mx-auto my-6 justify-items-end">
                        <div className="mb-4">
                            Don't have an account? <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer" onClick={() =>
                            {
                                navigate('/auth/create');
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
        </>
    )
}

export default Login
