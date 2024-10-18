import React from 'react';
import plant1 from '../../assets/plant.png'; // Adjust paths as necessary
import plant2 from '../../assets/plant.png';
import plant3 from '../../assets/plant.png';
import plant4 from '../../assets/plant.png';

const products = [
    { id: 1, name: 'Plant 1', price: '$10.00', image: plant1, description: 'A beautiful indoor plant that purifies the air.', rating: 3.5 },
    { id: 2, name: 'Plant 2', price: '$15.00', image: plant2, description: 'A vibrant succulent that requires minimal care.', rating: 2.0 },
    { id: 3, name: 'Plant 3', price: '$12.00', image: plant3, description: 'An elegant flower that blooms in spring.', rating: 1.0 },
    { id: 4, name: 'Plant 4', price: '$20.00', image: plant4, description: 'A hardy outdoor plant perfect for any garden.', rating: 4.5 },
    { id: 5, name: 'Plant 1', price: '$10.00', image: plant1, description: 'A beautiful indoor plant that purifies the air.', rating: 2.5 },
    { id: 6, name: 'Plant 2', price: '$15.00', image: plant2, description: 'A vibrant succulent that requires minimal care.', rating: 3.0 },

];

const ProductGrid = () => {
    return (
        <div className="py-10 relative overflow-hidden bg-gradient-to-b from-green-100 to-purple-100 font-poppins">
            <div className="absolute inset-0 bg-white opacity-50 blur-sm"></div>
            <div className="relative z-10">
                <h2 className="text-3xl font-bold text-center mb-2 text-green-700 ">Popular Plants</h2>
                <p className="text-center text-gray-600 mb-8 mt-4 mx-4">
                    Discover our selection of popular and seasonal plants. Whether you’re looking for indoor greenery or outdoor blooms, we have something for every plant lover.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5 container mx-auto px-3">
                    {products.map(product => (
                        <div key={product.id} className="border rounded-lg shadow-lg p-5 flex flex-col items-center transition-transform duration-200 hover:scale-105">
                            <div className="flex justify-center mb-3">
                                <img src={product.image} alt={product.name} className="w-40 h-40 object-cover rounded-md" />
                            </div>
                            <h3 className="font-semibold text-lg text-gray-800 text-center">{product.name}</h3>
                            <p className="text-gray-600 text-center mb-2">{product.description}</p>
                            <div className="flex items-center mb-2">
                                {/* Rating Stars */}
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className={`w-4 h-4 ${i < product.rating ? 'text-yellow-300' : 'text-gray-300'}`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-green-600 font-medium text-xl">{product.price}</p>
                            <button className="mt-4 bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors duration-200">
                                Add to Cart
                            </button>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ProductGrid;
