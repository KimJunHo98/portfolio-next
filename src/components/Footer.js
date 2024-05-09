import Link from "next/link";
import React from "react";

// react icons
import { FaGithubSquare } from "react-icons/fa";
import { RiNotionFill } from "react-icons/ri";

const Footer = () => {
    const url1 = "https://github.com/KimJunHo98";
    const url2 = "https://www.notion.so/My-Blog-f671a512fe944b94a56a80576b5fc731";

    return (
        <footer id="footer">
            <h2 className="blind">푸터</h2>
            <div className="inner">
                <div className="footer">
                    <p className="copyright">&copy; KimJunHo</p>
                    <div className="footer_link_box">
                        <Link className="link_btn" href={url1} target="_blank" role="link" aria-label="깃허브 링크">
                            <FaGithubSquare />
                            <span>Github</span>
                        </Link>
                        <Link className="link_btn" href={url2} target="_blank" role="link" aria-label="노션 링크">
                            <RiNotionFill />
                            <span>Notion</span>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;
