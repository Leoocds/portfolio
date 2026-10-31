import Image from "next/image";
import DiscordPreview from "@/components/DiscordPreview";
import { projects, type Project } from "@/data/projects";

const EMAIL = "leonardoo.lpedroso@gmail.com";
const GITHUB = "https://github.com/Leoocds";
const LINKEDIN = "https://www.linkedin.com/in/leonardo-de-lima-pedroso/";

const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "Prisma",
  "PostgreSQL",
  "MySQL",
  "Python",
  "Git",
];

// stretches a small link's tap area to ~44px without changing how it looks
const tapArea = "relative after:absolute after:-inset-x-2 after:-inset-y-3";

function Cover({ cover }: { cover: Project["cover"] }) {
  if (cover.kind === "discord") return <DiscordPreview />;
  if (cover.kind === "mobile") {
    return (
      <div className="flex h-full items-end justify-center gap-3 bg-subtle px-6 pt-6 sm:gap-4">
        {cover.shots.map((s) => (
          <div
            key={s.src}
            className="relative h-[92%] w-[26%] overflow-hidden rounded-t-xl border border-b-0 border-line bg-white shadow-sm"
          >
            <Image
              src={s.src}
              alt={s.alt}
              fill
              sizes="160px"
              className="object-cover object-top"
            />
          </div>
        ))}
      </div>
    );
  }
  return (
    <Image
      src={cover.shot.src}
      alt={cover.shot.alt}
      fill
      sizes="(min-width: 768px) 560px, 100vw"
      className="object-cover object-top transition duration-500 group-hover:scale-[1.02]"
    />
  );
}

function ProjectCard({ p }: { p: Project }) {
  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-line bg-bg transition hover:border-muted/40 hover:shadow-lg hover:shadow-shadow ${
        p.featured ? "md:col-span-2 md:grid md:grid-cols-[1.4fr_1fr]" : ""
      }`}
    >
      <div
        className={`relative aspect-[16/10] overflow-hidden border-line ${p.featured ? "border-b md:border-r md:border-b-0" : "border-b"}`}
      >
        <Cover cover={p.cover} />
      </div>
      <div
        className={`flex flex-1 flex-col p-6 ${p.featured ? "md:justify-center md:p-10" : ""}`}
      >
        <p className="text-sm text-muted">
          {p.context} · {p.year}
        </p>
        <h3 className="mt-1 text-xl font-semibold tracking-tight">{p.name}</h3>
        <p className="mt-3 leading-relaxed text-muted">{p.summary}</p>
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {p.tags.map((t) => (
            <li
              key={t}
              className="rounded-full bg-subtle px-2.5 py-1 text-xs font-medium text-chip"
            >
              {t}
            </li>
          ))}
        </ul>
        <div
          className={`flex gap-5 pt-6 text-sm font-medium ${p.featured ? "" : "mt-auto"}`}
        >
          {p.links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              target="_blank"
              rel="noreferrer"
              className={`${tapArea} text-accent hover:underline active:opacity-60`}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-40 border-b border-line bg-bg/90 backdrop-blur">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#" className={`${tapArea} font-semibold tracking-tight active:opacity-60`}>
            Leonardo Pedroso
          </a>
          <div className="flex gap-6 text-sm text-muted">
            <a href="#projetos" className={`${tapArea} hover:text-text active:opacity-60`}>
              Projetos
            </a>
            <a href="#contato" className={`${tapArea} hover:text-text active:opacity-60`}>
              Contato
            </a>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 sm:px-6">
        <section className="flex flex-col-reverse gap-10 py-16 sm:py-28 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-medium text-accent">Olá, eu sou o Leonardo</p>
            <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight sm:text-6xl">
              Desenvolvedor Full Stack
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
              Formado em Análise e Desenvolvimento de Sistemas pelo IFSP
              Cubatão. Desenvolvo aplicações web com React, Next.js e Node.js,
              do front-end ao banco de dados.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg bg-accent px-5 py-3 text-sm font-semibold text-white transition select-none hover:brightness-110 active:brightness-90"
              >
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className="rounded-lg border border-line px-5 py-3 text-sm font-semibold transition select-none hover:bg-subtle active:bg-subtle"
              >
                GitHub
              </a>
              <a
                href={`mailto:${EMAIL}`}
                className="rounded-lg border border-line px-5 py-3 text-sm font-semibold transition select-none hover:bg-subtle active:bg-subtle"
              >
                E-mail
              </a>
            </div>
            <ul className="mt-12 flex max-w-3xl flex-wrap gap-2">
              {skills.map((s) => (
                <li
                  key={s}
                  className="rounded-md border border-line px-3 py-1 text-sm text-chip"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <Image
            src="/foto.webp"
            alt="Foto de Leonardo de Lima Pedroso"
            width={380}
            height={380}
            priority
            className="h-48 w-48 shrink-0 rounded-full border border-line object-cover shadow-lg shadow-shadow sm:h-60 sm:w-60 md:h-72 md:w-72 lg:h-80 lg:w-80"
          />
        </section>

        <section id="projetos" className="pb-24">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
            Projetos
          </h2>
          <p className="mt-2 text-muted">
            Alguns projetos que desenvolvi, sozinho e em equipe.
          </p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[...projects]
              .sort((a, b) => Number(!!b.featured) - Number(!!a.featured))
              .map((p) => (
                <ProjectCard key={p.slug} p={p} />
              ))}
          </div>
        </section>

        <section id="contato" className="pb-24">
          <div className="rounded-2xl bg-subtle px-6 py-12 text-center sm:px-12">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
              Vamos conversar?
            </h2>
            <p className="mx-auto mt-3 max-w-lg text-muted">
              Estou em busca de uma vaga como desenvolvedor full stack ou
              front-end.
            </p>
            <a
              href={`mailto:${EMAIL}`}
              className={`${tapArea} mt-6 inline-block text-lg font-semibold break-all text-accent hover:underline active:opacity-60`}
            >
              {EMAIL}
            </a>
            <div className="mt-4 flex justify-center gap-6 text-sm font-medium text-muted">
              <a
                href={LINKEDIN}
                target="_blank"
                rel="noreferrer"
                className={`${tapArea} hover:text-text active:opacity-60`}
              >
                LinkedIn
              </a>
              <a
                href={GITHUB}
                target="_blank"
                rel="noreferrer"
                className={`${tapArea} hover:text-text active:opacity-60`}
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-line py-8 text-center text-sm text-muted">
        © {new Date().getFullYear()} Leonardo de Lima Pedroso
      </footer>
    </>
  );
}
