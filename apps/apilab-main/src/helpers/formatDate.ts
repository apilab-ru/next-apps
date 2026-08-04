import type { Language } from '@/i18n/i18n';

export function formatDate(date: string, language: Language = 'ru') {
  return new Intl.DateTimeFormat(language === 'ru' ? 'ru-RU' : 'en-US', {
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(`${date}T00:00:00Z`));
}
