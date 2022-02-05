import React from 'react';
import HomePart from "../Component/homesection/HomePart";
import About from "../Component/aboutSection/About";
import Skill from "../Component/skills/Skill";
import Quali from "../Component/qualification/Quali";





const Home = () => {
    return (
        <div>
        <HomePart/>
        <About/>
        <Skill/>
        <Quali/>
        </div>
    )
}

export default Home;
