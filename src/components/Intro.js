import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Intro = () => {
    // const [pointer, setPointer] = useState(0);
    const containerRef = useRef(null);
    const maskRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;
        const mask = maskRef.current;

        const handleMouseMove = (e) => {
            const mouseY = window.innerHeight / 5;
            const y = e.clientY - mouseY;

            // if(window.clientWidth <= 480) {
            //     y = e.clientY - 300;
            // }

            gsap.to(container, {
                y: y,
                duration: 0.5,
                ease: "power2.out"
            });
            gsap.to(mask, {
                y: -y,
                duration: 0.5,
                ease: "power2.out"
            });
        }

        window.addEventListener("pointermove", handleMouseMove);

        return () => {
            window.removeEventListener("pointermove", handleMouseMove);
        }
    });

    return (
        <section id="intro" role="intro_section">
            <h2 className="blind">인트로</h2>
            <div className="container">
                <div className="inner">
                    <div className="intro">
                        <ul className="intro_text">
                            <li className="text_items">wellcome to my portfolio</li>
                            <li className="text_items">i&apos;d appreciate it if you</li>
                            <li className="text_items">watched it until the end</li>
                            <li className="text_items">please enjoy watch it</li>
                            <li className="text_items">scroll down</li>
                        </ul>
                        <div className="mask_container" ref={containerRef}>
                            <ul className="intro_text_mask" ref={maskRef}>
                                <li className="text_mask_items item1">wellcome to my portfolio</li>
                                <li className="text_mask_items item3">i&apos;d appreciate it if you</li>
                                <li className="text_mask_items item4">watched it until the end</li>
                                <li className="text_items">please enjoy watch it</li>
                                <li className="text_mask_items item5">scroll down</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
