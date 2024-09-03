'use client';
import { DATA } from '@/_data/resume';
import { VideoModal, VideoModalTrigger } from '@/components/ui/video-dialog';
import { cn } from '@/lib/utils';
import { EyeOpenIcon, VideoIcon } from '@radix-ui/react-icons';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef, useState } from 'react';
import ProjectDetailDialog from '../projects/project-detail-dialog';
import VideoDetail from '../projects/video-detail';
import { Button } from '../ui/button';
import { Dialog, DialogOverlay, DialogTrigger } from '../ui/dialog';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const ProjectCard = ({ project }: { project: any }) => {
  const [isClicked, setIsClicked] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['0 1', '1.33 1'],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const containerVariants = {
    initial: {},
    hover: {
      transition: {
        staggerChildren: 0.2, // Stagger time between buttons
      },
    },
    clicked: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 0.95, y: -40 },
    clicked: { scale: 0.95, y: -40 },
  };

  const buttonVariants = {
    initial: { opacity: 0, y: 20 }, // Hidden state
    hover: { opacity: 1, y: 0 },
    clicked: { opacity: 1, y: 0 }, // Visible when clicked
  };

  const titleVariants = {
    initial: { y: 20, opacity: 0 },
    hover: { y: -27, opacity: 1, scale: 0.95 },
    clicked: { y: -27, opacity: 1, scale: 0.95 },
  };

  return (
    <motion.div
      ref={ref}
      initial='initial'
      animate={isClicked ? 'clicked' : 'initial'}
      whileHover='hover'
      onClick={handleClick}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className={cn('overflow-hidden relative group')}
      variants={containerVariants}
    >
      <motion.div
        transition={{ duration: 0.5, delay: 0.2, ease: 'easeInOut' }}
        variants={imageVariants}
        className='relative'
      >
        <Image
          data-loaded='false'
          onLoad={(event) => {
            event.currentTarget.setAttribute('data-loaded', 'true');
          }}
          placeholder='blur'
          blurDataURL={DATA.blurredDataUrl}
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className='w-full aspect-video object-cover object-center h-[35dvh] border rounded-xl transition-all duration-200 ease-in-out data-[loaded=false]:animate-pulse data-[loaded=false]:blur-md'
        />
        <Avatar className='absolute top-4 left-4 w-14 h-14 rounded-full bg-black/50 backdrop-filter shadow-2xl'>
          <AvatarImage
            src={project.logo}
            alt={project.title}
            className=' shadow-2xl'
          />
          <AvatarFallback className='bg-transparent text-black'>
            {project.title[0]}
          </AvatarFallback>
        </Avatar>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className='absolute inset-0 right-6 z-20 flex flex-col items-end gap-2 justify-center'
      >
        <Dialog>
          <DialogTrigger asChild>
            <motion.div variants={buttonVariants}>
              <Button className='rounded-full shadow-md' size={'icon'}>
                <EyeOpenIcon />
              </Button>
            </motion.div>
          </DialogTrigger>
          <DialogOverlay />
          <ProjectDetailDialog project={project} />
        </Dialog>
        <VideoModal>
          <VideoModalTrigger asChild>
            {project.video && (
              <motion.div variants={buttonVariants}>
                <Button className='rounded-full shadow-md' size={'icon'}>
                  <VideoIcon />
                </Button>
              </motion.div>
            )}
          </VideoModalTrigger>
          <VideoDetail project={project} />
        </VideoModal>
      </motion.div>

      <motion.div
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        variants={titleVariants}
        className='absolute bottom-4 flex items-center left-0 w-full p-4 h-32  mx-auto  text-foreground z-10 bg-gradient-to-b from-transparent  via-background/50 to-[rgba(173,109,244,0.5)] rounded-b-xl justify-center bg-opacity-50 backdrop-blur backdrop-filter'
      >
        <h3 className='text-lg font-semibold text-center'>{project.title}</h3>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;
