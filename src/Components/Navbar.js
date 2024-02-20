import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar()
{
    const navigate = useNavigate();
    const [openMenu, setOpenMenu] = useState(false);
    const toggleMenu = () =>
    {
        setOpenMenu(!openMenu);
    }

    return (
        <header className="flex justify-between bg-gray-800 text-white p-3 ">
            <h1 className="sm:text-xl md:text-2xl font-bold">Food Delivery</h1>
            <div>
                <nav className="mt-2 sm:hidden md:hidden lg:flex xl:flex" style={{ display: openMenu ? "block" : "hidden" }}>
                    <ul className="flex sm:space-x-4 md:text-lg md:space-x-8 lg:space-x-10 xl:space-x-16">
                        <li><span className="hover:text-gray-300 cursor-pointer" onClick={() =>
                        {
                            navigate('/');
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
                <div className='sm:hidden lg:flex'>
                    <input type="text" className="border border-gray-300 rounded-full px-10 " placeholder="Search..." />
                    <span className="flex text-white px-4 py-2 cursor-pointer hover:text-slate-200" onClick={() =>
                    {
                        navigate("/auth/login");

                    }
                    }>
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
            </div>
            <FontAwesomeIcon icon={faBars} className='lg:hidden cursor-pointer text-2xl hover:bg-gray-300 hover:text-black p-1 rounded transition duration-150' onClick={toggleMenu} />

        </header>
    );
}

export default Navbar;