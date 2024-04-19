import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlay, FaApple } from "react-icons/fa";
export default function Footer()
{
    return (
        <div>
            <footer className="bg-gray-600 text-white py-4">
                <div className="container mx-auto px-4 md:px-6 lg:px-8 ">
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-32">
                        {/* Company Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Our Company</h3>
                            <ul className="space-y-2">
                                <li className="footer-mouseover">About Us</li>
                                <li className='footer-mouseover'>FAQs</li>
                                <li className='footer-mouseover'>Available Areas</li>
                                <li className='footer-mouseover'>Delivery Charges</li>
                            </ul>
                        </div>
                        {/* Contact */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Contact</h3>
                            <ul className="space-y-2">
                                <li><b>Phone:</b> +977-9848771734</li>
                                <li><b>Email:</b> ezfood@gmail.com</li>
                                <li><b>Hours:</b> 9:00 am - 8:00 pm</li>
                            </ul>
                        </div>
                        {/* Legal */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Legal</h3>
                            <ul className="space-y-2">
                                <li className='footer-mouseover'>Terms and Conditions</li>
                                <li className='footer-mouseover'>Privacy Policy</li>
                            </ul>
                        </div>
                        {/* Social and App Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4">Social</h3>
                            <ul className="space-y-2">
                                <li className='footer-mouseover-social'><FaFacebook className="mt-1 text-blue-500" />Facebook</li>
                                <li className='footer-mouseover-social'><FaTwitter className="mt-1 text-blue-500" />Twitter</li>
                                <li className='footer-mouseover-social'><FaInstagram className="mt-1 text-red-500" />Instagram</li>
                            </ul>
                            {/* <div>
                                <h3 className="text-lg font-semibold mb-4 mt-8">We Are Available On!</h3>
                                <div className="flex gap-4">
                                    <button><FaGooglePlay className="text-blue-500" /></button>
                                    <button><FaApple className="text-white" /></button>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <p className="text-center mt-8">&copy; 2024 Food Delivery</p>
                </div>
            </footer>
        </div>
    )
}
