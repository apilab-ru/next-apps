import HomePage from './home-page';
import { I18nProvider } from '@/i18n/i18n';

export default function RussianPage() {
  return (
    <I18nProvider language="ru">
      <HomePage />
    </I18nProvider>
  );
}
