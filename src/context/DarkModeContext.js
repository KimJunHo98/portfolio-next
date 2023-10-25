import React, { createContext, useContext, useState, useRef } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [white, setWhite] = useState(false);
    const skillOffsetRef = useRef(null);
    const siteRef = useRef(null);
    const siteOffsetRef = useRef(null);

    return <DarkModeContext.Provider value={{ white, setWhite, skillOffsetRef, siteRef, siteOffsetRef }}>{children}</DarkModeContext.Provider>;
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("반드시 DarkModeProvider 안에서 사용해야 합니다.");
    }
    return context;
};
