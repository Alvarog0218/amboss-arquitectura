import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import studio from "@/assets/studio.jpg";
import { SectionNumber } from "@/components/site/SectionNumber";
import { WallReveal } from "@/components/site/WallReveal";
import { LiitBand } from "@/components/site/LiitBand";

export const Route = createFileRoute("/estudio")({
  head: () => ({
    meta: [
      { title: "Estudio · AMBOSS Arquitectos" },
      {
        name: "description",
        content:
          "AMBOSS diseño y soluciones SAS — Un estudio de arquitectura enfocado en la vanguardia, la simplicidad y la sofisticación.",
      },
      { property: "og:title", content: "Estudio · AMBOSS Arquitectos" },
      { property: "og:description", content: "Filosofía, equipo y alianza con LIIT." },
    ],
  }),
  component: EstudioPage,
});

const timeline = [
  { year: "2015", title: "Fundación", desc: "AMBOSS inicia operaciones en Bogotá con un equipo de tres arquitectos." },
  { year: "2018", title: "Primer proyecto institucional", desc: "Centro cultural en Cali — primer reconocimiento en bienal." },
  { year: "2021", title: "Alianza con LIIT", desc: "Se formaliza la relación con LIIT, sumando capacidades constructivas." },
  { year: "2023", title: "Expansión", desc: "Apertura de oficina satélite, proyectos en tres países." },
  { year: "2025", title: "Hoy", desc: "Más de 40 obras entregadas. Continuamos buscando el detalle." },
];

const team = [
  { name: "—", role: "Director de diseño" },
  { name: "—", role: "Dirección de proyectos" },
  { name: "—", role: "Coordinación de obra" },
  { name: "—", role: "Interiorismo" },
];

function EstudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-40 md:px-10 md:pb-32 md:pt-48">
        <SectionNumber n="00" label="El estudio" />
        <h1 className="mt-8 max-w-4xl font-display text-5xl leading-[1.02] tracking-wide md:text-8xl">
          <span className="block overflow-hidden">
            <span className="wall-reveal block">Una práctica</span>
          </span>
          <span className="block overflow-hidden">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".15s" }}>
              de la materia.
            </span>
          </span>
        </h1>
      </section>

      {/* IMAGEN + TEXTO */}
      <section className="mx-auto max-w-[1600px] px-6 pb-28 md:grid md:grid-cols-12 md:gap-10 md:px-10">
        <div className="md:col-span-7">
          <div className="tick-corners relative overflow-hidden">
            <img
              src={studio}
              alt="Plano de trabajo en el estudio"
              width={1600}
              height={1100}
              loading="lazy"
              className="aspect-[16/11] w-full object-cover grayscale-[15%]"
            />
          </div>
        </div>
        <div className="mt-10 md:col-span-5 md:mt-0">
          <WallReveal>
            <p className="text-lg leading-relaxed text-foreground md:text-xl">
              Entendemos la arquitectura como un proceso lento y deliberado.
              Cada proyecto nace de una conversación con el lugar, el cliente
              y la materia.
            </p>
          </WallReveal>
          <WallReveal delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              No diseñamos formas: diseñamos atmósferas. Trabajamos con un
              vocabulario reducido — concreto, madera, acero, vidrio, luz —
              para que la experiencia del espacio sea siempre más rica que
              cualquier referencia gráfica.
            </p>
          </WallReveal>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "+40", v: "Obras entregadas" },
              { k: "10", v: "Años de trayectoria" },
              { k: "3", v: "Países" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl text-primary md:text-5xl">{s.k}</dt>
                <dd className="mt-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                  {s.v}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-32">
        <SectionNumber n="01" label="Trayectoria" />
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-wide md:text-6xl">
          Una década <span className="text-primary">construyendo.</span>
        </h2>

        <ol className="mt-16 space-y-0 border-l border-border">
          {timeline.map((t, i) => (
            <motion.li
              key={t.year}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative grid grid-cols-12 gap-6 py-10 pl-8 md:py-12 md:pl-12"
            >
              <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rotate-45 bg-primary" />
              <span className="col-span-3 font-display text-sm tracking-[0.3em] text-primary md:col-span-2 md:text-base">
                {t.year}
              </span>
              <span className="col-span-9 font-display text-2xl tracking-wide text-foreground md:col-span-4 md:text-3xl">
                {t.title}
              </span>
              <p className="col-span-12 text-sm leading-relaxed text-muted-foreground md:col-span-6">
                {t.desc}
              </p>
            </motion.li>
          ))}
        </ol>
      </section>

      {/* EQUIPO */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10">
        <SectionNumber n="02" label="Equipo" />
        <h2 className="mt-6 font-display text-4xl tracking-wide md:text-6xl">
          Un equipo <span className="text-primary">multidisciplinario.</span>
        </h2>

        <ul className="mt-16 grid grid-cols-2 gap-px overflow-hidden border border-border bg-border md:grid-cols-4">
          {team.map((m) => (
            <li
              key={m.role}
              className="group relative aspect-square bg-card p-6 transition-colors hover:bg-secondary"
            >
              <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="relative flex h-full flex-col justify-between">
                <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  {m.role}
                </span>
                <span className="font-display text-2xl tracking-wide text-foreground md:text-3xl">
                  {m.name}
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <LiitBand />
    </>
  );
}
