import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

import logoMark from "@/assets/A.png";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <img src={logoMark} alt="AMBOSS" className="mb-8 h-16 w-16 object-contain" />
            <p className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
              Somos
              <br />
              <span className="text-primary">arquitectos.</span>
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              AMBOSS Arquitectos. Arquitectura, construcción, reformas, legalización, visualización,
              planimetría, modelado 3D y BIM.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/estudio" className="hover:text-primary">
                  Estudio
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="hover:text-primary">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/servicios" className="hover:text-primary">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="hover:text-primary">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              Contacto
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Calle 13 # 19 - 36, Mutualidad, Bucaramanga</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:amboss.arquitectura@gmail.com" className="hover:text-primary">
                  amboss.arquitectura@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Instagram className="mt-0.5 h-4 w-4 text-primary" />
                <a
                  href="https://instagram.com/amboss.arquitectura"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-primary"
                >
                  @amboss.arquitectura
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-6 border-t border-border pt-6 text-[11px] uppercase tracking-[0.25em] text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} AMBOSS Arquitectos · Todos los derechos reservados</p>
          <p>Bucaramanga · Colombia</p>
        </div>
      </div>
    </footer>
  );
}
