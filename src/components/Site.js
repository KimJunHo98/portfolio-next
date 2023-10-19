import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { siteText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// react icons
import { PiArrowDownRightThin } from "react-icons/pi";

const Site = () => {
    const { siteRef, siteOffsetRef  } = useDarkMode();
    const sectionRef = useRef([]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = siteRef.current;
        const section = sectionRef.current;

        let scrollTween = gsap.to(section, {
            xPercent: -120 * (section.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top 1px",
                end: () => "+=" + horizontal.offsetWidth,
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
    }, [siteRef]);

    return (
        <>
            <aside className="site_offsetTop" ref={siteOffsetRef}></aside>
            <section id="site" className="horizontal" ref={siteRef}>
                <h2 className="blind">사이트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="site">
                            <div className="site_items">
                                <div className="site_item_box intro">
                                    <p className="site_intro_title site_intro_title1">welcome to</p>
                                    <p className="site_intro_title site_intro_title2">my projects</p>
                                    <p className="site_intro_title site_intro_title3">
                                        scroll
                                        <span className="scroll_arrow">
                                            <PiArrowDownRightThin />
                                        </span>
                                    </p>
                                </div>
                                {siteText.map((site, i) => (
                                    <div className={`site_item_box item${i + 1}`} key={i} ref={(el) => (sectionRef.current[i] = el)}>
                                        <h2 className="site_sub_title">{site.title}</h2>
                                        <p>{site.num}</p>
                                        <p>{site.skill}</p>
                                        <p>{site.desc}</p>
                                        <Link href={site.git} target="_blank" role="link" aria-label="깃허브 링크">
                                            github
                                        </Link>
                                        <Link href={site.view} target="_blank" role="link" aria-label="뷰 링크">
                                            view
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Site;
