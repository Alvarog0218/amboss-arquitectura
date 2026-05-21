export type Project = {
  slug: string;
  title: string;
  year: string;
  location: string;
  category: "Residencial" | "Comercial" | "Institucional" | "Interiorismo";
  area: string;
  client: string;
  image: string;
  description: string;
  withLiit?: boolean;
};

import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import hero from "@/assets/hero.jpg";

export const projects: Project[] = [
  {
    slug: "casa-bosque",
    title: "Casa Bosque",
    year: "2024",
    location: "La Calera, Cundinamarca",
    category: "Residencial",
    area: "320 m²",
    client: "Privado",
    image: hero,
    description:
      "Vivienda unifamiliar suspendida sobre el terreno natural. El programa se organiza en una caja de concreto en voladizo que enmarca el paisaje sin tocarlo.",
    withLiit: true,
  },
  {
    slug: "pabellon-norte",
    title: "Pabellón Norte",
    year: "2024",
    location: "Bogotá",
    category: "Residencial",
    area: "240 m²",
    client: "Privado",
    image: p1,
    description:
      "Volumen compacto de dos niveles en concreto teñido. Las grandes aperturas operan como filtros lumínicos, controlando la relación interior–exterior.",
  },
  {
    slug: "lounge-corporativo-liit",
    title: "Lounge Corporativo",
    year: "2024",
    location: "Medellín",
    category: "Comercial",
    area: "680 m²",
    client: "Confidencial",
    image: p2,
    description:
      "Adecuación de planta libre industrial. Conservamos la estructura existente y trabajamos por capas: mobiliario verde profundo, luz cenital y un eje central de circulación.",
    withLiit: true,
  },
  {
    slug: "centro-cultural",
    title: "Centro Cultural Vertebra",
    year: "2023",
    location: "Cali",
    category: "Institucional",
    area: "1.450 m²",
    client: "Pública",
    image: p3,
    description:
      "Edificio público de aletas verticales en concreto. La fachada modula la luz según la hora del día, generando una experiencia cambiante en la plaza.",
  },
  {
    slug: "boutique-noir",
    title: "Boutique Noir",
    year: "2023",
    location: "Bogotá",
    category: "Interiorismo",
    area: "140 m²",
    client: "Privado",
    image: p4,
    description:
      "Interior monocromo donde la luz es el material protagonista. Cada pieza expuesta se trata como una obra: nicho, sombra y silencio.",
  },
  {
    slug: "refugio-niebla",
    title: "Refugio Niebla",
    year: "2022",
    location: "Salento, Quindío",
    category: "Residencial",
    area: "180 m²",
    client: "Privado",
    image: p5,
    description:
      "Casa de descanso en madera carbonizada y cobre. Una sola fachada acristalada captura el bosque de niebla y lo convierte en mural cambiante.",
    withLiit: true,
  },
];

export const getProject = (slug: string) =>
  projects.find((p) => p.slug === slug);
