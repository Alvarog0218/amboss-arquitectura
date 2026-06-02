import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import hero from "@/assets/hero.jpg";
import studioImg from "@/assets/studio.jpg";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { WallReveal } from "@/components/site/WallReveal";
import { SectionNumber } from "@/components/site/SectionNumber";
import { LiitBand } from "@/components/site/LiitBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMBOSS Arquitectos · Diseño y arquitectos" },
      {
        name: "description",
        content:
          "AMBOSS Arquitectos. Diseño, construcción, reformas, legalización, visualización, planimetría, modelado 3D y BIM.",
      },
      { property: "og:title", content: "AMBOSS Arquitectos" },
      {
        property: "og:description",
        content: "Arquitectura y arquitectos con sede en Bucaramanga.",
      },
    ],
  }),
  component: HomePage,
});

const manifesto = [
  "Diseño",
  "Obra",
  "Función",
  "Legalización",
  "BIM",
  "Detalle",
  "Estructura",
  "Espacio",
];

const services = [
  { n: "01", title: "Diseño integral", desc: "Oficinas, locales, vivienda y cadenas comerciales." },
  {
    n: "02",
    title: "Construcción y reforma",
    desc: "Obras civiles con coordinación técnica integral.",
  },
  {
    n: "03",
    title: "Legalización de proyectos",
    desc: "Trámites ante entidades y acompañamiento documental.",
  },
  {
    n: "04",
    title: "Visualización inmobiliaria",
    desc: "Factibilidad, parcelación y comunicación visual del proyecto.",
  },
  {
    n: "05",
    title: "Planimetría y modelado",
    desc: "Planos, modelos 3D e implementación de metodología BIM.",
  },
];

function HomePage() {
  const featured = projects.slice(0, 3);

  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative h-[100svh] min-h-[640px] w-full overflow-hidden">
        <img
          src={hero}
          alt="AMBOSS Arquitectos"
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
            <span>Bucaramanga · Colombia</span>
            <span className="hidden md:inline">AMBOSS Arquitectos</span>
          </div>

          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-[10px] uppercase tracking-[0.35em] text-primary"
            >
              Arquitectura · construcción · BIM
            </motion.p>

            <h1 className="hero-title text-foreground">
              <span className="reveal-line">
                <span className="wall-reveal block">Diseño</span>
              </span>
              <span className="reveal-line">
                <span
                  className="wall-reveal block text-primary"
                  style={{ animationDelay: "0.15s" }}
                >
                  y obra
                </span>
              </span>
              <span className="reveal-line">
                <span className="wall-reveal block" style={{ animationDelay: "0.3s" }}>
                  integral.
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
                Somos una compañía de arquitectos enfocada en diseño, construcción y arquitectura
                para proyectos comerciales, residenciales e inmobiliarios.
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
        <SectionNumber n="01" label="Estudio" />
        <div className="mt-12 grid gap-12 md:grid-cols-12 md:gap-16">
          {/* Visual column */}
          <div className="md:col-span-5">
            <WallReveal>
              <div className="group relative aspect-square w-full overflow-hidden border border-border bg-secondary">
                <img
                  src={studioImg}
                  alt="Estudio AMBOSS Arquitectos"
                  className="absolute inset-0 h-full w-full scale-[1.1] object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.15]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" />
                <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay" />

                {/* corner ticks */}
                <div className="pointer-events-none absolute inset-4">
                  <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-primary" />
                  <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-primary" />
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-primary" />
                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-primary" />
                </div>

                {/* tag */}
                <div className="absolute left-4 top-4 flex items-center gap-2 border border-primary/60 bg-background/70 px-3 py-1.5 text-[9px] uppercase tracking-[0.3em] text-primary backdrop-blur">
                  <span className="h-1.5 w-1.5 rotate-45 bg-primary" />
                  AMB · 001 / EST
                </div>

                {/* bottom caption */}
                <div className="absolute inset-x-4 bottom-4 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-foreground">
                  <span>Bucaramanga</span>
                  <span className="text-primary">07° 07' N</span>
                </div>
              </div>
            </WallReveal>

            {/* mini stats */}
            <div className="mt-6 grid grid-cols-3 divide-x divide-border border border-border">
              {[
                { k: "+10", v: "Proyectos" },
                { k: "05", v: "Servicios" },
                { k: "BIM", v: "Metodología" },
              ].map((s) => (
                <div key={s.v} className="px-3 py-4 text-center">
                  <div className="font-display text-xl tracking-wide text-primary md:text-2xl">
                    {s.k}
                  </div>
                  <div className="mt-1 text-[9px] uppercase tracking-[0.3em] text-muted-foreground">
                    {s.v}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Text column */}
          <div className="md:col-span-6 md:col-start-7">
            <WallReveal>
              <h2 className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
                Diseño, obra,
                <br />
                <span className="text-primary">solución.</span>
              </h2>
            </WallReveal>
            <WallReveal delay={0.1}>
              <p className="mt-8 text-lg leading-relaxed text-foreground md:text-2xl">
                En AMBOSS desarrollamos soluciones arquitectónicas ajustadas a las necesidades
                reales de cada proyecto, con criterio técnico, servicio profesional y una visión
                integral del proceso.
              </p>
            </WallReveal>
            <WallReveal delay={0.2}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                Acompañamos desde la idea inicial hasta la construcción, reforma, legalización,
                visualización y documentación técnica. Nuestro trabajo busca espacios funcionales,
                claros y coherentes con los objetivos del cliente.
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
              <SectionNumber n="02" label="Portafolio" />
              <h2 className="mt-6 font-display text-4xl leading-tight tracking-wide md:text-6xl">
                Proyectos
                <br />
                <span className="text-primary">reales.</span>
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
          Un equipo para resolver <span className="text-primary">todo el proceso.</span>
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
