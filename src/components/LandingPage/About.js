import React from 'react';
import teamImage from '../../assets/plant.png'; // Replace with your image path
import nurseryImage from '../../assets/plant.png'; // Replace with your image path
import bg from '../../assets/bg.jpg'

const About = () => {
    return (

        <div className='bg-about bg-cover bg-center h-screen flex items-center justify-end'>
            <div className="container   p-6 text-green-500 w-full max-w-lg md:max-w-xl lg:max-w-2xl  h-52 mt-10 ml-auto font-poppins">
                <h1 className="text-5xl font-bold mb-4 text-center md:text-left">About Us</h1>
                <p className="text-lg mb-4 text-center md:text-left">
                    🌱 **Welcome to Our Green Sanctuary!** 🌿
                    <br />
                    We are passionate about plants 🌼 and committed to inspiring your gardening journey 🌍 while promoting sustainability ♻️.
                </p>
                <p className="text-lg mb-4 text-center md:text-left">
                    Discover our handpicked selection of beautiful plants 🌺 that will transform your space into a tranquil oasis 🏡.
                </p>
                <div className="text-center md:text-left mt-10">
                    <a href="/contact" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-yellow-400">
                        🌼 Contact Us
                    </a>
                </div>
            </div>
        </div>





    );
};

export default About;
