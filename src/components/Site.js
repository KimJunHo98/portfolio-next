import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteText } from "../constants/index";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Site = () => {
    const siteRef = useRef(null);
    const sectionRef = useRef([]);

    // 가로스크롤
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = siteRef.current;
        const section = sectionRef.current;

        let scrollTween = gsap.to(section, {
            xPercent: -120 * (section.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => `+=${horizontal.offsetWidth}`,
                pin: true,
                scrub: 1,
                smooth: true,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });

        return () => {
            scrollTween.kill();
        };
    }, []);

    return (
        <section id="site" ref={siteRef}>
            <h2 className="blind">사이트</h2>
            <div className="container">
                <div className="inner">
                    <div className="site">
                        <div className="site_items">
                            <div className="site_item_box intro">
                                <p className="site_intro_title site_intro_title1">about my</p>
                                <p className="site_intro_title site_intro_title2">web site</p>
                                <p className="site_intro_title site_intro_title3">
                                </p>
                            </div>
                            {siteText.map((site, i) => (
                                <article className={`site_item_box item${i + 1}`} key={i} ref={(el) => (sectionRef.current[i] = el)}>
                                    <div className="site_thumb_img">
                                        <Image
                                            src={`/images/${site.img}`}
                                            alt={site.title}
                                            style={{ objectFit: "cover" }}
                                            width={500}
                                            height={500}
                                        />
                                    </div>
                                    <div className="site_text_box">
                                        <h3 className="site_sub_title">{site.title}</h3>
                                        <ul>
                                            <li className="site_join">{site.join}</li>
                                            <li className="site_skill">{site.skill}</li>
                                        </ul>
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
