# Propuesta web — AMBOSS Arquitectos

Un sitio editorial, minimalista y de alto impacto visual que respira la identidad del manual: negro, verdes profundos (#253b28 / #416644), grises (#96928f / #d6d6d6), tipografías **Metalluna** (títulos) y **Anta** (texto). El sitio se siente como un portafolio de estudio premium (referentes: Herzog & de Meuron, BIG, Foster+Partners) con una capa de interacción que evoca _gestos arquitectónicos_: planos que se despliegan, módulos que se ensamblan, secciones que se construyen al hacer scroll.

## Identidad visual aplicada

- **Paleta**: fondo negro/grafito dominante, verde bosque como acento (CTAs, líneas, hovers), gris piedra para superficies secundarias, blanco hueso para texto largo.
- **Tipografía**: Metalluna Bold para H1/H2 (display grande, tracking amplio), Anta Regular para cuerpo y UI. Fallbacks vía Google Fonts (Anta está disponible; Metalluna se carga como webfont o sustituto cercano si no se provee el archivo).
- **Sistema gráfico**: líneas finas tipo plano técnico, retículas visibles sutiles, numeración de secciones (01 / 02 / 03), marcas de medida tipo blueprint en esquinas.

## Estructura del sitio (rutas TanStack)

```
/                 Home — manifiesto + obras destacadas
/estudio          Filosofía, equipo, alianza con LIIT
/proyectos        Grid filtrable de obras
/proyectos/$slug  Detalle de proyecto (galería + ficha técnica)
/servicios        Diseño arquitectónico, interiorismo, consultoría, gerencia
/contacto         Formulario + datos + mapa
```

## Página por página

**Home**

- Hero a pantalla completa: video/imagen de obra con overlay verde sutil; titular Metalluna gigante con efecto de "construcción" letra por letra (clip-path reveal vertical, como un muro que sube).
- Manifiesto corto con scroll horizontal de palabras clave.
- 3 proyectos destacados en layout asimétrico con hover de "plano técnico" (al pasar el mouse aparecen cotas, ejes y medidas sobre la imagen).
- Bloque "Servicios" con íconos de líneas finas.
- Tira de alianza **AMBOSS × LIIT** (ver más abajo).
- Footer arquitectónico con retícula y datos.

**Estudio**

- Sección "Sobre nosotros" con el texto del manual reescrito en clave web.
- Línea de tiempo vertical animada (los hitos aparecen como bloques que se "ensamblan" desde la izquierda).
- **Bloque dedicado "Empresa hermana: LIIT"** — banda destacada explicando la sinergia, con logo LIIT, enlace externo y CTA "Conocer LIIT".
- Equipo en grilla minimalista (foto B/N + nombre + rol).

**Proyectos**

- Grid masonry con filtros por categoría (Residencial, Comercial, Institucional, Interiorismo).
- Cada tarjeta: foto, año, ubicación, categoría. Hover muestra "ficha técnica" superpuesta.
- Transición de página al detalle: la tarjeta se expande hacia el viewport (shared-element style con view-transitions / Motion).

**Detalle de proyecto**

- Hero con título + datos (cliente, año, área, ubicación).
- Galería tipo scroll-stack (las imágenes se apilan y se reemplazan al hacer scroll).
- Bloque de "planos" con SVG que se dibujan al entrar en viewport (stroke-dashoffset).
- Proyectos relacionados al final.

**Servicios**

- 4 servicios como módulos apilables; al hacer hover/click se "abren" como cajones revelando descripción (acordeón con animación de profundidad).

**Contacto**

- Formulario minimalista (nombre, email, tipo de proyecto, mensaje).
- Datos de contacto, redes (@amboss.arquitectura), mapa embebido en estética monocroma.
- Mención de LIIT al pie con enlace.

## Micro-interacciones "arquitectónicas" (el alma del sitio)

1. **Blueprint hover** — al pasar el cursor sobre imágenes de proyecto aparecen líneas de cota, ejes y medidas como si fuera un plano técnico.
2. **Wall reveal** — los titulares grandes se revelan con clip-path vertical, como un muro construyéndose.
3. **Modular assembly** — las tarjetas de proyectos entran al viewport ensamblándose (los bloques deslizan desde direcciones distintas y se "encajan").
4. **Blueprint draw** — íconos y diagramas SVG se dibujan trazo a trazo al entrar en viewport.
5. **Grid overlay** — al hacer scroll aparece una retícula sutil de fondo (como papel de calco), reforzando el lenguaje técnico.
6. **Stacked scroll gallery** — galería de proyecto donde las imágenes se apilan y rotan ligeramente, como láminas de un dossier.
7. **Cursor de plano** — cursor personalizado con una pequeña cruz tipo CAD sobre áreas interactivas.
8. **Menú "blueprint"** — al abrir el menú, las opciones aparecen como capas de un plano (z-stack con leve parallax).

Stack de animación: **Motion (Framer Motion)** + CSS clip-path/transform + `IntersectionObserver` para los reveals.

## Alianza con LIIT — dónde se menciona

- **Home**: banda dedicada "Trabajamos junto a LIIT" antes del footer, con logo y CTA.
- **Estudio**: sección completa explicando la relación de empresa hermana.
- **Footer global**: línea "Empresa hermana de LIIT" con enlace en cada página.
- **Detalle de proyecto** (cuando aplique): badge "En colaboración con LIIT".

## Detalles técnicos

- **Stack**: TanStack Start (ya configurado), Tailwind v4, shadcn/ui, Motion para animaciones, Lucide para íconos base (estilizados a línea fina).
- **Tokens en `src/styles.css`**: se reescriben `--background`, `--foreground`, `--primary` (verde 416644), `--accent` (verde 253b28), `--muted` (grises), radios pequeños (estética arquitectónica recta).
- **Fuentes**: `@import` de Anta desde Google Fonts; Metalluna como `@font-face` (placeholder hasta que se provea el archivo, fallback a una display sans con personalidad similar como _Syncopate_ o _Big Shoulders Display_).
- **Imágenes**: placeholders generados con `imagegen` representando arquitectura contemporánea (concreto, vidrio, vegetación) en tratamiento monocromo + acento verde. Cuando tengas fotos reales, se reemplazan.
- **SEO**: cada ruta con `head()` propio (title, description, og:image), JSON-LD de `Organization` y `LocalBusiness`.
- **Performance**: imágenes lazy, animaciones con `prefers-reduced-motion` respetado.
- **Sin backend en esta fase** — el formulario de contacto se deja preparado para conectar Lovable Cloud + email cuando se decida.

## Entregables de esta primera iteración

1. Sistema de diseño en `src/styles.css` (paleta + tipografías + tokens).
2. Layout raíz con navbar minimalista + footer arquitectónico.
3. Home completa con todas las animaciones clave.
4. Páginas Estudio, Proyectos (grid + 2-3 detalles de ejemplo), Servicios y Contacto.
5. Componentes reutilizables: `BlueprintImage`, `WallReveal`, `ProjectCard`, `LiitBadge`, `SectionNumber`.
6. Imágenes generadas para hero y proyectos demo.

## Preguntas que me ayudarían a afinar (puedes responder al implementar)

- ¿Tienes el archivo de la tipografía **Metalluna** o uso un fallback display similar?
- ¿Tienes el **logo de LIIT** y URL de su sitio para enlazar?
- ¿Quieres incluir blog/noticias ahora o lo dejamos para después?
- ¿Idioma único español o también inglés?

Si te late, dale a **Implementar plan** y arranco con la home + sistema de diseño primero, luego el resto de rutas.
