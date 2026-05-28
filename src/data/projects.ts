export type Project = {
  slug: string;
  title: string;
  sector: string;
  location: string;
  category: "Comercial" | "Residencial" | "Inmobiliario" | "Obra civil" | "Alianza";
  scope: string;
  client: string;
  image: string;
  gallery: string[];
  description: string;
  services: string[];
};

import avisinCover from "@/assets/AMBOSS_OPT/avisinCover.jpg";
import avisinGallery1 from "@/assets/AMBOSS_OPT/avisinGallery1.jpg";
import avisinGallery2 from "@/assets/AMBOSS_OPT/avisinGallery2.jpg";
import avisinGallery3 from "@/assets/AMBOSS_OPT/avisinGallery3.jpg";

import casaApartadoCover from "@/assets/AMBOSS_OPT/casaApartadoCover.jpg";
import casaApartadoGallery1 from "@/assets/AMBOSS_OPT/casaApartadoGallery1.jpg";
import casaApartadoGallery2 from "@/assets/AMBOSS_OPT/casaApartadoGallery2.jpg";
import casaApartadoGallery3 from "@/assets/AMBOSS_OPT/casaApartadoGallery3.jpg";

import coosanandresitoCover from "@/assets/AMBOSS_OPT/coosanandresitoCover.jpg";
import coosanandresitoGallery1 from "@/assets/AMBOSS_OPT/coosanandresitoGallery1.jpg";
import coosanandresitoGallery2 from "@/assets/AMBOSS_OPT/coosanandresitoGallery2.jpg";
import coosanandresitoGallery3 from "@/assets/AMBOSS_OPT/coosanandresitoGallery3.jpg";

import ecoOroCover from "@/assets/AMBOSS_OPT/ecoOroCover.jpg";
import ecoOroGallery1 from "@/assets/AMBOSS_OPT/ecoOroGallery1.jpg";
import ecoOroGallery2 from "@/assets/AMBOSS_OPT/ecoOroGallery2.jpg";
import ecoOroGallery3 from "@/assets/AMBOSS_OPT/ecoOroGallery3.jpg";

import finecoopCover from "@/assets/AMBOSS_OPT/finecoopCover.jpg";
import finecoopGallery1 from "@/assets/AMBOSS_OPT/finecoopGallery1.jpg";
import finecoopGallery2 from "@/assets/AMBOSS_OPT/finecoopGallery2.jpg";
import finecoopGallery3 from "@/assets/AMBOSS_OPT/finecoopGallery3.jpg";

import libarDogCover from "@/assets/AMBOSS_OPT/libarDogCover.jpg";
import libarDogGallery1 from "@/assets/AMBOSS_OPT/libarDogGallery1.jpg";
import libarDogGallery2 from "@/assets/AMBOSS_OPT/libarDogGallery2.jpg";
import libarDogGallery3 from "@/assets/AMBOSS_OPT/libarDogGallery3.jpg";

import ibgCover from "@/assets/AMBOSS_OPT/ibgCover.jpg";
import ibgGallery1 from "@/assets/AMBOSS_OPT/ibgGallery1.jpg";
import ibgGallery2 from "@/assets/AMBOSS_OPT/ibgGallery2.jpg";
import ibgGallery3 from "@/assets/AMBOSS_OPT/ibgGallery3.jpg";

import insummaCover from "@/assets/AMBOSS_OPT/insummaCover.jpg";
import insummaGallery1 from "@/assets/AMBOSS_OPT/insummaGallery1.jpg";
import insummaGallery2 from "@/assets/AMBOSS_OPT/insummaGallery2.jpg";
import insummaGallery3 from "@/assets/AMBOSS_OPT/insummaGallery3.jpg";

import laEconomicaCover from "@/assets/AMBOSS_OPT/laEconomicaCover.jpg";
import laEconomicaGallery1 from "@/assets/AMBOSS_OPT/laEconomicaGallery1.jpg";
import laEconomicaGallery2 from "@/assets/AMBOSS_OPT/laEconomicaGallery2.jpg";
import laEconomicaGallery3 from "@/assets/AMBOSS_OPT/laEconomicaGallery3.jpg";

import losRoblesCover from "@/assets/AMBOSS_OPT/losRoblesCover.jpg";
import losRoblesGallery1 from "@/assets/AMBOSS_OPT/losRoblesGallery1.jpg";
import losRoblesGallery2 from "@/assets/AMBOSS_OPT/losRoblesGallery2.jpg";
import losRoblesGallery3 from "@/assets/AMBOSS_OPT/losRoblesGallery3.jpg";

import teslaCover from "@/assets/AMBOSS_OPT/teslaCover.jpg";
import teslaGallery1 from "@/assets/AMBOSS_OPT/teslaGallery1.jpg";
import teslaGallery2 from "@/assets/AMBOSS_OPT/teslaGallery2.jpg";
import teslaGallery3 from "@/assets/AMBOSS_OPT/teslaGallery3.jpg";

import vegaCover from "@/assets/AMBOSS_OPT/vegaCover.jpg";
import vegaGallery1 from "@/assets/AMBOSS_OPT/vegaGallery1.jpg";
import vegaGallery2 from "@/assets/AMBOSS_OPT/vegaGallery2.jpg";
import vegaGallery3 from "@/assets/AMBOSS_OPT/vegaGallery3.jpg";

export const projects: Project[] = [
  {
    slug: "avisin-san-pio",
    title: "Avisin San Pío",
    sector: "Comercial",
    location: "Bucaramanga",
    category: "Comercial",
    scope: "Diseño integral y visualización",
    client: "Avisin",
    image: avisinCover,
    gallery: [avisinGallery1, avisinGallery2, avisinGallery3],
    description:
      "Proyecto comercial desarrollado por fases, con énfasis en fachada, oficinas, salas de reunión, zonas de atención y áreas complementarias.",
    services: ["Diseño integral", "Visualización 3D", "Coordinación técnica"],
  },
  {
    slug: "casa-apartado",
    title: "Casa Apartadó",
    sector: "Vivienda",
    location: "Apartadó",
    category: "Residencial",
    scope: "Diseño residencial",
    client: "Privado",
    image: casaApartadoCover,
    gallery: [casaApartadoGallery1, casaApartadoGallery2, casaApartadoGallery3],
    description:
      "Propuesta residencial que organiza el programa de vivienda con una lectura clara de volumetría, ventilación, fachada y relación con el entorno.",
    services: ["Diseño arquitectónico", "Modelado 3D", "Visualización"],
  },
  {
    slug: "coosanandresito-la-isla",
    title: "Coosanandresito La Isla",
    sector: "Comercial",
    location: "Bucaramanga",
    category: "Comercial",
    scope: "Adecuación comercial",
    client: "Coosanandresito La Isla",
    image: coosanandresitoCover,
    gallery: [coosanandresitoGallery1, coosanandresitoGallery2, coosanandresitoGallery3],
    description:
      "Diseño de espacios comerciales y administrativos para zonas de acceso, atención, cafetería, gerencia, juntas y áreas verdes.",
    services: ["Diseño integral", "Reforma", "Visualización"],
  },
  {
    slug: "eco-oro",
    title: "Eco-Oro",
    sector: "Corporativo",
    location: "Colombia",
    category: "Comercial",
    scope: "Espacios corporativos",
    client: "Eco-Oro",
    image: ecoOroCover,
    gallery: [ecoOroGallery1, ecoOroGallery2, ecoOroGallery3],
    description:
      "Visualización de espacios corporativos con enfoque en composición interior, iluminación, acabados y presentación clara del proyecto.",
    services: ["Diseño interior", "Modelado 3D", "Visualización"],
  },
  {
    slug: "finecoop",
    title: "Finecoop",
    sector: "Cooperativo",
    location: "Colombia",
    category: "Comercial",
    scope: "Diseño y adecuación",
    client: "Finecoop",
    image: finecoopCover,
    gallery: [finecoopGallery1, finecoopGallery2, finecoopGallery3],
    description:
      "Intervención para espacios de atención y operación, integrando diseño interior, circulación, mobiliario y documentación técnica.",
    services: ["Diseño integral", "Obra civil", "Documentación técnica"],
  },
  {
    slug: "libar-dog",
    title: "Libar Dog",
    sector: "Comercial",
    location: "Colombia",
    category: "Comercial",
    scope: "Proyecto construido",
    client: "Libar Dog",
    image: libarDogCover,
    gallery: [libarDogGallery1, libarDogGallery2, libarDogGallery3],
    description:
      "Proyecto comercial construido con atención a la operación diaria, experiencia del usuario, materiales y detalles de ejecución.",
    services: ["Construcción", "Reforma", "Acompañamiento de obra"],
  },
  {
    slug: "ibg-ingenieria",
    title: "IBG Ingeniería",
    sector: "Ingeniería",
    location: "Colombia",
    category: "Alianza",
    scope: "Coordinación técnica",
    client: "IBG Ingeniería",
    image: ibgCover,
    gallery: [ibgGallery1, ibgGallery2, ibgGallery3],
    description:
      "Acompañamiento técnico para integrar criterios de arquitectura, ingeniería y obra dentro de un mismo proceso de proyecto.",
    services: ["Coordinación técnica", "Obra civil", "Documentación"],
  },
  {
    slug: "insumma-bg",
    title: "Insumma BG",
    sector: "Industrial",
    location: "Colombia",
    category: "Obra civil",
    scope: "Pecuaria industrial",
    client: "Insumma BG",
    image: insummaCover,
    gallery: [insummaGallery1, insummaGallery2, insummaGallery3],
    description:
      "Arquitectura para oficinas, zonas administrativas y áreas de apoyo en un entorno productivo con necesidades técnicas específicas.",
    services: ["Obra civil", "Redes técnicas", "Diseño integral"],
  },
  {
    slug: "la-economica",
    title: "La Económica",
    sector: "Retail",
    location: "Colombia",
    category: "Comercial",
    scope: "Local comercial",
    client: "La Económica",
    image: laEconomicaCover,
    gallery: [laEconomicaGallery1, laEconomicaGallery2, laEconomicaGallery3],
    description:
      "Diseño comercial orientado a exposición de producto, lectura rápida del espacio, zonas de atención y experiencia de compra.",
    services: ["Diseño comercial", "Visualización", "Planimetría"],
  },
  {
    slug: "los-robles",
    title: "Los Robles",
    sector: "Inmobiliario",
    location: "Colombia",
    category: "Inmobiliario",
    scope: "Visualización inmobiliaria",
    client: "Los Robles",
    image: losRoblesCover,
    gallery: [losRoblesGallery1, losRoblesGallery2, losRoblesGallery3],
    description:
      "Visualización de proyecto inmobiliario para comunicar volumetría, materialidad, implantación y potencial comercial del desarrollo.",
    services: ["Visualización inmobiliaria", "Modelado 3D", "Factibilidad"],
  },
  {
    slug: "oficinas-tesla",
    title: "Oficinas Tesla",
    sector: "Corporativo",
    location: "Colombia",
    category: "Comercial",
    scope: "Oficinas corporativas",
    client: "Tesla",
    image: teslaCover,
    gallery: [teslaGallery1, teslaGallery2, teslaGallery3],
    description:
      "Diseño de oficinas con áreas de trabajo, salas de juntas y espacios de apoyo pensados para una operación eficiente y una imagen corporativa sólida.",
    services: ["Diseño integral", "Interiorismo", "Visualización 3D"],
  },
  {
    slug: "vega-campestre",
    title: "Vega Campestre",
    sector: "Inmobiliario",
    location: "Colombia",
    category: "Inmobiliario",
    scope: "Proyecto campestre",
    client: "Vega Campestre",
    image: vegaCover,
    gallery: [vegaGallery1, vegaGallery2, vegaGallery3],
    description:
      "Visualización de un proyecto campestre con énfasis en implantación, paisaje, volumetría y lectura comercial del conjunto.",
    services: ["Visualización inmobiliaria", "Parcelación", "Modelado 3D"],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
