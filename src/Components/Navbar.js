import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className='sm:flex md:hidden'>
                        <Link to="/" className="text-white font-bold text-2xl">Food Delivery</Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="/resturant" className="text-white hover:text-gray-300">Resturants</Link></li>
                            <li><Link to="/contact-us" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
                            <li><button className='border border-gray-600 text-gray-300 bg-blue-500 px-3 rounded' onClick={() =>
                            {
                                navigate('/auth/login');
                            }}>Login</button></li>
                            <li><button className='border border-gray-600 text-gray-300 bg-red-500 px-3 rounded' onClick={() =>
                            {
                                navigate('/auth/create');
                            }}>Sign Up</button></li>
                        </ul>
                    </div>
                    <div className='hidden sm:flex md:flex items-center'>
                        <ul className='flex gap-10'>
                            <li> <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-xl text-gray-400 right-auto p-1.5" /><input type='text' placeholder='Search' className="text-white bg-white rounded-full px-5 py-1 pl-8 hover:text-gray-500 hover:outline-none" /></li>
                        </ul>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>

                </div>
                {isOpen && (
                    <div className="md:hidden flex justify-between">
                        <ul className="flex flex-col space-y-4">
                            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="/restaurant" className="text-white hover:text-gray-300">Restaurants</Link></li>
                            <li><Link to="/contact-us" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>

                        </ul>
                        <div className='space-y-4'>
                            <ul>
                                <li className='flex sm:hidden'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass} className="absolute text-xl text-gray-400 right-auto p-1.5" />
                                    <input type='text' placeholder='Search' className="text-white bg-white rounded-full px-5 py-1 pl-8 hover:text-gray-500 hover:outline-none" />
                                </li>
                            </ul>
                            <div>
                                <ul className='flex gap-10 justify-center'>
                                    <li>
                                        <button className='border border-gray-600 text-gray-300 bg-blue-500 px-3 rounded' onClick={() =>
                                        {
                                            navigate('/auth/login');
                                        }}>Login</button>
                                    </li>
                                    <li>
                                        <button className='border border-gray-600 text-gray-300 bg-red-500 px-3 rounded mb-5' onClick={() =>
                                        {
                                            navigate('/auth/create');
                                        }}>Sign Up</button>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
}

export default Navbar;
