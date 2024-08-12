import Image from 'next/image';
import initTranslations from '../i18n';
import ContactInfo from '@/components/shared/contact-info';
import { ModeToggle } from '@/components/shared/mode-toggle';
import LanguageTranslate from '@/components/shared/language-translate';
import Link from 'next/link';
import BlurFade from '@/components/shared/blur-fade-effect';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GradualSpacing } from '@/components/ui/gradual-spacing';
import BlurFadeText from '@/components/shared/blur-fade-text';
import { TextRevealCard } from '@/components/shared/text-reveal';

const BLUR_FADE_DELAY = 0.04;

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ['hello']);
  return (
    <div className='h-full  w-full absolute top-0 -z-10 py-8'>
      <div className='px-10 h-full'>
        <div className='w-full flex justify-between items-center'>
          <div className='flex items-center gap-4'>
            <ContactInfo />
            <div className=' bg-background/95  backdrop-blur  p-4'>
              <Link
                href={'/'}
                className='text-base uppercase tracking-widest font-medium'
              >
                Evanrobby Macharia
              </Link>
            </div>
          </div>

          <div className='flex items-center gap-2'>
            <ModeToggle />
            <LanguageTranslate />
          </div>
        </div>
        <div className='mx-auto w-full max-w-2xl space-y-8 flex justify-center items-center min-h-[90vh]'>
          <div className='flex justify-between gap-2'>
            <div className='flex flex-1 flex-col space-y-3'>
              <div className='flex gap-1.5 items-center h-full w-full'>
                <GradualSpacing
                  className='text-xl font-bold tracking-tighter sm:text-5xl xl:text-4xl'
                  text={`Hi, I'm Evanrobby`}
                />
                <BlurFadeText
                  className='text-4xl mt-3'
                  text='👋'
                  delay={BLUR_FADE_DELAY}
                />
              </div>
              <BlurFade delay={BLUR_FADE_DELAY}>
                <TextRevealCard
                  text='Frontend Developer 🚀'
                  revealText='React Developer 👨‍💻 '
                />
              </BlurFade>
              <BlurFadeText
                className='max-w-[600px] text-base leading-7'
                delay={BLUR_FADE_DELAY * 0.05}
                text={`I am a Frontend Developer dedicated to building exceptional digital experiences. My focus is on creating responsive and dynamic frontend applications that deliver seamless and engaging user interactions.`}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className='size-28 border'>
                <AvatarImage />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </div>
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
    </div>
  );
}
