import { ArrowUpRight } from "lucide-react";

export function LiitBand() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-secondary">
      <div className="blueprint-grid-fine pointer-events-none absolute inset-0 opacity-30" />

      <div className="relative mx-auto grid max-w-[1600px] items-center gap-10 px-6 py-20 md:grid-cols-12 md:px-10 md:py-32">
        <div className="md:col-span-7">
          <p className="mb-6 text-[10px] uppercase tracking-[0.35em] text-primary">
            Alianza estratégica
          </p>
          <h2 className="font-display text-4xl leading-[1.05] tracking-wide md:text-7xl">
            AMBOSS <span className="text-muted-foreground">×</span>{" "}
            <span className="text-primary">LIIT</span>
          </h2>
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Trabajamos de la mano con <span className="text-foreground">LIIT</span>,
            nuestra empresa hermana, sumando capacidades en diseño, gerencia
            de obra y soluciones constructivas. Una sola visión, dos equipos
            especializados.
          </p>

          <a
            href="#"
            className="group mt-10 inline-flex items-center gap-4 border border-border px-6 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
          >
            Conocer LIIT
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
          </a>
        </div>

        <div className="md:col-span-5">
          <div className="tick-corners relative aspect-square w-full max-w-md border border-border p-8">
            <div className="flex h-full flex-col justify-between">
              <div className="flex items-start justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>EMPRESA HERMANA</span>
                <span>EST. —</span>
              </div>
              <div className="text-center">
                <p className="font-display text-7xl tracking-[0.2em] text-primary md:text-8xl">
                  LIIT
                </p>
                <p className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                  Soluciones constructivas
                </p>
              </div>
              <div className="flex items-end justify-between text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                <span>+ AMBOSS</span>
                <span>—</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
