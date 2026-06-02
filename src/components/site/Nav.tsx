import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import logoMark from "@/assets/A.png";

const links = [
  { to: "/", label: "Inicio" },
  { to: "/estudio", label: "Estudio" },
  { to: "/proyectos", label: "Proyectos" },
  { to: "/servicios", label: "Servicios" },
  { to: "/simulador", label: "Simulador" },
  { to: "/contacto", label: "Contacto" },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open
          ? "bg-background/85 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1600px] items-center justify-between px-6 md:px-10">
        <Link
          to="/"
          className="flex items-center gap-3 font-display text-sm tracking-[0.35em] text-foreground"
        >
          <img src={logoMark} alt="AMBOSS" className="hidden h-9 w-9 object-contain md:block" />
          <span className="text-base">AMBOSS</span>
          <span className="hidden text-[10px] text-muted-foreground lg:inline">
            / ARQUITECTOS
          </span>
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative font-sans text-xs uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              <span className="relative">
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />
              </span>
            </Link>
          ))}
        </nav>

        <button
          aria-label="Menú"
          onClick={() => setOpen((o) => !o)}
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="border-t border-border bg-background px-6 py-6">
            <ul className="flex flex-col gap-5">
              {links.map((l, i) => (
                <li
                  key={l.to}
                  className="overflow-hidden"
                  style={{ animation: `wall-reveal .6s ${i * 0.06}s both` }}
                >
                  <Link to={l.to} className="font-display text-2xl tracking-widest text-foreground">
                    <span className="mr-3 text-[10px] text-muted-foreground">0{i + 1}</span>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
