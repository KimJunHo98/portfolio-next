import React from "react";
import Link from "next/link";
import { siteText } from "../constants/index";

const Site = () => {
    return (
        <section id="site">
            <h2 className="blind">사이트</h2>
            <div className="container">
                <div className="inner">
                    <div className="site">
                        <div className="site_item_box intro">
                            <p className="site_intro_title site_intro_title1">about my</p>
                            <p className="site_intro_title site_intro_title2">publishing site</p>
                        </div>
                        <div className="site_items_wrap">
                            {siteText.map((site, i) => (
                                <article className={`site_item_box item${i + 1}`} key={i}>
                                    <div className="site_items">
                                        <div className="site_text_box">
                                            <div className="site_title_box">
                                                <span className="site_num">{i + 1}.</span>
                                                <h3 className="site_title">{site.title}</h3>
                                            </div>
                                            <p className="site_desc">{site.desc}</p>
                                            <div className="site_link_box">
                                                <Link
                                                    href={site.git}
                                                    className="link_btns"
                                                    target="_blank"
                                                    role="link"
                                                    aria-label="깃허브 링크"
                                                >
                                                    github
                                                </Link>
                                                <Link
                                                    href={site.view}
                                                    className="link_btns"
                                                    target="_blank"
                                                    role="link"
                                                    aria-label="사이트 링크"
                                                >
                                                    view
                                                </Link>
                                            </div>
                                        </div>
                                        <p className="site_skills">
                                            <span>{site.contribution}</span> use stack: {site.skill}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Site;
