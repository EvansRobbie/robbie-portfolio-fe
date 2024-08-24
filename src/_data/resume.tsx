import { Icons } from '@/components/shared/icons';
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react';
export const DATA = {
  navbar: [
    { href: '/', icon: HomeIcon, label: 'Home' },
    { href: '/blogs', icon: NotebookIcon, label: 'Blog' },
    { href: '#projects', icon: CodeIcon, label: 'Projects' },
    { href: '#contact', icon: PencilLine, label: 'Contact' },
  ],
  contact: {
    email: 'evansrobbie5311@gmail.com',
    tel: '+254704563123',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://github.com/EvansRobbie',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/evansrobbymacharia/',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://x.com/e_robbievans',
        icon: Icons.x,

        navbar: true,
      },
      Youtube: {
        name: 'Instagram',
        url: 'https://www.instagram.com/r.o.b.b.i.e_vans/',
        icon: Icons.youtube,
        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  work: [
    {
      company: 'Freelancer',
      href: 'https://robbie-portfolio-fe.vercel.app/',
      badges: [],
      location: 'Remote',
      title: 'Frontend (React) Developer',
      logoUrl: '/me.png',
      start: 'Mar 2022',
      end: 'Present',
      description:
        'Developed responsive and user-friendly web applications using React and Next.js, ensuring high performance and seamless functionality on various projects.',
    },
    {
      company: 'Mjengo Smart Technology',
      href: 'https://www.mjengosmart.com/',
      badges: [],
      location: 'Remote',
      title: 'React (Intern) Developer',
      logoUrl: '/me.png',
      start: 'Mar 2023',
      end: 'May 2023',
      description:
        'Specialized in developing dynamic web applications with Tailwind,  React, and Next. Also Developed optimized and perfomant code by applying best practices and following industry standards, resulting in improved application performance and user expreience.',
    },
  ],
  education: [
    {
      school: 'Modcom Institute of Technology',
      href: 'https://modcom.co.ke/',
      degree: 'Certification in Softaware Development',
      logoUrl: '/udacity.png',
      start: '2020',
      end: '2021',
    },
    {
      school: 'Multimedia University of Kenya',
      href: 'https://www.mmu.ac.ke/',
      degree: 'Bachelor of Science in Information Technology',
      logoUrl: '/abitur.png',
      start: '2017',
      end: '2020',
    },
  ],
  skills: {
    mostlyUsed: [
      'Next.js',
      'React',
      'Typescript',
      'Javacript',
      'Tailwind-CSS',
      'Framer-Motion',
      'HTML',
      'CSS',
      'Git',
      'VsCode',
    ],
    other: [
      'Django',
      'Express.js',
      'Node JS',
      'GraphQL',
      'MongoDB',
      'Figma',
      'Directus',
    ],
  },
};
