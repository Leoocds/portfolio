export type Shot = {
  src: string;
  caption: string;
  // "mobile" shots are shown side by side at phone width
  kind: "desktop" | "mobile";
};

export type Project = {
  slug: string;
  name: string;
  year: string;
  context: string;
  paragraphs: string[];
  stack: string;
  links: { label: string; href: string }[];
  shots: Shot[];
};

export const projects: Project[] = [
  {
    slug: "app-eventos",
    name: "App Eventos IFSP",
    year: "2025",
    context: "projeto em equipe no IFSP Cubatão",
    paragraphs: [
      "Sistema para o campus divulgar e organizar seus eventos: palestras, minicursos, oficinas. O organizador cadastra o evento e as atividades, define vagas e horas complementares, e os alunos se inscrevem.",
      "Foi um projeto grande, com mais de dez pessoas trabalhando no mesmo código, divididas entre front-end e back-end.",
    ],
    stack: "Next.js, Tailwind e shadcn/ui no front; Node.js, Express, Prisma e PostgreSQL no back.",
    links: [
      { label: "repositório do front", href: "https://github.com/giovanne-aquino/app-eventos-IFSP" },
      { label: "repositório do back", href: "https://github.com/giovanne-aquino/app-eventos-IFSP-backend" },
    ],
    shots: [
      { src: "/projects/app-eventos/cover.webp", caption: "Lista de eventos, com busca e filtro por formato.", kind: "desktop" },
      { src: "/projects/app-eventos/detalhe.webp", caption: "Página de um evento.", kind: "desktop" },
    ],
  },
  {
    slug: "cepema",
    name: "Portal do CEPEMA",
    year: "2024",
    context: "projeto em equipe, eu estava no front-end",
    paragraphs: [
      "Site do Centro de Capacitação e Pesquisa em Meio Ambiente, ligado à USP, aqui em Cubatão. Além das páginas institucionais, tem publicação de pesquisas e um sistema para pesquisadores reservarem equipamentos do laboratório.",
      "Também tem um painel administrativo, onde a equipe do centro escreve os artigos num editor de texto e acompanha as reservas.",
    ],
    stack: "Next.js, Tailwind, Material UI e React Query, consumindo uma API em Ruby on Rails.",
    links: [
      { label: "repositório do front", href: "https://github.com/eversonps/cepema-frontend" },
      { label: "repositório do back", href: "https://github.com/eversonps/cepema-backend" },
    ],
    shots: [
      { src: "/projects/cepema/cover.webp", caption: "Página inicial.", kind: "desktop" },
      { src: "/projects/cepema/equipe.webp", caption: "Página da equipe.", kind: "desktop" },
    ],
  },
  {
    slug: "controle-acesso",
    name: "Controle de acesso por QR Code",
    year: "2023",
    context: "projeto em equipe no IFSP Cubatão",
    paragraphs: [
      "A ideia era tirar o caderno da portaria: o porteiro abre o sistema no celular, aponta a câmera para o QR Code do aluno e a entrada ou saída fica registrada. O administrador consegue ver o histórico, gerenciar usuários e carregar a base de alunos.",
      "Rodando no navegador do celular mesmo, sem precisar instalar nada.",
    ],
    stack: "React, React Router, Ant Design e react-qr-reader.",
    links: [{ label: "repositório", href: "https://github.com/eversonps/controle-acesso-react" }],
    shots: [
      { src: "/projects/controle-acesso/login.webp", caption: "Login", kind: "mobile" },
      { src: "/projects/controle-acesso/portaria.webp", caption: "Portaria", kind: "mobile" },
      { src: "/projects/controle-acesso/adm.webp", caption: "Administrador", kind: "mobile" },
    ],
  },
  {
    slug: "santosbot",
    name: "SantosBOT",
    year: "2025",
    context: "projeto pessoal",
    paragraphs: [
      "Um bot de Discord que avisa sozinho quando o Santos joga. Ele consulta uma API de futebol a cada minuto e posta a escalação, o início da partida, o resultado, o craque do jogo e o calendário da temporada.",
      "Cada tipo de aviso pode ir para um canal diferente, configurado com o comando /set-canal.",
    ],
    stack: "Node.js, discord.js e node-cron, com dados da API-Football.",
    links: [{ label: "repositório", href: "https://github.com/Leoocds/SantosBOT" }],
    shots: [],
  },
  {
    slug: "nextart",
    name: "Nextart",
    year: "2026",
    context: "projeto pessoal",
    paragraphs: [
      "Landing page para uma agência fictícia de sites, com bastante animação de entrada. Os projetos que aparecem nela são inventados.",
    ],
    stack: "Next.js 16, TypeScript, Tailwind 4 e Framer Motion.",
    links: [
      { label: "ver online", href: "https://nextart-azure.vercel.app" },
      { label: "repositório", href: "https://github.com/Leoocds/Nextart" },
    ],
    shots: [{ src: "/projects/nextart/cover.webp", caption: "Topo da página.", kind: "desktop" }],
  },
];
