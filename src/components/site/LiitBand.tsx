import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import liitLogo from "@/assets/L.png";
import liitBrochure from "@/assets/Brochure LIIT V2_.pdf?url";

const liitServices = [
  "Arquitectura",
  "Diseño interior",
  "Construcción",
  "Remodelación",
  "Visualización 3D",
  "Curadurías",
  "Consultorías",
  "Presupuestos de obra",
];

const liitPillars = [
  {
    title: "Diseño con carácter",
    desc: "Espacios que funcionan mejor, comunican valor y reflejan la esencia de quien los habita, usa o representa.",
  },
  {
    title: "Experiencia visible",
    desc: "Modelos 3D, renders e imágenes arquitectónicas para entender el espacio antes de construirlo.",
  },
  {
    title: "Proceso acompañado",
    desc: "Planeación, decisiones técnicas, trámites, presupuesto y ejecución con atención al detalle.",
  },
];

export function LiitBand() {
  return (
    <section className="relative overflow-hidden border-y border-[#23c7d9]/30 bg-[#06171b] text-[#f5fbfb]">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-20" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#23c7d9]" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 border border-[#c9f24a]/30" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[#8fb1b6]">
            <span className="text-[#23c7d9]">04</span>
            <span className="h-px w-8 bg-[#23c7d9]/40" />
            <span>Empresa hermana</span>
          </div>
          <p className="mt-10 text-[10px] uppercase tracking-[0.35em] text-[#23c7d9]">
            AMBOSS + LIIT
          </p>
          <h2 className="mt-5 font-display text-4xl leading-[1.05] tracking-wide md:text-7xl">
            Arquitectura que transforma{" "}
            <span className="text-[#c9f24a]">espacios con identidad.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#b7cfd2] md:text-lg">
            LIIT es nuestra empresa hermana enfocada en crear espacios residenciales y comerciales
            donde la estética, la funcionalidad y la experiencia se integran desde la primera idea
            hasta la materialización del proyecto.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#8fb1b6] md:text-base">
            Trabajamos de la mano con LIIT para ampliar la capacidad de AMBOSS: unimos diseño
            arquitectónico, obra, visualización, trámites y criterio técnico para convertir cada
            metro cuadrado en una propuesta clara, construible y con valor para hogares y negocios.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {liitPillars.map((item) => (
              <div key={item.title} className="border border-[#23c7d9]/25 bg-[#0a2429] p-5">
                <p className="font-display text-xl tracking-wide text-[#f5fbfb]">{item.title}</p>
                <p className="mt-3 text-sm leading-relaxed text-[#8fb1b6]">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-4 border border-[#23c7d9]/50 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-[#f5fbfb] transition-all hover:border-[#c9f24a] hover:bg-[#c9f24a] hover:text-[#06171b]"
            >
              Hablemos del proyecto
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </Link>
            <a
              href={liitBrochure}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-4 border border-[#23c7d9]/25 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-[#b7cfd2] transition-all hover:border-[#23c7d9] hover:text-[#f5fbfb]"
            >
              Ver brochure LIIT
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative ml-auto w-full max-w-md border border-[#23c7d9]/35 bg-[#082025] p-6 md:p-8">
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-[#c9f24a]" />
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b border-r border-[#c9f24a]" />
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] text-[#8fb1b6]">
                <span>Empresa hermana</span>
                <span>LIIT</span>
              </div>
              <div className="my-16 flex flex-col items-center text-center md:my-20">
                <img src={liitLogo} alt="LIIT Arquitectura" className="h-auto w-48 md:w-64" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[#c9f24a]">
                  Arquitectura que transforma
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {liitServices.map((service) => (
                  <span
                    key={service}
                    className="border border-[#23c7d9]/25 bg-[#06171b] px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-[#b7cfd2]"
                  >
                    {service}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
