import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import hero from "@/assets/hero.jpg";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { WallReveal } from "@/components/site/WallReveal";
import { SectionNumber } from "@/components/site/SectionNumber";
import { LiitBand } from "@/components/site/LiitBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMBOSS Arquitectos · Estudio de arquitectura contemporánea" },
      {
        name: "description",
        content:
          "AMBOSS diseño y soluciones SAS — Arquitectura, interiorismo y consultoría. Espacios que son obras de arte habitables.",
      },
      { property: "og:title", content: "AMBOSS Arquitectos" },
      { property: "og:description", content: "Estudio de arquitectura contemporánea con sede en Bogotá." },
    ],
  }),
  component: HomePage,
});

const manifesto = [
  "Materia",
  "Silencio",
  "Luz",
  "Estructura",
  "Vacío",
  "Forma",
  "Paisaje",
  "Detalle",
];

const services = [
  { n: "01", title: "Diseño arquitectónico", desc: "Vivienda, comercial e institucional." },
  { n: "02", title: "Interiorismo", desc: "Espacios habitables, atmósfera y materia." },
  { n: "03", title: "Consultoría", desc: "Asesoría de proyecto, viabilidad y normativa." },
  { n: "04", title: "Gerencia de obra", desc: "Coordinación integral, tiempo, costo y calidad." },
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="Arquitectura contemporánea AMBOSS"
          width={1920}
          height={1280}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/30 to-background" />
        <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-30" />

        {/* corner ticks */}
        <div className="pointer-events-none absolute inset-6 hidden md:block">
          <div className="absolute left-0 top-0 h-6 w-6 border-l border-t border-primary/70" />
          <div className="absolute right-0 top-0 h-6 w-6 border-r border-t border-primary/70" />
          <div className="absolute bottom-0 left-0 h-6 w-6 border-b border-l border-primary/70" />
          <div className="absolute bottom-0 right-0 h-6 w-6 border-b border-r border-primary/70" />
        </div>

        <div className="relative z-10 mx-auto flex h-full max-w-[1600px] flex-col justify-between px-6 pb-12 pt-32 md:px-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.35em] text-muted-foreground">
            <span>EST. — BOGOTÁ</span>
            <span className="hidden md:inline">N 4°42′ · W 74°4′</span>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-[10px] uppercase tracking-[0.35em] text-primary"
            >
              Diseño y soluciones / 2025
            </motion.p>

            <h1 className="font-display text-[clamp(3rem,9vw,9rem)] leading-[0.95] tracking-tight text-foreground">
              <span className="block overflow-hidden">
                <span className="wall-reveal block">Arquitectura</span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="wall-reveal block text-primary"
                  style={{ animationDelay: "0.15s" }}
                >
                  como obra
                </span>
              </span>
              <span className="block overflow-hidden">
                <span
                  className="wall-reveal block"
                  style={{ animationDelay: "0.3s" }}
                >
                  de arte.
                </span>
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-10 flex flex-col items-start gap-8 md:flex-row md:items-end md:justify-between"
            >
              <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                Estudio contemporáneo que busca la excelencia desde la
                simplicidad. Diseñamos espacios precisos, materiales y
                duraderos — junto a nuestra empresa hermana{" "}
                <span className="text-primary">LIIT</span>.
              </p>
              <div className="flex gap-3">
                <Link
                  to="/proyectos"
                  className="group inline-flex items-center gap-3 border border-primary bg-primary/10 px-6 py-3 text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
                >
                  Ver proyectos
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
                </Link>
                <Link
                  to="/contacto"
                  className="border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-colors hover:border-primary hover:text-foreground"
                >
                  Contactar
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex items-center gap-2 text-[10px] uppercase tracking-[0.35em] text-muted-foreground"
          >
            <ArrowDown className="h-3 w-3 animate-bounce text-primary" />
            <span>Descender</span>
          </motion.div>
        </div>
      </section>

      {/* ===== MANIFIESTO MARQUEE ===== */}
      <section className="border-y border-border bg-secondary py-8 md:py-12">
        <div className="flex overflow-hidden">
          <div className="marquee flex shrink-0 items-center gap-16 pr-16 md:gap-24 md:pr-24">
            {[...manifesto, ...manifesto, ...manifesto].map((word, i) => (
              <span
                key={i}
                className="flex items-center gap-16 font-display text-3xl tracking-[0.2em] text-foreground md:gap-24 md:text-5xl"
              >
                {word}
                <span className="h-1 w-1 rotate-45 bg-primary" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== ABOUT INTRO ===== */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <SectionNumber n="01" label="Estudio" />
            <WallReveal>
              <h2 className="mt-8 font-display text-3xl leading-tight tracking-wide md:text-4xl">
                Vanguardia,<br />simplicidad,<br /><span className="text-primary">precisión.</span>
              </h2>
            </WallReveal>
          </div>
          <div className="md:col-span-7 md:col-start-6">
            <WallReveal delay={0.1}>
              <p className="text-lg leading-relaxed text-foreground md:text-2xl">
                AMBOSS representa la búsqueda constante de la excelencia y la
                innovación en arquitectura. Una marca que inspira confianza y
                transmite el mensaje de un estudio que está a la vanguardia,
                creando espacios que son verdaderas obras de arte.
              </p>
            </WallReveal>
            <WallReveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Trabajamos con un enfoque minimalista, caracterizado por la
                simplicidad y la sofisticación. Una paleta sobria de negros,
                grises y verdes que transmite seriedad y profesionalismo, con
                detalles gráficos sutiles que aportan estilo sin comprometer
                la claridad del diseño.
              </p>
            </WallReveal>
            <WallReveal delay={0.3}>
              <Link
                to="/estudio"
                className="group mt-10 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-primary"
              >
                Conocer el estudio
                <span className="h-px w-10 bg-primary transition-all group-hover:w-16" />
              </Link>
            </WallReveal>
          </div>
        </div>
      </section>

      {/* ===== FEATURED PROJECTS ===== */}
      <section className="relative bg-background py-28 md:py-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <div className="mb-16 flex items-end justify-between gap-6">
            <div>
              <SectionNumber n="02" label="Obra reciente" />
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-wide md:text-6xl">
                Proyectos<br />
                <span className="text-primary">destacados.</span>
              </h2>
            </div>
            <Link
              to="/proyectos"
              className="group hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground md:inline-flex"
            >
              Ver todo
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} priority={i === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-40">
        <SectionNumber n="03" label="Servicios" />
        <h2 className="mt-6 max-w-3xl font-display text-4xl leading-tight tracking-wide md:text-6xl">
          Cuatro disciplinas, <span className="text-primary">una visión.</span>
        </h2>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {services.map((s, i) => (
            <motion.li
              key={s.n}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
            >
              <Link
                to="/servicios"
                className="group grid grid-cols-12 items-center gap-4 py-8 transition-colors hover:bg-secondary md:py-10"
              >
                <span className="col-span-2 font-display text-sm tracking-[0.3em] text-primary md:col-span-1">
                  {s.n}
                </span>
                <span className="col-span-10 font-display text-2xl tracking-wide text-foreground md:col-span-5 md:text-4xl">
                  {s.title}
                </span>
                <span className="col-span-12 text-sm text-muted-foreground md:col-span-5">
                  {s.desc}
                </span>
                <ArrowUpRight className="col-span-12 ml-auto hidden h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-primary md:col-span-1 md:block" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </section>

      <LiitBand />
    </>
  );
}
