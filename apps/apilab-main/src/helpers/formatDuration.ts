import { pluralize } from './pluralize';

export function formatDuration(from: string, to: string | null) {
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
