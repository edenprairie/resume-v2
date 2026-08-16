import type { Metadata } from 'next';
import { Source_Serif_4 } from 'next/font/google';
import './globals.css';

const serif = Source_Serif_4({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Jun Wang — Director of Software Engineering',
  description:
    'Jun Wang is a software engineering leader in the Twin Cities. He leads technical architecture at Optum Behavioral Health and previously ran engineering teams at Amazon and CVS Health.',
  openGraph: {
    title: 'Jun Wang — Director of Software Engineering',
    description:
      'Software engineering leadership, platform architecture, and AI-driven clinical systems.',
    url: 'https://cv.junwang.us',
    type: 'profile',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={serif.className}>{children}</body>
    </html>
  );
}
