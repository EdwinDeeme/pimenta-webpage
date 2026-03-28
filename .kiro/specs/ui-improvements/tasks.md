# Implementation Plan: UI Improvements — Pimenta Studio

## Overview

Implementación incremental de 8 mejoras visuales sobre el stack Astro + TailwindCSS + CSS puro + vanilla JS. Cada tarea modifica archivos existentes sin introducir nuevas dependencias npm.

## Tasks

- [x] 1. Animaciones globales en `src/styles/global.css`
  - Agregar variables CSS nuevas en `:root`: `--marquee-duration`, `--scroll-anim-duration`, `--scroll-anim-easing`, `--scroll-anim-distance`
  - Agregar keyframes: `@keyframes float-slow`, `@keyframes float-fast`, `@keyframes fadeScaleIn`, `@keyframes marquee`
  - Agregar clases utilitarias: `.animate-on-scroll`, `.animate-on-scroll.is-visible`
  - Agregar regla `@media (prefers-reduced-motion: reduce)` que desactiva todas las animaciones y muestra elementos visibles sin transición
  - _Requirements: 2.4, 2.5, 7.1, 7.5_

- [x] 2. ScrollObserver en el layout base
  - [x] 2.1 Agregar `<script>` inline en `src/layouts/MainLayout.astro` con lógica de `IntersectionObserver`
    - Threshold `0.15`, rootMargin `0px 0px -50px 0px`
    - Al detectar elemento visible: agregar clase `is-visible` y desconectar observer del elemento
    - Soporte de `data-stagger-container`: aplicar `transitionDelay = index * 100ms` a cada hijo con `animate-on-scroll`
    - Degradación elegante: si `IntersectionObserver` no existe en `window`, agregar `is-visible` a todos los elementos `animate-on-scroll` inmediatamente
    - Re-ejecutar en `document.addEventListener('astro:after-swap', ...)` para compatibilidad con View Transitions
    - _Requirements: 2.1, 2.2, 2.5, 2.6_

  - [ ]* 2.2 Escribir property test — Property 1: ScrollObserver agrega is-visible
    - **Property 1: ScrollObserver agrega is-visible a elementos visibles**
    - **Validates: Requirements 2.1, 2.2**

  - [ ]* 2.3 Escribir property test — Property 2: Stagger delay proporcional al índice
    - **Property 2: Stagger delay es proporcional al índice**
    - **Validates: Requirements 2.6**

- [x] 3. Hero con elementos decorativos CSS animados
  - Modificar `src/components/sections/Hero.astro`
  - Reemplazar `<Image src={HeroIlust}>` por `<div class="hero-deco" aria-hidden="true">` con 4 elementos hijos: `hero-deco__circle--lg`, `hero-deco__circle--sm`, `hero-deco__dots`, `hero-deco__gradient`
  - Agregar bloque `<style>` en el componente con estilos de `.hero-deco` y sus hijos, usando los keyframes `float-slow`, `float-fast` y `fadeScaleIn` definidos en global.css
  - En mobile (`< 640px`): `opacity: 0.3` y `pointer-events: none` en `.hero-deco`
  - Conservar los botones CTA "Agendar Reunión" y "Ver Portfolio" sin cambios
  - Eliminar el import de `HeroIlust` y de `astro:assets` si ya no se usa
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5_

- [x] 4. Sponsors con marquee CSS infinito
  - Modificar `src/components/sections/Sponsors.astro`
  - Reemplazar el `<div class="grid ...">` por estructura `sponsors-marquee-wrapper > sponsors-marquee > [sponsors-track × 2]`
  - Primer `sponsors-track`: logos originales con `aria-hidden="false"` (implícito)
  - Segundo `sponsors-track`: logos duplicados con `aria-hidden="true"`
  - Mantener efecto `grayscale` / `hover:grayscale-0` en cada logo individual
  - Agregar bloque `<style>` con `.sponsors-marquee-wrapper { overflow: hidden }`, `.sponsors-marquee { animation: marquee var(--marquee-duration) linear infinite }`, y regla `prefers-reduced-motion` que muestra grid estático y oculta el track duplicado
  - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

  - [ ]* 4.1 Escribir property test — Property 6: Sponsors duplica logos
    - **Property 6: Sponsors duplica logos para loop continuo**
    - **Validates: Requirements 7.2**

- [x] 5. Process rediseñado como timeline vertical zigzag
  - Modificar `src/components/sections/Process.astro`
  - Eliminar el import y uso de `<Accordion />`
  - Reemplazar por markup inline de `.process-timeline` con línea central y 4 pasos: Consulta Inicial, Análisis y Propuesta, Desarrollo e Implementación, Entrega y Soporte
  - Pasos impares: clase `process-step--left`; pares: `process-step--right`
  - Agregar clase `animate-on-scroll` a cada `.process-step`
  - Agregar `data-stagger-container` al `.process-timeline` para activar stagger del ScrollObserver
  - Agregar bloque `<style>` con layout responsive: columna única en `< 768px` (línea a la izquierda), zigzag en `≥ 768px` (línea central)
  - Usar clases Tailwind para número (`text-6xl font-medium text-accent/30`), card (`bg-gray rounded-[30px] p-8`) y contenedor (`relative max-w-4xl mx-auto`)
  - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6_

- [x] 6. Checkpoint — Verificar animaciones base
  - Asegurarse de que global.css compila sin errores, el ScrollObserver se inicializa correctamente, el Hero muestra elementos decorativos, Sponsors anima el marquee y Process muestra el timeline.
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. ServiceCard con SVG inline por servicio
  - Modificar `src/components/ui/ServiceCard.astro`
  - Eliminar imports de `icon6.svg`, `icon7.svg` y el componente `<Image>` del área de icono
  - Definir objeto de mapeo `svgMap` con 6 entradas (índices 1–6), cada una con un fragmento SVG inline de `width="80" height="80"` usando `currentColor`
  - SVGs: índice 1 → ventana de browser, 2 → megáfono/gráfico, 3 → pincel/paleta, 4 → lupa/gráfico ascendente, 5 → engranaje/terminal, 6 → bombilla/diagrama
  - Reemplazar `<picture>` por `<div class="...">` que renderiza `Fragment` con el SVG del índice correspondiente (o SVG genérico si índice > 6)
  - Agregar bloque `<style>` con `.service-card-inner { transition: transform 200ms ease-out }` y `.service-card-inner:hover { transform: scale(1.02) }`
  - Mantener enlace "Ver más" con su funcionalidad actual
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5_

  - [ ]* 7.1 Escribir property test — Property 3: SVG inline en ServiceCard
    - **Property 3: SVG inline presente en cada ServiceCard**
    - **Validates: Requirements 4.1, 4.2**

  - [ ]* 7.2 Escribir property test — Property 4: Esquema de color de ServiceCard
    - **Property 4: Esquema de color corresponde al índice**
    - **Validates: Requirements 4.3**

- [x] 8. ProjectCard con overlay gradiente en hover
  - Modificar `src/components/ui/ProjectCard.astro`
  - Envolver el `<img>` en `<div class="project-card__image-wrapper">` con `position: relative; overflow: hidden`
  - Agregar `<div class="project-card__overlay" aria-hidden="true">` absoluto con `background: linear-gradient(to top, rgba(0,0,0,0.7), transparent)` y `opacity: 0` en reposo
  - Agregar `<a href={/portfolio/${slug}} class="project-card__cta">Ver Proyecto →</a>` absoluto sobre el overlay, `opacity: 0` en reposo
  - Mover el enlace "Ver Proyecto" existente del área inferior al overlay (o mantener ambos y ocultar el inferior en hover)
  - Agregar bloque `<style>` con transiciones de hover: imagen `scale(1.05)`, overlay `opacity: 1`, CTA `opacity: 1`
  - Placeholder sin imagen: `background: linear-gradient(135deg, var(--accent), var(--dark))`
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5_

- [x] 9. ProductCard con gradiente y badge mejorado
  - Modificar `src/components/ui/ProductCard.astro`
  - Área del icono: cambiar `bg-gray-50` por `background: linear-gradient(to bottom, #fff7ed, #ffffff)` para estados "Disponible" y "Beta"; agregar `opacity-60` al área del icono cuando estado es "Próximamente"
  - Actualizar `badgeClass`: estado "Disponible" → `bg-[#fff3e0] text-[#b85c00] border border-[#ff9327]`; "Beta" → `bg-[#fef9c3] text-[#854d0e] border border-[#fbbf24]`; "Próximamente" → `bg-[#f3f4f6] text-[#6b7280] border border-[#d1d5db]`
  - Agregar `shadow-sm hover:shadow-md transition-shadow duration-200` al `<article>`
  - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5_

  - [ ]* 9.1 Escribir property test — Property 5: Estilo de ProductCard por estado
    - **Property 5: Estilo visual de ProductCard corresponde al estado**
    - **Validates: Requirements 6.1, 6.3, 6.4**

- [x] 10. Proposal rediseñado con fondo oscuro
  - Modificar `src/components/sections/Proposal.astro`
  - Eliminar import de `propImg` y el componente `<Image>` de la ilustración
  - Reemplazar `bg-[#F3F3F3]` por `bg-dark text-white` en el contenedor principal
  - Agregar `<div class="proposal-cta__deco" aria-hidden="true">` con dos orbs (`proposal-cta__orb--1`, `proposal-cta__orb--2`) y un elemento de grid decorativo
  - Agregar `<div class="proposal-cta__visual" aria-hidden="true">` con dos anillos CSS y un punto central
  - Actualizar el `<button>` a clase `btn-proposal` con `background: var(--accent)` y hover a blanco
  - Agregar bloque `<style>` con estilos de orbs (gradiente radial naranja semitransparente), anillos y botón
  - Responsivo: columna única en `< 768px`
  - _Requirements: 8.1, 8.2, 8.3, 8.4, 8.5, 8.6_

- [x] 11. Aplicar `animate-on-scroll` a componentes de tarjetas
  - En `src/components/ui/ServiceCard.astro`: agregar clase `animate-on-scroll` al elemento raíz del componente
  - En `src/components/ui/ProjectCard.astro`: agregar clase `animate-on-scroll` al `<article>`
  - En `src/components/ui/ProductCard.astro`: agregar clase `animate-on-scroll` al `<article>`
  - En los contenedores grid de `src/components/sections/Services.astro`, `PortfolioSection.astro` y `Products.astro`: agregar atributo `data-stagger-container`
  - _Requirements: 2.3, 2.6_

- [x] 12. Checkpoint final — Ensure all tests pass, ask the user if questions arise.

## Notes

- Las tareas marcadas con `*` son opcionales y pueden omitirse para un MVP más rápido
- Cada tarea referencia los requisitos específicos para trazabilidad
- Los property tests usan `fast-check` con Vitest (`npx vitest --run`)
- Los keyframes globales (tarea 1) deben completarse antes de las tareas 3 y 4
- El ScrollObserver (tarea 2) debe completarse antes de las tareas 5 y 11
