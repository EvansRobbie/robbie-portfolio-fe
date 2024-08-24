'use client'
import { useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

const AnimatedCounter = ({ value }: { value: number }) => {
  const ref = useRef<null>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    springValue.on('change', (latest) => {
      // @ts-ignore
      if (ref.current && latest.toFixed(0) <= value) {
        (ref.current as HTMLElement).textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);
  return <div className='' ref={ref}></div>;
};

export default AnimatedCounter;