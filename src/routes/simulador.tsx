import { useState, useMemo } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ArrowLeft, Check, Smartphone, Leaf, Trees, Paintbrush } from "lucide-react";
import { SectionNumber } from "@/components/site/SectionNumber";
import { WallReveal } from "@/components/site/WallReveal";

const SIMULATOR_RATES = {
  baseCostPerSqm: {
    residencial: 2500000,
    comercial: 2200000,
    industrial: 1800000,
  },
  finishMultipliers: {
    standard: 1.0,
    premium: 1.35,
    luxury: 1.8,
  },
  addons: {
    smart: 15000000,
    eco: 25000000,
    landscape: 12000000,
    interior: 35000000,
  },
} as const;

type ProjectType = keyof typeof SIMULATOR_RATES.baseCostPerSqm;
type FinishQuality = keyof typeof SIMULATOR_RATES.finishMultipliers;

export const Route = createFileRoute("/simulador")({
  head: () => ({
    meta: [
      { title: "Simulador de Proyectos · AMBOSS" },
      {
        name: "description",
        content:
          "Calcula el costo estimado de tu proyecto de construcción y diseño con nuestra herramienta interactiva.",
      },
    ],
  }),
  component: SimulatorPage,
});

function SimulatorPage() {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 4;

  const [projectType, setProjectType] = useState<ProjectType>("residencial");
  const [area, setArea] = useState(150);
  const [finishQuality, setFinishQuality] = useState<FinishQuality>("standard");
  const [addons, setAddons] = useState({
    smart: false,
    eco: false,
    landscape: false,
    interior: false,
  });

  const formatCOP = (number: number) => {
    return new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(number);
  };

  const { baseConstructionCost, addonsCost, totalCost } = useMemo(() => {
    const rateSqm = SIMULATOR_RATES.baseCostPerSqm[projectType];
    const finishMultiplier = SIMULATOR_RATES.finishMultipliers[finishQuality];
    const baseCost = area * rateSqm * finishMultiplier;

    let aCost = 0;
    if (addons.smart) aCost += SIMULATOR_RATES.addons.smart;
    if (addons.eco) aCost += SIMULATOR_RATES.addons.eco;
    if (addons.landscape) aCost += SIMULATOR_RATES.addons.landscape;
    if (addons.interior) aCost += SIMULATOR_RATES.addons.interior;

    return {
      baseConstructionCost: baseCost,
      addonsCost: aCost,
      totalCost: baseCost + aCost,
    };
  }, [projectType, area, finishQuality, addons]);

  const nextStep = () => currentStep < totalSteps - 1 && setCurrentStep(currentStep + 1);
  const prevStep = () => currentStep > 0 && setCurrentStep(currentStep - 1);

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1600px] px-6 py-20 md:px-10 md:py-32">
        <div className="grid gap-16 lg:grid-cols-12">
          {/* LEFT: FORM */}
          <div className="lg:col-span-7">
            <SectionNumber label="Herramienta Técnica" />
            <h1
              className="hero-title mt-8 text-foreground"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
            >
              <span className="reveal-line">
                <span className="wall-reveal block">Simulador de</span>
              </span>
              <span className="reveal-line">
                <span className="wall-reveal block text-primary" style={{ animationDelay: "0.1s" }}>
                  proyectos
                </span>
              </span>
            </h1>

            <div className="mt-16">
              {/* Stepper indicator */}
              <div className="mb-12 flex gap-2">
                {Array.from({ length: totalSteps }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 transition-all duration-500 ${i <= currentStep ? "bg-primary" : "bg-border"}`}
                  />
                ))}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentStep}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  {currentStep === 0 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-display text-2xl tracking-wide text-foreground">
                          1. ¿Qué tipo de obra planeas?
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Selecciona la categoría que mejor describa tu proyecto.
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-3">
                        {(["residencial", "comercial", "industrial"] as const).map((type) => (
                          <button
                            key={type}
                            onClick={() => setProjectType(type)}
                            className={`group relative overflow-hidden border p-6 text-left transition-all ${
                              projectType === type
                                ? "border-primary bg-primary/5"
                                : "border-border bg-card hover:border-primary/40"
                            }`}
                          >
                            <div className="blueprint-grid-fine absolute inset-0 opacity-10 group-hover:opacity-20" />
                            <span className="relative block text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                              Categoría
                            </span>
                            <span className="relative mt-4 block font-display text-xl tracking-wide text-foreground capitalize">
                              {type}
                            </span>
                            {projectType === type && (
                              <Check className="absolute bottom-4 right-4 h-4 w-4 text-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 1 && (
                    <div className="space-y-12">
                      <div>
                        <h3 className="font-display text-2xl tracking-wide text-foreground">
                          2. Área de intervención
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Indica los metros cuadrados estimados del proyecto.
                        </p>
                      </div>
                      <div className="space-y-8">
                        <input
                          type="range"
                          min="50"
                          max="2000"
                          value={area}
                          step="10"
                          onChange={(e) => setArea(parseInt(e.target.value, 10))}
                          className="h-1.5 w-full appearance-none bg-border accent-primary"
                        />
                        <div className="flex items-end justify-between border-b border-border pb-4">
                          <span className="font-display text-6xl text-primary">{area}</span>
                          <span className="mb-2 text-xl font-medium text-muted-foreground">
                            m² totales
                          </span>
                        </div>
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-display text-2xl tracking-wide text-foreground">
                          3. Estándar de calidad
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Nivel de acabados y especificaciones técnicas.
                        </p>
                      </div>
                      <div className="grid gap-4">
                        {[
                          {
                            id: "standard",
                            label: "Estándar",
                            desc: "Materiales funcionales y duraderos.",
                            brand: "AMBOSS Core",
                          },
                          {
                            id: "premium",
                            label: "Premium",
                            desc: "Equilibrio entre diseño y materiales de alta gama.",
                            brand: "LIIT Studio",
                          },
                          {
                            id: "luxury",
                            label: "Vanguardista",
                            desc: "Diseño de autor y acabados exclusivos.",
                            brand: "LIIT Exclusive",
                          },
                        ].map((q) => (
                          <button
                            key={q.id}
                            onClick={() => setFinishQuality(q.id as FinishQuality)}
                            className={`group relative flex items-center justify-between border p-6 text-left transition-all ${
                              finishQuality === q.id
                                ? "border-primary bg-primary/5"
                                : "border-border bg-card hover:border-primary/40"
                            }`}
                          >
                            <div className="blueprint-grid-fine absolute inset-0 opacity-10" />
                            <div className="relative">
                              <span className="text-[9px] uppercase tracking-[0.3em] text-primary">
                                {q.brand}
                              </span>
                              <h4 className="mt-1 font-display text-xl tracking-wide">{q.label}</h4>
                              <p className="mt-1 text-xs text-muted-foreground">{q.desc}</p>
                            </div>
                            {finishQuality === q.id && <Check className="h-5 w-5 text-primary" />}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="font-display text-2xl tracking-wide text-foreground">
                          4. Complementos técnicos
                        </h3>
                        <p className="mt-2 text-sm text-muted-foreground">
                          Añade especialidades de diseño y tecnología.
                        </p>
                      </div>
                      <div className="grid gap-4 sm:grid-cols-2">
                        {[
                          {
                            id: "smart",
                            icon: <Smartphone />,
                            label: "Smart Home",
                            desc: "Domótica y automatización.",
                          },
                          {
                            id: "eco",
                            icon: <Leaf />,
                            label: "Eco-Friendly",
                            desc: "Paneles y eficiencia energética.",
                          },
                          {
                            id: "landscape",
                            icon: <Trees />,
                            label: "Paisajismo",
                            desc: "Diseño de exteriores y jardines.",
                          },
                          {
                            id: "interior",
                            icon: <Paintbrush />,
                            label: "Interiorismo",
                            desc: "Diseño de mobiliario y luces.",
                          },
                        ].map((addon) => (
                          <button
                            key={addon.id}
                            onClick={() =>
                              setAddons({
                                ...addons,
                                [addon.id]: !addons[addon.id as keyof typeof addons],
                              })
                            }
                            className={`group relative flex items-start gap-4 border p-6 text-left transition-all ${
                              addons[addon.id as keyof typeof addons]
                                ? "border-primary bg-primary/5"
                                : "border-border bg-card hover:border-primary/40"
                            }`}
                          >
                            <div
                              className={`mt-1 text-primary transition-transform group-hover:scale-110 ${addons[addon.id as keyof typeof addons] ? "opacity-100" : "opacity-40"}`}
                            >
                              {addon.icon}
                            </div>
                            <div>
                              <h4 className="font-display text-lg tracking-wide">{addon.label}</h4>
                              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                                {addon.desc}
                              </p>
                            </div>
                            {addons[addon.id as keyof typeof addons] && (
                              <div className="absolute right-4 top-4 h-1.5 w-1.5 rotate-45 bg-primary" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              </AnimatePresence>

              {/* NAV BUTTONS */}
              <div className="mt-12 flex gap-4">
                {currentStep > 0 && (
                  <button
                    onClick={prevStep}
                    className="flex items-center gap-3 border border-border px-8 py-4 text-xs uppercase tracking-[0.3em] text-muted-foreground transition-all hover:border-primary hover:text-foreground"
                  >
                    <ArrowLeft className="h-4 w-4" /> Anterior
                  </button>
                )}
                <button
                  onClick={
                    currentStep === totalSteps - 1
                      ? () =>
                          window.open(
                            `https://wa.me/573157060211?text=Hola, coticé un proyecto ${projectType} de ${area}m2 con acabados ${finishQuality}.`,
                            "_blank",
                          )
                      : nextStep
                  }
                  className="flex flex-1 items-center justify-center gap-3 bg-primary px-8 py-4 text-xs uppercase tracking-[0.3em] text-primary-foreground transition-all hover:bg-primary/90"
                >
                  {currentStep === totalSteps - 1
                    ? "Solicitar cotización técnica"
                    : "Siguiente paso"}
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT: SUMMARY (Architectural Sidebar) */}
          <div className="lg:col-span-5 lg:pl-10">
            <div className="sticky top-32 overflow-hidden border border-border bg-card">
              <div className="blueprint-grid-fine absolute inset-0 opacity-20" />
              <div className="relative p-8 md:p-12">
                <div className="mb-12 flex items-center justify-between border-b border-border pb-6">
                  <span className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground">
                    Presupuesto Estimado
                  </span>
                  <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
                    Ref: 2026-SIM
                  </span>
                </div>

                <div className="space-y-2">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                    Inversión Aproximada
                  </p>
                  <h2 className="font-display text-4xl tracking-tight text-foreground md:text-5xl">
                    {formatCOP(totalCost)}
                  </h2>
                  <p className="text-[9px] text-muted-foreground">
                    * Valores sujetos a viabilidad técnica y sitio de obra.
                  </p>
                </div>

                <div className="mt-12 space-y-4">
                  <div className="flex justify-between border-t border-border/50 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Construcción Base
                    </span>
                    <span className="text-xs font-medium">{formatCOP(baseConstructionCost)}</span>
                  </div>
                  <div className="flex justify-between border-t border-border/50 pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Especialidades
                    </span>
                    <span className="text-xs font-medium">{formatCOP(addonsCost)}</span>
                  </div>
                  <div className="flex justify-between border-t border-border pt-4">
                    <span className="text-[10px] uppercase tracking-[0.2em] text-primary font-bold">
                      Total Obra
                    </span>
                    <span className="text-sm font-bold text-primary">{formatCOP(totalCost)}</span>
                  </div>
                </div>

                <div className="mt-12 rounded border border-primary/20 bg-primary/5 p-6">
                  <h5 className="font-display text-sm tracking-widest text-primary uppercase">
                    Nota de Ingeniería
                  </h5>
                  <p className="mt-3 text-[11px] leading-relaxed text-muted-foreground">
                    Este cálculo integra las capacidades de **AMBOSS** en obra civil y la visión de
                    **LIIT** en diseño vanguardista. Para un presupuesto definitivo, se requiere
                    levantamiento técnico y estudio de suelos.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
