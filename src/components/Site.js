import React from "react";
import { siteText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

// fontawesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Site = () => {
    const { siteRef } = useDarkMode();
    console.log(siteRef);

    return (
        <section id="site" className="horizontal_wrap" ref={siteRef}>
            <h2 className="blind">사이트</h2>
            <div className="container">
                <div className="inner">
                    <div className="site">
                        <h2 className="site_main_title">site</h2>
                        <div className="site_items">
                            <div className="site_item_box intro">
                                <p className="site_intro_title">my projects</p>
                                <span>scroll <FontAwesomeIcon icon={faArrowRightLong} /></span>
                            </div>
                            {siteText.map((site ,i) => (
                                <div className="site_item_box" key={i}>
                                    <h2 className="site_sub_title">{site.title}</h2>
                                    <p>{site.num}</p>
                                    <p>{site.skill}</p>
                                    <p>{site.desc}</p>
                                    <Link href={site.git}>github</Link>
                                    <Link href={site.view}>view</Link>
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
