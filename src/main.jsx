import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Navbar from './navbar/Navbar';
import Hero from './hero/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Navbar/>
    <Hero/>
   
  </StrictMode>,
)
