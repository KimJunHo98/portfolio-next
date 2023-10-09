"use client"; // effect를 사용하기 위해 ssr방식을 csr방식으로 변경

import React, { useEffect, useState } from "react";
import Loading from "../components/Loading";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

import link from "../utils/link";
import lenis from "../utils/lenis";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [isShow, setIsShow] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsShow(false);

        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);
        
        const showTimer = setTimeout(() => {
            setIsShow(true);
        }, 4100);

        return () => {
            clearTimeout(loadingTimer);
            clearTimeout(showTimer);
        };
    }, []);

    // useEffect(() => {
    //     lenis();
    //     link();
    // }, []);

    return (
        <>
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <div id="slide_up" className={isShow ? "slide" : ""}></div>
                    <div id="wrap">
                        <Skip />
                        <Header />
                        <main id="main" role="main">
                            <Intro />
                            <About />
                            <Skill />
                            <Site />
                            <Contact />
                        </main>
                        <Footer />
                    </div>
                </>
            )}
        </>
    );
};
export default Home;
