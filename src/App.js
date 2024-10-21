import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';     // Ensure this path is correct
import About from './Pages/About';   // Ensure this path is correct
import Service from './Pages/Service'; // Ensure this path is correct
import Review from './Pages/Review';  // Ensure this path is correct

function App() {
  return (

    <div>

      <BrowserRouter>

        <Routes>

          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/service' element={<Service />} />
          <Route path='/review' element={<Review />} />


        </Routes>


      </BrowserRouter>





    </div>


  );
}

export default App;
