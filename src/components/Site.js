import React from "react";
import { siteText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

// react icons
import { PiArrowRightThin } from "react-icons/pi";

const Site = () => {
    const { siteRef } = useDarkMode();

    return (
        <section id="site" className="horizontal_wrap" ref={siteRef}>
            <h2 className="blind">사이트</h2>
            <div className="container">
                <div className="inner">
                    <div className="site">
                        <div className="site_items">
                            <div className="site_item_box intro">
                                <p className="site_intro_title">welcome to</p>
                                <p className="site_intro_title">my projects</p>
                                <p className="site_intro_title">scroll <span className="scroll_arrow"><PiArrowRightThin /></span></p>
                            </div>
                            {siteText.map((site ,i) => (
                                <div className="site_item_box" key={i}>
                                    <h2 className="site_sub_title">{site.title}</h2>
                                    <p>{site.num}</p>
                                    <p>{site.skill}</p>
                                    <p>{site.desc}</p>
                                    <Link href={site.git} role="link" aria-label="깃허브 링크">github</Link>
                                    <Link href={site.view} role="link" aria-label="뷰 링크">view</Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Site;
