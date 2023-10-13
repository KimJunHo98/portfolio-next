import React, { createContext, useContext, useState } from "react";

const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
    const [white, setWhite] = useState(false);

    return (
        <DarkModeContext.Provider value={{ white, setWhite }}>
            {children}
        </DarkModeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("반드시 DarkModeProvider 안에서 사용해야 합니다.");
    }
    return context;
};
