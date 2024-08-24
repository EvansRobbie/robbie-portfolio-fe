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
import { SparklesCore } from '@/components/ui/sparkles';
import AnimatedCounter from '@/components/ui/animated-counter';
import { ResumeCard } from '@/components/shared/resume-card';
import { DATA } from '@/_data/resume';
import BackroundParticles from '@/components/ui/particles';
import { largeParticles } from '@/_data/particle-options';
import CustomButton from '@/components/shared/download-button';
import { Badge } from '@/components/ui/badge';
import { IconCloudComponent } from '@/components/techstack/icon-cloud';

const BLUR_FADE_DELAY = 0.04;

const counter = [
  { text: 'years', stats: 4 },
  { text: 'projects', stats: 10 },
  { text: 'happy clients', stats: 10 },
];

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { t } = await initTranslations(locale, ['hello']);
  return (
    <>
      <section className='px-10 h-full'>
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
              <BlurFade delay={BLUR_FADE_DELAY * 5}>
                <TextRevealCard
                  text='Frontend Developer 🚀'
                  revealText='React Developer 👨‍💻 '
                />
              </BlurFade>
              <BlurFadeText
                className='max-w-[600px] text-base leading-7'
                delay={BLUR_FADE_DELAY * 0.5}
                text={`I am a Frontend Developer dedicated to building exceptional digital experiences. My focus is on creating responsive and dynamic frontend applications that deliver seamless and engaging user interactions.`}
              />
              <CustomButton />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY * 0.6}>
              <Avatar className='size-28 border'>
                <AvatarImage />
                <AvatarFallback>EV</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>
      {/* about me */}
      <div className='relative'>
        <section className='px-10 relative max-w-3xl mx-auto'>
          {/* <BackroundParticles options={largeParticles} /> */}
          <BlurFade delay={BLUR_FADE_DELAY * 6}>
            <BlurFadeText
              className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl'
              text='About me'
              delay={BLUR_FADE_DELAY * 0.5}
            />

            <div className='pt-6'>
              <BlurFadeText text='As a skilled React developer, I am passionate about creating intuitive and responsive web applications that deliver exceptional user experiences. With 3+ years of experience in developing complex front-end applications, I have honed my skills in Next.js, React, Redux, Zustand, Tailwind-Css HTML, CSS, and JavaScript.' />
              <div className='py-8 max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-20 justify-items-center items-center'>
                {counter.map((counter: any) => (
                  <div
                    key={counter.text}
                    className='flex flex-col items-center'
                  >
                    <div className='flex items-center  space-x-2 font-freight text-4xl md:text-6xl font-medium'>
                      <span>
                        <AnimatedCounter value={counter.stats} />
                      </span>
                      <span>+</span>
                    </div>
                    <p className='text-lg font-normal'>{counter.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </BlurFade>
          <div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'></div>
        </section>

        <section className='mx-auto px-10 pt-8 max-w-3xl' id='work'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl py-3'>
                Work Experience
              </h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? 'Present'}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section className='mx-auto px-10 py-16 max-w-3xl' id='education'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl pb-4'>
                Education
              </h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section className='mx-auto px-10 py-16 max-w-3xl' id='techstack'>
          <div className='flex min-h-0 flex-col gap-y-3'>
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className='text-3xl font-bold tracking-tighter sm:text-5xl xl:text-4xl pb-4'>
                Tech Stack
              </h2>
            </BlurFade>
            <div className='grid grid-cols-2 justify-between'>
              <div className='flex flex-col gap-y-3'>
              <BlurFade delay={BLUR_FADE_DELAY * 9}>
                <h2 className='text-xl font-bold'>Mostly Used</h2>
              </BlurFade>
              <div className='flex flex-wrap gap-1'>
                {DATA.skills.mostlyUsed.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 10 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
              </div>
              <div className='flex flex-col gap-y-3'>
              <BlurFade delay={BLUR_FADE_DELAY * 11}>
                <h2 className='text-xl font-bold'>Others</h2>
              </BlurFade>
              <div className='flex flex-wrap gap-1'>
                {DATA.skills.other.map((skill, id) => (
                  <BlurFade
                    key={skill}
                    delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                  >
                    <Badge key={skill}>{skill}</Badge>
                  </BlurFade>
                ))}
              </div>
              </div>
            </div>
            <IconCloudComponent/>
          </div>
        </section>
      </div>
    </>
  );
}
