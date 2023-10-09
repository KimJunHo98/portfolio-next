import React from "react";

const Skill = () => {
    return (
        <section id="skill">
            <h2 className="ir_so">스킬</h2>
            <div className="container">
                <div className="inner">
                    <div className="skill">
                        <div className="skill_title">
                            <h2 className="tit" data-aos="fade-down" data-aos-duration="1000">
                                skills
                            </h2>
                        </div>
                        {/* <div className="skill_list" ref={skillRef}>
                            {skills.map((skill) => (
                                <SkillProgressBar skill={skill} ref={skillRef} key={skill.id} />
                            ))}
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skill;
