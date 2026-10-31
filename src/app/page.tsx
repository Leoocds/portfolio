import Image from "next/image";
import DiscordPreview from "@/components/DiscordPreview";
import { projects, type Shot } from "@/data/projects";

const EMAIL = "leonardoo.lpedroso@gmail.com";
const GITHUB = "https://github.com/Leoocds";
const LINKEDIN = "https://www.linkedin.com/in/leonardo-de-lima-pedroso/";

function Shots({ shots }: { shots: Shot[] }) {
  const mobile = shots.filter((s) => s.kind === "mobile");
  const desktop = shots.filter((s) => s.kind === "desktop");

  return (
    <div className="my-8 flex flex-col gap-8">
      {desktop.map((s) => (
        <figure key={s.src}>
          <a href={s.src} target="_blank" rel="noreferrer">
            <Image
              src={s.src}
              alt={s.caption}
              width={1440}
              height={900}
              sizes="(min-width: 768px) 720px, 100vw"
              className="w-full rounded border border-rule shadow-sm"
            />
          </a>
          <figcaption className="mt-2 text-sm text-soft">{s.caption}</figcaption>
        </figure>
      ))}
      {mobile.length > 0 && (
        <div className="grid grid-cols-3 gap-3 sm:gap-5">
          {mobile.map((s) => (
            <figure key={s.src}>
              <a href={s.src} target="_blank" rel="noreferrer">
                <Image
                  src={s.src}
                  alt={s.caption}
                  width={1170}
                  height={2532}
                  sizes="240px"
                  className="w-full rounded-lg border border-rule shadow-sm"
                />
              </a>
              <figcaption className="mt-2 text-center text-sm text-soft">{s.caption}</figcaption>
            </figure>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-[720px] px-4 py-16 sm:px-6 sm:py-24">
      <header>
        <h1 className="font-serif text-4xl font-semibold sm:text-5xl">Leonardo de Lima Pedroso</h1>
        <p className="mt-6 text-lg leading-relaxed">
          Oi! Sou desenvolvedor web, formado em Análise e Desenvolvimento de Sistemas no IFSP de Cubatão. Trabalho
          principalmente com React, Next.js e Node.js, tanto no front-end quanto no back-end.
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Estou procurando vaga como desenvolvedor full stack ou front-end. Abaixo estão alguns projetos que fiz,
          sozinho e em equipe.
        </p>
        <p className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
          <a className="u" href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className="u" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>
          <a className="u" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>
        </p>
      </header>

      <hr className="my-16 border-rule" />

      <section aria-label="Projetos">
        {projects.map((p, i) => (
          <article key={p.slug} id={p.slug} className={i > 0 ? "mt-20" : undefined}>
            <h2 className="font-serif text-2xl font-semibold sm:text-3xl">{p.name}</h2>
            <p className="mt-1 text-soft">
              {p.year}, {p.context}
            </p>

            {p.paragraphs.map((t) => (
              <p key={t} className="mt-4 leading-relaxed">{t}</p>
            ))}

            {p.shots.length > 0 ? (
              <Shots shots={p.shots} />
            ) : (
              <div className="my-8">
                <DiscordPreview />
                <p className="mt-2 text-sm text-soft">Mais ou menos assim que as mensagens aparecem no Discord (ilustração).</p>
              </div>
            )}

            <p className="text-soft">
              <span className="text-ink">Feito com:</span> {p.stack}
            </p>
            <p className="mt-2 flex flex-wrap gap-x-5">
              {p.links.map((l) => (
                <a key={l.href} className="u" href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                </a>
              ))}
            </p>
          </article>
        ))}
      </section>

      <hr className="my-16 border-rule" />

      <footer>
        <h2 className="font-serif text-2xl font-semibold">Contato</h2>
        <p className="mt-4 leading-relaxed">
          O jeito mais fácil de falar comigo é por e-mail, em{" "}
          <a className="u" href={`mailto:${EMAIL}`}>{EMAIL}</a>, ou pelo{" "}
          <a className="u" href={LINKEDIN} target="_blank" rel="noreferrer">LinkedIn</a>. O resto do meu código está no{" "}
          <a className="u" href={GITHUB} target="_blank" rel="noreferrer">GitHub</a>.
        </p>
      </footer>
    </main>
  );
}
