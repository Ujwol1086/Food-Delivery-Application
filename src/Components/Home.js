import React from 'react';
import Navbar from './Navbar';
import FeaturedItems from './FeaturedItems';
import About from './About';

function Home()
{
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <section id="home" className="relative flex flex-col lg:flex-row bg-gradient-to-t from-white to-blue-200">
                    <div className="container mx-auto px-2 lg:px-0 lg:w-1/2 font- flex justify-center items-center order-1 lg:order-2">
                        <div className="lg:text-left font-medium">
                            <p className="text-xl sm:text-xl text-green-400 font-bold mb-2">ONLINE FOOD DELIVERY</p>
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold mb-2">Don't Starve</h1>
                            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-yellow-300 mb-8">Just Order</h1>
                            <h2 className="text-lg sm:text-lg lg:text-2xl text-slate-400 font-bold mb-4">Delicious food delivered to your doorstep</h2>
                            <p className="text-sm sm:text-base lg:text-lg text-slate-400 mb-8">Order online and enjoy a wide variety of cuisines from the comfort of your home.</p>
                            <a href="#menu" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600 text-sm sm:text-base lg:text-lg">Order Now &rarr;</a>
                        </div>
                    </div>
                    <div className="lg:w-1/2 lg:order-2">
                        <img src={require('../Images/food2.jpg')} alt='' className="w-full h-auto lg:h-full object-cover " />
                    </div>
                </section>
                <section id="about" className="py-10 md:py-20">
                    <About />
                </section>
                <section id="menu" className="py-10 md:py-20 bg-gray-200 text-center">
                    <FeaturedItems />
                </section>
                <footer className="bg-gray-800 text-white py-4 text-center">
                    <div className="container mx-auto">
                        <p>&copy; 2024 Food Delivery</p>
                    </div>
                </footer>
            </div>
        </>
    );
}

export default Home;
