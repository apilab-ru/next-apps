'use client';

import { useState } from 'react';
import './experience.scss';
import { EXTRA_EXPERIENCE, PREVIEW_EXPERIENCE } from './model';
import ExperienceItem from './experience-item';

export function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="experience" id="experience" data-scroll-section>
      <h2 className="section-title">Опыт работы</h2>
      <div className={`experience__list${isExpanded ? ' --expanded' : ''}`}>
        {PREVIEW_EXPERIENCE.map((item) => (
          <ExperienceItem item={item} key={item.company} />
        ))}
        <div
          id="extra-experience"
          className={`experience__extra${isExpanded ? ' --expanded' : ''}`}
          aria-hidden={!isExpanded}
        >
          <div className="experience__extra-content">
            {EXTRA_EXPERIENCE.map((item) => (
              <ExperienceItem
                item={item}
                isHidden={!isExpanded}
                key={item.company}
              />
            ))}
          </div>
        </div>
      </div>
      <button
        className="button experience__control"
        type="button"
        aria-expanded={isExpanded}
        aria-controls="extra-experience"
        onClick={() => setIsExpanded((value) => !value)}
      >
        {isExpanded ? 'Скрыть' : 'Смотреть весь опыт'}
      </button>
    </section>
  );
}

export default Experience;
