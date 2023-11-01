import React from "react";
import Intro from "../components/Intro";
import About1 from "../components/About1";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Project from "../components/Project";
import About2 from "../components/About2";
import Contact from "../components/Contact";

const Main = () => {
    return (
        <main id="main" role="main">
            <Intro />
            <About1 />
            <Skill />
            <Site />
            <Project />
            <About2 />
            <Contact />
        </main>
    );
};

export default Main;
