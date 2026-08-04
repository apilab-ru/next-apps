import './global.css';
import { iconsFont, manrope } from './fonts';
import * as Tooltip from '@radix-ui/react-tooltip';

export const metadata = {
  title: 'Виктор Захаров - Lead FrontendEnd developer',
  description: 'Портфолио Web Разработчика',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru" className={`${manrope.variable} ${iconsFont.variable}`}>
      <body>
        <Tooltip.Provider delayDuration={200}>{children}</Tooltip.Provider>
      </body>
    </html>
  );
}
