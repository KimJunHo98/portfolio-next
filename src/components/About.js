import React, { useEffect, useRef } from "react";

const About = () => {
    const aboutRef = useRef();
    const textRef = useRef([]);

    useEffect(() => {
        const aboutRefCurrent = aboutRef.current;
        const textRefCurrent = textRef.current;

        const aboutObserver = new IntersectionObserver(
            (entries) => {
                const target = entries[0];

                if (target.isIntersecting) {
                    aboutRefCurrent.style.backgroundColor = "var(--white100)";
                    aboutRefCurrent.style.transition = "all .5s ease-in-out";
                } else {
                    aboutRefCurrent.style.backgroundColor = "var(--black)";
                    aboutRefCurrent.style.transition = "all .5s ease-in-out";
                }
            },
            { threshold: 0.1 }
        );
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((item) => {
                    if (item.isIntersecting) {
                        item.target.style.opacity = 1;
                        item.target.style.transition = "opacity .7s ease-in-out";
                    } else {
                        item.target.style.opacity = 0;
                        item.target.style.transition = "opacity .7s ease-in-out";
                    }
                });
            },
            { threshold: 0.5 }
        );

        aboutObserver.observe(aboutRefCurrent);
        textRefCurrent.forEach((el) => observer.observe(el));

        return () => {
            aboutObserver.unobserve(aboutRefCurrent);
            textRefCurrent.forEach((el) => observer.disconnect(el));
            // 모든 요소를 해제하는 메소드 disconnect, 특정 요소를 해제하는 메소드 unobserve
        };
    }, []);

    return (
        <section id="about" ref={aboutRef}>
            <h2 className="blind">자기소개</h2>
            <div className="container">
                <div className="inner">
                    <div className="about">
                        <ul className="about_top">
                            <li className="top_items" ref={(el) => (textRef.current[0] = el)}>
                                kim<span className="md_name">jun ho</span>
                            </li>
                            <li className="top_items" ref={(el) => (textRef.current[1] = el)}>
                                i&apos;am <span>front-end developer</span>
                            </li>
                        </ul>
                        <div className="about_center">
                            <div className="text_items_box">
                                <p className="text_items" ref={(el) => (textRef.current[2] = el)}>
                                    안녕하세요, 신입 프론트엔드 개발자 김준호입니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[3] = el)}>
                                    개발 공부를 하며 전에는 느껴보지 못했던 재미와 오기를
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[4] = el)}>
                                    느끼게 되며 프론트엔드 개발자라는 직업에 빠져들게 되었습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[5] = el)}>
                                    아직은 실수도 많고 어렵지만 문제를 해결할 수 있는 능력을 갖추기 위해 노력을 하고있습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[6] = el)}>
                                    그 어려움과 한계를 극복했을 때의 성취감이 배움을 멈출 수 없게 하는 것 같습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[7] = el)}>
                                    동료들과 팀원들, 그리고 회사에 잘 녹아들어 항상 배우며 발전하는 개발자가 되겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
