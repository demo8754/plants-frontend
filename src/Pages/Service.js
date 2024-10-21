import React from 'react'

import consultation from '../assets/consultation.svg'
import support from '../assets/support.svg'
import delivery from '../assets/delivery.svg'
import custom from '../assets/custom.svg'
import track from '../assets/track.svg'
import solution from '../assets/solution.svg'

export const Service = () => {
    return (


        <div id='service'>

            <section id='service' className='bg-green-500 p-5' >
                <div className='container mx-auto'>
                    <div className='py-28 font-poppins'>
                        <h2 className='text-center text-yellow-300 text-4xl font-bold font-poppins'>Our Services</h2>
                        <p className='w-full md:w-1/2 text-center text-white font-poppins mx-auto mt-5'>
                            Our Plant Form Service helps you choose and care for plants. Whether you need help designing a garden, selecting indoor plants, or maintaining your landscape, our team is here for you. We offer personalized consultations and ongoing support to keep your plants healthy and beautiful!
                        </p>
                    </div>
                    <div className='flex flex-wrap'>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-sky-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-20 h-20' src={consultation} alt="Plant Consultation" />
                                <h3 className='text-2xl text-white font-semibold'>Plant Consultation</h3>
                                <p className='text-white flex-grow'>Personalized advice on plant selection and garden design to help you create the perfect green space.</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-orange-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-20 h-20' src={support} alt="Help Center" />
                                <h3 className='text-2xl text-white font-semibold'>Help Center</h3>
                                <p className='text-white flex-grow'>A dedicated resource for assistance with plant care, product inquiries, and general support.</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-brown-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-20 h-20' src={delivery} alt="Delivery Services" />
                                <h3 className='text-2xl text-white font-semibold'>Delivery Services</h3>
                                <p className='text-white flex-grow'>Convenient home delivery for plants and gardening supplies, making your shopping experience hassle-free.</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-yellow-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-20 h-20' src={solution} alt="Pest Management Solutions" />
                                <h3 className='text-2xl text-white font-semibold'>Pest Management Solutions</h3>
                                <p className='text-white flex-grow'>Expert advice and products to help you manage and prevent pests and diseases affecting your plants.</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-purple-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-20 h-20' src={track} alt="Track Order" />
                                <h3 className='text-2xl text-white font-semibold'>Track Order</h3>
                                <p className='text-white flex-grow'>Easily monitor the status of your orders, keeping you informed every step of the way.</p>
                            </div>
                        </div>
                        <div className='w-full sm:w-1/2 lg:w-1/3 p-5'>
                            <div className='bg-blue-600 p-10 shadow-lg rounded h-full flex flex-col'>
                                <img className='w-16 h-16' src={custom} alt="Custom Orders" />
                                <h3 className='text-2xl text-white font-semibold mt-1'>Custom Orders</h3>
                                <p className='text-white flex-grow'>Special requests for specific or rare plants, ensuring you get exactly what you need for your garden.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>


    )
}

export default Service
