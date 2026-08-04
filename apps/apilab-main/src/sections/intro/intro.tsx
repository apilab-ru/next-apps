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

const transparentPixel =
  'data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

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
          <picture className="intro__photo" aria-hidden="true">
            <source
              media="(min-width: 641px)"
              type="image/avif"
              srcSet="/img/hero-portrait-400.avif 400w, /img/hero-portrait-800.avif 800w, /img/hero-portrait-1024.avif 1024w"
              sizes="400px"
            />
            <source
              media="(min-width: 641px)"
              type="image/webp"
              srcSet="/img/hero-portrait-400.webp 400w, /img/hero-portrait-800.webp 800w, /img/hero-portrait-1024.webp 1024w"
              sizes="400px"
            />
            <img
              src={transparentPixel}
              alt=""
              width="500"
              height="500"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>
        <picture className="intro__background" aria-hidden="true">
          <source
            media="(max-width: 640px)"
            type="image/avif"
            srcSet="/img/hero-portrait-mobile-480.avif 480w, /img/hero-portrait-mobile-768.avif 768w, /img/hero-portrait-mobile-1250.avif 1250w"
            sizes="100vw"
          />
          <source
            media="(max-width: 640px)"
            type="image/webp"
            srcSet="/img/hero-portrait-mobile-480.webp 480w, /img/hero-portrait-mobile-768.webp 768w, /img/hero-portrait-mobile-1250.webp 1250w"
            sizes="100vw"
          />
          <source
            type="image/avif"
            srcSet="/img/hero-background-960.avif 960w, /img/hero-background-1440.avif 1440w, /img/hero-background-1774.avif 1774w"
            sizes="63vw"
          />
          <source
            type="image/webp"
            srcSet="/img/hero-background-960.webp 960w, /img/hero-background-1440.webp 1440w, /img/hero-background-1774.webp 1774w"
            sizes="63vw"
          />
          <img
            src="/img/hero-background.webp"
            alt=""
            width="1774"
            height="887"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
        </picture>
      </div>
    </section>
  );
}

export default Intro;
