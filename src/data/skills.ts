import { Code2, Server, type LucideIcon } from 'lucide-react';

export type SkillSide = 'frontend' | 'backend';

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  id: SkillSide;
  label: string;
  title: string;
  description: string;
  icon: LucideIcon;
  colors: {
    gradient: string;
    bar: string;
    text: string;
    border: string;
    glowRgba: string;
  };
  skills: Skill[];
}

export const skillsData: Record<SkillSide, SkillCategory> = {
  frontend: {
    id: 'frontend',
    label: 'Frontend',
    title: 'Interfaces & Experiência',
    description:
      'Construo interfaces responsivas em React e TypeScript, com foco em performance, acessibilidade e fluidez na interação.',
    icon: Code2,
    colors: {
      gradient: 'from-sky-500 to-indigo-900',
      bar: 'bg-sky-500',
      text: 'text-sky-400',
      border: 'border-sky-500/40',
      glowRgba: '14, 165, 233',
    },
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Tailwind CSS', level: 95 },
      { name: 'JavaScript', level: 95 },
      { name: 'HTML/CSS', level: 98 },
      { name: 'Vue.js', level: 78 },
      { name: 'Figma', level: 70 },
    ],
  },
  backend: {
    id: 'backend',
    label: 'Backend',
    title: 'APIs & Infraestrutura',
    description:
      'Desenvolvo APIs em Node.js, modelo bancos relacionais e cuido da arquitetura por trás das aplicações.',
    icon: Server,
    colors: {
      gradient: 'from-emerald-500 to-teal-900',
      bar: 'bg-emerald-500',
      text: 'text-emerald-400',
      border: 'border-emerald-500/40',
      glowRgba: '16, 185, 129',
    },
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'REST APIs', level: 92 },
      { name: 'PostgreSQL', level: 85 },
      { name: 'MySQL', level: 85 },
      { name: 'WebSockets', level: 82 },
      { name: 'Firebase', level: 80 },
      { name: 'Java', level: 75 },
      { name: 'Docker', level: 70 },
    ],
  },
};
