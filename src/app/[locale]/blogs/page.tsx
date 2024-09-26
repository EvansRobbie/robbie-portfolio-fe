import { largeParticles, smallParticles } from '@/_data/particle-options';
import BackroundParticles from '@/components/ui/particles';
import React from 'react';

const blogs = () => {
  return (
    <div className='relative min-h-screen '>
      <BackroundParticles options={smallParticles} />
    </div>
  );
};

export default blogs;
