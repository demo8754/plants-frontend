import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/LandingPage/Navbar';
//import Header from './Header'; // Adjust the path as necessary
import Hero from './components/LandingPage/Hero';
import ProductGrid from './components/LandingPage/ProductGrid';
import About from './components/LandingPage/About';
import { Service } from './components/LandingPage/Service';
// import Shop from './Shop';
// import About from './About';
// import Blog from './Blog';
// import Contact from './Contact';
// import Cart from './Cart';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <Service />
      <About />
      <ProductGrid />


      <Routes>
        {/*  <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} /> */}
      </Routes>
    </Router>
  );
};

export default App;
