export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
}

export const experienceData: Experience[] = [
  {
    id: "exp-1",
    role: "Fundador",
    company: "Minha Empresa",
    period: "2024 - Presente",
    description: "Liderança técnica e gestão de negócios. Responsável por prospectar clientes, arquitetar soluções do zero e entregar aplicações web escaláveis focadas em alta performance e UX."
  },
  {
    id: "exp-2",
    role: "Ciência da Computação",
    company: "UNIFOR",
    period: "2024 - Presente",
    description: "Graduação em andamento. Imersão em fundamentos de engenharia de software, estruturas de dados avançadas e padrões de arquitetura."
  },
  {
    id: "exp-3",
    role: "Desenvolvimento Web Full Stack",
    company: "Estudos & Projetos Autônomos",
    period: "2025 - Presente",
    description: "Desenvolvimento contínuo de skills focadas no ecossistema web moderno (React, Node.js, TypeScript), aplicando conceitos em clones e aplicações reais para fixação."
  }
];
