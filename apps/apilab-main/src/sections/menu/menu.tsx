'use client';

import './menu.scss';
import { useDebouncedValue } from '@/hooks/use-debounced-value';
import { useEffect, useState } from 'react';

const items = [
  { label: 'Обо мне', path: 'intro', sections: ['intro', 'about'] },
  { label: 'Навыки', path: 'skills', sections: ['skills'] },
  { label: 'Опыт', path: 'experience', sections: ['experience'] },
  { label: 'Проекты', path: 'projects', sections: ['projects'] },
];

function isActiveSection(sections: string[], active: string): boolean {
  return sections.includes(active);
}

export function Menu() {
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

  return (
    <nav className="menu" aria-label="Основная навигация">
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
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Menu;
