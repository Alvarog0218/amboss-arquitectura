import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import liitLogo from "@/assets/L.png";
import liitHero from "@/assets/liit_hero.png";

export function LiitBand() {
  return (
    <section className="mx-auto max-w-[1600px] px-6 py-24 md:px-10 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        <a
          href="https://liit-arquitectura.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="relative group block overflow-hidden bg-[#eaddca] cursor-pointer rounded-lg"
        >
          {/* Fondo con Imagen y Degradado */}
          <div className="absolute inset-0">
            <img
              src={liitHero}
              alt="Alianza AMBOSS × LIIT"
              className="h-full w-full object-cover object-[center_70%] opacity-75 transition-transform duration-[1.5s] group-hover:scale-105 mix-blend-multiply saturate-[1.2]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#eaddca] via-[#eaddca]/20 to-transparent" />
            <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-10" />
          </div>

          {/* Contenido Principal */}
          <div className="relative z-10 grid gap-10 p-10 md:grid-cols-2 md:p-20">
            <div className="flex flex-col justify-center">
              <div className="flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-[0.4em] text-[#4d1f2e]/60 font-medium">
                  Empresa Aliada
                </span>
                <ArrowUpRight className="h-3 w-3 text-[#4d1f2e]/30 transition-transform group-hover:translate-x-1 group-hover:text-[#4d1f2e]" />
              </div>

              <h2 className="mt-5 font-display text-4xl text-[#4d1f2e] md:text-6xl uppercase tracking-tight">
                AMBOSS × <span className="opacity-70">LIIT</span>
              </h2>

              <p className="mt-6 text-xl font-medium leading-tight text-[#4d1f2e] md:text-2xl">
                Espacios con intención <br />
                <span className="opacity-60">Diseño con carácter</span>
              </p>

              <p className="mt-6 max-w-md text-sm leading-relaxed text-[#4d1f2e]/80">
                Una alianza estratégica que integra visión arquitectónica, diseño de interiores y
                ejecución técnica para crear espacios que se habitan, se sienten y se viven.
              </p>
            </div>

            {/* Logo y Elementos Visuales */}
            <div className="flex items-center justify-center md:justify-end">
              <div className="relative">
                <img
                  src={liitLogo}
                  alt="Logo LIIT"
                  className="h-24 w-auto object-contain transition-all duration-500 group-hover:scale-110 md:h-36 opacity-90 group-hover:opacity-100"
                  style={{
                    filter:
                      "brightness(0) saturate(100%) invert(14%) sepia(21%) saturate(2206%) hue-rotate(296deg) brightness(95%) contrast(92%)",
                  }}
                />

                {/* Ticks decorativos al pasar el mouse */}
                <div className="absolute -inset-8 pointer-events-none opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <div className="absolute left-0 top-0 h-4 w-4 border-l border-t border-[#4d1f2e]/30" />
                  <div className="absolute right-0 top-0 h-4 w-4 border-r border-t border-[#4d1f2e]/30" />
                  <div className="absolute bottom-0 left-0 h-4 w-4 border-b border-l border-[#4d1f2e]/30" />
                  <div className="absolute bottom-0 right-0 h-4 w-4 border-b border-r border-[#4d1f2e]/30" />
                </div>
              </div>
            </div>
          </div>
        </a>
      </motion.div>
    </section>
  );
}
