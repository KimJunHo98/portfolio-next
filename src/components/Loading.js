import React from "react";

const Loading = () => {
    return (
        <div id="loading">
            <h2 className="blind">로딩페이지</h2>
            <div className="loading_box">
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </div>
        </div>
    );
};

export default Loading;
