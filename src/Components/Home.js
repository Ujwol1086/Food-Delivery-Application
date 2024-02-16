import React from 'react'
import { useNavigate } from 'react-router-dom';
import Loading from './Loading';
function Home()
{
    const navigate = useNavigate();
    return (
        <div className="bg-gray-100">
            <header className="flex justify-between bg-gray-800 text-white p-3 ">
                <h1 className="text-3xl font-bold">Food Delivery</h1>
                <nav className="mt-2">
                    <ul className="flex space-x-16 text-lg">
                        <li><span className="hover:text-gray-300 cursor-pointer">Home</span></li>
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
            <section id="home" >
                <div className='h-screen flex items-center relative'>
                    <img src={"https://wallpapers.com/images/hd/food-4k-m37wpodzrcbv5gvw.jpg"} alt='' className='w-full h-full object-cover' />
                    <div className='mx-auto absolute left-10 top-16'>
                        <p className='text-2xl text-amber-400 font-bold '>ONLINE FOOD DEIVERY</p>
                        <h1 className="text-8xl font-bold mb-4">Don't Starve</h1>
                        <h1 className='text-8xl font-bold text-yellow-300'>Just Order</h1>
                    </div>
                    <div className="container mx-auto text-center absolute right-[23rem] bottom-48">
                        <h2 className="text-4xl text-slate-400 font-bold mb-4">Delicious food delivered to your doorstep</h2>
                        <p className="text-lg text-slate-400 mb-8">Order online and enjoy a wide variety of cuisines from the comfort of your home.</p>
                        <a href="#menu" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600">Order Now &rarr;</a>
                    </div>
                </div>
            </section>
            <section id="about" className="py-20">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">About Us</h2>
                    <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
                </div>
            </section>
            <section id="menu" className="py-20 bg-gray-200 text-center">
                <h1>FEATURED RESTURANT</h1>
            </section>

            <footer className="bg-gray-800 text-white py-4 text-center">
                <div className="container mx-auto">
                    <p>&copy; 2024 Food Delivery</p>
                </div>
            </footer>
        </div>

    );
}
export default Home;
