import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

function About()
{
    return (
        <>
            <Navbar />
            <div>
                <section className='w-full h-48 text-centre pt-20'>
                    <h1 className='text-6xl px-40 py-10 text-gray-500 underline'>About Us</h1>
                </section>
                <section className='w-full h-40 p-5 text-center'>
                    <p>
                        lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About
