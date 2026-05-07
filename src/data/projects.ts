export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  imagePosition?: string;
  link?: string;
  github?: string;
  category?: string;
}

export const projectsData: Project[] = [
  {
    id: "cafeteria",
    title: "Cafeteria",
    category: "Landing Page",
    description: "Landing page de uma cafeteria fictícia com design moderno, acolhedor e responsivo. Desenvolvida para apresentar o cardápio, produtos em destaque e informações do estabelecimento com uma interface atraente.",
    tags: ["HTML5", "CSS3", "JavaScript", "Vite"],
    imageUrl: "/cafeteria.png",
    imagePosition: "left top",
    link: "https://cafeteria-mocha-ten.vercel.app",
    github: "https://github.com/NicoQuei/Cafeteria",
  },
  {
    id: "eugenius",
    title: "Eugenius",
    category: "SaaS / EdTech",
    description: "Plataforma educacional gamificada com dashboard de alunos, sistema de XP e conquistas, gerenciamento de cursos e assinaturas com pagamentos integrados via AbacatePay e webhooks seguros com validação HMAC.",
    tags: ["Next.js", "Supabase", "TypeScript", "AbacatePay"],
    imageUrl: "/eugenius.png",
    imagePosition: "left top",
    link: "https://eugenius.vercel.app",
  },
  {
    id: "n2s",
    title: "N2S Group",
    category: "Landing Page",
    description: "Site institucional da N2S Group, empresa de tecnologia e soluções digitais. Desenvolvido com foco em performance, animações cinematográficas com GSAP e Framer Motion, e design responsivo de alto impacto visual.",
    tags: ["React 19", "Vite", "Tailwind CSS", "GSAP", "Framer Motion"],
    imageUrl: "/n2s.png",
    link: "https://n2sgroup.com.br",
    github: "https://github.com/naok1m/N2SDigital",
  }
];
