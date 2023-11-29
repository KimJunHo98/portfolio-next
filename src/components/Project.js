import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectText } from "../constants/index";
import { useDarkMode } from "../context/DarkModeContext";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Project = () => {
    const { horizonSectionRef } = useDarkMode();
    const projectRef = useRef(null);

    // 가로 스크롤
    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const horizontal = projectRef.current;
        const horizonSection = horizonSectionRef.current;

        let scrollTween = gsap.to(horizonSection, {
            xPercent: -120 * (horizonSection.length - 1),
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
    }, [horizonSectionRef]);

    return (
        <div id="project_wrap">
            <section id="project" className="horizontal" ref={projectRef} aria-label="Horizontal Scroll Section">
                <h2 className="blind">프로젝트</h2>
                <div className="container">
                    <div className="inner">
                        <div className="project">
                            <div className="project_items">
                                <div className="project_item_box intro">
                                    <p className="project_intro_title project_intro_title1">about my</p>
                                    <p className="project_intro_title project_intro_title2">projects</p>
                                </div>
                                {projectText.map((project, i) => (
                                    <article className={`project_item_box item${i + 1}`} key={i} ref={(el) => (horizonSectionRef.current[i] = el)}>
                                        <div className="project_thumb_img">
                                            <Image
                                                src={`/images/${project.img}`}
                                                alt={project.title}
                                                style={{ objectFit: "cover" }}
                                                width={500}
                                                height={500}
                                            />
                                        </div>
                                        <div className="project_text_box">
                                            <h3 className="project_sub_title">{project.title}</h3>
                                            <ul>
                                                <li className="project_join">{project.join}</li>
                                                <li className="project_skill">{project.skill}</li>
                                            </ul>
                                            <p className="project_desc">{project.desc}</p>
                                            <div className="project_link_box">
                                                <Link
                                                    href={project.git}
                                                    className="link_btns"
                                                    target="_blank"
                                                    role="link"
                                                    aria-label="깃허브 링크"
                                                >
                                                    github
                                                </Link>
                                                <Link
                                                    href={project.view}
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
        </div>
    );
};

export default Project;
