import type { Metadata } from 'next';
import { Fraunces, Noto_Serif_Bengali, Hind_Siliguri } from 'next/font/google';
import './globals.css';

const fraunces = Fraunces({ 
  subsets: ['latin'], 
  variable: '--font-fraunces' 
});

const noto = Noto_Serif_Bengali({ 
  subsets: ['bengali'], 
  weight: ['400', '500', '600', '700'],
  variable: '--font-noto' 
});

const hind = Hind_Siliguri({ 
  subsets: ['bengali'], 
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-hind' 
});

export const metadata: Metadata = {
  title: 'Student Association of Malipathor (SAM)',
  description: 'Empowering Students. Serving Our Community. Building Our Future.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn" className={`${fraunces.variable} ${noto.variable} ${hind.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}