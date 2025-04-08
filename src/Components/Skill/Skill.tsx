import React from 'react';
import { skills } from '../../Data/data';

// Define the type for each skill
interface Skill {
  id: number;
  title: string;
  icon: string;
}

// Explicitly define the type of skills array
const skillsArray: Skill[] = skills;

export const Skills: React.FC = () => {
  return (
    <>
      <div className="skills-title-container">
        <h3 className="skills-title">MY STACK</h3>
        <div className="skills-line"></div>
      </div>

      {/* skills-center */}
      <div className="skills-center">
        {skillsArray.map(({ id, title, icon }) => {
          return (
            <article key={id} className="skill" title={title}>
              <img src={icon} alt={title} className="skill-icon" />
            </article>
          );
        })}
      </div>
    </>
  );
};
