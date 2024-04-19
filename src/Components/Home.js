import React from 'react';
import Navbar from './Navbar';
import FeaturedItems from './FeaturedItems';
import Footer from './Footer';
import { FaSearchLocation } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMugHot } from "react-icons/fa";
function Home()
{
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <section id="home" className="h-[25rem] flex flex-col text-center pt-10 bg-gradient-to-t from-green-600 to-red-600">
                    <div className="container mx-auto px-2 lg:px-0 lg:w-1/2 flex justify-center items-center">
                        <div className="font-medium">
                            <p className="text-xl sm:text-xl text-green-400 font-bold mb-2">ONLINE FOOD DELIVERY</p>
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-2">Don't Starve</h1>
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-yellow-300 mb-8">Just Order</h1>
                            <h2 className="text-lg sm:text-lg lg:text-2xl font-bold mb-4 text-lime-500">Delicious food delivered to your doorstep</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-lime-500 mb-8">Order online and enjoy a wide variety of cuisines from the comfort of your home.</p>
                            <a href="#menu" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 text-sm sm:text-base lg:text-lg">Order Now &rarr;</a>
                        </div>
                    </div>
                </section>
                <section className='p-5'>
                    <h1 className='text-center text-3xl pb-10'>GRAB YOUR DEALS NOW!</h1>
                    <div className='flex'>
                        <div className="text-center max-w-64 m-auto">
                            <FaArrowDown size={50} className="mx-auto mb-4 " />
                            <h3 className="text-xl font-semibold mb-2">Install App or use the Website</h3>
                        </div>
                        <div className="text-center max-w-64 m-auto">
                            <FaSearchLocation size={50} className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Search for resturants or items</h3>
                        </div>
                        <div className="text-center max-w-64 m-auto">
                            <FaMugHot size={50} className="mx-auto mb-4 rounded-full" />
                            <h3 className="text-xl font-semibold mb-2">Place Order</h3>
                        </div>
                        <div className="text-center max-w-64 m-auto">
                            <FaMapMarkerAlt size={50} className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Track Your Order</h3>
                        </div>
                    </div>
                </section>
                <section id="menu" className="py-10 md:py-20 bg-gray-200 text-center">
                    <FeaturedItems />
                </section>
                <Footer />
            </div>
        </>
    );
}

export default Home;
