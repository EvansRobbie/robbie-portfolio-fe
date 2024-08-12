import Image from 'next/image';
import initTranslations from '../i18n';
import ContactInfo from '@/components/shared/contact-info';
import { ModeToggle } from '@/components/shared/mode-toggle';
import LanguageTranslate from '@/components/shared/language-translate';
import Link from 'next/link';

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ['hello']);
  return (
    <div className='h-full  w-full absolute top-0 -z-10 py-8'>
      <div className='px-10'>
        <div className='w-full flex justify-between items-center'>
        <div className='flex items-center gap-4'>
          <ContactInfo />
          <div className=' bg-background/95  backdrop-blur  p-4'>
            <Link href={'/'} className='text-base uppercase tracking-widest font-medium'>
              Evanrobby Macharia
            </Link>
          </div>
        </div>

        <div className='flex items-center gap-2'>
          <ModeToggle/>
          <LanguageTranslate/>
        </div>

        </div>
      </div>
      <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
    </div>
  );
}
