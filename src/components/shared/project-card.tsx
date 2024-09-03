'use client';
import { DATA } from '@/_data/resume';
import { VideoModal, VideoModalTrigger } from '@/components/ui/video-dialog';
import { cn } from '@/lib/utils';
import { EyeOpenIcon, VideoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import ProjectDetailDialog from '../projects/project-detail-dialog';
import VideoDetail from '../projects/video-detail';
import { Button } from '../ui/button';
import { Dialog, DialogOverlay, DialogTrigger } from '../ui/dialog';

const ProjectCard = ({ project }: { project: any }) => {
  const [isClicked, setIsClicked] = useState(false);
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
    clicked: { opacity: 1, y: 0 }, // Visible when clicked
  };

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className={cn('overflow-hidden relative ')} onClick={handleClick}>
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
        className='w-full aspect-video object-cover object-center h-[35dvh] border rounded-xl transition-all hover:scale-105 duration-200 ease-in-out hover:brightness-50  data-[loaded=false]:animate-pulse data-[loaded=false]:blur-md'
      />
      <motion.div
        initial='initial'
        animate={isClicked ? 'clicked' : 'initial'}
        whileHover='hover'
        whileTap={'hover'}
        variants={containerVariants}
        className='absolute inset-0 right-6 z-10 flex flex-col items-end gap-2 justify-center'
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
    </div>
  );
};

export default ProjectCard;
