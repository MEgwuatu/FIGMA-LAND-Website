import React from 'react'
import './App.css';
import Navbar from './Component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Hero from './Pages/Hero';
import Features from './Component/Feature';
import Contents from './Component/Contents';
import Gallery from './Component/Gallery';
import Partners from './Component/Partners';
import Testimonials from './Component/Testimonials';
import Try from './Component/Try';
import Footer from './Component/Footer';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      <Features/>
      <Contents/>
      <Gallery/>
      <Partners/>
      <Testimonials/>    
      <Try/>
      <Footer/>

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
