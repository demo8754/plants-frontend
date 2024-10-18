import React from 'react'

import plant from '../../assets/plant.png'

const Hero = () => {
    return (

        <div className="flex flex-col lg:flex-row py-5  bg-white  md:justify-center font-poppins">
            <div className='w-full lg:w-1/2 p-10'>
                <h2 className='text-2xl lg:text-4xl font-bold mt-20 text-green-800'>
                    Welcome to Our Plant Nursery!
                </h2>
                <p className='mt-8 text-xl lg:text-1xl text-gray-600 '>
                    Discover a variety of plants to beautify your home and garden. Whether you're a beginner or a seasoned gardener, we have everything you need to create your own green oasis.
                </p>

                {/* Wrap buttons in a div */}
                <div className='flex flex-wrap mt-12 space-x-2'>
                    <a className="bg-green-500 hover:bg-green-700 text-white px-3 py-2 rounded mr-2 mb-2" href=''>Shop Now</a>
                    <a className="bg-yellow-500 hover:bg-yellow-700 text-white px-3 py-2 rounded mb-2" href=''>Explore  Plants</a>
                </div>
            </div>

            {/* Hide image on small screens */}
            <div className='hidden lg:flex w-full lg:w-1/2 bg-gray-50 justify-center items-center'>
                <img src={plant} alt='Plant' className="max-w-full h-auto" />
            </div>
        </div>



    )
}

export default Hero