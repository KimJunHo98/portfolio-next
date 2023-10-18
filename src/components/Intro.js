import React from "react";
import { lines } from "../constants/index";

const Intro = ({ isShow }) => {
    return (
        <section id="intro" role="intro_section">
            <h2 className="blind">인트로</h2>
            <div className="container">
                <div className="inner">
                    <div className="intro">
                        <h2 className={`intro_title ${isShow ? "show" : ""}`}>i&apos;am web publisher</h2>
                        <div className="intro_lines" aria-hidden="true">
                            {lines.map((line) => (
                                <span key={line.id} className={`${line.class} ${isShow ? "show" : ""}`}></span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
