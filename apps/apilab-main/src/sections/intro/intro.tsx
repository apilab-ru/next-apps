'use client';

import './intro.scss';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';

const links = [
  {
    name: 'linkedin',
    link: 'https://www.linkedin.com/in/apilab/',
  },
  {
    name: 'github',
    link: 'https://github.com/apilab-ru/',
  },
  {
    name: 'telegram',
    link: 'https://t.me/apilab',
  },
];

export function Intro() {
  const { translate } = useI18n();
  const t = (key: string) => translate(translations, key);

  return (
    <section className="intro" id="intro" data-scroll-section>
      <div className="intro__main">
        <div className="intro__text-container">
          <div className="intro__text">
            <h3>{t('greeting')}</h3>
            <h1>{t('jobTitle')}</h1>
            <p className="intro__desc">
              {t('description')}
            </p>
            <div className="intro__actions"></div>
            <div className="intro__links">
              {links.map((item) => (
                <a
                  className={'intro__link icon-' + item.name}
                  href={item.link}
                  key={item.name}
                  target="_blank"
                ></a>
              ))}
            </div>
          </div>
          <div className="intro__photo"></div>
        </div>
        <div className="intro__background"></div>
      </div>
    </section>
  );
}

export default Intro;
