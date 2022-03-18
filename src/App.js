import React from 'react';
import Navbar1 from "./Component/navbar/Navbar";
import Routess from './Routers/Routess';
import {BrowserRouter} from "react-router-dom";
import Footer from "./Component/footer/Footer";



export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar1/>
    <Routess/>
    <Footer/>
    </BrowserRouter>
    </div>
  )
}

