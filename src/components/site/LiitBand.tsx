import { ArrowUpRight } from "lucide-react";

export function LiitBand() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-primary">
            Proyectos reales
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-wide md:text-7xl">
            Portafolio <span className="text-muted-foreground">con</span>{" "}
            <span className="text-primary">obra real</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Reunimos proyectos comerciales, residenciales, corporativos, industriales e
            inmobiliarios. Cada encargo exige una respuesta precisa: diseño funcional, coordinación
            técnica y soluciones construibles.
          </p>

          <a
            href="/proyectos"
            className="group mt-10 inline-flex items-center gap-4 border border-border px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Ver proyectos
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="tick-corners relative aspect-square w-full max-w-md border border-border p-8">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>AMBOSS</span>
                <span>SAS</span>
              </div>
              <div className="text-center">
                <p className="font-display text-5xl tracking-[0.2em] text-primary md:text-7xl">
                  360°
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  Diseño · obra · gestión
                </p>
              </div>
              <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>Bucaramanga</span>
                <span>Colombia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
