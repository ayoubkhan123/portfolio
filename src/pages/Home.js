import React from 'react';
import HomePart from "../Component/homesection/HomePart";
import About from "../Component/aboutSection/About";
import Skill from "../Component/skills/Skill";
import Quali from "../Component/qualification/Quali";
import Service from "../Component/services/Service";
import Teams from "../Component/Team/Teams";
import Box from "../Component/projectBox/Box";
import Contact from "../Component/contact/Contact";





const Home = () => {
    return (
        <div>
        <HomePart/>
        <About/>
        <Skill/>
        <Quali/>
        <Service/>
        <Teams/>
        <Box/>
        <Contact/>
        </div>
    )
}

export default Home;
