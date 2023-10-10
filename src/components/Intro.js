import React from "react";
import { introText, lines } from "../constants/index";
// import imgSrc from "../assets/images/main-profile.png";
// import Image from "next/image";

const Intro = ({ isShow }) => {
    return (
        <section id="intro">
            <h2 className="blind">인트로</h2>
            <div className="container">
                <div className="inner">
                    <div className="intro">
                        <h2 className={`intro_title ${isShow ? "show" : ""}`}>{introText.title}</h2>
                        <div className="intro_lines" aria-hidden="true">
                            {lines.map((line) => (
                                <span key={line.id} className={`${line.class} ${isShow ? "show" : ""}`}></span>
                            ))}
                        </div>
                        <div className={`intro_text ${isShow ? "show" : ""}`}>
                            <ul className="intro_desc">
                                {introText.desc.map((intro, i) => (
                                    <li key={i} className="desc_text">
                                        {intro}
                                    </li>
                                ))}
                            </ul>
                            {/* <div className="profile_img">
                                <Image src={imgSrc} alt="프로필 이미지" quality={75} fill objectFit="contain" /> 
                                // Image 태그를 사용하면 부모요소에 relative 속성을 주고 부모요소 크기를 컨트롤 하거나 prop으로 크기를 줘야함 
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
