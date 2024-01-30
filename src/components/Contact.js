import React, { useEffect, useRef } from "react";

const Contact = () => {
    const contactRef = useRef([]);

    useEffect(() => {
        const contactRefCurrent = contactRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((item) => {
                    if (item.isIntersecting) {
                        item.target.style.opacity = 1;
                        item.target.style.transition = "all .5s ease-in-out";
                    } else {
                        item.target.style.opacity = 0;
                        item.target.style.transition = "all .5s ease-in-out";
                    }
                });
            },
            { threshold: 0.5 }
        );

        contactRefCurrent.forEach((el) => observer.observe(el));

        return () => {
            contactRefCurrent.forEach((el) => observer.disconnect(el));
        };
    }, []);

    return (
        <section id="contact">
            <h2 className="blind">연락처</h2>
            <div className="container">
                <div className="inner">
                    <div className="contact">
                        <ul className="contact_text">
                            <li ref={(el) => (contactRef.current[0] = el)}>thank you for watch</li>
                            <li ref={(el) => (contactRef.current[1] = el)}>my portfolio</li>
                            <li ref={(el) => (contactRef.current[2] = el)}>if you want to contact me</li>
                            <li ref={(el) => (contactRef.current[3] = el)}>please contact me here</li>
                        </ul>
                        <ul className="contact_me">
                            <li className="my_address" ref={(el) => (contactRef.current[4] = el)}><span>email:</span>dydgnscc6845@gmail.com / dydgnscc6845@naver.com</li>
                            <li className="my_instagram" ref={(el) => (contactRef.current[5] = el)}><span>instagram:</span>k_jun_ho</li>
                            <li className="my_number" ref={(el) => (contactRef.current[6] = el)}><span>number:</span>010-5672-4735</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
