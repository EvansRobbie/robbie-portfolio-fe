import React from 'react';
import { DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '../ui/dialog';
import Image from 'next/image';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import Link from 'next/link';

const ProjectDetailDialog = ({
  project,
}: {
  project: { title: string; image: string; technologies: string[], description: string, href: string };
}) => {
  return (
    <DialogContent className='md:max-w-4xl'>
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
      <DialogFooter>
        <Button asChild>
          <Link href={project.href} target='_blank' >Live Demo</Link>
        </Button>
      </DialogFooter>
    </DialogContent>
  );
};

export default ProjectDetailDialog;
