import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';

function ContactUs()
{
    const navigate = useNavigate();
    return (
        <div className='bg-gray-100'>
            <header className="flex justify-between bg-gray-800 text-white p-3 ">
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
                        <li><span className="hover:text-gray-300 cursor-pointer">Contact Us</span></li>
                        <li><span className="hover:text-gray-300 cursor-pointer">Blog</span></li>
                    </ul>
                </nav>
                <div className='flex'>
                    <input type="text" className="border border-gray-300 rounded-full px-10 " placeholder="Search..." />
                    <span className="flex text-white px-4 py-2 cursor-pointer hover:text-slate-200" onClick={() =>
                    {
                        navigate("/login");
                        <Loading />
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
            </header>
            <img src={'https://marketplace.canva.com/EAFnfNf6jsE/1/0/1600w/canva-colorful-illustrative-food-zoom-virtual-background-m5vmphKlp0c.jpg'} alt='' className='w-full object-cover-fit h-[41.3rem]' />
            <section id="contact" className="absolute p-8 bg-green-400 text-white top-[25%] right-[35%]">

                <div className="mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                    <p className="text-lg mb-8">Have a question or feedback? Feel free to get in touch!</p>
                    <form className="max-w-md mx-auto text-gray-700">
                        <input type="text" placeholder="Your Name" className="block w-full px-4 py-3 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                        <input type="email" placeholder="Your Email" className="block w-full px-4 py-3 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500" />
                        <textarea placeholder="Your Message" className="block w-full px-4 py-3 mb-4 rounded-md shadow-sm focus:outline-none focus:ring-orange-500 focus:border-orange-500"></textarea>
                        <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600">Send Message</button>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default ContactUs
