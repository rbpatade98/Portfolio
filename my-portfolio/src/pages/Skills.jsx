import React from 'react';

const skills = [
  { name: 'Python', level: 90 },
  { name: 'SQL', level: 85 },
  { name: 'Django', level: 80 },
  { name: 'Bootstrap', level: 85 },
  { name: 'Javascript', level: 80 },
  { name: 'React', level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className="section bg-light">
      <div className="container py-5">
        <h2 className="mb-4 animate">Skills</h2>
        {skills.map((skill, index) => (
          <div key={skill.name} className="mb-3 animate delay-1">
            <div className="d-flex justify-content-between">
              <strong>{skill.name}</strong>
              <span>{skill.level}%</span>
            </div>
            <div className="progress" style={{ height: '8px' }}>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
