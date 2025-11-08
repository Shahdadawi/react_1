import Navbar from "./navbar/Navbar";
import Footer from "./footer/Footer";
import { Route } from "react-router-dom";
import { Routes } from "react-router-dom";
import Hero from "./hero/Hero";
import Contact from "./contact/Contact";
import About from "./about/About";
import Portfolio from "./portfolio/Portfolio";
function App() {


    return (
        <>

            <Navbar />

            <Routes>
                <Route path="/" element={<Hero />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>






            <Footer />

        </>
    )


}
export default App;