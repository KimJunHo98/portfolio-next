import React, { useEffect, useMemo, useRef } from "react";
import { gsap } from "gsap";

const Intro = () => {
    const containerRef = useRef(null);
    const firstParaRef = useRef(null);
    const secondParaRef = useRef(null);
    const thirdParaRef = useRef(null);
    const maskRef = useRef(null);

    const textArr1 = useMemo(() => "This is Junho Kim's portfolio site made with Next.js".split(" "), []);
    const textArr2 = useMemo(() => "Scroll Down Scroll Down Scroll Down Scroll Down Scroll Down".split(" "), []);
    const textArr3 = useMemo(() => "frontend developer frontend developer frontend developer".split(" "), []);

    // 텍스트 마우스 오버
    useEffect(() => {
        const container = containerRef.current;
        const mask = maskRef.current;

        const handleMouseMove = (e) => {
            const y = window.innerHeight / 5;
            const mouseY = e.clientY - y;

            gsap.to(container, {
                y: mouseY,
                duration: 0.5,
                ease: "power2.out",
            });
            gsap.to(mask, {
                y: -mouseY,
                duration: 0.5,
                ease: "power2.out",
            });
        };

        window.addEventListener("pointermove", handleMouseMove);

        return () => {
            window.removeEventListener("pointermove", handleMouseMove);
        };
    }, []);

    // 무한 마퀴텍스트
    useEffect(() => {
        const firstPara = firstParaRef.current;
        const secondPara = secondParaRef.current;
        const thirdPara = thirdParaRef.current;

        let count1 = 0;
        let count2 = 0;
        let count3 = 0;

        const initTexts = (el, textArr) => {
            textArr.push(...textArr);

            for (let i = 0; i < textArr.length; i++) {
                el.innerText += `${textArr[i]}\u00A0\u00A0`;
            }
        };

        initTexts(firstPara, textArr1);
        initTexts(secondPara, textArr2);
        initTexts(thirdPara, textArr3);

        const marqueeText = (count, el, direction) => {
            if (count > el.scrollWidth / 2) {
                el.style.transform = `translate3d(0, 0, 0)`;

                count = 0;
            }
            el.style.transform = `translate3d(${direction * count}px, 0, 0)`;

            return count;
        };

        const animate = () => {
            count1++;
            count2++;
            count3++;

            count1 = marqueeText(count1, firstPara, -1);
            count2 = marqueeText(count2, secondPara, 1);
            count3 = marqueeText(count3, thirdPara, -1);

            window.requestAnimationFrame(animate);
        };

        animate();
    }, [textArr1, textArr2, textArr3]);

    return (
        <section id="intro">
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
                                <li className="text_mask_items item5">please enjoy watch it</li>
                                <li className="text_mask_items item6">scroll down</li>
                            </ul>
                        </div>
                        <div className="parallel_container">
                            <div className="cover">
                                <p className="first-parallel parallel" ref={firstParaRef}></p>
                            </div>
                            <div className="cover">
                                <p className="second-parallel parallel" ref={secondParaRef}></p>
                            </div>
                            <div className="cover">
                                <p className="third-parallel parallel" ref={thirdParaRef}></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
