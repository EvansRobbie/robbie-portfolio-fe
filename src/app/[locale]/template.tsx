import { MotionDiv } from '@/components/shared/motion-div';
import { cn } from '@/lib/utils';

export default function Template({ children }: { children: React.ReactNode }) {
  const anim = (variants: any) => {
    return {
      variants,

      initial: 'initial',

      animate: 'enter',

      exit: 'exit',
    };
  };

  const transitionAnimation = {
    initial: {
      x: '100%',
      width: '100%',
    },
    enter: {
      x: '0%',
      width: '0%',
    },
    exit: {
      x: ['0%', '100%'],
      width: ['0%', '100%'],
    },
  };
  return (
    <div>
      {Array(3)
        .fill(0)
        .map((_, i) => (
          <MotionDiv
            key={i}
            {...anim(transitionAnimation)}
            className={cn(
              'fixed bottom-0 top-0 right-full w-screen h-screen z-50 bg-primary',
              { 'bg-background': i === 1 },
              { 'bg-[rgba(173,109,244,0.5)]': i === 2 }
            )}
            transition={{ duration: 0.6, delay: 0.2 * i, ease: 'easeInOut' }}
          ></MotionDiv>
        ))}
      {children}
    </div>
  );
}
