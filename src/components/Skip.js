import React from "react";
import Link from "next/link";

const Skip = () => {
    return (
        <aside id="skip">
            <Link className="skip_item" href="#header">헤더 영역 바로가기</Link>
            <Link className="skip_item" href="#intro">소개 영역 바로가기</Link>
            <Link className="skip_item" href="#skill">스킬 영역 바로가기</Link>
            <Link className="skip_item" href="#site">사이트 영역 바로가기</Link>
            <Link className="skip_item" href="#contact">연락처 영역 바로가기</Link>
            <Link className="skip_item" href="#footer">푸터 영역 바로가기</Link>
        </aside>
    );
};

export default Skip;
