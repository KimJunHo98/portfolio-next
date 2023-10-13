import React from "react";
import { aboutText } from "../constants/index";

const About = () => {
    return (
        <section id="about">
            <h2 className="blind">자기소개</h2>
            <div className="container">
                <div className="inner">
                    <div className="about">
                        <div className="scroll_area scroll1"></div>
                        <div className="scroll_area scroll2"></div>
                        <h2 className="about_title">about</h2>
                        <div className="about_items">
                            {aboutText.map((about, i) => (
                                <p className="about_text" key={i}>
                                    {about.text}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
