
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
}