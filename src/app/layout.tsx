import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { SITE_CONFIG, SITE_FAVICON_OG_IMAGE } from '@/config/site';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-sans',
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: { default: SITE_CONFIG.name, template: `%s | ${SITE_CONFIG.name}` },
  description: SITE_CONFIG.description,
  openGraph: { siteName: SITE_CONFIG.name },
  icons: {
    icon: SITE_FAVICON_OG_IMAGE,
    apple: SITE_FAVICON_OG_IMAGE,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="antialiased min-h-screen">{children}</body>
    </html>
  );
}
