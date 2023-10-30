"use client";
import React, { useEffect, useState } from "react";
import { DarkModeProvider } from "../context/DarkModeContext";
import Loading from "../components/Loading";
import SlideCover from "../components/SlideCover";
import Skip from "../components/Skip";
import Header from "../components/Header";
import Main from "../app/Main";
import Footer from "../components/Footer";
import ScrollPerc from "../utils/ScrollPerc";
import smooth from "../utils/smooth";

const Home = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        let currentPercentage = 0;
        setIsLoading(true);

        const loadingTimer = setTimeout(() => {
            const interval = setInterval(() => {
                setPercentage((prevPercentage) => {
                    currentPercentage = prevPercentage + 1;

                    if (currentPercentage >= 100) {
                        clearInterval(interval);

                        setTimeout(() => {
                            setIsLoading(false);
                        }, 1000);
                    }

                    return currentPercentage;
                });
            }, 20);
        }, 200);

        return () => {
            clearTimeout(loadingTimer);
        };
    }, []);

    useEffect(() => {
        smooth();
    }, []);

    return (
        <DarkModeProvider>
            <div id="wrap">
                {isLoading ? (
                    <Loading percentage={percentage} />
                ) : (
                    <>
                        <SlideCover isLoading={isLoading} />
                        <Skip />
                        <Header />
                        <Main />
                        <Footer />
                    </>
                )}
                {!isLoading && <ScrollPerc />}
            </div>
        </DarkModeProvider>
    );
};

export default Home;
