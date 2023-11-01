import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Skip = () => {
    return (
        <aside id="skip" tabIndex={0}>
            <AnchorLink className="skip_item" href="#about">소개1 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#skill">스킬 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#site">사이트 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#project">사이트 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#about2">소개2 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#contact">연락처 영역 바로가기</AnchorLink>
        </aside>
    );
};

export default Skip;
