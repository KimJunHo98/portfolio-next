import React, { useEffect, useRef } from "react";
import Image from "next/image";

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
                        <h2 className="about_title" ref={(el) => (textRef.current[0] = el)}>
                            <p className="block"><span className="white300 bold">사용자 중심 웹 경험</span>을 위해</p> 고민하는
                            <span className="white200 bold">김준호</span>입니다
                        </h2>
                        <ul className="about_items">
                            <li className="item_list" ref={(el) => (textRef.current[2] = el)}>
                                <p className="profile_text">HTML5, CSS3, React, JavaScript(ES6) 기반의 웹 퍼블리셔 & FE개발자 김준호입니다.</p>
                                <p className="profile_text">인터랙션에 관심이 많으며, 웹 표준/접근성을 준수하여 최적의 사용자 경험을 제공해주는 것을 고민합니다.</p>
                                <p className="profile_text">성장욕구를 바탕으로 지속적인 학습과 경험을 하여 성장하는 사람이 되겠습니다.</p>
                            </li>
                            <li className="item_list profile_image_wrap" ref={(el) => (textRef.current[1] = el)}>
                                <div className="profile_image_box">
                                    <Image
                                        src="/images/profile_image.png"
                                        alt="프로필 이미지"
                                        width={300}
                                        height={300}
                                        loading="lazy"
                                        className="profile_image"
                                    />
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About1;
