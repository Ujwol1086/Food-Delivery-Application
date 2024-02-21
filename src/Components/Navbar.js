import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navbar()
{
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <Link to="/" className="text-white text-lg font-semibold">
                            Food Delivery App
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center">
                        <ul className="flex space-x-6">
                            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="/resturant" className="text-white hover:text-gray-300">Resturants</Link></li>
                            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
                        </ul>
                    </div>
                    <div className='hidden md:flex items-center'>
                        <ul className='flex gap-10'>
                            <li><input type='text' placeholder='Search' className="text-white bg-white rounded-full px-5 hover:text-gray-500 hover:outline-none" /></li>
                            <li><Link to="/auth/login" className="text-white hover:text-gray-300">Login</Link></li>
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
                    <div className="md:hidden">
                        <ul className="flex flex-col space-y-4">
                            <li><Link to="/" className="text-white hover:text-gray-300">Home</Link></li>
                            <li><Link to="/resturant" className="text-white hover:text-gray-300">Restaurants</Link></li>
                            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
                            <li className='flex gap-5 py-1'><input type='text' placeholder='Search' className="text-white bg-white rounded-full px-5 hover:text-gray-500 hover:outline-none" /><button className='text-white hover:bg-gray-700 rounded-full px-3 py-1'>Search</button> <button className='text-white hover:bg-gray-700 rounded-full px-3 py-1'>Login</button></li>
                            {/* <li><Link to="/auth/login" className="text-white hover:text-gray-300">Login</Link></li> */}
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
