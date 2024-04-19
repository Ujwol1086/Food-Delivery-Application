import React from 'react'
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlay, FaApple } from "react-icons/fa";
export default function Footer()
{
    return (
        <div>
            <footer className="bg-gray-600 text-white py-4 text-center">
                <div className='p-5 pl-20 text-left flex gap-40 '>
                    <ul>
                        <li className='mb-5 font-bold'>Our Company</li>
                        <li className='footer-mouseover'>About Us</li>
                        <li className='footer-mouseover'>FAQs</li>
                        <li className='footer-mouseover'>Available Areas</li>
                        <li className='footer-mouseover'>Delivery Charges</li>
                    </ul>
                    <ul>
                        <li className='mb-5 font-bold'>Contact</li>
                        <li><b>Phone:</b>  +977-9848771734</li>
                        <li><b>Email:</b>  ezfood@gmail.com</li>
                        <li><b>Hours:</b>  9:00 am - 8:00 pm</li>
                    </ul>
                    <ul>
                        <li className='mb-5 font-bold'>Legal</li>
                        <li className='footer-mouseover'>Terms and Conditions</li>
                        <li className='footer-mouseover'>Privacy Policy</li>
                    </ul>
                    <ul>
                        <li className='mb-5 font-bold'>Social</li>
                        <li className='footer-mouseover-social'><FaFacebook className="icon text-blue-500 mt-1" /> Facebook</li>
                        <li className='footer-mouseover-social'><FaTwitter className="icon text-blue-500 mt-1" /> Twitter</li>
                        <li className='footer-mouseover-social'><FaInstagram className="icon text-red-500 mt-1" />Instagram</li>
                    </ul>
                    <ul>
                        <h3 className='mb-5'>We Are Available On!</h3>
                        <div className='flex gap-4 text-2xl'>
                            <button><FaGooglePlay className="icon text-blue-500" /></button>
                            <button><FaApple className="icon text-white" /></button>
                        </div>
                    </ul>
                </div>
                <div className="container mx-auto">
                    <p>&copy; 2024 Food Delivery</p>
                </div>
            </footer>
        </div>
    )
}
