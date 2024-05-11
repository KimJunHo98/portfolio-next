import React, { useState } from "react";

const SlideCover = ({ isLoading }) => {
    const [height, setHeight] = useState(100);

    if (!isLoading) {
        setTimeout(() => {
            setHeight(0);
        }, 800);
    }

    return (
        <div
            className="slide_cover"
            style={{
                height: `${height}vh`,
            }}
        >
            <h2 className="blind">슬라이드 커버</h2>
        </div>
    );
};

export default SlideCover;
