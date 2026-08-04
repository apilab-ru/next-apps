'use client';

import './menu.scss';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useEffect, useState } from 'react';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';
import { useRouter } from 'next/navigation';

const items = [
  { labelKey: 'about', path: 'intro', sections: ['intro', 'about'] },
  { labelKey: 'skills', path: 'skills', sections: ['skills'] },
  { labelKey: 'experience', path: 'experience', sections: ['experience'] },
  { labelKey: 'projects', path: 'projects', sections: ['projects'] },
];

function isActiveSection(sections: string[], active: string): boolean {
  return sections.includes(active);
}

export function Menu() {
  const { language, translate } = useI18n();
  const router = useRouter();
  const t = (key: string) => translate(translations, key);
  const [currentSection, setCurrentSection] = useState('intro');
  const [activeSection, debounceActiveSection] = useDebouncedValue(
    currentSection,
    200,
  );

  useEffect(() => {
    const updateCurrentSection = () => {
      setCurrentSection(window.location.hash.slice(1) || 'intro');
    };

    updateCurrentSection();
    window.addEventListener('hashchange', updateCurrentSection);

    return () => {
      window.removeEventListener('hashchange', updateCurrentSection);
    };
  }, []);

  const switchLanguage = (pathname: '/' | '/en') => {
    router.push(`${pathname}${window.location.search}${window.location.hash}`);
  };

  return (
    <nav className="menu" aria-label={t('navigationLabel')}>
      <div className="menu__title">
        <img src="/img/logo-main.png" className="menu__logo" alt="logo" />
        APILAB
      </div>
      <div className="menu__links">
        {items.map((item) => (
          <a
            className={`menu__link${isActiveSection(item.sections, activeSection) ? ' --active' : ''}`}
            href={'#' + item.path}
            key={item.path}
            onClick={() => {
              if (item.path !== currentSection) debounceActiveSection();
            }}
            aria-current={
              isActiveSection(item.sections, activeSection)
                ? 'location'
                : undefined
            }
          >
            {t(item.labelKey)}
          </a>
        ))}
      </div>
      <div className="menu__language" aria-label="Language">
        <button
          className={`menu__language-option${language === 'ru' ? ' --active' : ''}`}
          type="button"
          onClick={() => switchLanguage('/')}
          aria-pressed={language === 'ru'}
          aria-label="Русский"
        >
          <span aria-hidden="true">🇷🇺</span> Ru
        </button>
        <button
          className={`menu__language-option${language === 'en' ? ' --active' : ''}`}
          type="button"
          onClick={() => switchLanguage('/en')}
          aria-pressed={language === 'en'}
          aria-label="English"
        >
          <span aria-hidden="true">🇬🇧</span> En
        </button>
      </div>
    </nav>
  );
}

export default Menu;
