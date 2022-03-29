import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skills";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar1 from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";


const Routess = () => {
    return (
        <div>
      <Router>
      <Navbar1/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
      <Route exact path="/about" element={<About/>}/>
      <Route exact path="/skill" element={<Skill/>}/>
      <Route exact path="/services" element={<Services/>}/>
      <Route exact path="/portfolio" element={<Portfolio/>}/>

      <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </Router>

        </div>
    )
}

export default Routess;
