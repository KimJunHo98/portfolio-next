import React, { useState } from "react";

const SlideCover = ({ isLoading }) => {
    const [height, setHeight] = useState(100);

    if (!isLoading) {
        setTimeout(() => {
            setHeight(0);
        }, 800);
    }

    return (
        <div className="slide_cover"
            style={{ 
                width: "100%",
                height: `${height}vh`,
                position: "absolute",
                top: "0",
                left: "0",
                zIndex: "99999999",
                transition: "all .6s ease-in",
                backgroundColor: "#000"
            }}
        >
            <h2 className="blind">슬라이드 커버</h2>
        </div>
    );
};

export default SlideCover;
