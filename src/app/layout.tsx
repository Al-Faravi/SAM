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
  title: 'The Student Association of Malipathor', // ট্যাবের নাম শুধু SAM দেখাবে
  description: 'Empowering Students. Serving Our Community. Building Our Future.',
  icons: {
    icon: '/sam favicon.jpg', // ট্যাবে লোগো দেখাবে
    apple: '/sam favicon.jpg', // অ্যাপল ডিভাইসের জন্য
  },
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