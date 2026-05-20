import { Inter } from 'next/font/google';
import '../globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap' });

export const metadata = {
  title: 'SaaS Ultra Landing',
  description: 'An ultra-premium, Awwwards-worthy SaaS landing page.',
  openGraph: {
    title: 'SaaS Ultra Landing',
    description: 'An ultra-premium, Awwwards-worthy SaaS landing page.',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
