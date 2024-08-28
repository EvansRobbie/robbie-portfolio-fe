'use client';
import { VideoModal, VideoModalTrigger } from '@/components/ui/video-dialog';
import { cn } from '@/lib/utils';
import { EyeOpenIcon, VideoIcon } from '@radix-ui/react-icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import ProjectDetailDialog from '../projects/project-detail-dialog';
import { Button } from '../ui/button';
import { Dialog, DialogOverlay, DialogTrigger } from '../ui/dialog';
import VideoDetail from '../projects/video-detail';

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
        whileTap={'hover'}
        variants={containerVariants}
        className='absolute inset-0 right-6 z-10 flex flex-col items-end gap-2 justify-center'
      >
        <Dialog>
          <DialogTrigger asChild>
            <motion.div variants={buttonVariants}>
              <Button className='rounded-full' size={'icon'}>
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
                <Button className='rounded-full' size={'icon'}>
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
