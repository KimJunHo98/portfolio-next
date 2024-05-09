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
                        <h3 className="about2_title">i&apos;m kind of this person</h3>
                        <div className="introduce_wrap">
                            <div className="introduce_tabmenu" role="tablist">
                                {aboutText.map((about, i) => (
                                    <div className="tabmenu_list" key={i}>
                                        <button
                                            className={`tabmenu_btn ${activeTab === i ? `active${i + 1}` : ""}`}
                                            role="tab"
                                            aria-selected={activeTab === i}
                                            onClick={() => handleTabMenuBtnClick(i)}
                                            onKeyDown={(e) => handleTabMenuBtnKeyDown(e, i)}
                                        >
                                            {about.title}
                                        </button>
                                    </div>
                                ))}
                            </div>
                            <ul className="introduce_text_box">
                                {aboutText.map((about, i) => (
                                    <Fragment key={i}>
                                        <li
                                            role="tab"
                                            id={`tabpanel-${i}`}
                                            aria-labelledby={`tab-${i}`}
                                            className={`introduce_text title ${activeTab === i ? "active" : ""}`}
                                        >
                                            {about.title}
                                        </li>
                                        <li
                                            role="tabpanel"
                                            aria-labelledby={`tabpanel-${i}`}
                                            className={`introduce_text ${activeTab === i ? "active" : ""}`}
                                        >
                                            {about.text}
                                            <br />
                                            <p className="introduce_desc">
                                                {about.desc1}
                                                <br />
                                                <br />
                                                {about.desc2}
                                                <br />
                                                <br />
                                                {about.desc3}
                                            </p>
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
