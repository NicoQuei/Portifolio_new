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
    id: "auto-elite",
    title: "Auto Elite",
    category: "Web App",
    description: "Sistema completo de concessionária de veículos premium com catálogo interativo, filtros avançados, comparador de carros, calculadora de financiamento e atendimento via chatbot com Inteligência Artificial integrada ao Google Gemini.",
    tags: ["React 18", "Vite", "Tailwind CSS", "Gemini AI"],
    imageUrl: "/auto-elite.png",
    imagePosition: "left top",
    link: "https://auto-elite-cars.vercel.app/",
    github: "https://github.com/NicoQuei/Auto-Elite",
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
