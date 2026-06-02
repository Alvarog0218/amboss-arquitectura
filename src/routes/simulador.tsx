import { useState, useMemo } from "react";
import { Link } from "@tanstack/react-router";
import { createFileRoute } from "@tanstack/react-router";
import "@/simulator.css";

const SIMULATOR_RATES = {
  baseCostPerSqm: {
    residencial: 2500000, // COP por m2
    comercial: 2200000,
    industrial: 1800000,
  },
  finishMultipliers: {
    standard: 1.0, // Base AMBOSS
    premium: 1.35, // Mezcla
    luxury: 1.8, // High-end LIIT
  },
  addons: {
    smart: 15000000, // Costo fijo base estimado
    eco: 25000000, // Paneles solares
    landscape: 12000000, // Paisajismo
    interior: 35000000, // Diseño Interior completo
  },
} as const;

type ProjectType = keyof typeof SIMULATOR_RATES.baseCostPerSqm;
type FinishQuality = keyof typeof SIMULATOR_RATES.finishMultipliers;

export const Route = createFileRoute("/simulador")({
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

  const nextStep = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="simulator-page min-h-screen">
      {/* Neutral Header */}
      <header className="simulator-header">
        <Link to="/" className="back-link">
          ← Volver al Inicio
        </Link>
        <div className="combined-logo">
          LIIT <span>x</span> AMBOSS
        </div>
        <div className="header-subtitle">Simulador de Construcción y Diseño</div>
      </header>

      <main className="simulator-layout">
        {/* Left Column: Controls */}
        <section className="control-panel">
          <div className="step-indicator">
            Paso {currentStep + 1} de {totalSteps}
          </div>

          {/* STEP 1: Type of Project */}
          {currentStep === 0 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">1. Tipo de Proyecto</h3>
                <div className="options-grid project-types">
                  {(["residencial", "comercial", "industrial"] as const).map((type) => (
                    <label key={type} className="sim-card">
                      <input
                        type="radio"
                        name="projectType"
                        value={type}
                        checked={projectType === type}
                        onChange={() => setProjectType(type)}
                      />
                      <div className="card-content">
                        <h4>{type.charAt(0).toUpperCase() + type.slice(1)}</h4>
                        <p>
                          {type === "residencial"
                            ? "Casas, Apartamentos"
                            : type === "comercial"
                              ? "Locales, Oficinas"
                              : "Bodegas, Plantas"}
                        </p>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: Square Footage Area */}
          {currentStep === 1 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">2. Área Total (m²)</h3>
                <div className="range-container">
                  <input
                    type="range"
                    min="50"
                    max="2000"
                    value={area}
                    step="10"
                    onChange={(e) => setArea(parseInt(e.target.value, 10))}
                  />
                  <div className="range-value">{area} m²</div>
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: Materials & Finishes */}
          {currentStep === 2 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">3. Calidad de Acabados & Materiales</h3>
                <div className="options-grid finish-types">
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="standard"
                      checked={finishQuality === "standard"}
                      onChange={() => setFinishQuality("standard")}
                    />
                    <div className="card-content">
                      <h4>Estándar</h4>
                      <p>Materiales funcionales y duraderos (AMBOSS Core)</p>
                    </div>
                  </label>
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="premium"
                      checked={finishQuality === "premium"}
                      onChange={() => setFinishQuality("premium")}
                    />
                    <div className="card-content">
                      <h4>Premium</h4>
                      <p>Equilibrio entre diseño e ingeniería</p>
                    </div>
                  </label>
                  <label className="sim-card">
                    <input
                      type="radio"
                      name="finishQuality"
                      value="luxury"
                      checked={finishQuality === "luxury"}
                      onChange={() => setFinishQuality("luxury")}
                    />
                    <div className="card-content">
                      <h4>Vanguardista</h4>
                      <p>Acabados disruptivos y experimentales (LIIT Core)</p>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* STEP 4: Special Add-ons */}
          {currentStep === 3 && (
            <div className="step-container active-step">
              <div className="sim-group">
                <h3 className="sim-title">4. Especialidades & Diseño Adicional</h3>
                <div className="toggle-list">
                  {[
                    { id: "smart", title: "Domótica Smart Home", desc: "Integración tecnológica integral." },
                    { id: "eco", title: "Sostenibilidad (Paneles Solares)", desc: "Energía verde y certificación LEED." },
                    { id: "landscape", title: "Paisajismo Premium", desc: "Diseño de exteriores y jardines conceptuales." },
                    { id: "interior", title: "Interiorismo a la Medida", desc: "Diseño de mobiliario e iluminación (LIIT Studio)." },
                  ].map((addon) => (
                    <label key={addon.id} className="toggle-item">
                      <div className="toggle-info">
                        <h4>{addon.title}</h4>
                        <p>{addon.desc}</p>
                      </div>
                      <div className="toggle-switch">
                        <input
                          type="checkbox"
                          checked={addons[addon.id as keyof typeof addons]}
                          onChange={(e) => setAddons({ ...addons, [addon.id]: e.target.checked })}
                        />
                        <span className="slider round"></span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Navigation Controls */}
          <div className="step-navigation">
            {currentStep > 0 && (
              <button type="button" className="btn btn-secondary" onClick={prevStep}>
                Anterior
              </button>
            )}
            {currentStep < totalSteps - 1 && (
              <button type="button" className="btn btn-primary" onClick={nextStep}>
                Siguiente
              </button>
            )}
          </div>
        </section>

        {/* Right Column: Summary Panel */}
        <aside className="summary-panel-wrapper">
          <div className="summary-panel">
            <h2>Costo Estimado</h2>
            <div className="price-display">{formatCOP(totalCost)}</div>
            <div className="currency-note">* Valores de referencia aproximados en COP</div>

            <div className="summary-breakdown">
              <div className="breakdown-row">
                <span>Proyecto:</span>
                <span>{projectType.charAt(0).toUpperCase() + projectType.slice(1)}</span>
              </div>
              <div className="breakdown-row">
                <span>Área:</span>
                <span>{area} m²</span>
              </div>
              <div className="breakdown-row">
                <span>Acabados:</span>
                <span>
                  {finishQuality === "standard"
                    ? "Estándar"
                    : finishQuality === "premium"
                      ? "Premium"
                      : "Vanguardista"}
                </span>
              </div>
              <div className="breakdown-row divider"></div>
              <div className="breakdown-row">
                <span>Costo Construcción Básica:</span>
                <span>{formatCOP(baseConstructionCost)}</span>
              </div>
              <div className="breakdown-row">
                <span>Adicionales (Diseño/Tech):</span>
                <span>{formatCOP(addonsCost)}</span>
              </div>
            </div>

            <a
              href="https://wa.me/573157060211"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-quote"
            >
              Solicitar Cotización por WhatsApp
            </a>
          </div>
        </aside>
      </main>

      <footer className="global-footer neutral-footer">
        <p>
          &copy; 2026 LIIT / AMBOSS. Cálculos basados en tarifas estimadas del mercado de construcción colombiano.
        </p>
      </footer>
    </div>
  );
}
