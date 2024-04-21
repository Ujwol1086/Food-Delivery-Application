import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function Restaurant()
{
    return (
        <>
            <Navbar />
            <div className='bg-gray-100'>
                <section id="menu" className="px-5 md:px-10 py-5 bg-gray-200">
                    <div className="container mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-10">Restaurants</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 1" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-lg md:text-xl mb-2">Mughal Emphire</h3>
                            </div>
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 1" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-md md:text-xl mb-2">Lumbini Tandoori Foods</h3>
                            </div>
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 2" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-md md:text-xl mb-2">Paradise Foodland and Restaurant</h3>
                            </div>
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 3" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-md md:text-xl mb-2">Burger House and Fried Chicken</h3>
                            </div>
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 3" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-lg md:text-xl mb-2">Chinese Restaurant</h3>
                            </div>
                            <div className="menu-item">
                                <img src={require("../Images/rest.jpg")} alt="Menu Item 3" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                                <h3 className="text-lg md:text-xl mb-2">KFC</h3>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Restaurant;
