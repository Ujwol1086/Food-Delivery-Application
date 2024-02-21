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
                            <li><Link to="/restaurants" className="text-white hover:text-gray-300">Restaurants</Link></li>
                            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
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
                            <li><Link to="/restaurants" className="text-white hover:text-gray-300">Restaurants</Link></li>
                            <li><Link to="/contact" className="text-white hover:text-gray-300">Contact</Link></li>
                            <li><Link to="/about" className="text-white hover:text-gray-300">About</Link></li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
