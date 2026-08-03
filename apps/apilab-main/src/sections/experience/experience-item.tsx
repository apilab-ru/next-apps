import Image from 'next/image';
import { formatDate } from '@/helpers/formatDate';
import { formatDuration } from '@/helpers/formatDuration';
import type { ExpItem } from './model';

interface ExperienceItemProps {
  item: ExpItem;
  isHidden?: boolean;
}

export function ExperienceItem({
  item,
  isHidden = false,
}: ExperienceItemProps) {
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
            {item.company}
          </h3>
          <p className="experience__position">{item.position}</p>
        </div>
        <span
          className="experience__period"
          tabIndex={isHidden ? -1 : 0}
          aria-describedby={tooltipId}
        >
          <time dateTime={item.from}>{formatDate(item.from)}</time>
          {' — '}
          {item.to ? (
            <time dateTime={item.to}>{formatDate(item.to)}</time>
          ) : (
            'настоящее время'
          )}
          <span
            className="experience__duration-tooltip"
            id={tooltipId}
            role="tooltip"
          >
            {formatDuration(item.from, item.to)}
          </span>
        </span>
      </div>
      <ul className="experience__description">
        {item.description.map((description) => (
          <li key={description}>{description}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceItem;
