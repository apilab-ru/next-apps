import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';

export const manrope = Manrope({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['400', '500', '600', '700', '800'],
});

export const iconsFont = localFont({
  src: [
    {
      path: '../assets/fonts/icomoon.woff',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-icons',
  display: 'block',
  preload: false,
});
