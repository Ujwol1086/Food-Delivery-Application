import React from 'react'
import Navbar from './Navbar';
import FeaturedResturant from './FeaturedResturant';
import About from './About';
function Home()
{
    return (
        <>
            <Navbar />
            <div className="bg-gray-100">
                <section id="home" >
                    <div className='h-screen flex items-center relative'>
                        <img src={require('../Images/food1.jpg')} alt='' className='w-full h-full object-cover' />
                        <div className='mx-auto absolute left-10 top-20'>
                            <p className='text-2xl text-amber-400 font-bold '>ONLINE FOOD DEIVERY</p>
                            <h1 className="text-8xl font-bold mb-4">Don't Starve</h1>
                            <h1 className='text-8xl font-bold text-yellow-300'>Just Order</h1>
                        </div>
                        <div className="container mx-auto text-center absolute right-[23rem] bottom-44">
                            <h2 className="text-4xl text-slate-400 font-bold mb-4">Delicious food delivered to your doorstep</h2>
                            <p className="text-lg text-slate-400 mb-8">Order online and enjoy a wide variety of cuisines from the comfort of your home.</p>
                            <a href="#menu" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600">Order Now &rarr;</a>
                        </div>
                    </div>
                </section>
                <section id="about" className="py-20">
                    <About />
                </section>
                <section id="menu" className="py-20 bg-gray-200 text-center">
                    <FeaturedResturant />
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