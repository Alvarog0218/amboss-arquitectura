import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";

import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/site/ProjectCard";
import { SectionNumber } from "@/components/site/SectionNumber";

export const Route = createFileRoute("/proyectos")({
  head: () => ({
    meta: [
      { title: "Proyectos · AMBOSS Arquitectos" },
      {
        name: "description",
        content:
          "Portafolio de obras de AMBOSS: residencial, comercial, institucional e interiorismo.",
      },
      { property: "og:title", content: "Proyectos · AMBOSS Arquitectos" },
      { property: "og:description", content: "Portafolio completo de obras." },
    ],
  }),
  component: ProyectosPage,
});

const cats = ["Todos", "Residencial", "Comercial", "Institucional", "Interiorismo"] as const;

function ProyectosPage() {
  const [filter, setFilter] = useState<(typeof cats)[number]>("Todos");

  const list = useMemo(
    () => (filter === "Todos" ? projects : projects.filter((p) => p.category === filter)),
    [filter],
  );

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-12 pt-40 md:px-10 md:pt-48">
        <SectionNumber n="—" label="Portafolio" />
        <h1 className="mt-8 font-display text-5xl leading-[1.02] tracking-wide md:text-8xl">
          <span className="block overflow-hidden">
            <span className="wall-reveal block">Obra</span>
          </span>
          <span className="block overflow-hidden">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".15s" }}>
              construida.
            </span>
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-base text-muted-foreground md:text-lg">
          Una selección de proyectos donde el lugar, la materia y el detalle
          son los protagonistas.
        </p>
      </section>

      {/* filtros */}
      <section className="mx-auto max-w-[1600px] px-6 md:px-10">
        <div className="flex flex-wrap items-center gap-2 border-y border-border py-4">
          <span className="mr-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            Filtrar:
          </span>
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`border px-4 py-2 text-[10px] uppercase tracking-[0.25em] transition-all ${
                filter === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border text-muted-foreground hover:border-primary hover:text-foreground"
              }`}
            >
              {c}
            </button>
          ))}
          <span className="ml-auto text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {String(list.length).padStart(2, "0")} obras
          </span>
        </div>
      </section>

      {/* grid */}
      <section className="mx-auto max-w-[1600px] px-6 py-16 md:px-10 md:py-24">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {list.map((p, i) => (
            <ProjectCard key={p.slug} project={p} index={i} priority={i < 3} />
          ))}
        </div>
      </section>
    </>
  );
}
