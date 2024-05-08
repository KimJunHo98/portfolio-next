import React, { useEffect, useRef } from "react";

const About3 = () => {
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
                    <div className="about"></div>
                </div>
            </div>
        </section>
    );
};

export default About3;
