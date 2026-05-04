export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  iconName: string;
  technologies: string[];
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Ciência da Computação",
    company: "UNIFOR",
    period: "2024",
    description: "Início da minha jornada acadêmica e na programação. Durante este ano foquei nos fundamentos de desenvolvimento, lógica e domínio inicial de linguagens essenciais.",
    iconName: "GraduationCap",
    technologies: ["Java", "JavaScript", "HTML"]
  },
  {
    id: "exp-2",
    role: "Estudos Full Stack",
    company: "Autodidata",
    period: "2025",
    description: "Evolução para o desenvolvimento completo de aplicações web. Aprofundamento no ecossistema moderno de front-end e estruturação de servidores e bancos de dados.",
    iconName: "Code",
    technologies: ["React", "CSS", "Node.js", "SQL"]
  },
  {
    id: "exp-3",
    role: "Fundador",
    company: "Minha Empresa",
    period: "2025",
    description: "Fundação da minha própria empresa focada na criação e entrega de soluções digitais. Liderança técnica e gestão de negócios ponta a ponta.",
    iconName: "Briefcase",
    technologies: []
  },
  {
    id: "exp-4",
    role: "Aplicações Web & Inteligência Artificial",
    company: "Foco Atual",
    period: "2026 - Presente",
    description: "Exploração avançada de arquiteturas de software integradas com LLMs. Focado em embutir Agentes Autônomos no Front-end para otimizar processos e criar interfaces inteligentes e reativas.",
    iconName: "Bot",
    technologies: ["Agentes de IA", "Generative UI", "Integração LLM"]
  }
];
