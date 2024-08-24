
import { Icons } from '@/components/shared/icons'
import { CodeIcon, HomeIcon, NotebookIcon, PencilLine } from 'lucide-react'
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
      company: 'Nyxb Digital Solutions',
      href: 'https://nyxb.nexus',
      badges: [],
      location: 'Remote',
      title: 'Full Stack Developer',
      logoUrl: '/me.png',
      start: 'Mar 2013',
      end: 'Jun 2022',
      description:
     'Specialized in developing dynamic web applications with Vue, Nuxt, React, and Next. Also experienced in creating cross-platform mobile apps with React Native and desktop applications with Tauri. Active in the open-source community, contributing to various projects.',
   },
],
education: [
   {
      school: 'Extensive Online Coursework',
      href: 'https://www.udacity.com/?promo=year_end&coupon=JULY4&utm_source=gsem_brand&utm_medium=ads_r&utm_campaign=12907755074_c_individuals&utm_term=124133496400&utm_keyword=udacity_e&gad_source=1',
      degree: '',
      logoUrl: '/udacity.png',
      start: '2012',
      end: '2023',
   },
   {
      school: 'Abitur - University Entrance Qualification',
      href: 'https://en.wikipedia.org/wiki/Hamburg',
      degree: 'German High School Diploma (Abitur) from Hamburg',
      logoUrl: '/abitur.png',
      start: '2012',
      end: '2013',
   },
],
}