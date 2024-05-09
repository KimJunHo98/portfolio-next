import React, { useEffect, useMemo, useRef } from "react";

const Intro = () => {
    const firstParaRef = useRef(null);
    const secondParaRef = useRef(null);

    const textArr1 = useMemo(() => "This is Junho Kim's portfolio site made with Next.js This is Junho Kim's portfolio site made with Next.js".split(" "), []);
    const textArr2 = useMemo(() => "web publisher & frontend developer & web publisher & frontend developer & web publisher & frontend developer &".split(" "), []);

    // 무한 마퀴텍스트
    useEffect(() => {
        const firstPara = firstParaRef.current;
        const secondPara = secondParaRef.current;

        let count1 = 0;
        let count2 = 0;

        const initTexts = (el, textArr) => {
            textArr.push(...textArr);

            for (let i = 0; i < textArr.length; i++) {
                el.innerText += `${textArr[i]}\u00A0\u00A0`;
            }
        };

        initTexts(firstPara, textArr1);
        initTexts(secondPara, textArr2);

        // 애니메이트 방향
        const marqueeText = (count, el, direction) => {
            if (count > el.scrollWidth / 2) {
                el.style.transform = `translate3d(0, 0, 0)`;

                count = 0;
            }
            el.style.transform = `translate3d(${direction * count}px, 0, 0)`;

            return count;
        };

        // 애니메이트 실행 함수
        const animate = () => {
            count1++;
            count2++;

            count1 = marqueeText(count1, firstPara, -1);
            count2 = marqueeText(count2, secondPara, 1);

            window.requestAnimationFrame(animate);
        };

        animate();
    }, [textArr1, textArr2]);

    return (
        <section id="intro">
            <h2 className="blind">인트로</h2>
            <div className="container">
                <div className="inner">
                    <div className="intro">
                        <div className="parallel_container">
                            <div className="cover first_cover">
                                <p className="first_parallel parallel" ref={firstParaRef}></p>
                            </div>
                            <div className="cover second_cover">
                                <p className="second_parallel parallel" ref={secondParaRef}></p>
                            </div>
                        </div>
                        <ul className="intro_text">
                            <li className="text_items">wellcome to my portfolio</li>
                            <li className="text_items">i&apos;d appreciate it if you</li>
                            <li className="text_items">watched it until the end</li>
                            <li className="text_items">please enjoy watch it</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;