import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
// import Footer from '@/components/Footer';
import './global.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://mikee-chong.com'),
  title: 'Mikee Chong',
  icons: {
    icon: '/icon.ico',
  },
  keywords: ['Mikee Chong', 'London', 'UK', 'United Kingdom'],
  openGraph: {
    title: 'Mikee Chong',
    siteName: 'Mikee Chong',
    type: 'profile',
  },
  authors: [
    {
      name: 'Mikee Chong',
      url: 'https://www.linkedin.com/in/mikeechong/',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body>
        <Navbar />
        <main className='relative min-h-screen w-full pt-20'>{children}</main>
      </body>
    </html>
  );
}
