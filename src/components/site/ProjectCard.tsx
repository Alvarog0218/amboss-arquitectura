import { Link } from "@tanstack/react-router";
import { motion } from "motion/react";
import type { Project } from "@/data/projects";

type Props = {
  project: Project;
  index?: number;
  priority?: boolean;
};

/**
 * Tarjeta de proyecto con "Blueprint hover":
 * al pasar el mouse aparecen cotas, ejes y medidas como un plano técnico.
 */
export function ProjectCard({ project, index = 0, priority }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.08, ease: [0.65, 0, 0.35, 1] }}
    >
      <Link to="/proyectos/$slug" params={{ slug: project.slug }} className="group block">
        <div className="relative overflow-hidden border border-border bg-card">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              loading={priority ? "eager" : "lazy"}
              className="h-full w-full object-cover grayscale-[20%] transition-all duration-[1200ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
            />

            {/* Blueprint overlay — solo en hover */}
            <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              {/* viñeta oscura */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent" />

              {/* ejes técnicos */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 400 500"
                preserveAspectRatio="none"
              >
                <g stroke="currentColor" strokeWidth="0.5" className="text-primary">
                  {/* marco de cota */}
                  <line x1="20" y1="20" x2="380" y2="20" />
                  <line x1="20" y1="480" x2="380" y2="480" />
                  <line x1="20" y1="20" x2="20" y2="480" />
                  <line x1="380" y1="20" x2="380" y2="480" />
                  {/* tick marks */}
                  <line x1="20" y1="15" x2="20" y2="25" />
                  <line x1="380" y1="15" x2="380" y2="25" />
                  <line x1="200" y1="15" x2="200" y2="25" />
                  {/* cruz central */}
                  <line x1="200" y1="240" x2="200" y2="260" />
                  <line x1="190" y1="250" x2="210" y2="250" />
                </g>
                <text
                  x="200"
                  y="12"
                  textAnchor="middle"
                  className="fill-primary"
                  fontSize="8"
                  letterSpacing="2"
                >
                  {project.scope.toUpperCase()}
                </text>
              </svg>

              {/* etiqueta */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-foreground">
                <span>VER FICHA</span>
                <span>→</span>
              </div>
            </div>

            <span className="absolute right-4 top-4 z-10 border border-primary/60 bg-background/70 px-2 py-1 text-[9px] uppercase tracking-[0.3em] text-primary backdrop-blur">
              {project.sector}
            </span>
          </div>

          <div className="flex items-baseline justify-between gap-4 border-t border-border p-5">
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                {project.category} · {project.scope}
              </p>
              <h3 className="mt-1 font-display text-lg tracking-wide text-foreground">
                {project.title}
              </h3>
            </div>
            <span className="font-display text-xs tracking-[0.3em] text-muted-foreground">
              0{(index % 9) + 1}
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
