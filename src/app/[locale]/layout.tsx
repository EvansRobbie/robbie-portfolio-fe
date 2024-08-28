import TranslationsProvider from '@/_providers/translation-provider';
import type { Metadata } from 'next';
import { Barlow_Semi_Condensed } from 'next/font/google';
import initTranslations from '../i18n';
import './globals.css';
import { ThemeProvider } from '@/_providers/theme-provider';
import Navbar from '@/components/shared/navbar';
import { TooltipProvider } from '@/components/ui/tooltip';
import AnimatedCursor from 'react-animated-cursor';
import PageAnimatePresence from '@/components/hoc/page-animated-presence';
import BackroundParticles from '@/components/ui/particles';
import { largeParticles, smallParticles } from '@/_data/particle-options';
import { DATA } from '@/_data/resume';

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
  openGraph: {
     title: `${DATA.name}`,
     description: DATA.description,
     url: DATA.url,
     siteName: `${DATA.name}`,
     locale: 'en_US',
     type: 'website',
  },
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
  twitter: {
     title: `${DATA.name}`,
     card: 'summary_large_image',
  },
  verification: {
     google: '',
     yandex: '',
  },
}

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
                </main>
              </PageAnimatePresence>
              <Navbar />
            </TooltipProvider>
          </ThemeProvider>
        </TranslationsProvider>
      </body>
    </html>
  );
}
