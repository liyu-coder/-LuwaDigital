import type { Skill, Project, ExperienceItem } from './types';
import { Code, Server, Database, Cloud, TabletSmartphone, Bot, GitBranch, Terminal } from 'lucide-react';
import ecom from '@/e-com.jpg';
import miki from '@/mikita.png';
import tsi from '@/tsidu.jpg';
import chat from '@/chatapp.png';


export const SKILLS: Skill[] = [
  { name: 'React', icon: Code },
  { name: 'TypeScript', icon: Code },
  { name: 'Node.js', icon: Server },
  { name: 'Tailwind CSS', icon: Code },
  { name: 'PostgreSQL', icon: Database },
  { name: 'MongoDB', icon: Database },
  { name: 'Docker', icon: Bot },
  { name: 'AWS', icon: Cloud },
  { name: 'React Native', icon: TabletSmartphone },
  { name: 'GraphQL', icon: Server },
  { name: 'Git', icon: GitBranch },
  { name: 'CI/CD', icon: Terminal },
];

export const PROJECTS: Project[] = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce site with product catalogs, user authentication, and a Stripe-integrated checkout process. Built with a robust MERN stack.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
   imageUrl: ecom,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Real-Time Chat Application',
    description: 'A responsive chat app using WebSockets for instant messaging. Features include private messaging, group chats, and online status indicators.',
    tags: ['React', 'TypeScript', 'Socket.IO', 'Tailwind CSS'],
    imageUrl: chat,
    liveUrl: '#',
    repoUrl: '#',
  },
  {
    title: 'Tsidu Solid Waste Management System',
    description: 'A smart platform for efficient waste collection and tracking.Enables real-time monitoring and data-driven management.',
    tags: ['React', 'Node.js', 'MongoDB', 'Firebase','TypeScript'],
    imageUrl: tsi,
    liveUrl: '#',
    repoUrl: '#',
  },
   {
    title: 'Mikita Coffee & Ice Cream Café',
    description: 'A sleek web app for a local café featuring menu, orders, gallery, and story pages.Built with React, Node.js, and Tailwind CSS for a smooth user experience.',
    tags: ['Node.js', 'Express', 'PostgreSQL', 'JWT'],
    imageUrl: miki,
    repoUrl: '#',
  },
];

export const EXPERIENCE: ExperienceItem[] = [
    {
        role: ' Remote Full-Stack Development Expert',
        company: 'Independent Contractor / Freelance',
        date: ' March 2025- Present',
        description: ['Independently developed and delivered scalable web applications for clients, architecting robust solutions that support large user bases.',
        'Designed and implemented efficient backend systems, optimizing client project performance and streamlining deployment workflows.',
        'Ensured high code quality and best practices for client projects, fostering maintainable and scalable architectures.']
    },
    {
        role: 'Junior Officer',
        company: 'Siinqee Bank',
        date: 'December 2023 - March 2025',
        description: [
            'Developed and maintained client-side features for a SaaS platform using React and Redux.',
            'Collaborated with UX/UI designers to translate wireframes into responsive and accessible user interfaces.',
            'Contributed to the development of RESTful APIs and optimized database queries for performance.'
        ]
    },
    {
        role: 'Junior Web Developer',
        company: 'Bright Computer Union',
        date: 'August 2023 - December 2023',
        description: [
            'Supported development of custom WordPress websites for local clients.',
            'Gained foundational experience in HTML, CSS, JavaScript, and PHP.',
            'Participated in daily stand-ups and agile development processes.'
        ]
    }
];
