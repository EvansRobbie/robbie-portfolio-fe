import { Icons } from '@/components/shared/icons';
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react';
export const DATA = {
  name: 'Evanrobby Macharia',
  url: 'https://robbie-portfolio-fe.vercel.app',
  description:
    'I am a Frontend Developer dedicated to building exceptional digital experiences. My focus is on creating responsive and dynamic frontend applications that deliver seamless and engaging user interactions.',
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
      title: 'Frontend Developer',
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
      title: 'Frontend (Intern) Developer',
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
        'Kai and Karo is a sleek, modern car dealership website designed to offer a seamless online experience for customers looking to buy or explore vehicles. The platform features a user-friendly interface with intuitive navigation, allowing users to easily browse through a wide range of cars, view detailed specifications, and compare different models.',
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
        'Bridgelab Mentorship Programs is a dynamic platform dedicated to connecting aspiring professionals with experienced mentors in various fields. The website serves as a hub for mentorship, offering personalized guidance and support to help mentees achieve their career goals. It features a robust matching algorithm that pairs mentees with mentors based on their interests, goals, and professional backgrounds. The platform also includes tools for scheduling sessions, tracking progress, and providing feedback, ensuring that both mentors and mentees have a structured and productive experience. Bridgelab aims to foster a community of continuous learning and professional development through its mentorship programs.',
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
      title: 'Onekitty - Contribution Platform',
      href: 'https://www.onekitty.co.ke/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'OneKitty is a streamlined platform designed to facilitate and manage contributions for various causes. It allows users to easily donate or support projects, track their contributions, and engage with the community. The platform offers a simple interface for browsing and contributing to initiatives, ensuring a seamless and impactful experience for both contributors and project organizers.',
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
        'Pride of Kenya Awards is a dynamic platform where young artists and content creators across Kenya can showcase their talents and gain recognition. It allows users to vote for their favorite nominees in various categories, fostering a supportive community and celebrating emerging talent.',
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
        'Hoteles & Hogares is a comprehensive accommodation and travel platform designed to simplify your travel planning. It offers a curated selection of hotels, vacation rentals, and unique stays, catering to diverse preferences and budgets.',
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
        'Mjengo Smart Technology is an innovative platform dedicated to modernizing the construction industry through smart solutions. It offers a range of cutting-edge tools and technologies designed to streamline building processes, enhance efficiency, and ensure quality. From smart project management systems to real-time data analytics and automated construction processes, Mjengo Smart Technology aims to revolutionize the way construction projects are managed and executed, driving progress and precision in the industry.',
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
        'Save the Sicklers is a campaign dedicated to raising awareness about sickle cell disease. The initiative focuses on educating the public about the condition, its impact, and the importance of early diagnosis and management.',
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
      video:
        'https://res.cloudinary.com/dqg83cf9f/video/upload/v1724791838/Screen_Recording_2024-08-27_at_11.39.24_PM_n5lbkj.mov',
    },
    {
      title: 'Farmers Master Class',
      href: 'https://farmers-master-class-fe.vercel.app/',
      dates: 'June 2023 - Present',
      active: true,
      description:
        'Farmers Master Class is an educational platform designed to enhance agricultural knowledge and skills among farmers. The platform aims to empower farmers with the tools and insights needed to increase productivity, improve profitability, and adapt to evolving agricultural trends',
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
      description:
        'EDiscover additional projects from my previous portfolio to see a broader range of my work',
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
