import React from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';
import { ScrollArea } from '../ui/scroll-area';

const ProjectDetailDialog = ({
  project,
}: {
  project: { title: string; image: string; technologies: string[], description: string, href: string };
}) => {
  return (
    <DialogContent className='md:max-w-4xl h-full'>
      <ScrollArea className=' max-h-full md:max-h-[90dvh] md:h-full overflow-auto'>

      <DialogHeader>
        <DialogTitle className='text-lg font-semibold'>{project.title}</DialogTitle>
        <Image
          src={project.image}
          alt={project.title}
          width={400}
          height={300}
          className='w-full h-auto aspect-video object-cover'
        />
      </DialogHeader>
      <div className=' space-y-2 mt-4'>

        <h2 className='text-sm font-medium'>TechStack</h2>
        <div className='space-x-2'>
          {project.technologies.map((tech, index) => (
            <Badge key={index} className='text-sm '>
              {tech}
            </Badge>
          ))}
        </div>
        <h2 className='text-sm font-medium'>About</h2>
        <DialogDescription className='text-sm text-muted-foreground'>{project.description}</DialogDescription>
      </div>
      <DialogFooter className='mt-4'>
        <Button asChild>
          <Link href={project.href} target='_blank' >Live Demo</Link>
        </Button>
      </DialogFooter>
      </ScrollArea>
    </DialogContent>
  );
};

export default ProjectDetailDialog;
