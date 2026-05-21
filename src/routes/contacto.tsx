import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowUpRight, Instagram, Mail, MapPin } from "lucide-react";

import { SectionNumber } from "@/components/site/SectionNumber";

export const Route = createFileRoute("/contacto")({
  head: () => ({
    meta: [
      { title: "Contacto · AMBOSS Arquitectos" },
      {
        name: "description",
        content:
          "Escríbenos para iniciar tu proyecto. AMBOSS Arquitectos · Bogotá, Colombia.",
      },
      { property: "og:title", content: "Contacto · AMBOSS Arquitectos" },
      { property: "og:description", content: "Iniciemos una conversación." },
    ],
  }),
  component: ContactoPage,
});

const types = ["Residencial", "Comercial", "Institucional", "Interiorismo", "Otro"];

function ContactoPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="mx-auto max-w-[1600px] px-6 pb-16 pt-40 md:px-10 md:pt-48">
        <SectionNumber n="—" label="Hablemos" />
        <h1 className="mt-8 max-w-5xl font-display text-5xl leading-[1.02] tracking-wide md:text-8xl">
          <span className="block overflow-hidden">
            <span className="wall-reveal block">Iniciemos</span>
          </span>
          <span className="block overflow-hidden">
            <span className="wall-reveal block text-primary" style={{ animationDelay: ".15s" }}>
              tu proyecto.
            </span>
          </span>
        </h1>
      </section>

      <section className="mx-auto grid max-w-[1600px] gap-16 px-6 pb-32 md:grid-cols-12 md:gap-10 md:px-10">
        {/* FORM */}
        <div className="md:col-span-7">
          {sent ? (
            <div className="tick-corners border border-primary bg-secondary p-10">
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
                Mensaje recibido
              </p>
              <h2 className="mt-4 font-display text-3xl tracking-wide">
                Gracias. Te escribiremos pronto.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Revisamos cada solicitud personalmente. Si tu proyecto requiere
                respuesta urgente, escríbenos directamente a hola@amboss.co.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-8"
            >
              <Field label="Nombre" name="nombre" required />
              <Field label="Correo" name="email" type="email" required />
              <div>
                <label className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                  Tipo de proyecto
                </label>
                <div className="flex flex-wrap gap-2">
                  {types.map((t) => (
                    <label
                      key={t}
                      className="cursor-pointer border border-border px-4 py-2 text-xs tracking-wide text-muted-foreground transition-all has-[:checked]:border-primary has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
                    >
                      <input
                        type="radio"
                        name="tipo"
                        value={t}
                        className="sr-only"
                        defaultChecked={t === "Residencial"}
                      />
                      {t}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label
                  htmlFor="mensaje"
                  className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
                >
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={6}
                  required
                  className="w-full resize-none border border-border bg-transparent p-4 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
                  placeholder="Cuéntanos sobre tu proyecto, ubicación, intenciones…"
                />
              </div>

              <button
                type="submit"
                className="group inline-flex items-center gap-3 border border-primary bg-primary/10 px-8 py-4 text-xs uppercase tracking-[0.3em] text-foreground transition-all hover:bg-primary hover:text-primary-foreground"
              >
                Enviar mensaje
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </button>
            </form>
          )}
        </div>

        {/* INFO */}
        <aside className="md:col-span-4 md:col-start-9">
          <div className="tick-corners border border-border p-8">
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
              Directo
            </p>
            <ul className="mt-6 space-y-4 text-sm">
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

            <div className="mt-8 border-t border-border pt-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Empresa hermana
              </p>
              <a
                href="#"
                className="group mt-4 inline-flex items-center gap-3 font-display text-2xl tracking-[0.3em] text-primary"
              >
                LIIT
                <span className="h-px w-8 bg-primary transition-all group-hover:w-14" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground">
                Para proyectos que requieren gerencia y construcción
                integradas.
              </p>
            </div>
          </div>
        </aside>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-3 block text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full border-b border-border bg-transparent py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary"
      />
    </div>
  );
}
