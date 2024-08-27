'use client'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import React from 'react';

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <div className={cn('overflow-hidden ')}>
      <Image
       data-loaded="false"
       onLoad={(event) => {
         event.currentTarget.setAttribute("data-loaded", "true");
       }}
        src={project.image}
        alt={project.title}
        width={400}
        height={300}
        className='w-full aspect-video object-cover object-center h-[35dvh] border rounded-xl brightness-90 transition-all hover:scale-105 duration-200 ease-in-out hover:brightness-100  data-[loaded=false]:animate-pulse data-[loaded=false]:blur-md'
      />
    </div>
  );
};

export default ProjectCard;
