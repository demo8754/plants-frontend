import React, { useState } from 'react';
import plant from '../../assets/plant.png';

import logo from '../../assets/logo.png'// Adjust the path as necessary

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='sticky top-0 left-0 right-0 p-3 bg-green-500 z-50'>
      <section className='bg-green-500 p-8'>
        <div className='container mx-auto '>
          <div className='flex justify-between items-center '>
            <a className='flex items-center text-2xl font-medium text-white font-poppins' href="">
              <img src={logo} alt="Logo" className="mr-3 w-12 h-12" /> {/* Adjusted height to match width */}
              PLANTS
            </a>


            <div className='hidden  lg:flex space-x-5 flex-grow '>
              <ul className='flex font-medium  px-5 font-poppins'>
                <li><a className='px-3 text-white hover:text-yellow-300' href='#home'>Home</a></li>
                <li><a className='px-3 text-white hover:text-yellow-300' href='#about'>About</a></li>
                <li><a className='px-3 text-white hover:text-yellow-300' href='#service'>Service</a></li>
                <li><a className='px-3 text-white hover:text-yellow-300' href='#brands'>Brands</a></li>
                <li><a className='px-3 text-white hover:text-yellow-300' href='#review'>Review</a></li>
              </ul>
            </div>



            <div className='hidden lg:block relative font-poppins'>
              <a href='' className='text-white flex items-center bg-yellow-500 px-2 py-2 rounded'>
                <span className='mr-2 font-semibold'>Cart</span>
                <span className='bg-red-600 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2'>3</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                </svg>
              </a>
            </div>


            <button onClick={toggleMobileMenu} className="lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <ul className='lg:hidden font-medium mt-5 space-y-2 font-poppins'>
              <li><a className='text-white' href='#home'>Home</a></li>
              <li><a className='text-white' href='#about'>About</a></li>
              <li><a className='text-white' href='#service'>Service</a></li>
              <li><a className='text-white' href='#review'>Review</a></li>
              <li><a className='text-white' href='#cart'>Cart</a></li>
            </ul>
          )}




        </div>
      </section>
    </div>
  );
};

export default Navbar;
