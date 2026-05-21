import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";

import { SectionNumber } from "@/components/site/SectionNumber";

export const Route = createFileRoute("/servicios")({
  head: () => ({
    meta: [
      { title: "Servicios · AMBOSS Arquitectos" },
      {
        name: "description",
        content:
          "Diseño integral, construcción de obras civiles, reformas, legalización, visualización inmobiliaria, planimetría, modelado 3D y BIM.",
      },
      { property: "og:title", content: "Servicios · AMBOSS Arquitectos" },
      {
        property: "og:description",
        content: "Servicios integrales para proyectos comerciales, residenciales e inmobiliarios.",
      },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    n: "01",
    title: "Diseño integral",
    short: "Oficinas · Locales · Vivienda",
    items: ["Oficinas", "Locales comerciales", "Espacios residenciales", "Cadenas comerciales"],
    desc: "Diseñamos espacios acordes con los requerimientos del cliente, cuidando funcionalidad, iluminación, circulación y una experiencia coherente con el uso del proyecto.",
  },
  {
    n: "02",
    title: "Construcción de obras civiles",
    short: "Construcción · Reforma · Coordinación",
    items: [
      "Especialidad estructural",
      "Redes eléctricas",
      "Redes sanitarias e hidráulicas",
      "Redes contraincendios",
    ],
    desc: "Desarrollamos construcción y reforma de obras civiles integrales, articulando las especialidades técnicas que intervienen en el proyecto para lograr una ejecución ordenada.",
  },
  {
    n: "03",
    title: "Trámite y legalización",
    short: "Entidades · Documentación · Gestión",
    items: [
      "Revisión de requerimientos",
      "Preparación documental",
      "Acompañamiento ante entidades",
      "Seguimiento del proceso",
    ],
    desc: "Acompañamos el trámite y la legalización de proyectos ante entidades, con una gestión clara de documentos, requisitos y pasos necesarios para avanzar.",
  },
  {
    n: "04",
    title: "Visualización inmobiliaria",
    short: "Factibilidad · Parcelación · Presentación",
    items: [
      "Análisis de factibilidad",
      "Parcelación",
      "Visualización de proyectos",
      "Material para presentación comercial",
    ],
    desc: "Estudiamos y comunicamos proyectos inmobiliarios para facilitar su comprensión técnica, espacial y comercial antes de su desarrollo.",
  },
  {
    n: "05",
    title: "Planimetría, 3D y BIM",
    short: "Planos · Modelado · Metodología BIM",
    items: [
      "Elaboración de planimetrías",
      "Modelado 3D",
      "Implementación de metodología BIM",
      "Coordinación gráfica y técnica",
    ],
    desc: "Convertimos ideas y diseños en documentación clara: planos, modelos tridimensionales y flujos BIM que apoyan la toma de decisiones y la ejecución.",
  },
];

function ServiciosPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <SectionNumber n="—" label="Qué hacemos" />
        <h1 className="hero-title mt-8 max-w-5xl">
          <span className="reveal-line">
            <span className="wall-reveal block">Diseño,</span>
          </span>
          <span className="reveal-line">
            <span className="wall-reveal block" style={{ animationDelay: ".1s" }}>
              obra y
            </span>
          </span>
          <span className="reveal-line">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".2s" }}>
              soluciones.
            </span>
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          Servicios pensados para acompañar el proyecto desde la planeación hasta la construcción,
          la legalización y la documentación técnica.
        </p>
      </section>

      {/* Acordeón "cajones" */}
      <section className="mx-auto max-w-[1600px] px-6 pb-32 md:px-10">
        <ul className="border-y border-border">
          {services.map((s, i) => {
            const isOpen = open === i;
            return (
              <li key={s.n} className="border-b border-border last:border-b-0">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="grid w-full grid-cols-12 items-center gap-4 py-8 text-left transition-colors hover:bg-secondary md:py-10"
                >
                  <span className="col-span-2 font-display text-sm tracking-[0.3em] text-primary md:col-span-1">
                    {s.n}
                  </span>
                  <span className="col-span-8 font-display text-2xl tracking-wide md:col-span-7 md:text-4xl">
                    {s.title}
                  </span>
                  <span className="col-span-12 hidden text-sm text-muted-foreground md:col-span-3 md:block">
                    {s.short}
                  </span>
                  <span className="col-span-2 ml-auto flex h-10 w-10 items-center justify-center border border-border md:col-span-1">
                    {isOpen ? (
                      <Minus className="h-4 w-4 text-primary" />
                    ) : (
                      <Plus className="h-4 w-4 text-primary" />
                    )}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="grid gap-10 px-2 pb-10 md:grid-cols-12 md:px-0">
                        <div className="md:col-span-1 md:col-start-2" />
                        <p className="text-base leading-relaxed text-foreground md:col-span-6 md:text-lg">
                          {s.desc}
                        </p>
                        <ul className="space-y-3 text-sm text-muted-foreground md:col-span-4">
                          {s.items.map((it) => (
                            <li key={it} className="flex items-start gap-3">
                              <span className="mt-2 h-px w-4 bg-primary" />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
}
