import React from 'react';
import {
  VideoModal,
  VideoModalContent,
  VideoModalDescription,
  VideoModalTitle,
  VideoModalTrigger,
  VideoModalVideo,
  VideoPlayButton,
  VideoPlayer,
  VideoPreview,
} from '@/components/ui/video-dialog';
import { PlayCircle } from 'lucide-react';
import Image from 'next/image';

const VideoDetail = ({
  project,
}: {
  project: {
    title: string;
    image: string;
    technologies: string[];
    description: string;
    href: string;
    video: string;
  };
}) => {
  return (
    <VideoModalContent>
      <VideoModalTitle>Modal Video Demo</VideoModalTitle>
      <VideoModalDescription>
        Your subtitle or description here
      </VideoModalDescription>
      <VideoModalVideo>
        <VideoPlayer>
          <VideoPreview>
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={300}
              className='w-full h-auto aspect-video object-cover'
            />
          </VideoPreview>
          <VideoPlayButton>
            <button className='absolute inset-0 m-auto flex size-32 items-center justify-center rounded-full border border-white border-white/10 bg-white/50 transition duration-300 hover:bg-white/75'>
              <PlayCircle className='size-20 stroke-1 text-white' />
            </button>
          </VideoPlayButton>
          <iframe
            className='size-full'
            src={project.video}
            allow='accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;'
            allowFullScreen
          />
        </VideoPlayer>
      </VideoModalVideo>
    </VideoModalContent>
  );
};

export default VideoDetail;
