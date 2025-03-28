import React from 'react'
import Navbar from './Component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Hero from './Pages/Hero';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      
{/* Routing */}
<Routes>
  <Routes path="/" element={<Hero />}/>
  <Routes path="/feature" element={<Features />}/>
  <Routes path="/content" element={<Contents />}/>
  <Routes path="/gallery" element={<Gallery />}/>
  <Routes path="/partner" element={<Partners />}/>
  <Routes path="/testimonial" element={<Testimonials />}/>
  <Routes path="/try" element={<Try />}/>
  <Routes path="/footer" element={<Footer />}/>



</Routes>

      </div>
  )
}

export default App;
