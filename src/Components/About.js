import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About()
{
    return (
        <>
            <Navbar />
            <div className='h-auto md:h-[25.8rem]'>
                <section className='w-full h-auto md:h-48 text-center pt-20'>
                    <h1 className='text-4xl md:text-6xl px-10 md:px-40 py-10 text-gray-500 underline'>About Us</h1>
                </section>
                <section className='w-full h-auto md:h-40 p-5 text-center'>
                    <p className="text-sm md:text-base">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default About;
