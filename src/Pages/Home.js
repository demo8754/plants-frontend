import React from 'react'
import About from './About'
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';

import Navbar from '../components/LandingPage/Navbar'
import Hero from '../components/LandingPage/Hero'
import Service from './Service';
import Review from './Review';
import Brands from './Brands';




const Home = () => {
  return (



    <div id='home'>


      <Navbar />
      <Hero />
      <About />
      <Service />
      <Brands />
      <Review />

    </div>




  )
}

export default Home