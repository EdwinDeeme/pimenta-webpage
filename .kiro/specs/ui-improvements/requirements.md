# Requirements Document

## Introduction

Mejoras visuales y de experiencia de usuario para el sitio web de Pimenta Studio, construido con Astro + TailwindCSS. El objetivo es reemplazar elementos genéricos de plantilla por un diseño moderno estilo startup, agregar animaciones sutiles de entrada y movimiento, y mejorar la jerarquía visual de cada sección. Todas las animaciones deben implementarse con CSS puro o vanilla JS inline en Astro, sin frameworks JS adicionales.

## Glossary

- **Hero**: Sección principal de la página de inicio con titular, descripción y CTAs
- **ServiceCard**: Componente de tarjeta que muestra cada servicio ofrecido
- **ProjectCard**: Componente de tarjeta que muestra proyectos del portfolio
- **ProductCard**: Componente de tarjeta que muestra productos propios del estudio
- **Process**: Sección que describe el flujo de trabajo del estudio (actualmente usa acordeón)
- **Sponsors**: Sección que muestra logos de tecnologías o clientes
- **Proposal**: Sección CTA al final de la página principal
- **ScrollObserver**: Lógica de Intersection Observer para activar animaciones al hacer scroll
- **Marquee**: Animación de desplazamiento horizontal infinito para la sección Sponsors
- **System**: El sitio web de Pimenta Studio en su conjunto

---

## Requirements

### Requirement 1: Hero con elementos decorativos animados

**User Story:** Como visitante del sitio, quiero ver un Hero visualmente impactante con elementos animados, para que la primera impresión transmita modernidad y profesionalismo.

#### Acceptance Criteria

1. THE System SHALL reemplazar la ilustración SVG genérica del Hero por un fondo con gradiente abstracto y elementos decorativos CSS (puntos, círculos, líneas)
2. WHEN la página carga, THE Hero SHALL mostrar los elementos decorativos con una animación de entrada (fade-in + scale) de duración máxima 1000ms
3. THE Hero SHALL incluir al menos dos formas decorativas animadas con movimiento flotante continuo (keyframe CSS) que no interfieran con la legibilidad del texto
4. WHEN el usuario visualiza el Hero en pantallas menores a 640px, THE Hero SHALL mantener la legibilidad del titular y los CTAs sin superposición de elementos decorativos
5. THE Hero SHALL conservar los botones CTA existentes ("Agendar Reunión" y "Ver Portfolio") con sus estilos actuales

---

### Requirement 2: Animaciones de entrada al hacer scroll

**User Story:** Como visitante del sitio, quiero que los elementos aparezcan con animaciones suaves al hacer scroll, para que la navegación se sienta fluida y moderna.

#### Acceptance Criteria

1. THE ScrollObserver SHALL detectar cuando un elemento con clase `animate-on-scroll` entra en el viewport con un threshold de 0.15
2. WHEN un elemento con clase `animate-on-scroll` entra en el viewport, THE ScrollObserver SHALL agregar la clase `is-visible` al elemento
3. THE System SHALL aplicar la clase `animate-on-scroll` a los componentes: ServiceCard, ProjectCard, ProductCard, y los pasos del Process
4. WHEN la clase `is-visible` es aplicada, THE System SHALL ejecutar una transición CSS de opacidad (0 → 1) y traslación vertical (20px → 0) con duración de 500ms y easing `ease-out`
5. IF el navegador no soporta Intersection Observer, THEN THE System SHALL mostrar todos los elementos visibles sin animación (degradación elegante)
6. THE ScrollObserver SHALL aplicar un `stagger` de 100ms entre elementos hijos de un mismo contenedor grid para crear efecto escalonado

---

### Requirement 3: Process rediseñado como línea de tiempo vertical

**User Story:** Como visitante del sitio, quiero ver el proceso de trabajo como una línea de tiempo numerada y moderna, para entender el flujo de trabajo de forma más clara y visual.

#### Acceptance Criteria

1. THE System SHALL reemplazar el componente Accordion del Process por un diseño de línea de tiempo vertical con pasos numerados
2. THE Process SHALL mostrar cada paso con: número de paso destacado, título, descripción y una línea conectora vertical entre pasos
3. WHEN el viewport es menor a 768px, THE Process SHALL mostrar los pasos en columna única con la línea conectora alineada a la izquierda
4. WHEN el viewport es mayor o igual a 768px, THE Process SHALL mostrar los pasos alternando entre izquierda y derecha de la línea central (layout zigzag)
5. THE Process SHALL mantener los 4 pasos existentes: Consulta Inicial, Análisis y Propuesta, Desarrollo e Implementación, Entrega y Soporte
6. WHEN un paso del Process entra en el viewport, THE ScrollObserver SHALL activar la animación de entrada del paso correspondiente

---

### Requirement 4: ServiceCard con iconos SVG inline

**User Story:** Como visitante del sitio, quiero ver las tarjetas de servicios con iconos SVG modernos y relevantes, para identificar rápidamente cada servicio ofrecido.

#### Acceptance Criteria

1. THE System SHALL reemplazar las imágenes PNG genéricas de ServiceCard por iconos SVG inline específicos para cada servicio
2. THE ServiceCard SHALL incluir un icono SVG inline representativo para cada uno de los 6 servicios: Desarrollo Web, Marketing Digital, Diseño & Branding, SEO & Posicionamiento, Software a Medida, Consultoría Estratégica
3. THE ServiceCard SHALL mantener el esquema de colores existente (3 variantes: gris, verde/naranja, oscuro) según el índice de la tarjeta
4. WHEN el usuario hace hover sobre una ServiceCard, THE ServiceCard SHALL aplicar una transición de escala (scale 1 → 1.02) con duración de 200ms
5. THE ServiceCard SHALL mantener el enlace "Ver más" existente con su funcionalidad actual

---

### Requirement 5: ProjectCard con overlay en hover

**User Story:** Como visitante del sitio, quiero ver las tarjetas de portfolio con un efecto de overlay al hacer hover, para que la interacción se sienta más rica y profesional.

#### Acceptance Criteria

1. THE ProjectCard SHALL mostrar la imagen del proyecto con un overlay de gradiente oscuro (transparente → rgba(0,0,0,0.7)) al hacer hover
2. WHEN el usuario hace hover sobre una ProjectCard, THE ProjectCard SHALL mostrar el enlace "Ver Proyecto" sobre la imagen con el overlay activo
3. THE ProjectCard SHALL aplicar una transición de escala en la imagen (scale 1 → 1.05) al hacer hover con duración de 300ms
4. THE ProjectCard SHALL mostrar el título y los tags debajo de la imagen, fuera del área de overlay, con tipografía mejorada
5. WHEN la imagen del proyecto no está disponible, THE ProjectCard SHALL mostrar un placeholder con gradiente usando los colores de la marca

---

### Requirement 6: ProductCard con gradiente y jerarquía visual mejorada

**User Story:** Como visitante del sitio, quiero ver las tarjetas de productos con más personalidad visual, para que los productos del estudio se perciban como propuestas de valor diferenciadas.

#### Acceptance Criteria

1. THE ProductCard SHALL incluir un gradiente sutil en el fondo del área del icono (de `#fff7ed` a `#ffffff`) para tarjetas con estado "Disponible" o "Beta"
2. THE ProductCard SHALL mostrar el badge de estado con mayor prominencia visual: tamaño de fuente `text-xs`, bordes redondeados `rounded-full` y color de fondo acorde al estado
3. WHEN el estado es "Disponible", THE ProductCard SHALL usar el color de acento (`--accent: #ff9327`) en el badge y en el enlace de acción
4. WHEN el estado es "Próximamente", THE ProductCard SHALL aplicar una opacidad reducida (0.6) al área del icono para indicar no disponibilidad
5. THE ProductCard SHALL aplicar una sombra sutil `shadow-sm` que se intensifica a `shadow-md` al hacer hover con transición de 200ms

---

### Requirement 7: Sponsors con animación marquee infinita

**User Story:** Como visitante del sitio, quiero ver los logos de sponsors/tecnologías desplazándose horizontalmente de forma continua, para que la sección se vea dinámica y no estática.

#### Acceptance Criteria

1. THE Sponsors SHALL reemplazar el grid estático por una animación de marquee horizontal infinita usando CSS `@keyframes` y `animation: marquee linear infinite`
2. THE Sponsors SHALL duplicar los logos en el DOM para crear el efecto de loop continuo sin saltos visibles
3. THE Sponsors SHALL mantener el efecto `grayscale` en reposo y `grayscale-0` al hacer hover en cada logo individual
4. WHEN el usuario tiene activada la preferencia `prefers-reduced-motion`, THE Sponsors SHALL mostrar los logos en un grid estático sin animación
5. THE Sponsors SHALL usar una velocidad de desplazamiento de 30 segundos por ciclo completo, ajustable mediante variable CSS `--marquee-duration`
6. THE Sponsors SHALL ocultar el overflow horizontal del contenedor para evitar scrollbar horizontal en la página

---

### Requirement 8: Proposal/CTA rediseñado con fondo oscuro

**User Story:** Como visitante del sitio, quiero ver la sección CTA con un diseño de alto impacto visual y fondo oscuro, para que invite a la acción de forma más efectiva.

#### Acceptance Criteria

1. THE Proposal SHALL reemplazar el fondo gris claro (`#F3F3F3`) por un fondo oscuro (`var(--dark)` o `#191a23`) con texto en color claro
2. THE Proposal SHALL incluir elementos decorativos de fondo (gradiente radial o formas abstractas) que añadan profundidad visual sin afectar la legibilidad
3. THE Proposal SHALL reemplazar la ilustración PNG genérica por un elemento visual abstracto construido con CSS (formas geométricas, gradientes)
4. THE Proposal SHALL mantener el titular "Hagamos que las cosas pasen", la descripción y el botón CTA con estilos adaptados al fondo oscuro
5. WHEN el usuario hace hover sobre el botón CTA del Proposal, THE Proposal SHALL aplicar una transición de color de fondo de `var(--accent)` a blanco con duración de 200ms
6. THE Proposal SHALL ser completamente responsivo, apilando el contenido en columna única en pantallas menores a 768px
