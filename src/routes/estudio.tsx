import { createFileRoute } from "@tanstack/react-router";
import { motion } from "motion/react";

import studio from "@/assets/studio.jpg";
import team1 from "@/assets/team-1.jpg";
import team2 from "@/assets/team-2.jpg";
import team3 from "@/assets/team-3.jpg";
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
          "AMBOSS Diseños y Soluciones Integrales SAS. Arquitectos especializados en diseño, construcción y soluciones integrales.",
      },
      { property: "og:title", content: "Estudio · AMBOSS Arquitectos" },
      { property: "og:description", content: "Misión, visión y forma de trabajo de AMBOSS." },
    ],
  }),
  component: EstudioPage,
});

const principles = [
  {
    n: "01",
    title: "Misión",
    desc: "Ofrecer soluciones integrales que se ajusten a las necesidades particulares de cada proyecto, con calidad, criterio técnico y trato profesional.",
  },
  {
    n: "02",
    title: "Visión",
    desc: "Consolidarnos como una compañía líder en diseño y construcción de proyectos comerciales, siendo una solución confiable para pequeñas y grandes empresas.",
  },
  {
    n: "03",
    title: "Método",
    desc: "Unir diseño, obra, documentación, trámites y visualización para que el proyecto avance con claridad desde la planeación hasta la entrega.",
  },
];

const team = [
  { name: "Diseño integral", role: "Espacios funcionales" },
  { name: "Obra civil", role: "Construcción y reforma" },
  { name: "Legalización", role: "Trámite ante entidades" },
  { name: "BIM y 3D", role: "Documentación visual" },
];

const members = [
  {
    photo: team1,
    name: "Carlos Andrés Páez",
    role: "Director de Arquitectura",
    bio: "Arquitecto con más de 15 años de experiencia en diseño comercial y proyectos integrales.",
  },
  {
    photo: team2,
    name: "Mariana Torres",
    role: "Directora de Proyectos",
    bio: "Especialista en coordinación de obra, modelado BIM y gestión de trámites ante entidades.",
  },
  {
    photo: team3,
    name: "Daniel Rincón",
    role: "Coordinador de Estructuras",
    bio: "Ingeniero enfocado en soluciones constructivas, visualización 3D y documentación técnica.",
  },
];

function EstudioPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative mx-auto max-w-[1600px] px-6 pb-20 pt-40 md:px-10 md:pb-32 md:pt-48">
        <SectionNumber n="00" label="El estudio" />
        <h1 className="hero-title mt-8 max-w-4xl">
          <span className="reveal-line">
            <span className="wall-reveal block">Arquitectura</span>
          </span>
          <span className="reveal-line">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".15s" }}>
              que resuelve.
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
              Somos una compañía de arquitectos que presta servicios de diseño, construcción y
              soluciones integrales para materializar proyectos con orden, funcionalidad y respaldo
              técnico.
            </p>
          </WallReveal>
          <WallReveal delay={0.1}>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Nuestro propósito es entender las necesidades del cliente, traducirlas en espacios
              claros y coordinar las especialidades que intervienen en una obra: estructura, redes,
              instalaciones, acabados y documentación.
            </p>
          </WallReveal>
          <dl className="mt-12 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { k: "360°", v: "Proceso integral" },
              { k: "BIM", v: "Modelado técnico" },
              { k: "BGA", v: "Base local" },
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

      {/* PRINCIPIOS */}
      <section className="relative mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-32">
        <SectionNumber n="01" label="Misión y visión" />
        <h2 className="mt-6 max-w-2xl font-display text-4xl leading-tight tracking-wide md:text-6xl">
          Una forma clara de <span className="text-primary">acompañar.</span>
        </h2>

        <ol className="mt-16 space-y-0 border-l border-border">
          {principles.map((t, i) => (
            <motion.li
              key={t.n}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative grid grid-cols-12 gap-6 py-10 pl-8 md:py-12 md:pl-12"
            >
              <span className="absolute -left-[5px] top-12 h-2.5 w-2.5 rotate-45 bg-primary" />
              <span className="col-span-3 font-display text-sm tracking-[0.3em] text-primary md:col-span-2 md:text-base">
                {t.n}
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

      {/* CAPACIDADES */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10">
        <SectionNumber n="02" label="Capacidades" />
        <h2 className="mt-6 font-display text-4xl tracking-wide md:text-6xl">
          Soluciones <span className="text-primary">coordinadas.</span>
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

      {/* EQUIPO */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-32">
        <SectionNumber n="03" label="Equipo" />
        <h2 className="mt-6 font-display text-4xl tracking-wide md:text-6xl">
          Quienes <span className="text-primary">construyen.</span>
        </h2>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {members.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 1.2 }}
              className="group"
            >
              <div className="tick-corners relative overflow-hidden bg-card">
                <img
                  src={m.photo}
                  alt={`Foto de ${m.name}`}
                  width={800}
                  height={1000}
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:grayscale-0 group-hover:scale-[1.03]"
                />
                <div className="blueprint-grid-fine pointer-events-none absolute inset-1 opacity-0 transition-opacity duration-500 group-hover:opacity-30" />
                <div className="absolute bottom-5 left-0 right-0 translate-y-full bg-gradient-to-t from-black/80 via-black/40 to-transparent px-6 pb-6 pt-16 transition-transform duration-500 group-hover:translate-y-0">
                  <p className="text-sm leading-relaxed text-bone opacity-90">
                    {m.bio}
                  </p>
                </div>
              </div>
              <div className="mt-4 flex items-end justify-between">
                <div>
                  <h3 className="font-display text-xl tracking-wide text-foreground md:text-2xl">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {m.role}
                  </p>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  0{i + 1}
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <LiitBand />
    </>
  );
}
