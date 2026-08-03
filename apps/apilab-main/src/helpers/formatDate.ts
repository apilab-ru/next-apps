const dateFormatter = new Intl.DateTimeFormat('ru-RU', {
  month: 'long',
  year: 'numeric',
  timeZone: 'UTC',
});

export function formatDate(date: string) {
  return dateFormatter.format(new Date(`${date}T00:00:00Z`));
}
