export type Shot = {
  src: string;
  alt: string;
};

export type Project = {
  slug: string;
  // shown first, as a full-width card
  featured?: boolean;
  name: string;
  year: string;
  context: string;
  summary: string;
  tags: string[];
  links: { label: string; href: string }[];
  // "desktop" shows one wide screenshot, "mobile" shows phone screenshots side by side,
  // "discord" renders the SantosBOT preview
  cover: { kind: "desktop"; shot: Shot } | { kind: "mobile"; shots: Shot[] } | { kind: "discord" };
};

export const projects: Project[] = [
  {
    slug: "app-eventos",
    name: "App Eventos IFSP",
    year: "2025",
    context: "Projeto em equipe · IFSP Cubatão",
    summary:
      "Sistema para o campus divulgar e organizar eventos: o organizador cadastra palestras, minicursos e oficinas, define vagas e horas complementares, e os alunos se inscrevem.",
    tags: ["Next.js", "Tailwind", "Node.js", "Express", "Prisma", "PostgreSQL"],
    links: [
      { label: "Front-end", href: "https://github.com/giovanne-aquino/app-eventos-IFSP" },
      { label: "Back-end", href: "https://github.com/giovanne-aquino/app-eventos-IFSP-backend" },
    ],
    cover: { kind: "desktop", shot: { src: "/projects/app-eventos/cover.webp", alt: "Lista de eventos do App Eventos IFSP" } },
  },
  {
    slug: "cepema",
    name: "Portal do CEPEMA",
    year: "2024",
    context: "Projeto em equipe · Front-end",
    summary:
      "Site do Centro de Capacitação e Pesquisa em Meio Ambiente da USP, com publicação de pesquisas, reserva de equipamentos do laboratório e painel administrativo.",
    tags: ["Next.js", "Tailwind", "Material UI", "React Query", "Rails"],
    links: [
      { label: "Front-end", href: "https://github.com/eversonps/cepema-frontend" },
      { label: "Back-end", href: "https://github.com/eversonps/cepema-backend" },
    ],
    cover: { kind: "desktop", shot: { src: "/projects/cepema/cover.webp", alt: "Página inicial do Portal do CEPEMA" } },
  },
  {
    slug: "controle-acesso",
    name: "Controle de Acesso",
    year: "2023",
    context: "Projeto em equipe · IFSP Cubatão",
    summary:
      "O porteiro abre o sistema no celular, lê o QR Code do aluno pela câmera e a entrada ou saída fica registrada. O administrador vê o histórico e gerencia os usuários.",
    tags: ["React", "React Router", "Ant Design", "QR Code"],
    links: [{ label: "Código", href: "https://github.com/eversonps/controle-acesso-react" }],
    cover: {
      kind: "mobile",
      shots: [
        { src: "/projects/controle-acesso/login.webp", alt: "Tela de login" },
        { src: "/projects/controle-acesso/portaria.webp", alt: "Tela da portaria" },
        { src: "/projects/controle-acesso/adm.webp", alt: "Menu do administrador" },
      ],
    },
  },
  {
    slug: "santosbot",
    name: "SantosBOT",
    year: "2025",
    context: "Projeto pessoal",
    summary:
      "Bot de Discord que acompanha os jogos do Santos: consulta uma API de futebol a cada minuto e posta escalação, início da partida, resultado e calendário em canais configuráveis.",
    tags: ["Node.js", "discord.js", "node-cron", "API-Football"],
    links: [{ label: "Código", href: "https://github.com/Leoocds/SantosBOT" }],
    cover: { kind: "discord" },
  },
  {
    slug: "nextart",
    featured: true,
    name: "Nextart",
    year: "2026",
    context: "Projeto pessoal",
    summary: "Landing page para uma agência fictícia de sites, com animações de entrada e layout responsivo.",
    tags: ["Next.js 16", "TypeScript", "Tailwind 4", "Framer Motion"],
    links: [
      { label: "Ver online", href: "https://nextart-azure.vercel.app" },
      { label: "Código", href: "https://github.com/Leoocds/Nextart" },
    ],
    cover: { kind: "desktop", shot: { src: "/projects/nextart/cover.webp", alt: "Página inicial da Nextart" } },
  },
];
