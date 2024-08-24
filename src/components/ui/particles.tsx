'use client'
import { cn } from '@/lib/utils'

import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import type { Container, SingleOrMultiple } from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim";
import { useAnimation } from 'framer-motion';

const BackroundParticles = ({options}:{options:unknown}) => {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const controls = useAnimation();

  const particlesLoaded = async (container?: Container) => {
    if (container) {
      console.log(container);
      controls.start({
        opacity: 1,
        transition: {
          duration: 1,
        },
      });
    }
  };
  return (
    <Particles
          id={"tsparticles"}
     
          className={cn("h-full w-full absolute" )}
          // @ts-ignore
          loaded={particlesLoaded}
          options={options as SingleOrMultiple<any>}
        />
  )
}

export default BackroundParticles