import React, { useState } from "react";
// import Link from "next/link";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useDarkMode } from '../context/DarkModeContext';
import { headerNav } from "../constants/index";


const Header = () => {
    const { white } = useDarkMode();
    const [active, setActive] = useState(false);

    const hadlekNavMobileClick = () => {
        setActive((prev) => !prev);
    };

    return (
        <>
            <header id="header" role="header" className={white ? "white" : ""}>
                <h2 className="blind">헤더</h2>
                <div className="header_inner">
                    <div className="header">
                        <h1 className="header_logo" role="link">
                            <AnchorLink href="#intro">
                                kinjunho&apos;s<span>portfolio</span>
                            </AnchorLink>
                        </h1>
                        <nav className="header_nav_pc" role="navigation" aria-label="메인메뉴">
                            <ul className="pc_menu">
                                {headerNav.map((nav) => (
                                    <li key={nav.title} className="menu_item">
                                        <AnchorLink href={nav.url}>{nav.title}</AnchorLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        <div
                            onClick={hadlekNavMobileClick}
                            className={`mobile_menu_btn ${active ? "active" : ""}`}
                            aria-expanded={active ? true : false}
                            aria-controls="mobile_menu"
                            role="button"
                            tabIndex="0"
                        >
                            <span className="btn_bar"></span>
                        </div>
                        <div className={`header_nav_mobile ${active ? "active" : ""}`}>
                            <ul className="mobile_menu" aria-label="모바일메뉴">
                                {headerNav.map((nav) => (
                                    <li key={nav.title} className="menu_item">
                                        <AnchorLink href={nav.url}>{nav.title}</AnchorLink>
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
