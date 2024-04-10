import React from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from '../../Components/Navbar';

function Create()
{
    const navigate = useNavigate();
    return (
        <>
            <div>
                <Navbar />
                <img src={'https://st3.depositphotos.com/7893620/16690/i/450/depositphotos_166903868-stock-photo-food-background-vegetarian-concept.jpg'} alt='' className='relative w-full h-[41.3rem] object-cover' />
                <div className='absolute mx-auto my-7 p-1 h-auto bg-slate-300 top-16 right-[33%]'>
                    <div className='mx-auto my-7 w-[30rem]'>
                        <div className="text-center mb-2">
                            Already have an account? <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer" onClick={() => 
                            {
                                navigate('/auth/login');
                            }
                            }>Sign In</span>
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
        </>
    )
}

export default Create
