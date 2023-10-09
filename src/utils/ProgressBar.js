import React, { useState, useEffect } from 'react';

const ProgressBar = () => {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollY = window.pageYOffset || document.documentElement.scrollTop || window.scrollY;
            const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollY / pageHeight) * 100;

            setWidth(progress);
        };
        
        window.addEventListener('scroll', updateProgress);

        return () => {
            window.removeEventListener('scroll', updateProgress);
        };
    }, []);

    return <div className="header_progress_bar" style={{ width: `${width}%` }} />;
};

export default ProgressBar;
