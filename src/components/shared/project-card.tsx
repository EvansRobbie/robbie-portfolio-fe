'use client';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';
import { AnimatePresence, motion, useMotionValue } from 'framer-motion';
import { Button } from '../ui/button';
import { EyeIcon } from 'lucide-react';
import { EyeOpenIcon, ImageIcon, SunIcon } from '@radix-ui/react-icons';

const ProjectCard = ({ project }: { project: any }) => {
  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.2, // Stagger time between buttons
      },
    },
   
    
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 }, // Hidden state
    hover: { opacity: 1, y: 0 }, 

  };
  return (
    <div className={cn('overflow-hidden relative ')}>
      <Image
        data-loaded='false'
        onLoad={(event) => {
          event.currentTarget.setAttribute('data-loaded', 'true');
        }}
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className='w-full aspect-video object-cover object-center h-[35dvh] border rounded-xl transition-all hover:scale-105 duration-200 ease-in-out hover:brightness-50  data-[loaded=false]:animate-pulse data-[loaded=false]:blur-md'
      />
      <motion.div
        initial='initial'
        animate='initial'
        whileHover='hover'
        variants={containerVariants}
        className='absolute inset-0 right-6 z-10 flex flex-col items-end gap-2 justify-center'
      >
        <motion.div variants={buttonVariants}>
          <Button className='rounded-full' size={'icon'}>
            <EyeOpenIcon />
          </Button>
        </motion.div>
        <motion.div variants={buttonVariants}>
          <Button className='rounded-full' size={'icon'}>
            <EyeOpenIcon />
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;
