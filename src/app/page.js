"use client";

import React, { useEffect, useState } from "react";
import { DarkModeProvider } from "../context/DarkModeContext";
import Loading from "../components/Loading";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../app/Main";
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

    useEffect(() => {
        lenis();
        link();
    }, []);

    return (
        <DarkModeProvider>
            <div id="wrap">
                {isLoading ? (
                    <Loading />
                ) : (
                    <>
                        <Skip />
                        <Header />
                        <Main isShow={isShow} />
                        <Footer />
                    </>
                )}
            </div>
        </DarkModeProvider>
    );
};

export default Home;
