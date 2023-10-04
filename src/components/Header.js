import React from "react";
import Link from "next/link";

const Header = () => {
    return (
        <header id="header" role="header">
            <div className="header_inner">
                <h2 className="ir_so">헤더</h2>
                <div className="header">
                    <h1 className="header_logo">
                        <Link href="/">kinjunho&apos;s<span>portfolio</span></Link>
                    </h1>
                    <nav className="header_nav" role="navigation" aria-label="메인메뉴">
                        <ul className="main_menu">
                            <li className="menu_item">
                                <Link href="#intro">intro</Link>
                            </li>
                            <li className="menu_item">
                                <Link href="#skill">skill</Link>
                            </li>
                            <li className="menu_item">
                                <Link href="#site">site</Link>
                            </li>
                            <li className="menu_item">
                                <Link href="#port">portfolio</Link>
                            </li>
                            <li className="menu_item">
                                <Link href="#contact">contact</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;
