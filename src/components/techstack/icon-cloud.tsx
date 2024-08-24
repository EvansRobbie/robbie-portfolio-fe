import { IconCloud } from '@/components/ui/icon-cloud';

const slugs = [
  'typescript',
  'javascript',
  'react',
  'html5',
  'css3',
  'nodedotjs',
  'express',
  'nextdotjs',
  'firebase',
  'vercel',
  'docker',
  'git',
  'jira',
  'github',
  'gitlab',
  'visualstudiocode',
  'figma',
];

export function IconCloudComponent() {
  return (
    <div className='bg-background relative flex size-full max-w-lg mt-4 items-center justify-center overflow-hidden rounded-lg px-20 pb-20 pt-8 '>
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
