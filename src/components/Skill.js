import React, { useEffect, useRef } from "react";
import { skillText } from "../constants/index";
import { useDarkMode, useScrollListener } from "../context/DarkModeContext";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

const Skill = () => {
    const { setDark, projectOffsetRef, skillOffsetRef } = useDarkMode();
    const skillRef = useRef(null);
    const horizItemRef = useRef([]);

    // 스크롤 시 색상 변경(context에 값 넘겨줌)
    useScrollListener(setDark, skillOffsetRef, projectOffsetRef);

    // 가로 스크롤
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = skillRef.current;
        const section = horizItemRef.current;

        // 사용자가 모바일 기기인지 확인
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

        const horizontalScroll = gsap.to(section, {
            xPercent: isMobile ? -section.length * 140 : -section.length * 135,
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => `+=${horizontal.offsetWidth}`,
                pin: true,
                scrub: isMobile ? 5 : 3, // 모바일 기기 여부에 따라 scrub 값을 설정
                smooth: false,
            },
        });

        return () => {
            horizontalScroll.kill();
        };
    }, []);

    return (
        <>
            <div className="site_offsetTop" ref={skillOffsetRef} />
            <section id="skill" className="horizontal" ref={skillRef} aria-label="Horizontal Scroll Section">
                <h2 className="blind">스킬</h2>
                <div className="container">
                    <div className="inner">
                        <div className="skill">
                            <div className="skill_items">
                                <div className="skill_item_box title_box">
                                    <h3 className="skill_title">i can use these skills</h3>
                                </div>
                                {skillText.map((skill, i) => (
                                    <div className={`skill_item_box item${i + 1}`} key={i} ref={(el) => (horizItemRef.current[i] = el)}>
                                        <h4 className="skill_name">{skill.name}</h4>
                                        <p className="skill_desc">{skill.desc}</p>
                                        <Image src={skill.image} alt={skill.name} width={300} height={300} loading="lazy" className="skill_images" />
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
