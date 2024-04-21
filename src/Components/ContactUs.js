import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function ContactUs()
{
    return (
        <>
            <Navbar />
            <div className='bg-gray-100'>
                <section id="contact" className="p-[1.65rem] bg-orange-300 text-white">
                    <div className="mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-4 text-black">Contact Us</h2>
                        <p className="text-lg mb-8 text-black">Have a question or feedback? Feel free to get in touch!</p>
                        <form className="max-w-md mx-auto text-gray-700">
                            <input type="text" placeholder="Your Name" className="input" />
                            <input type="email" placeholder="Your Email" className="input" />
                            <textarea placeholder="Your Message" className="input"></textarea>
                            <button type="submit" className="bg-orange-500 text-white px-6 py-3 rounded-full font-bold hover:bg-orange-600">Send Message</button>
                        </form>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs
