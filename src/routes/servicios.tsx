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
          "Diseño arquitectónico, interiorismo, consultoría y gerencia de obra. Servicios integrales de AMBOSS y LIIT.",
      },
      { property: "og:title", content: "Servicios · AMBOSS Arquitectos" },
      { property: "og:description", content: "Cuatro disciplinas, una visión integral." },
    ],
  }),
  component: ServiciosPage,
});

const services = [
  {
    n: "01",
    title: "Diseño arquitectónico",
    short: "Vivienda · Comercial · Institucional",
    items: [
      "Anteproyecto y diseño esquemático",
      "Diseño de detalle y especificaciones",
      "Modelado 3D y visualización",
      "Coordinación con especialistas",
    ],
    desc: "Desde el primer trazo hasta los detalles constructivos, nuestro trabajo busca la precisión de la materia y la economía de la forma. Cada proyecto se desarrolla en estrecho diálogo con el cliente, el lugar y el uso.",
  },
  {
    n: "02",
    title: "Interiorismo",
    short: "Atmósfera · Materia · Mobiliario",
    items: [
      "Diseño integral de interiores",
      "Selección y desarrollo de mobiliario",
      "Iluminación arquitectónica",
      "Curaduría de materiales y acabados",
    ],
    desc: "Diseñamos interiores como espacios habitables y atmósferas precisas. La luz, la textura y la escala son tan importantes como cualquier objeto, porque definen cómo se vive el espacio.",
  },
  {
    n: "03",
    title: "Consultoría",
    short: "Viabilidad · Normativa · Estrategia",
    items: [
      "Estudios de viabilidad y prefactibilidad",
      "Asesoría normativa y de licencias",
      "Programación y dimensionamiento",
      "Optimización de proyectos existentes",
    ],
    desc: "Acompañamos a clientes y otros estudios en las primeras etapas: cuando una idea aún es pregunta. Aportamos criterio, experiencia y rigor técnico para decisiones bien informadas.",
  },
  {
    n: "04",
    title: "Gerencia de obra",
    short: "Coordinación integral con LIIT",
    items: [
      "Programación y control de obra",
      "Coordinación de proveedores y contratistas",
      "Control de calidad y costos",
      "Cierre técnico y entrega",
    ],
    desc: "Junto a nuestra empresa hermana LIIT, integramos diseño y construcción en un solo equipo. Esto reduce fricciones, acorta tiempos y asegura que lo construido respete lo proyectado.",
  },
];

function ServiciosPage() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <SectionNumber n="—" label="Qué hacemos" />
        <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.02] tracking-wide md:text-8xl">
          <span className="block overflow-hidden">
            <span className="wall-reveal block">Diseño,</span>
          </span>
          <span className="block overflow-hidden">
            <span className="wall-reveal block" style={{ animationDelay: ".1s" }}>
              materia y
            </span>
          </span>
          <span className="block overflow-hidden">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".2s" }}>
              construcción.
            </span>
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-base text-muted-foreground md:text-lg">
          Cuatro disciplinas que operan como un sistema integrado. Puedes
          contratarlas por separado o como un solo proceso de principio a fin.
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
