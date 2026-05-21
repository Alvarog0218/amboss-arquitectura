import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-background">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-[1600px] px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-3xl leading-tight tracking-wide md:text-5xl">
              Construimos<br />
              <span className="text-primary">silencio</span> habitable.
            </p>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              AMBOSS diseño y soluciones SAS — Arquitectura contemporánea
              orientada a la excelencia, la simplicidad y la materia.
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              01 / Navegación
            </p>
            <ul className="space-y-2 text-sm">
              <li><Link to="/estudio" className="hover:text-primary">Estudio</Link></li>
              <li><Link to="/proyectos" className="hover:text-primary">Proyectos</Link></li>
              <li><Link to="/servicios" className="hover:text-primary">Servicios</Link></li>
              <li><Link to="/contacto" className="hover:text-primary">Contacto</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="mb-4 text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              02 / Contacto
            </p>
            <ul className="space-y-3 text-sm text-foreground">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                <span>Bogotá, Colombia</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 text-primary" />
                <a href="mailto:hola@amboss.co" className="hover:text-primary">
                  hola@amboss.co
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
          <p className="flex items-center gap-3">
            <span>Empresa hermana de</span>
            <a
              href="#"
              className="group inline-flex items-center gap-2 text-foreground"
            >
              <span className="font-display tracking-[0.4em] text-primary">LIIT</span>
              <span className="h-px w-6 bg-primary transition-all duration-300 group-hover:w-10" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
