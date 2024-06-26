import React, { useEffect, useRef, useState } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDarkMode } from "../context/DarkModeContext";
import { headerNav } from "../constants/index";

import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const Header = () => {
    const { dark } = useDarkMode();
    const [active, setActive] = useState(false);
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [isHeaderVisible, setIsHeaderVisible] = useState(true);
    const headerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            const headerHeight = headerRef.current.offsetHeight;
            const scrollThreshold = 50;

            if (currentScrollPos > prevScrollPos && currentScrollPos > headerHeight + scrollThreshold) {
                setIsHeaderVisible(false);
            } else if (currentScrollPos < prevScrollPos || currentScrollPos <= headerHeight) {
                setIsHeaderVisible(true);
            }

            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [prevScrollPos]);

    const handleNavMobileClick = () => {
        setActive((prev) => !prev);
    };

    const handleMobileMenuClick = () => {
        setActive((prev) => !prev);
    };

    // 스무스 스크롤 중에도 클릭했을 때 섹션 이동
    const handleNavClick = (sectionId) => {
        gsap.to(window, {
            duration: 1.5,
            scrollTo: {
                y: sectionId,
            },
            ease: "power2.inOut",
        });
    };

    return (
        <>
            <header id="header" ref={headerRef} className={`${isHeaderVisible ? "" : "unvisible"} ${dark ? "dark" : ""}`}>
                <h2 className="blind">헤더</h2>
                <div className="header_inner">
                    <div className="header">
                        <h1 className="header_logo">
                            <AnchorLink href="#intro" role="link" tabIndex={2}
                            onClick={() => handleNavClick("#intro")}>
                                kimjunho&apos;s<span>portfolio</span>
                            </AnchorLink>
                        </h1>
                        <nav className="header_nav_pc" role="navigation" aria-label="메인메뉴">
                            <ul className="pc_menu">
                                {headerNav.map((nav) => (
                                    <li key={nav.title} className="menu_item">
                                        <AnchorLink href={nav.url} tabIndex={2} onClick={() => handleNavClick(nav.url)}>
                                            {nav.title}
                                        </AnchorLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <button
                            onClick={handleNavMobileClick}
                            className={`mobile_menu_btn ${active ? "active" : ""}`}
                            aria-expanded={active ? true : false}
                            aria-controls="mobile_menu"
                            role="button"
                            aria-label="모바일 메뉴 열기"
                            tabIndex={2}
                        >
                            <span className="btn_bar"></span>
                        </button>
                        <div className={`header_nav_mobile ${active ? "active" : ""}`}>
                            <ul className="mobile_menu" aria-label="모바일메뉴">
                                {headerNav.map((nav) => (
                                    <li key={nav.title} className="menu_item">
                                        <AnchorLink href={nav.url} onClick={handleMobileMenuClick} tabIndex={3}>
                                            {nav.title}
                                        </AnchorLink>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
