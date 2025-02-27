import type { Metadata } from 'next';
import { Analytics } from '@/components/Analytics';
import Background from '@/components/Background';
import Navigation from '@/components/Navigation';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import { siteConfig } from '@/config/site';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { Fira_Code } from 'next/font/google';
import './globals.css';

const firaCode = Fira_Code({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.author}`,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.author, url: siteConfig.url }],
  creator: siteConfig.author,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteConfig.url),
  alternates: {
    canonical: '/',
  },

  // Open Graph
  openGraph: {
    title: siteConfig.title,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.title,
    images: [
      {
        url: '/assets/img/profile.jpg',
        width: 1200,
        height: 630,
        alt: siteConfig.title,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      'index': true,
      'follow': true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  // Icons básicos
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
  },

  // Verificación para Google Search Console
  verification: {
    google: 'VhoVKkUHS5Cxap4t9RYY8to57taC3gp0u-v-BqrLeUE',
  },
};

// Viewport básico
export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className="scroll-smooth"
    >
      <body className={`${firaCode.className} overflow-x-hidden`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="flex">
            <main className="smooth-scroll h-screen w-full snap-y snap-mandatory overflow-y-scroll">
              {children}
            </main>
            <Navigation />
            <ThemeSwitcher />
          </div>
          <Background />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
