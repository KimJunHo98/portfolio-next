"use client"; // effect를 사용하기 위해 ssr방식을 csr방식으로 변경

import React, { useEffect, useState } from "react";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Intro from "../components/Intro";
import About from "../components/About";
import Skill from "../components/Skill";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import lenis from "../utils/lenis";
import link from "../utils/link";
import Site from "../components/Site";
import Loading from "../components/Loading";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);

        const loadingTimer = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => clearTimeout(loadingTimer);
    }, []);

    useEffect(() => {
        lenis();
        link();
    }, []);

    return (
        <div id="wrap">
            {isLoading ? (
                <Loading />
            ) : (
                <>
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
                </>
            )}
        </div>
    );
};
export default Home;
