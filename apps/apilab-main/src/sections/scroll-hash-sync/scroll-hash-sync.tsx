'use client';

import { useEffect } from 'react';

export function ScrollHashSync() {
  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>('[data-scroll-section][id]'),
    );

    if (!sections.length) return;

    let animationFrame = 0;
    let activeId = '';

    const updateHash = () => {
      animationFrame = 0;
      const marker = window.innerHeight * 0.35;
      const isAtPageBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      let activeSection = sections[0];

      if (isAtPageBottom) {
        activeSection = sections[sections.length - 1];
      } else {
        for (const section of sections) {
          if (section.getBoundingClientRect().top <= marker) {
            activeSection = section;
          } else {
            break;
          }
        }
      }

      if (activeSection.id === activeId) return;

      activeId = activeSection.id;
      const oldURL = window.location.href;
      window.history.replaceState(
        window.history.state,
        '',
        `${window.location.pathname}${window.location.search}#${activeId}`,
      );
      window.dispatchEvent(
        new HashChangeEvent('hashchange', {
          oldURL,
          newURL: window.location.href,
        }),
      );
    };

    const requestUpdate = () => {
      if (!animationFrame) animationFrame = requestAnimationFrame(updateHash);
    };

    updateHash();
    window.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
      if (animationFrame) cancelAnimationFrame(animationFrame);
    };
  }, []);

  return null;
}

export default ScrollHashSync;
