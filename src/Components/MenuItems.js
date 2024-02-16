import React from 'react'

function MenuItems()
{
    return (
        <div>
            <section id="menu" className="py-20 bg-gray-200">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="menu-item">
                            <img src="menu-item1.jpg" alt="Menu Item 1" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className="text-orange-500 font-bold">$10</span>
                        </div>
                        <div className="menu-item">
                            <img src="menu-item2.jpg" alt="Menu Item 2" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className="text-orange-500 font-bold">$12</span>
                        </div>
                        <div className="menu-item">
                            <img src="menu-item3.jpg" alt="Menu Item 3" className="mx-auto mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Item Name</h3>
                            <p className="mb-4">Description of the item goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <span className="text-orange-500 font-bold">$15</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default MenuItems
