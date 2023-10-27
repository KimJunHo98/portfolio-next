import React, { useEffect, useRef } from "react";
import { useDarkMode } from "../context/DarkModeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ParallaxText = () => {
    const { siteOffsetRef } = useDarkMode();
    const parallaxRef = useRef(null);
    const parallaxTextRef = useRef(null);

    console.log(parallaxRef, parallaxTextRef);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const textAni = gsap.timeline();
        const parallax = parallaxRef.current;
        const parallaxText = parallaxTextRef.current;

        textAni.to(parallaxText, { scale: 80, duration: 4, autoAlpha: 1, rotate: "360deg" }).to(parallaxText, {
            autoAlpha: 0,
        });

        ScrollTrigger.create({
            animation: textAni,
            trigger: parallax,
            start: "top top",
            end: () => `+=${parallaxText.offsetWidth}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            markers: false,
        });
    }, []);

    return (
        <>
            <div className="site_offsetTop" ref={siteOffsetRef}></div>
            <section id="site_parallax" ref={parallaxRef}>
                <div className="parallax_item" ref={parallaxTextRef}>
                    site
                </div>
            </section>
        </>
    );
};

export default ParallaxText;
