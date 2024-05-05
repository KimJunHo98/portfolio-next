import React, { useEffect, useRef } from "react";

const About1 = () => {
    const textRef = useRef([]);

    useEffect(() => {
        const textRefCurrent = textRef.current;

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

        textRefCurrent.forEach((el) => observer.observe(el));

        return () => {
            textRefCurrent.forEach((el) => observer.disconnect(el));
        };
    }, []);

    return (
        <section id="about">
            <h2 className="blind">자기소개</h2>
            <div className="container">
                <div className="inner">
                    <div className="about">
                        <ul className="about_top">
                            <li className="top_items" ref={(el) => (textRef.current[0] = el)}>
                                kim<span className="md_name">jun ho</span>
                            </li>
                            <li className="top_items" ref={(el) => (textRef.current[1] = el)}>
                                i&apos;am <span>web publisher</span>
                            </li>
                        </ul>
                        <div className="about_center">
                            <div className="text_items_box">
                                <p className="text_items" ref={(el) => (textRef.current[2] = el)}>
                                    안녕하세요, 신입 웹 퍼블리셔 김준호입니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[3] = el)}>
                                    퍼블리싱 & 프론트엔드 개발 공부를 하며 전에는 느껴보지 못했던 재미와 오기를
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[4] = el)}>
                                    느끼게 되며 웹 퍼블리셔 & 프론트엔드 개발자에 빠져들게 되었습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[5] = el)}>
                                    아직은 실수도 많고 어렵지만 문제를 해결할 수 있는 능력을 갖추기 위해 지속적인 학습을 하고 있습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[6] = el)}>
                                    사소한 어려움이라도 그것을 극복했을 때의 성취감이 배움을 멈출 수 없게 하는 것 같습니다.
                                </p>
                                <p className="text_items" ref={(el) => (textRef.current[7] = el)}>
                                    동료들과 소통을 잘 하기 위해 노력할 것을 약속드리며 <br/> 회사에 잘 녹아들어 항상 배우며 발전하는 웹 퍼블리셔 & 프론트엔드 개발자가 되겠습니다.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
