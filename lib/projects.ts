export type Technology = 'Figma' | 'Framer' | 'Webflow' | 'React' | 'Next.js' | 'TypeScript' | 'TailwindCSS' | 'Node.js';

export type Project = {
  id: string;
  name: string;
  description: string;
  year: number;
  turnaround: string;
  deliverables: string[];
  stack: Technology[];
  images: {
    url: string;
    alt: string;
  }[];
  slug: string;
};

export const projects: Project[] = [
  {
    id: '1',
    name: 'Clearspace',
    description: "Clearspace helps people reclaim their attention and fight screen addiction. Soren invested in Clearspace in early 2023. Since then, he's partnered with the team on the design, product strategy, positioning, and marketing of their product.",
    year: 2023,
    turnaround: '6 months',
    deliverables: [
      'Product Design',
      'Ongoing Advising'
    ],
    stack: ['Figma', 'React', 'TypeScript', 'Node.js'],
    images: [
      {
        url: 'https://cdn.hack.pet/U03RG1Y7HNW/screencapture-connectmego-app-dashboard-2025-03-10-13_31_49.png',
        alt: 'Clearspace app hero image'
      },
      {
        url: '/projects/clearspace/screen1.png',
        alt: 'Clearspace app screen showing daily tracking'
      },
      {
        url: '/projects/clearspace/screen2.png',
        alt: 'Clearspace app screen showing app blocking'
      }
    ],
    slug: 'clearspace'
  },
  {
    id: '2',
    name: 'Wavelength',
    description: 'A modern music collaboration platform that helps musicians create, share and collaborate on tracks in real-time.',
    year: 2023,
    turnaround: '4 months',
    deliverables: [
      'UX/UI Design',
      'Brand Identity',
      'Frontend Development'
    ],
    stack: ['Figma', 'Next.js', 'TailwindCSS', 'TypeScript'],
    images: [
      {
        url: 'https://framerusercontent.com/images/lsa4fQSlvkQw4ed2wtHOKDI5FqU.jpg',
        alt: 'Wavelength platform hero image'
      },
      {
        url: '/projects/wavelength/interface.png',
        alt: 'Wavelength main interface'
      }
    ],
    slug: 'wavelength'
  },
  {
    id: '3',
    name: 'Mindscape',
    description: 'An AI-powered journaling app that helps users track their mental health and emotional well-being through guided reflection.',
    year: 2024,
    turnaround: '3 months',
    deliverables: [
      'Product Strategy',
      'UI Design',
      'Development'
    ],
    stack: ['Figma', 'Framer', 'React', 'TypeScript'],
    images: [
      {
        url: 'https://framerusercontent.com/images/lsa4fQSlvkQw4ed2wtHOKDI5FqU.jpg',
        alt: 'Mindscape app hero image'
      },
      {
        url: '/projects/mindscape/dashboard.png',
        alt: 'Mindscape dashboard view'
      }
    ],
    slug: 'mindscape'
  },
  {
    id: '4',
    name: 'Omelora',
    description: 'An AI-powered journaling app that helps users track their mental health and emotional well-being through guided reflection.',
    year: 2024,
    turnaround: '3 months',
    deliverables: [
      'Product Strategy',
      'UI Design',
      'Development'
    ],
    stack: ['Figma', 'Framer', 'React', 'TypeScript'],
    images: [
      {
        url: 'https://framerusercontent.com/images/lsa4fQSlvkQw4ed2wtHOKDI5FqU.jpg',
        alt: 'Mindscape app hero image'
      },
      {
        url: '/projects/mindscape/dashboard.png',
        alt: 'Mindscape dashboard view'
      }
    ],
    slug: 'mindscape'
  }
]; 