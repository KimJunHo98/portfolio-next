import React, { Fragment, useState } from "react";
import { aboutText } from "../constants/index";
import Link from "next/link";

const About2 = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabMenuBtnClick = (i) => {
        setActiveTab(i);
    };

    const handleTabMenuBtnKeyDown = (e, i) => {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleTabMenuBtnClick(i);
        }
    };

    return (
        <section id="about2">
            <h2 className="blind">자기소개2</h2>
            <div className="container">
                <div className="inner">
                    <div className="about2">
                        <h3 className="about2_title">i am kind of this person</h3>
                        <div className="introduce_wrap">
                            <ul className="introduce_tabmenu" role="tablist">
                                {aboutText.map((about, i) => (
                                    <Fragment key={i}>
                                        <li role="presentation">
                                            <Link
                                                href="#"
                                                onClick={(e) => {
                                                    e.preventDefault();
                                                    handleTabMenuBtnClick(i);
                                                }}
                                                onKeyDown={(e) => handleTabMenuBtnKeyDown(e, i)}
                                                className={`introduce_btn ${activeTab === i ? "active" : ""}`}
                                                role="tab"
                                                aria-selected={activeTab === i}
                                            >
                                                {about.title}
                                            </Link>
                                        </li>
                                    </Fragment>
                                ))}
                            </ul>
                            <ul className="introduce_text_box">
                                {aboutText.map((about, i) => (
                                    <Fragment key={i}>
                                        <li
                                            role="tabpanel"
                                            aria-hidden={activeTab !== i}
                                            className={`introduce_text ${activeTab === i ? "active" : ""}`}
                                        >
                                            {about.text}
                                        </li>
                                    </Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;
