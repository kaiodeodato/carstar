import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'

import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Models from './pages/Models'
import OurTeam from './pages/OurTeam'
import Testimonials from './pages/Testimonials'



function App() {
  return (
    <Router> 
    <div className='flex flex-col min-h-screen items-center bg-indigo-1000 overflow-x-hidden'>
      <Navbar />
      <main className=' flex-1 text-white mt-20 z-10'>
        <Routes>
          <Route path="/carstar" element={<Home/>}/>
          <Route path="/carstar/contact" element={<Contact/>}/>
          <Route path="/carstar/about" element={<About/>}/>
          <Route path="/carstar/models" element={<Models/>}/>
          <Route path="/carstar/ourteam" element={<OurTeam/>}/>
          <Route path="/carstar/testimonials" element={<Testimonials/>}/>
          
          
        </Routes>
      </main>
      <Footer />
    </div>
    
    </Router>
  );  
}

export default App;