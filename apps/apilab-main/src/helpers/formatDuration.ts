import { pluralize } from './pluralize';
import type { Language } from '@/i18n/i18n';

export function formatDuration(
  from: string,
  to: string | null,
  language: Language = 'ru',
) {
  const [fromYear, fromMonth] = from.split('-').map(Number);
  const endDate = to ? new Date(`${to}T00:00:00Z`) : new Date();
  const totalMonths = Math.max(
    0,
    (endDate.getUTCFullYear() - fromYear) * 12 +
      endDate.getUTCMonth() -
      (fromMonth - 1),
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (language === 'en') {
    if (years) parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
    if (months) parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
    return parts.length ? parts.join(' ') : 'less than a month';
  }

  if (years) {
    parts.push(`${years} ${pluralize(years, ['год', 'года', 'лет'])}`);
  }

  if (months) {
    parts.push(
      `${months} ${pluralize(months, ['месяц', 'месяца', 'месяцев'])}`,
    );
  }

  return parts.length ? parts.join(' ') : 'меньше месяца';
}
