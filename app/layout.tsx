import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Rachid Alaoui Selsouli | Full Stack Developer',
  description: 'Portfolio of Rachid Alaoui Selsouli: Full Stack Developer specializing in modern JavaScript frameworks (.NET, Next.js, Angular, React Native).',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
