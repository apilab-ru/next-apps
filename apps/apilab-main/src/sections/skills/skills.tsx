'use client';

import './skills.scss';
import { SkillIcon } from './icons';
import { useState } from 'react';

const mainSkills = [
  { skill: 'TypeScript', class: 'typescript' },
  { skill: 'Angular', class: 'angular' },
  { skill: 'React', class: 'react' },
  { skill: 'Next.js', class: 'nextdotjs' },
  { skill: 'RxJS', class: 'reactivex' },
  { skill: 'NgRx', class: 'ngrx' },
];

const otherSkills = [
  { skill: 'JavaScript', class: 'javascript' },
  { skill: 'HTML5', class: 'html5' },
  { skill: 'CSS', class: 'css' },
  { skill: 'Node.js', class: 'nodejs' },
  { skill: 'Docker', class: 'docker' },
  { skill: 'Git', class: 'git' },
  { skill: 'ESLint', class: 'eslint' },
  { skill: 'Jest', class: 'jest' },
  { skill: 'Npm', class: 'npm' },
  { skill: 'Nx', class: 'nx' },
  { skill: 'Prettier', class: 'prettier' },
  { skill: 'Webpack', class: 'webpack' },
];

export function Skills() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="skills">
      <h2 className="section-title">Навыки</h2>

      <div className="skills__row">
        {mainSkills.map((item) => (
          <div className="skills__item" key={item.class}>
            <SkillIcon
              className={'skills__icon --' + item.class}
              name={item.class}
            />
            <div className="skills__title">{item.skill}</div>
          </div>
        ))}
      </div>

      <div className={`skills__second ${isOpen ? '--opened' : ''}`}>
        <div className="skills__row">
          {otherSkills.map((item) => (
            <div className="skills__item" key={item.class}>
              <SkillIcon
                className={'skills__icon --' + item.class}
                name={item.class}
              />
              <div className="skills__title">{item.skill}</div>
            </div>
          ))}
        </div>
      </div>

      <button
        className="button skills__control"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? 'Основные навыки' : 'Больше навыков'}
      </button>
    </div>
  );
}

export default Skills;
