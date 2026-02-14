import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
    const mouseY = useSpring(0, { stiffness: 500, damping: 28 });
    const [hovering, setHovering] = useState(false);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('button') || e.target.closest('a')) {
                setHovering(true);
            } else {
                setHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, [mouseX, mouseY]);

    return (
        <>
            <motion.div
                className="custom-cursor"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
                animate={{
                    scale: hovering ? 1.5 : 1,
                    backgroundColor: hovering ? 'rgba(78, 205, 196, 0.1)' : 'transparent',
                }}
            />
            <motion.div
                className="cursor-dot"
                style={{
                    x: mouseX,
                    y: mouseY,
                }}
            />
        </>
    );
};

export default CustomCursor;
