import Link from 'next/link';
import React from 'react';
import ContactButton from './contact-button';

const Footer = () => {
  return (
    <footer className='z-50 opacity-100 pb-10 relative px-4'>
      <div className='flex w-full justify-between'>
        <div className='flex flex-col-reverse md:flex-row gap-3 items-center justify-between pb-8 mb-'>
          <div className='text-sm text-[#787878]'>
            {`© ${new Date().getFullYear()}. All rights reserved.`}
          </div>
          <p className='text-sm  font-semibold  text-[#787878] flex items-center justify-center'>
            Made with{' '}
            <span className=' text-red-600 text-xl px-1 animate-pulse'>
              &#x2764;
            </span>{' '}
            by{' '}
            <Link
              href='/'
              target='_blank'
              className='px-1 underline underline-offset-2 duration-500 transition-all hover:text-gold'
            >
              Evanrobby Macharia
            </Link>
          </p>
        </div>
        <ContactButton/>
      </div>
    </footer>
  );
};

export default Footer;
