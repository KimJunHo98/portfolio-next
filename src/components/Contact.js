import React, { useEffect, useRef } from "react";

const Contact = () => {
    const contactRef = useRef();
    const contactTextRef = useRef([]);

    useEffect(() => {
        const contactRefCurrent = contactRef.current;

        const contactObserver = new IntersectionObserver(
            (entries) => {
                const sectionEntry = entries[0];

                if (sectionEntry.isIntersecting) {
                    contactRefCurrent.style.backgroundColor = "#ffffffe6";
                    contactRefCurrent.style.transition = "all .5s ease-in-out";
                } else {
                    contactRefCurrent.style.backgroundColor = "var(--black)";
                    contactRefCurrent.style.transition = "all .5s ease-in-out";
                }
            },
            { threshold: 0.5 }
        );

        contactObserver.observe(contactRefCurrent);

        return () => {
            contactObserver.unobserve(contactRefCurrent);
        };
    }, []);

    useEffect(() => {
        const contactTextRefCurrent = contactTextRef.current;

        const contactTextObserver = new IntersectionObserver(
            (entries) => {
                console.log(entries);
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.style.color = "var(--black)";
                        entry.target.style.transition = "opacity .5s ease-in-out";
                    } else {
                        entry.target.style.color = "var(--white)";
                        entry.target.style.transition = "opacity .5s ease-in-out";
                    }
                });
            },
            { threshold: 0.5 }
        );

        contactTextRefCurrent.forEach((el) => contactTextObserver.observe(el));

        return () => {
            contactTextRefCurrent.forEach((el) => contactTextObserver.unobserve(el));
        };
    });

    return (
        <section id="contact" ref={contactRef}>
            <h2 className="blind">연락처</h2>
            <div className="container">
                <div className="inner">
                    <div className="contact">
                        <h3 className="contact_title" ref={(el) => (contactTextRef.current[0] = el)}>
                            contact
                        </h3>
                        <div className="contact_text"></div>
                        <p className="contact_email" ref={(el) => (contactTextRef.current[1] = el)}>
                            Email: dydgnscc6845@gmail.com / dydgnscc6845@naver.com
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
