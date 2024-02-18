import React from 'react'

function ContactUs()
{
    return (
        <div className='bg-gray-100'>
            <section id="contact" className="p-8 bg-green-400 text-white">
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
