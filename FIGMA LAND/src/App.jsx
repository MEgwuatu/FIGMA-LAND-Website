import React from 'react'
import Navbar from './Component/Navbar';
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
      </div>
  )
}

export default App;
