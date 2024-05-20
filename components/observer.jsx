'use client'
import { useInView } from "react-intersection-observer";
import { useState } from "react";

function Observer ({ className, classAdd, children, tag: Tag = 'div' }) {
    const [firstInView, setFirstInView] = useState(false); 
    const { ref, inView } = useInView({
        threshold: 0.7,
        ssr: false,
    });

    if (inView && !firstInView) {
        setFirstInView(true);
    }

    return (
        <Tag ref={ref} className={`${className} ${classAdd} ${firstInView ? 'in-page' : ''}`}>
            {children}
        </Tag>
    );
}

export default Observer;
