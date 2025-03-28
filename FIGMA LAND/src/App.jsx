import React from 'react'
import Navbar from './Component/Navbar';
import {Routes, Route} from 'react-router-dom';
import Hero from './Pages/Hero';
import Home from './Pages/Home';


const App = () => {
  return (
    <div>
      <Navbar />
      <Hero/>
      
{/* Routing */}
<Routes>
  <Route path="/" element={<Hero />}/>
  <Route path="/" element={<Home />}/>
  


</Routes>

      </div>
  )
}

export default App;
