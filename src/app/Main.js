import React from "react";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Contact from "../components/Contact";

const Main = ({isShow }) => {
    
    return (
        <main id="main" role="main">
            <Intro isShow={isShow} />
            <About />
            <Skill />
            <Site />
            <Contact />
        </main>
    );
};

export default Main;
