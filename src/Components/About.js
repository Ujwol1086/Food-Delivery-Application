import React from 'react'
import Navbar from './Navbar'

function About()
{
    return (
        <div>
            <Navbar />
            <div className="container mx-auto text-center p-10 mt-10">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>
                <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vitae ultricies lacinia, nunc nisl aliquet nisl, eget aliquam nisl nisl sit amet nisl.</p>
            </div>
        </div>
    )
}

export default About
