import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar';
import Footer from '../../Components/Footer';

function Login()
{
    const navigate = useNavigate();
    return (
        <>
            <Navbar />
            <div className='mx-auto m-auto p-1 h-auto bg-orange-300'>
                <div className='mx-auto my-7 max-w-lg md:max-w-2xl lg:max-w-4xl'>
                    <div className="text-center mb-2">
                        Don't have an account? <span className="text-indigo-500 hover:text-indigo-600 cursor-pointer" onClick={() => navigate('/auth/create')}>Create One</span>
                    </div>
                    <h2 className="text-2xl font-bold text-center">Sign In</h2>
                    <form className="max-w-md mx-auto my-6 grid grid-cols-1 gap-4">
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email :</label>
                            <input type="email" id="email" className="input-login" placeholder="Enter your email" required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password :</label>
                            <input type="password" id="password" className="input-login" placeholder="Enter your password" required />
                        </div>
                    </form>
                    <div className="max-w-md mx-auto">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center">
                                <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" required />
                                <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">Accept Terms & Conditions</label>
                            </div>
                        </div>
                        <div className='max-w-xl mx-auto'>
                            <button type="submit" className="w-full md:w-3/5 flex justify-center mt-4 py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign In</button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login;
