import { largeParticles } from '@/_data/particle-options';
import { DATA } from '@/_data/resume';
import { ThemeProvider } from '@/_providers/theme-provider';
import TranslationsProvider from '@/_providers/translation-provider';
import PageAnimatePresence from '@/components/hoc/page-animated-presence';
import Navbar from '@/components/shared/navbar';
import BackroundParticles from '@/components/ui/particles';
import { TooltipProvider } from '@/components/ui/tooltip';
import type { Metadata } from 'next';
import { Barlow_Semi_Condensed } from 'next/font/google';
import AnimatedCursor from 'react-animated-cursor';
import initTranslations from '../i18n';
import './globals.css';
import SmoothScrolling from '@/components/hoc/scroll-smooth';
import Footer from '@/components/shared/footer';

const barlow = Barlow_Semi_Condensed({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-barlow',
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  alternates: {
    canonical: '/',
  },
  keywords: DATA.seoKeywords,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    images: [
      {
        url: '/opengraph-image.png',
        width: 800,
        height: 600,
      },
      {
        url: '/opengraph-image.png',
        width: 1800,
        height: 1600,
        alt: 'alt open graph',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: 'summary_large_image',
  },
  verification: {
    google: '',
    yandex: '',
  },
};

const namespaces = ['hello'];

export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { resources } = await initTranslations(locale, namespaces);
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={barlow.className}>
        <SmoothScrolling>
          <TranslationsProvider
            namespaces={namespaces}
            locale={locale}
            resources={resources}
          >
            <ThemeProvider
              attribute='class'
              defaultTheme='system'
              enableSystem
              disableTransitionOnChange
            >
              <AnimatedCursor />
              <TooltipProvider delayDuration={0}>
                <PageAnimatePresence>
                  <main className='min-h-screen h-full  w-full absolute top-0 -z-10 py-8'>
                    <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
                    <BackroundParticles options={largeParticles} />
                    {children}
                    <Footer />
                  </main>
                </PageAnimatePresence>
                <Navbar />
              </TooltipProvider>
            </ThemeProvider>
          </TranslationsProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
