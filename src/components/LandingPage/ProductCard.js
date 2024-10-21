import React from 'react';

const ProductCard = () => {
    const products = [
        {
            plantId: 1,
            commonName: "Spider Plant",
            scientificName: "Chlorophytum comosum",
            price: 19.99,
            stockQuantity: 10,
            ratings: 4.5,
            imageUrl: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaZfkCIq7MTU0To2Eh5CsE-sOsiP1ZGXc6rP9rcE79NIwoG0MA",
        },
        {
            plantId: 2,
            commonName: "Peace Lily",
            scientificName: "Spathiphyllum",
            price: 24.99,
            stockQuantity: 5,
            ratings: 4.8,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLC4WTxq9cUwwW0cF7MmFlD5g1VggI8hN1L_O0jR70NGOQdI5w",
        },
        {
            plantId: 3,
            commonName: "Aloe Vera",
            scientificName: "Aloe barbadensis miller",
            price: 15.00,
            stockQuantity: 8,
            ratings: 4.7,
            imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5n8QFJH9J6K7DSD5QJ0xCk5V8oUddoI4wZfjZOM_gYYyEsAvN",
        },

    ];

    return (
        <div className="flex flex-wrap justify-center bg-green-500">
            {products.map((product) => (
                <div key={product.plantId} className="relative m-5 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md ">
                    <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
                        <img className="object-cover w-full h-full" src={product.imageUrl} alt={product.commonName} />
                        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">In Stock</span>
                    </a>
                    <div className="mt-4 px-5 pb-5">
                        <a href="#">
                            <h5 className="text-xl tracking-tight text-slate-900">{product.commonName}</h5>
                        </a>
                        <div className="mt-2 mb-5 flex items-center justify-between">
                            <p>
                                <span className="text-3xl font-bold text-slate-900">${product.price.toFixed(2)}</span>
                                <span className="text-sm text-slate-900 line-through">${(product.price + 5).toFixed(2)}</span>
                            </p>
                            <div className="flex items-center">
                                {[...Array(Math.floor(product.ratings))].map((_, index) => (
                                    <svg key={index} aria-hidden="true" className="h-5 w-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                    </svg>
                                ))}
                                <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">{product.ratings}</span>
                            </div>
                        </div>
                        <a href="#" className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mr-2 h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            Add to cart
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProductCard;
