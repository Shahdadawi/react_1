import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import Portfolio from './portfolio/Portfolio';
import About from './about/About';
import Contact from './contact/Contact';
import Footer from './footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar/>
    <Hero/>
    <Portfolio/>
    <About/>
    <Contact/>
    <Footer/>
   
  </StrictMode>,
)
