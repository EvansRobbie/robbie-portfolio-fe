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
  projects: [
    {
      title: 'Kai And Karo - Car Dealership',
      href: 'https://www.kaiandkaro.com/',
      dates: 'Oct 2023 - Present',
      active: true,
      description:
        'A specification for adding human and machine readable meaning to commit messages using color-rich emojis 🌈',
      technologies: ['git', 'Chakra ui', 'Typescript', 'React', 'Next.js'],
      links: [
        {
          type: 'Website',
          href: 'https://www.kaiandkaro.com/',
          icon: <Icons.smile className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707406/kai_karo_ywedyi.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724789639/Screen_Recording_2024-08-27_at_10.43.12_PM_zchetj.mov',
    },
    {
      title: 'Bridge lab - Mentorship Programs',
      href: 'https://bridgelab.africa',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Material UI'],
      links: [
        {
          type: 'Website',
          href: 'https://bridgelab.africa',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707414/bridgelab_s4azjl.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724790376/Screen_Recording_2024-08-27_at_10.37.24_PM_nwi2rn.mov',
    },
    {
      title: 'Onekitty',
      href: 'https://www.onekitty.co.ke/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Material UI'],
      links: [
        {
          type: 'Website',
          href: 'https://www.onekitty.co.ke/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707422/onekitty_tv9gjh.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724790522/Screen_Recording_2024-08-27_at_10.36.09_PM_qfpkre.mov',
    },
    {
      title: 'Pride of Kenya Awards',
      href: 'https://www.prideawards.africa/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Shadcn UI'],
      links: [
        {
          type: 'Website',
          href: 'https://www.prideawards.africa/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707421/pride_nyylhi.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724791357/Screen_Recording_2024-08-27_at_11.36.59_PM_l00koz.mov',
    },
    {
      title: 'Hoteles & Hogares - Travel and Accommodation',
      href: 'https://hoteleshogares.com/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Next i18n'],
      links: [
        {
          type: 'Website',
          href: 'https://hoteleshogares.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707426/hoteles_inplt0.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724791170/Screen_Recording_2024-08-27_at_11.34.06_PM_jhxzs0.mov',
    },
    {
      title: 'Mjengo Smart Technology',
      href: 'https://www.mjengosmart.com/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://www.mjengosmart.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707427/mjengo_euhamj.png',
      video: '',
    },
    {
      title: 'Save The Sicklers',
      href: 'https://savethesicklers.org/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS', 'Graphql'],
      links: [
        {
          type: 'Website',
          href: 'https://savethesicklers.org/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707407/sicklers_oaubcw.png',
      video: '',
    },
    {
      title: 'Farmers Master Class',
      href: 'https://farmers-master-class-fe.vercel.app/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Fusion UI library combining Shadcn/UI and MagicUI. Featuring 150+ free and open-source components built with React, Typescript, Tailwind CSS, and Framer Motion. Create stunning, responsive interfaces effortlessly. 100% open-source.',
      technologies: ['Next.js', 'Typescript', 'TailwindCSS'],
      links: [
        {
          type: 'Website',
          href: 'https://farmers-master-class-fe.vercel.app/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707411/farmers_u9nbnd.png',
      video: '',
    },
    {
      title: 'More Projects - portfolio',
      href: 'https://evanrobbymacharia.netlify.app/',
      dates: '',
      active: true,
      description: 'Explore many more projects here.',
      technologies: [
        'React',
        'Next.js',
        'Typescript',
        'TailwindCSS',
        'Directus',
        'Shadcn UI',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://evanrobbymacharia.netlify.app/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          href: '',
          icon: <Icons.github className='size-3' />,
        },
      ],
      image:
        'https://res.cloudinary.com/dqg83cf9f/image/upload/v1724707400/portfolio_gurn1s.png',
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724790931/Screen_Recording_2024-08-27_at_10.45.11_PM_vvrsqx.mov',
    },
  ],
};
