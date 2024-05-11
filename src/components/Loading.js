import React from "react";

const Loading = ({ percentage }) => {
    return (
        <div id="loading" data-size={percentage}>
            <h2 className="blind">로딩페이지</h2>
            <p className="loading_text">KimJunHo&apos;s Portfolio</p>
            <div className="loading_box" style={{width: `${percentage}%`}}>
                <p className="blind">로딩 바</p>
            </div>
        </div>
    );
};

export default Loading;
