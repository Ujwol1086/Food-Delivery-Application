import React from 'react'

function FeaturedItems()
{
    return (
        <div>
            <section id="menu" className="px-10 py-5 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-10">Featured Resturants</h2>
                    <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="menu-item cursor-pointer">
                            <img src={require("../Images/rest.jpg")} alt="Menu Item 1" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="menu-item cursor-pointer">
                            <img src={require("../Images/rest.jpg")} alt="Menu Item 1" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="menu-item cursor-pointer">
                            <img src={require("../Images/rest.jpg")} alt="Menu Item 2" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                        <div className="menu-item cursor-pointer">
                            <img src={require("../Images/rest.jpg")} alt="Menu Item 3" className="mx-auto mb-4 hover:scale-110 transition duration-300" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default FeaturedItems
