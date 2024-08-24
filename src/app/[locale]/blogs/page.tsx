import { largeParticles, smallParticles } from '@/_data/particle-options';
import BackroundParticles from '@/components/ui/particles';
import React from 'react';

const page = () => {
  return (
    <div className='relative'>
      <BackroundParticles options={smallParticles} />
    </div>
  );
};

export default page;
