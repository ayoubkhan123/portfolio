import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skills";
import Services from "../pages/Services";
import Portfolio from "../pages/Portfolio";
import Contact from "../pages/Contact";
import {Routes,Route} from "react-router-dom";



const Routess = () => {
    return (
        <div>

      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/skill" element={<Skill/>}/>
      <Route path="/services" element={<Services/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>

      <Route path="/contact" element={<Contact/>}/>
      </Routes>

        </div>
    )
}

export default Routess;
