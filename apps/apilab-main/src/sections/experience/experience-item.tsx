import Image from 'next/image';
import { formatDate } from '@/helpers/formatDate';
import { formatDuration } from '@/helpers/formatDuration';
import type { ExpItem } from './model';
import { useI18n } from '@/i18n/i18n';
import translations from './translations.json';

interface ExperienceItemProps {
  item: ExpItem;
  isHidden?: boolean;
}

export function ExperienceItem({
  item,
  isHidden = false,
}: ExperienceItemProps) {
  const { language, translate, translateList } = useI18n();
  const itemPath = `items.${item.id}`;
  const descriptions = translateList(
    translations,
    `${itemPath}.description`,
  );
  const tooltipId = `experience-duration-${item.from}`;

  return (
    <article className="experience__item">
      <span className="experience__marker" aria-hidden="true" />
      <div className="experience__heading">
        <div>
          <h3 className="experience__company">
            <span className="experience__company-logo">
              <Image src={item.logo} alt="" width={22} height={22} />
            </span>
            {translate(translations, `${itemPath}.company`)}
          </h3>
          <p className="experience__position">
            {translate(translations, `${itemPath}.position`)}
          </p>
        </div>
        <span
          className="experience__period"
          tabIndex={isHidden ? -1 : 0}
          aria-describedby={tooltipId}
        >
          <time dateTime={item.from}>{formatDate(item.from, language)}</time>
          {' — '}
          {item.to ? (
            <time dateTime={item.to}>{formatDate(item.to, language)}</time>
          ) : (
            translate(translations, 'section.present')
          )}
          <span
            className="experience__duration-tooltip"
            id={tooltipId}
            role="tooltip"
          >
            {formatDuration(item.from, item.to, language)}
          </span>
        </span>
      </div>
      <ul className="experience__description">
        {descriptions.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceItem;
