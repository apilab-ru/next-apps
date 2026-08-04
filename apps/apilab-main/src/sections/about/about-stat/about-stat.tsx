'use client';

import * as Tooltip from '@radix-ui/react-tooltip';
import './about-stat.scss';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';

type AboutStat = {
  titleKey: string;
  descriptionKey: string;
  hintKey: string;
  icon: string;
};

const stats: AboutStat[] = [
  {
    titleKey: 'experienceTitle', descriptionKey: 'experienceLabel', hintKey: 'experienceHint',
    icon: 'briefcase',
  },
  {
    titleKey: 'goalsTitle', hintKey: 'goalsHint', descriptionKey: 'goalsLabel',
    icon: 'target',
  },
  {
    titleKey: 'fullstackTitle', hintKey: 'fullstackHint', descriptionKey: 'fullstackLabel',
    icon: 'embed2',
  },
  {
    titleKey: 'challengesTitle', descriptionKey: 'challengesLabel', hintKey: 'challengesHint',
    icon: 'stack',
  },
];

export function AboutStat() {
  const { translate } = useI18n();
  const t = (key: string) => translate(translations, key);

  return (
    <div className="about-stat">
      {stats.map((item) => (
        <Tooltip.Root key={item.icon}>
          <Tooltip.Trigger asChild>
            <div className="about-stat__item" tabIndex={0}>
              <div className={'about-stat__icon icon-' + item.icon}></div>
              <div>
                <div className="about-stat__title">
                  {t(item.titleKey)}
                  <span className="about-stat__title-description">
                    {' '}
                    {t(item.descriptionKey)}
                  </span>
                </div>
                <div className="about-stat__description about-stat__description--short">
                  {t(item.descriptionKey)}
                </div>
                <div className="about-stat__description about-stat__description--mobile">
                  {t(item.hintKey)}
                </div>
              </div>
            </div>
          </Tooltip.Trigger>
          <Tooltip.Portal>
            <Tooltip.Content
              className="about-stat__tooltip"
              side="top"
              sideOffset={10}
              collisionPadding={16}
            >
              {t(item.hintKey)}
              <Tooltip.Arrow className="about-stat__tooltip-arrow" />
            </Tooltip.Content>
          </Tooltip.Portal>
        </Tooltip.Root>
      ))}
    </div>
  );
}

export default AboutStat;
