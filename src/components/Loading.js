import React from "react";

const Loading = ({isLoading}) => {
    return (
        <section id={`loading ${isLoading ? "" : "slide_up"}`}>
            {/* isLoading prop활용해서 로딩 끝나면 slide_up 클래스 추가해서 로딩화면이 위로 슬라이드 되서 없어지는 효과 추가해야 하고 circle도 없어져야함  */}
            <div className={`loading_box ${!isLoading ? "none" : ""}`}>
                <div className="circle circle1"></div>
                <div className="circle circle2"></div>
                <div className="circle circle3"></div>
                <div className="circle circle4"></div>
            </div>
        </section>
    );
};

export default Loading;
