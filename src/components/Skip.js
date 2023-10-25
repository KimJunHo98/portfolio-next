import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Skip = () => {
    return (
        <aside id="skip">
            {/* <AnchorLink className="skip_item" href="#header">시작 영역 바로가기</AnchorLink> */}
            <AnchorLink className="skip_item" href="#about">소개 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#skill">스킬 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#site">사이트 영역 바로가기</AnchorLink>
            <AnchorLink className="skip_item" href="#contact">연락처 영역 바로가기</AnchorLink>
        </aside>
    );
};

export default Skip;
