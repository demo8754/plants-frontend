import React from 'react'

const Brands = () => {
    return (


        <section id='brands' className='bg-gray-300 '>
            <div className='container mx-auto'>
                <div className='p-10'>
                    <h2 className='font-semibold text-3xl font-poppins text-green-600 text-center'>Brands</h2>
                    <div className='flex flex-wrap justify-center'>
                        <div className='p-5 w-full sm:w-1/2 md:w-1/4'>
                            <img className='mx-auto max-h-12' src="https://www.thesill.com/cdn/shop/files/sill-logo.svg?v=1676483267&width=180" alt="The Sill" />
                        </div>
                        <div className='p-5 w-full sm:w-1/2 md:w-1/4'>
                            <img className='mx-auto max-h-12' src="https://www.plantdelights.com/cdn/shop/files/PDlboxLogoTransparent_200x@2x.png?v=1649446486" alt="Plant Delights" />
                        </div>
                        <div className='p-5 w-full sm:w-1/2 md:w-1/4'>
                            <img className='mx-auto max-h-12' src="https://houseplantshop.com/cdn/shop/files/HPS-corelogo-1-WHITE_1750x402.png?v=1614298913" alt="House Plant Shop" />
                        </div>
                        <div className='p-5 w-full sm:w-1/2 md:w-1/4'>
                            <img className='mx-auto max-h-12' src="https://images.contentstack.io/v3/assets/blt4454dc0093319d35/blt55247e0014fdfe9f/5f3ec458eb93e224977c1ab8/plants.png" alt="Plants" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Brands