'use client';

import { useState } from 'react';
import './experience.scss';
import { EXTRA_EXPERIENCE, PREVIEW_EXPERIENCE } from './model';
import ExperienceItem from './experience-item';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';

export function Experience() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { translate } = useI18n();
  const t = (key: string) => translate(translations, key);

  return (
    <section className="experience" id="experience" data-scroll-section>
      <h2 className="section-title">{t('section.title')}</h2>
      <div className={`experience__list${isExpanded ? ' --expanded' : ''}`}>
        {PREVIEW_EXPERIENCE.map((item) => (
          <ExperienceItem item={item} key={item.id} />
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
                key={item.id}
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
        {isExpanded ? t('section.showLess') : t('section.showAll')}
      </button>
    </section>
  );
}

export default Experience;
