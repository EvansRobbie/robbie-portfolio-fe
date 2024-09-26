'use client';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { useOnClickOutside } from 'usehooks-ts';
import { buttonVariants } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Spinner } from './spinner';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef(null);
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  useOnClickOutside(ref, () => setIsOpen(false));
  const [formState, setFormState] = useState<
    'idle' | 'success' | 'loading' | 'error'
  >('idle');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!message) return;
    setFormState('loading');
    try {
      const res = await fetch('/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message }),
      });
      if (!res.ok) {
        throw new Error('Failed to send message');
      }
      setTimeout(() => {
        setFormState('success');
      }, 1500);

      setTimeout(() => {
        setIsOpen(false);
      }, 3300);
    } catch (err) {
      console.log(err);
      setTimeout(() => {
        setFormState('error');
      }, 1500);

      // setTimeout(() => {
      //   setIsOpen(false);
      // }, 3300);
    } finally {
      setFormState('idle');
    }
  }

  return (
    <div className='!relative w-full md:w-[40%] flex justify-end '>
      <motion.button
        layoutId='contact-button'
        style={{ borderRadius: '8px' }}
        className={cn(
          buttonVariants({ variant: 'outline', size: 'lg' }),
          '  backdrop-blur justify-end flex !relative    '
        )}
        onClick={() => {
          setIsOpen(!isOpen);
          setFormState('idle');
        }}
      >
        <motion.span layoutId='placeholder'>Contact Me</motion.span>
      </motion.button>
      {isOpen && (
        <motion.div
          layoutId='contact-button'
          className='absolute inset-0 z-50 -top-64 md:-top-60 space-y-4 flex flex-col items-end  bg-background shadow-lg px-4 pt-6 border w-full '
          ref={ref}
          style={{ borderRadius: '12px' }}
        >
          <AnimatePresence>
            <motion.span
              aria-hidden
              className='absolute left-[28px] top-[100px] text-foreground/50 data-[feedback="true"]:!opacity-0 z-10'
              initial={{ opacity: 0 }}
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
              layoutId='placeholder'
              data-success={formState === 'success' ? 'true' : 'false'}
              data-feedback={message ? 'true' : 'false'}
            >
              Contact Me
            </motion.span>
          </AnimatePresence>
          <AnimatePresence mode='wait'>
            {formState === 'success' || formState === 'error' ? (
              <motion.div
                key='success'
                initial={{ y: -32, opacity: 0, filter: 'blur(4px)' }}
                animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                className={cn(
                  'w-full relative bg-background  flex items-center justify-center flex-col h-full'
                )}
              >
                <motion.div
                  layoutId='bg-blur'
                  initial={{ opacity: 0, filter: 'blur(4px)' }}
                  animate={{ opacity: 0.5, filter: 'blur(100px)' }}
                  transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                  className='absolute bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'
                ></motion.div>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z'
                    fill='#2090FF'
                    fillOpacity='0.16'
                  />
                  <path
                    d='M12.1334 16.9667L15.0334 19.8667L19.8667 13.1M27.6 16C27.6 17.5234 27.3 19.0318 26.717 20.4392C26.1341 21.8465 25.2796 23.1253 24.2025 24.2025C23.1253 25.2796 21.8465 26.1341 20.4392 26.717C19.0318 27.3 17.5234 27.6 16 27.6C14.4767 27.6 12.9683 27.3 11.5609 26.717C10.1535 26.1341 8.87475 25.2796 7.79759 24.2025C6.72043 23.1253 5.86598 21.8465 5.28302 20.4392C4.70007 19.0318 4.40002 17.5234 4.40002 16C4.40002 12.9235 5.62216 9.97301 7.79759 7.79759C9.97301 5.62216 12.9235 4.40002 16 4.40002C19.0765 4.40002 22.027 5.62216 24.2025 7.79759C26.3779 9.97301 27.6 12.9235 27.6 16Z'
                    stroke='#2090FF'
                    strokeWidth='2.4'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
                {formState === 'success' && (
                  <>
                    <h3>Message received!</h3>
                    <p>
                      Thanks for contacting me, I&apos;ll get back to you soon.
                    </p>
                  </>
                )}
                {formState === 'error' && (
                  <>
                    <h3 className='text-destructive'>Something went wrong</h3>
                    <p>Please try again later.</p>
                  </>
                )}
              </motion.div>
            ) : (
              <motion.form
                key={'form'}
                exit={{ y: 8, opacity: 0, filter: 'blur(4px)' }}
                transition={{ type: 'spring', duration: 0.4, bounce: 0 }}
                className='w-full space-y-4 flex flex-col items-end '
                onSubmit={onSubmit}
              >
                <div className='flex flex-col gap-4 relative w-full'>
                  <motion.div
                    initial={{ opacity: 0, filter: 'blur(4px)' }}
                    animate={{ opacity: 0.5, filter: 'blur(100px)' }}
                    layoutId='bg-blur'
                    className='absolute bottom-auto left-auto right-0 top-0 h-[200px] w-[200px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]'
                  ></motion.div>
                  <Input
                    placeholder='Email'
                    type='email'
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Textarea
                    placeholder='Message'
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className=' resize-none min-h-32'
                  />
                </div>

                <button
                  type='submit'
                  className={cn(
                    buttonVariants({ variant: 'outline', size: 'lg' }),
                    '  backdrop-blur bg-black/30 dark:bg-transparent justify-center flex h10 max-w-fit min-w-[200px]    '
                  )}
                >
                  <AnimatePresence mode='wait' initial={false}>
                    <motion.span
                      transition={{
                        type: 'spring',
                        duration: 0.3,
                        bounce: 0,
                      }}
                      initial={{ opacity: 0, y: -25 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 25 }}
                      key={formState}
                    >
                      {formState === 'loading' ? (
                        <Spinner size={14} color='rgba(255, 255, 255, 0.65)' />
                      ) : (
                        <span className='text-foreground-primary'>
                          Send me a message
                        </span>
                      )}
                    </motion.span>
                  </AnimatePresence>
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </div>
  );
};

export default ContactButton;
