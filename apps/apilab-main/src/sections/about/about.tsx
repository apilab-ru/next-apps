'use client';

import './about.scss';
import AboutStat from './about-stat/about-stat';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';

export function About() {
  const { translate } = useI18n();
  const t = (key: string) => translate(translations, key);

  return (
    <section className="about" id="about" data-scroll-section>
      <h2 className="section-title">{t('sectionTitle')}</h2>
      <div className="about__container">
        <p className="about__text">
          {t('specialization')}{' '}
          <br />
          <br />
          {t('approach')}
        </p>

        <AboutStat />
      </div>
    </section>
  );
}

export default About;
