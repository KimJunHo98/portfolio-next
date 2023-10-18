import React, { useEffect } from "react";
import { skillText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";

// react icons
import { PiArrowDownRightThin } from "react-icons/pi";

const Skill = () => {
    const { white, setWhite, siteRef, skillRef } = useDarkMode();

    useEffect(() => {
        const gap = 50;

        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
            const skillRefOffsetTop = skillRef.current.offsetTop - gap;
            const siteRefOffsetTop = siteRef.current.offsetTop - gap;
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
    }, [setWhite, siteRef, skillRef]);

    return (
        <>
            <section id="skill" ref={skillRef} className={white ? "white" : ""}>
                <h2 className="blind">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <h2 className="skill_title">
                                skill
                                <span className="scroll_arrow">
                                    <PiArrowDownRightThin />
                                </span>
                            </h2>
                            <div className="skill_items">
                                {skillText.map((skill, i) => (
                                    <div className="skill_item_box" key={i}>
                                        <h3 className="skill_name">
                                            <span className="skill_num">{i + 1}.</span>
                                            {skill.name}
                                        </h3>
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
