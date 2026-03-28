# Implementation Plan: Pimenta Studio Website

## Overview

Personalización del template Astro + TailwindCSS (Positivus) para convertirlo en el sitio web oficial de Pimenta Studio. Las tareas siguen un orden incremental: configuración base → datos y colecciones → componentes nuevos → páginas nuevas → actualización de secciones existentes → datos de ejemplo → tests.

Stack: Astro, TailwindCSS, Space Grotesk, fast-check (PBT), vitest (unit tests).

## Tasks

- [x] 1. Configuración base: identidad visual y siteData
  - Actualizar `src/data/siteData.json` con `title: "Pimenta Studio"`, `description` y `url` reales.
  - Actualizar `tailwind.config.mjs`: renombrar el token `green` a `accent` con valor `#ff9327` (o añadir `accent` manteniendo compatibilidad), y verificar que los tokens `black`, `dark`, `gray`, `white` apunten a las variables CSS correctas.
  - Actualizar `src/styles/global.css`: cambiar la variable CSS `--green` a `#ff9327` para que el color de acento sea naranja en todo el sitio.
  - _Requirements: 1.1, 1.2, 1.5, 16.1_

- [x] 2. Content Collection de portfolio
  - [x] 2.1 Definir el schema Zod de la colección `portfolio` en `src/content/config.ts`
    - Añadir `portfolioCollection` con los campos: `title` (string), `description` (string), `client` (string, opcional), `year` (number), `tags` (array de strings), `image` (string), `liveUrl` (string url, opcional), `featured` (boolean, default false).
    - Exportar el schema como `portfolioSchema` para poder importarlo en los tests.
    - Registrar la colección en el objeto `collections`.
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

  - [ ]* 2.2 Escribir property test para el schema Zod (Property 1)
    - **Property 1: Schema Zod valida correctamente**
    - **Validates: Requirements 8.1, 8.3, 8.4**
    - Crear `tests/portfolio-schema.test.ts` usando fast-check y vitest.
    - Verificar que objetos con todos los campos requeridos son aceptados (100 runs).
    - Verificar que objetos sin `title` son rechazados (100 runs).

- [x] 3. Datos de ejemplo: proyectos portfolio
  - Crear directorio `src/content/portfolio/`.
  - Crear `src/content/portfolio/ecommerce-tienda-local.md` con `featured: true` y contenido representativo.
  - Crear `src/content/portfolio/landing-marketing-digital.md` con `featured: true` y contenido representativo.
  - Crear `src/content/portfolio/app-saas-gestion.md` con `featured: true` y contenido representativo.
  - Cada archivo debe incluir todos los campos requeridos del schema y un cuerpo Markdown con descripción extendida del proyecto.
  - _Requirements: 8.5_

- [x] 4. Componente ProjectCard
  - Crear `src/components/ui/ProjectCard.astro` con props: `title`, `description`, `image`, `tags`, `slug`.
  - Renderizar imagen de portada, título, descripción, tags (usando el componente `Tags` existente) y enlace "Ver Proyecto" apuntando a `/portfolio/[slug]`.
  - Usar el componente `Card` existente como wrapper.
  - _Requirements: 5.2, 6.3_

  - [ ]* 4.1 Escribir property test para ProjectCard (Property 3)
    - **Property 3: ProjectCard renderiza todos los campos requeridos**
    - **Validates: Requirements 5.2, 6.3**
    - Usar fast-check para generar props arbitrarias y verificar que título, descripción, imagen, tags y enlace al slug están presentes en el HTML renderizado.

- [x] 5. Componente ProductCard
  - Crear `src/components/ui/ProductCard.astro` con props: `name`, `description`, `status` (`'Disponible' | 'Beta' | 'Próximamente'`), `icon` (opcional), `url` (opcional).
  - Renderizar nombre, descripción, badge de estado e ícono.
  - WHEN `status === 'Próximamente'`, renderizar el enlace con `aria-disabled="true"` y texto "En desarrollo" en lugar de un enlace activo.
  - Usar el estilo visual del template (bordes redondeados, sombra inferior).
  - _Requirements: 9.2, 9.3, 9.4_

  - [ ]* 5.1 Escribir property test para ProductCard (Property 7 y 8)
    - **Property 7: Productos con estado "Próximamente" tienen enlace deshabilitado**
    - **Property 8: ProductCard renderiza todos los campos requeridos**
    - **Validates: Requirements 9.2, 9.4**
    - Usar fast-check para generar productos con `status: 'Próximamente'` y verificar `aria-disabled="true"`.
    - Usar fast-check para generar productos con cualquier status y verificar que nombre, descripción y estado están presentes.

- [x] 6. Sección PortfolioSection (landing)
  - Crear `src/components/sections/PortfolioSection.astro`.
  - Usar `getCollection('portfolio')` y filtrar proyectos con `featured === true`, limitando a máximo 3.
  - Renderizar `SectionTitle` con título "Portfolio" y descripción relevante.
  - Renderizar grid de `ProjectCard` con los proyectos filtrados.
  - WHEN la colección está vacía o no hay proyectos featured, mostrar mensaje "Próximamente nuevos proyectos".
  - Incluir botón "Ver todos los proyectos" enlazando a `/portfolio`.
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

  - [ ]* 6.1 Escribir property test para el filtro de featured (Property 5)
    - **Property 5: Sección Portfolio muestra máximo 3 proyectos destacados**
    - **Validates: Requirements 5.1**
    - Usar fast-check para generar arrays de proyectos con distintas combinaciones de `featured` y verificar que el filtro retorna ≤ 3 elementos y todos tienen `featured === true`.

  - [ ]* 6.2 Escribir unit test para estado vacío (Property 6)
    - **Property 6: Estado vacío cuando no hay proyectos**
    - **Validates: Requirements 5.5, 6.4**
    - Verificar que con colección vacía se renderiza el mensaje "Próximamente nuevos proyectos".

- [x] 7. Sección Products (landing)
  - Crear `src/components/sections/Products.astro` con array estático de productos SaaS de Pimenta Studio (mínimo 2 productos, al menos uno con `status: 'Próximamente'`).
  - Renderizar `SectionTitle` con título "Nuestros Productos" y descripción relevante.
  - Renderizar grid de `ProductCard` con los productos del array.
  - Añadir `id="products"` al elemento raíz de la sección.
  - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5_

- [x] 8. Página `/portfolio` (listado)
  - Crear `src/pages/portfolio/index.astro`.
  - Usar `getCollection('portfolio')` para obtener todos los proyectos.
  - Renderizar todos los proyectos en una grilla responsiva usando `ProjectCard`.
  - WHEN la colección está vacía, mostrar mensaje "Próximamente nuevos proyectos".
  - Usar `MainLayout` con título "Portfolio | Pimenta Studio" y descripción SEO relevante.
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 16.3_

- [x] 9. Página `/portfolio/[slug]` (detalle)
  - Crear `src/pages/portfolio/[slug].astro`.
  - Implementar `getStaticPaths` usando `getCollection('portfolio')` para generar un path por cada entrada.
  - Renderizar: título, imagen de portada, contenido Markdown (`<Content />`), cliente, tags, año y `liveUrl` (si existe).
  - Incluir enlace "← Volver al Portfolio" apuntando a `/portfolio`.
  - Usar `MainLayout` con título dinámico `"[title] | Pimenta Studio"` y descripción del proyecto.
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 16.4_

  - [ ]* 9.1 Escribir property test para getStaticPaths (Property 2)
    - **Property 2: getStaticPaths cubre toda la colección**
    - **Validates: Requirements 7.1**
    - Usar fast-check para generar arrays de entradas de portfolio y verificar que `getStaticPaths` retorna exactamente un path por entrada con el slug correcto.

  - [ ]* 9.2 Escribir property test para título dinámico (Property 4)
    - **Property 4: Título dinámico de página de detalle**
    - **Validates: Requirements 7.5, 16.4**
    - Usar fast-check para generar títulos de proyecto y verificar que el `<title>` generado sigue el formato `"[title] | Pimenta Studio"`.

- [x] 10. Checkpoint — Verificar build y navegación básica
  - Asegurar que `astro build` completa sin errores de validación Zod.
  - Verificar que las rutas `/portfolio` y `/portfolio/[slug]` se generan correctamente.
  - Asegurar que todos los tests hasta este punto pasan. Preguntar al usuario si hay dudas.

- [x] 11. Actualizar Navbar
  - Modificar `src/components/ui/Navbar.astro` para incluir los enlaces: "Servicios" (`/#services`), "Portfolio" (`/portfolio`), "Productos" (`/#products`), "Proceso" (`/#process`), "Blog" (`/articles`).
  - Actualizar el botón CTA a "Agendar Reunión" con enlace a WhatsApp (`https://api.whatsapp.com/send?phone=50663536621`).
  - Mostrar el logo de Pimenta Studio en el lado izquierdo.
  - _Requirements: 2.1, 2.2, 2.3, 2.4, 1.4_

- [x] 12. Actualizar sección Hero
  - Modificar `src/components/sections/Hero.astro`.
  - Titular: "Construimos el futuro digital de tu empresa".
  - Subtítulo: mencionar desarrollo web, marketing digital, diseño y software a medida.
  - Botón primario "Agendar Reunión" → WhatsApp (`https://api.whatsapp.com/send?phone=50663536621`).
  - Botón secundario "Ver Portfolio" → `/portfolio`.
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

  - [ ]* 12.1 Escribir unit test para Hero
    - Verificar que el titular, los dos botones y sus hrefs correctos están presentes en el HTML renderizado.
    - _Requirements: 3.1, 3.3, 3.4_

- [x] 13. Actualizar sección Services
  - Modificar `src/components/sections/Services.astro` con exactamente 6 tarjetas: "Desarrollo Web", "Marketing Digital", "Diseño & Branding", "SEO", "Software a Medida", "Consultoría".
  - Mantener la lógica de colores alternados por índice (gris, naranja, oscuro).
  - Incluir enlace "Ver más" en cada tarjeta.
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 13.1 Escribir property test para Services (Property 9 y 10)
    - **Property 9: Array de servicios tiene exactamente 6 elementos**
    - **Property 10: Cada tarjeta de servicio tiene enlace**
    - **Validates: Requirements 4.1, 4.5**
    - Verificar que el array de servicios tiene exactamente 6 elementos y que cada uno tiene un campo `link` no vacío.

- [x] 14. Actualizar sección Cases
  - Modificar `src/components/sections/Cases.astro` con al menos 3 casos de estudio con resultados reales o representativos de Pimenta Studio (desarrollo web, SEO, marketing digital).
  - Cada caso debe tener descripción del resultado y enlace "Más Información".
  - _Requirements: 10.1, 10.2, 10.3, 10.4_

  - [ ]* 14.1 Escribir property test para Cases (Property 13)
    - **Property 13: Array de casos de estudio tiene al menos 3 entradas con datos completos**
    - **Validates: Requirements 10.1, 10.2**
    - Verificar que el array tiene ≥ 3 elementos y que cada uno tiene `title` y `link` no vacíos.

- [x] 15. Actualizar sección Process
  - Modificar `src/components/sections/Process.astro` con exactamente 4 pasos: "Consulta Inicial", "Análisis y Propuesta", "Desarrollo e Implementación", "Entrega y Soporte".
  - Usar el componente `Accordion` existente.
  - _Requirements: 11.1, 11.2, 11.3, 11.4_

  - [ ]* 15.1 Escribir unit test para Process (Property 14)
    - **Property 14: Array de proceso tiene exactamente 4 pasos**
    - **Validates: Requirements 11.1**
    - Verificar que el array de pasos tiene exactamente 4 elementos.

- [x] 16. Actualizar sección Team
  - Modificar `src/components/sections/Team.astro` con exactamente 3 miembros: Percy Benavides (Director Creativo), Jose Ramírez (Director de Operaciones), Edwin Delgado (Director de Desarrollo).
  - Cada miembro debe tener foto, nombre, rol, descripción y enlace LinkedIn.
  - _Requirements: 12.1, 12.2, 12.3, 12.4_

  - [ ]* 16.1 Escribir property test para Team (Property 11)
    - **Property 11: Array de equipo tiene exactamente 3 miembros con datos completos**
    - **Validates: Requirements 12.1, 12.2, 12.3**
    - Verificar que el array tiene exactamente 3 elementos y que cada uno tiene `name`, `role`, `description`, `pic` y `link` no vacíos.

- [x] 17. Actualizar sección Testimonials
  - Modificar `src/components/sections/Testimonials.astro` con al menos 3 testimonios representativos de clientes de Pimenta Studio.
  - Cada testimonio debe tener `quote`, `name` y `role`.
  - _Requirements: 13.1, 13.2, 13.3, 13.4_

  - [ ]* 17.1 Escribir property test para Testimonials (Property 12)
    - **Property 12: Array de testimonios tiene al menos 3 entradas con datos completos**
    - **Validates: Requirements 13.1, 13.2**
    - Verificar que el array tiene ≥ 3 elementos y que cada uno tiene `quote`, `name` y `role` no vacíos.

- [x] 18. Actualizar sección Sponsors
  - Modificar `src/components/sections/Sponsors.astro` con al menos 6 logos de tecnologías o clientes relevantes para Pimenta Studio.
  - Mantener efecto `grayscale` por defecto y color en hover.
  - _Requirements: 15.1, 15.2, 15.3_

  - [ ]* 18.1 Escribir unit test para Sponsors (Property 15)
    - **Property 15: Sponsors muestra al menos 6 logos**
    - **Validates: Requirements 15.1, 15.3**
    - Verificar que el array de logos tiene ≥ 6 elementos.

- [x] 19. Actualizar Contact y Footer
  - Modificar `src/components/sections/Contact.astro`: verificar que el formulario tiene los campos Nombre, Correo y Mensaje.
  - Modificar `src/components/ui/Footer.astro` con: email `contacto@pimenta.studio`, teléfono `+506 6353 6621`, dirección "San José, Costa Rica", enlaces de redes sociales (Instagram, LinkedIn, Facebook), enlaces de navegación actualizados (Portfolio, Productos), copyright "© 2024 Pimenta Studio. Todos los derechos reservados."
  - _Requirements: 14.1, 14.2, 14.3, 14.4, 14.5_

  - [ ]* 19.1 Escribir unit test para Footer
    - Verificar que el email, teléfono y copyright correctos están presentes en el HTML renderizado.
    - _Requirements: 14.2, 14.5_

- [x] 20. Integrar nuevas secciones en index.astro
  - Modificar `src/pages/index.astro` para importar y renderizar `PortfolioSection` y `Products` en el orden correcto: Hero → Sponsors → Services → PortfolioSection → Products → Cases → Process → Team → Testimonials → Contact.
  - Actualizar el título de la página a "Pimenta Studio | Desarrollo Web, Marketing Digital y Software a Medida".
  - _Requirements: 5.1, 9.1, 16.2_

- [ ] 21. Configurar vitest y fast-check
  - Instalar dependencias de test: `npm install --save-dev vitest fast-check`.
  - Crear `vitest.config.ts` con configuración mínima para el proyecto Astro.
  - Crear directorio `tests/` en la raíz del proyecto.
  - _Requirements: (infraestructura de testing)_

- [ ] 22. Checkpoint final — Todos los tests pasan
  - Ejecutar `npx vitest --run` y verificar que todos los tests pasan.
  - Ejecutar `astro build` y verificar que el build completa sin errores.
  - Asegurar que las 15 propiedades del diseño están cubiertas por tests. Preguntar al usuario si hay dudas.

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido.
- Cada tarea referencia requisitos específicos para trazabilidad.
- Los property tests usan fast-check con mínimo 100 iteraciones (`numRuns: 100`).
- Cada property test debe incluir el comentario: `// Feature: pimenta-studio-website, Property N: <texto>`.
- Las imágenes de portfolio deben colocarse en `public/portfolio/` antes del build.
