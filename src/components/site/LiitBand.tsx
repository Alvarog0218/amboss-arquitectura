import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import liitLogo from "@/assets/L.png";
import liitBrochure from "@/assets/brochure_liit/Brochure_LIIT.pdf?url";

const liitServices = [
  "Arquitectura",
  "Construcción",
  "Visualización 3D",
  "Consultorías",
  "Trámite ante Curadurías",
  "Presupuestos de Obra",
  "Diseño",
  "Remodelación",
];

const liitPillars = [
  {
    title: "Diseñamos espacios con identidad",
    desc: "Creamos propuestas arquitectónicas e interiores pensadas para reflejar tu estilo, tus necesidades y la experiencia que quieres transmitir.",
  },
  {
    title: "Visualizamos antes de construir",
    desc: "A través de modelos 3D, renders e imágenes arquitectónicas, te ayudamos a ver tu espacio antes de hacerlo realidad.",
  },
  {
    title: "Asesoramos con claridad",
    desc: "Te orientamos en consultorías, presupuestos, trámites y decisiones técnicas para que tu proyecto avance con mayor seguridad.",
  },
];

export function LiitBand() {
  return (
    <section className="relative overflow-hidden border-y border-[#4d1f2e]/20 bg-[#bfaf91] text-[#211719] font-['Poppins']">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-10" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#4d1f2e]/30" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-72 w-72 translate-x-1/3 translate-y-1/3 border border-[#4d1f2e]/10" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-12 px-6 py-24 md:grid-cols-12 md:px-10 md:py-36">
        <div className="md:col-span-7">
          <div className="flex items-center gap-4 text-[10px] uppercase tracking-[0.35em] text-[#4d1f2e]/70">
            <span className="h-px w-8 bg-[#3b4d63]/40" />
            <span>Empresa aliada</span>
          </div>
          <p className="mt-10 text-[10px] uppercase tracking-[0.35em] text-[#3b4d63] font-medium">
            AMBOSS + LIIT
          </p>
          <h2 className="mt-5 font-['Poppins'] font-bold text-4xl leading-[1.05] tracking-tight md:text-7xl uppercase text-[#3b4d63]">
            Espacios con intención. <br />
            <span className="opacity-70">Diseño con carácter.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-base leading-relaxed text-[#211719]/90 md:text-lg">
            En LIIT ARQUITECTURA transformamos ideas en espacios que se viven, se sienten y se recuerdan.
            Diseñamos proyectos residenciales y comerciales donde la estética, la funcionalidad y la experiencia se integran para crear lugares con identidad.
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-[#211719]/70 md:text-base">
            No diseñamos solo para que un espacio se vea bien. Diseñamos para que funcione mejor, comunique valor y refleje la esencia de quien lo habita, lo usa o lo representa.
          </p>
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {liitPillars.map((item) => (
              <div key={item.title} className="border border-[#4d1f2e]/10 bg-white/30 p-5 transition-colors hover:border-[#3b4d63]/30">
                <p className="font-['Poppins'] font-semibold text-lg tracking-tight text-[#3b4d63] leading-tight">{item.title}</p>
                <p className="mt-3 text-xs leading-relaxed text-[#211719]/70">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/contacto"
              className="group inline-flex items-center justify-center gap-4 border border-[#3b4d63]/50 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-[#3b4d63] transition-all hover:bg-[#3b4d63] hover:text-white"
            >
              Hablemos del proyecto
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </Link>
            <a
              href={liitBrochure}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-4 border border-[#3b4d63]/25 px-6 py-4 text-center text-xs uppercase tracking-[0.25em] text-[#3b4d63]/80 transition-all hover:border-[#3b4d63] hover:text-[#3b4d63]"
            >
              Ver brochure LIIT
              <ArrowUpRight className="h-4 w-4 shrink-0 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="relative ml-auto w-full max-w-md border border-[#3b4d63]/20 bg-white/20 p-6 md:p-8 backdrop-blur-sm">
            <div className="absolute -left-4 -top-4 h-16 w-16 border-l border-t border-[#3b4d63]/40" />
            <div className="absolute -bottom-4 -right-4 h-16 w-16 border-b border-r border-[#3b4d63]/40" />
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] text-[#3b4d63]/60">
                <span>Empresa aliada</span>
                <span>LIIT</span>
              </div>
              <div className="my-16 flex flex-col items-center text-center md:my-20">
                <img src={liitLogo} alt="LIIT Arquitectura" className="h-auto w-48 md:w-64 brightness-[0.2] invert-0" />
                <p className="mt-5 text-[10px] uppercase tracking-[0.4em] text-[#3b4d63] font-semibold">
                  Arquitectura que transforma
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {liitServices.map((service) => (
                  <span
                    key={service}
                    className="border border-[#3b4d63]/10 bg-white/30 px-2 py-1.5 text-[9px] uppercase tracking-[0.2em] text-[#3b4d63]/80"
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
