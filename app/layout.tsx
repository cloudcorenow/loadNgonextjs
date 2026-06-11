import './globals.css';
import './styles/styles.css';
import './styles/site.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Load N-GO Laundry | Modern Laundry Made Simple',
  description:
    'Hassle-free laundry with flexible payment. Tap our reloadable card or drop in coins — wash, dry, and fold in a clean, modern facility. Open 6AM–10PM daily at 4621 Rosemead Blvd, Pico Rivera, CA.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400;12..96,500;12..96,600;12..96,700;12..96,800&family=Hanken+Grotesk:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
