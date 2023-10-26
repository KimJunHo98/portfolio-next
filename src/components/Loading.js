import React from "react";

const Loading = ({ percentage }) => {
    return (
        <div id="loading" data-size={percentage}>
            <h2 className="blind">로딩페이지</h2>
            <div className="loading_box">{percentage}%</div>
        </div>
    );
};

export default Loading;
