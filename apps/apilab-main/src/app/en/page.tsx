import type { Metadata } from 'next';
import HomePage from '../home-page';
import { I18nProvider } from '@/i18n/i18n';

export const metadata: Metadata = {
  title: 'Viktor Zakharov — Lead Frontend Developer',
  description: 'Frontend developer portfolio',
};

export default function EnglishPage() {
  return (
    <I18nProvider language="en">
      <HomePage />
    </I18nProvider>
  );
}
