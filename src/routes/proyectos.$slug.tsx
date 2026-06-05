import { createFileRoute, Link, notFound, getRouteApi } from "@tanstack/react-router";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { getProject, projects } from "@/data/projects";
import { SectionNumber } from "@/components/site/SectionNumber";

const routeApi = getRouteApi("/proyectos/$slug");

export const Route = createFileRoute("/proyectos/$slug")({
  head: ({ params }) => {
    const project = getProject(params.slug);
    const title = project ? `${project.title} · AMBOSS` : "Proyecto · AMBOSS";
    const description = project?.description ?? "Detalle de proyecto AMBOSS.";
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        ...(project ? [{ property: "og:image", content: project.image }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  component: ProjectDetail,
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Error 404</p>
        <h1 className="mt-4 font-display text-4xl tracking-wide">Proyecto no encontrado</h1>
        <Link
          to="/proyectos"
          className="mt-8 inline-flex items-center gap-2 border border-primary px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-primary hover:text-primary-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Ver todos los proyectos
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error, reset }) => (
    <div className="flex min-h-screen items-center justify-center px-6 text-center">
      <div>
        <h1 className="font-display text-2xl tracking-wide">No fue posible cargar el proyecto</h1>
        <p className="mt-2 text-sm text-muted-foreground">{error.message}</p>
        <button
          onClick={reset}
          className="mt-6 border border-primary px-6 py-3 text-xs uppercase tracking-[0.3em]"
        >
          Reintentar
        </button>
      </div>
    </div>
  ),
});

function ProjectDetail() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { project } = routeApi.useLoaderData() as any;
  const related = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 md:pt-40">
        <div className="mx-auto max-w-[1600px] px-6 md:px-10">
          <Link
            to="/proyectos"
            className="group inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground hover:text-primary"
          >
            <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
            Volver a proyectos
          </Link>

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="md:col-span-8">
              <SectionNumber label={project.sector} />
              <h1 className="hero-title mt-6">
                <span className="reveal-line">
                  <span className="wall-reveal block">{project.title}</span>
                </span>
              </h1>
            </div>
            <div className="md:col-span-4 md:pt-8">
              <dl className="grid grid-cols-2 gap-6 border-t border-border pt-6 text-sm">
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Ubicación
                  </dt>
                  <dd className="mt-2 text-foreground">{project.location}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Alcance
                  </dt>
                  <dd className="mt-2 text-foreground">{project.scope}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Cliente
                  </dt>
                  <dd className="mt-2 text-foreground">{project.client}</dd>
                </div>
                <div>
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Sector
                  </dt>
                  <dd className="mt-2 text-foreground">{project.sector}</dd>
                </div>
                <div className="col-span-2">
                  <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">
                    Servicios
                  </dt>
                  <dd className="mt-2 flex flex-wrap gap-2">
                    {project.services.map((service: string) => (
                      <span
                        key={service}
                        className="border border-primary/50 px-3 py-1 text-xs tracking-[0.2em] text-primary"
                      >
                        {service}
                      </span>
                    ))}
                  </dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* IMAGEN PRINCIPAL */}
      <section className="mx-auto mt-16 max-w-[1600px] px-6 md:mt-24 md:px-10">
        <div className="tick-corners relative overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            loading="eager"
            fetchPriority="high"
            className="aspect-[16/10] w-full object-cover"
          />
        </div>
      </section>

      {/* DESCRIPCIÓN */}
      <section className="mx-auto max-w-[1600px] px-6 py-24 md:grid md:grid-cols-12 md:gap-10 md:px-10 md:py-32">
        <div className="md:col-span-4">
          <SectionNumber label="Concepto" />
        </div>
        <div className="md:col-span-8">
          <p className="font-display text-2xl leading-snug tracking-wide text-foreground md:text-4xl">
            {project.description}
          </p>
        </div>
      </section>

      {/* GALERIA */}
      <section className="mx-auto max-w-[1600px] border-y border-border bg-secondary px-6 py-24 md:px-10 md:py-32">
        <SectionNumber label="Galería" />
        <h2 className="mt-6 font-display text-3xl tracking-wide md:text-5xl">
          Imágenes <span className="text-primary">del proyecto</span>
        </h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 grid gap-6 md:grid-cols-3 md:gap-8"
        >
          {project.gallery.map((image: string, i: number) => (
            <figure
              key={image}
              className="tick-corners overflow-hidden border border-border bg-card"
            >
              <img
                src={image}
                alt={`${project.title} ${i + 1}`}
                loading="lazy"
                className="aspect-[4/3] w-full object-cover grayscale-[12%]"
              />
              <figcaption className="border-t border-border px-5 py-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Vista
              </figcaption>
            </figure>
          ))}
        </motion.div>
      </section>

      {/* PROYECTOS RELACIONADOS */}
      <section className="mx-auto max-w-[1600px] px-6 py-28 md:px-10 md:py-32">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <SectionNumber label="Continuar viendo" />
            <h2 className="mt-6 font-display text-3xl tracking-wide md:text-5xl">
              Otros <span className="text-primary">proyectos</span>
            </h2>
          </div>
          <Link
            to="/proyectos"
            className="group hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-foreground md:inline-flex"
          >
            Ver todos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {related.map((p, i) => {
            // simple ProjectCard import is heavy; reuse:
            return <RelatedCard key={p.slug} p={p} i={i} />;
          })}
        </div>
      </section>
    </>
  );
}

function RelatedCard({ p, i }: { p: ReturnType<typeof projects.slice>[number]; i: number }) {
  return (
    <Link to="/proyectos/$slug" params={{ slug: p.slug }} className="group block">
      <div className="overflow-hidden border border-border">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={p.image}
            alt={p.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale-[20%] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
          />
        </div>
        <div className="flex items-baseline justify-between gap-4 border-t border-border p-5">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {p.category} · {p.scope}
            </p>
            <h3 className="mt-1 font-display text-lg tracking-wide">{p.title}</h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
