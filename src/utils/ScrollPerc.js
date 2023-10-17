import React, { useState, useEffect } from "react";
import { useDarkMode } from "../context/DarkModeContext";

const ScrollPerc = () => {
    const [percent, setPercent] = useState(0);
    const { white } = useDarkMode();

    useEffect(() => {
        const updatePercent = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const percentage = pageHeight > 0 ? parseInt(Math.min((scrollTop / pageHeight) * 100, 100)) : 0;

            setPercent(percentage);
        };

        window.addEventListener("scroll", updatePercent);

        return () => {
            window.removeEventListener("scroll", updatePercent);
        };
    }, []);

    return <div className="scroll_percent"><span>{percent}%</span></div>;
};

export default ScrollPerc;
