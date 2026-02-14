import React, { useEffect, useState } from 'react';

const ScrollProgress = () => {
    const [scroll, setScroll] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const windowScroll = window.scrollY;
            const scrolled = (windowScroll / height) * 100;
            setScroll(scrolled);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            className="scroll-progress"
            style={{ width: `${scroll}%` }}
        />
    );
};

export default ScrollProgress;
