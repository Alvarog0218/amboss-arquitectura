# Registro de Cambios - Amboss Arquitectura

Este archivo contiene un registro de los cambios realizados en el proyecto.

## [2026-06-02]
- Creación del archivo `cambios andres.md` para seguimiento de actividades.
- Implementación del Simulador de Proyectos:
    - Se portaron los archivos `simulator.html`, `simulator.js` y `style.css` a una nueva ruta en React.
    - Nueva ruta creada: `/simulador` (`src/routes/simulador.tsx`).
    - Se extrajeron los estilos específicos a `src/simulator.css`.
    - Integración de lógica de cálculo y navegación por pasos en React.
    - Se añadió el enlace al Simulador en la barra de navegación principal.
    - Se configuró la aplicación para ocultar el Nav y Footer global en la página del simulador para mantener su diseño original.
- Ajustes de diseño en el Footer:
    - Se eliminó la enumeración ("01 /", "02 /") de las secciones de Navegación y Contacto para un diseño más limpio.
- Actualización de Identidad Visual para LIIT (Empresa Hermana):
    - Se aplicó la paleta de colores oficial: **Marrón/Granate (#4d1f2e)** para textos y elementos de marca sobre un fondo claro **#bfaf91**.
    - Se integró la tipografía **Poppins** vía Google Fonts para las secciones de LIIT.
    - Se actualizó el componente `LiitBand.tsx` con los nuevos estilos, textos del brochure y ajustes de contraste para el fondo claro.
    - Se aplicó el color **#3b4d63** (azul grisáceo) a todos los títulos y elementos destacados de la sección para una identidad visual coherente.
    - Se renombró la sección "Empresa hermana" a "**Empresa aliada**" y se eliminó la enumeración ("04") para alinearse con el nuevo estilo global.
    - Se organizó el archivo del brochure en una carpeta dedicada `src/assets/brochure_liit/Brochure_LIIT.pdf` para asegurar su correcta apertura desde el botón de la sección.
- Actualización de imágenes:
    - Se reemplazó la imagen principal de la página de Estudio por el nuevo archivo `ESTUDIO.webp` para mejor rendimiento.
    - Se actualizaron todas las fotos de portada de la sección de Proyectos utilizando las nuevas imágenes en formato `.webp` de la carpeta `src/proyectos`, mejorando la calidad visual y el rendimiento.
- Ajustes de diseño globales:
    - Se eliminó la enumeración ("01", "02", etc.) de todas las secciones de página y listas en todo el sitio web para lograr un diseño más limpio y minimalista.
    - Se actualizó el componente `SectionNumber.tsx` para mostrar únicamente la etiqueta con una línea decorativa sutil.
    - Se ajustaron los layouts en las páginas de Inicio, Estudio, Servicios, Proyectos y Contacto para redistribuir el espacio tras la eliminación de los números.
    - Se modificó la barra de navegación para que, en dispositivos móviles y tamaños reducidos, solo se visualice la palabra "**AMBOSS**", ocultando el isotipo y el sufijo "/ ARQUITECTOS".
