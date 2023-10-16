import React from "react";
import { siteText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";
import Link from "next/link";

const Site = () => {
    const { siteRef } = useDarkMode();

    return (
        <section id="site" ref={siteRef}>
            <h2 className="blind">사이트</h2>
            <div className="container">
                <div className="inner">
                    <div className="site">
                        <h2 className="site_main_title">site</h2>
                        <div className="site_items">
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
