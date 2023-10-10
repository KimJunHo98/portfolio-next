import React from "react";
import { skillText } from "../constants/index";

const Skill = () => {
    return (
        <section id="skill">
            <h2 className="blind">스킬</h2>
            <div className="container">
                <div className="inner">
                    <div className="skill">
                        <h2 className="skill_title">skill</h2>
                        <div className="skill_items">
                            {skillText.map((skill, i) => (
                                <div className="skill_item_box" key={i}>
                                    <h3 className="skill_name">
                                        <span className="skill_num">{i + 1}.</span>
                                        {skill.name}
                                    </h3>
                                    <p className="skill_desc">{skill.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
