import React, { useEffect, useRef } from "react";
import { skillText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Skill = () => {
    const { setWhite, siteOffsetRef, skillOffsetRef } = useDarkMode();
    const skillRef = useRef(null);
    const horizItemRef = useRef([]);

    useEffect(() => {
        const gap = 50;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
            const skillRefOffsetTop = skillOffsetRef.current.offsetTop - gap;
            const siteRefOffsetTop = siteOffsetRef.current.offsetTop - gap;
            const isWhite = scrollTop >= skillRefOffsetTop && scrollTop < siteRefOffsetTop;

            setWhite((prevWhite) => {
                if (prevWhite === isWhite) {
                    return prevWhite;
                }
                return isWhite;
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [setWhite, skillOffsetRef, siteOffsetRef]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = skillRef.current;
        const section = horizItemRef.current;

        let scrollTween = gsap.to(section, {
            xPercent: -140 * (section.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                smooth: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <>
            <aside className="site_offsetTop" ref={skillOffsetRef}></aside>
            <section id="skill" className="horizontal" ref={skillRef} aria-label="Horizontal Scroll Section">
                <h2 className="blind">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <div className="skill_items">
                                <div className="skill_item_box title_box">
                                    <h3 className="skill_title">i can do these skills</h3>
                                </div>
                                {skillText.map((skill, i) => (
                                    <div className={`skill_item_box item${i + 1}`} key={i} ref={(el) => (horizItemRef.current[i] = el)}>
                                        <h4 className="skill_name">{skill.name}</h4>
                                        <p className="skill_desc">{skill.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skill;
