import React from 'react';
import Home from "../pages/Home";
import About from "../pages/About";
import Skill from "../pages/Skills";
import Services from "../pages/Services";
import Team from "../pages/Team";
import Contact from "../pages/Contact";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Navbar1 from "../Component/navbar/Navbar";
import Footer from "../Component/footer/Footer";
import ScrollTop from "../Component/scrollTop/ScrollTop";



const Routess = () => {
    return (
        <div>
      <Router>
      <ScrollTop>
      <Navbar1/>
      <Routes>
      <Route path="*" exact element={<Home/>}/>
      <Route path="/about" exact element={<About/>}/>
      <Route path="/skill" exact element={<Skill/>}/>
      <Route path="/services" exact element={<Services/>}/>
      <Route path="/team" exact element={<Team/>}/>
      <Route path="/contact" exact element={<Contact/>}/>
      </Routes>
      <Footer/>
      </ScrollTop>
      </Router>
        </div>
    )
}

export default Routess;