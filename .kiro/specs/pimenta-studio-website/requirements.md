# Requirements Document

## Introduction

Personalización completa del template Astro + TailwindCSS (basado en Positivus) para convertirlo en el sitio web oficial de **Pimenta Studio**, una startup tech costarricense que ofrece desarrollo web, marketing digital, diseño, SEO, consultorías, software a medida y SaaS propios.

El sitio debe reflejar una identidad de marca moderna y profesional usando Space Grotesk como tipografía y naranja (#ff9327) como color de acento. Se añadirán dos nuevas secciones (Portfolio y Productos/SaaS), se actualizará todo el contenido existente con información real de Pimenta Studio, y se crearán páginas dedicadas para el portfolio con rutas dinámicas.

Stack: Astro, TailwindCSS, Space Grotesk, color accent `#ff9327`.

---

## Glossary

- **Website**: El sitio web completo de Pimenta Studio construido sobre el template Astro/TailwindCSS.
- **Navbar**: Barra de navegación fija en la parte superior del sitio.
- **Hero**: Sección principal de bienvenida en la landing page.
- **Services**: Sección que lista los servicios ofrecidos por Pimenta Studio.
- **Portfolio**: Sección y conjunto de páginas que muestran proyectos realizados por Pimenta Studio.
- **Products**: Sección que muestra los productos SaaS propios de Pimenta Studio.
- **Project**: Un caso de trabajo individual dentro del Portfolio, con slug único.
- **SaaS_Product**: Un producto de software como servicio desarrollado por Pimenta Studio.
- **Slug**: Identificador único en formato URL-friendly para un Project.
- **Brand_Color**: El color naranja `#ff9327` usado como acento principal de la marca.
- **Content_Collection**: Colección de contenido de Astro definida en `src/content/config.ts`.
- **Landing_Page**: La página principal del sitio (`/`).
- **Portfolio_Page**: La página de listado de proyectos (`/portfolio`).
- **Project_Detail_Page**: La página de detalle de un proyecto (`/portfolio/[slug]`).

---

## Requirements

### Requirement 1: Identidad de Marca y Configuración Visual

**User Story:** Como visitante del sitio, quiero ver una identidad visual coherente de Pimenta Studio, para que pueda reconocer la marca y percibir profesionalismo.

#### Acceptance Criteria

1. THE Website SHALL usar `#ff9327` como color de acento principal en todos los elementos interactivos, highlights y etiquetas de sección, reemplazando cualquier color verde previo del template.
2. THE Website SHALL usar Space Grotesk (ya disponible en `/public/fonts/grotesk/`) como tipografía principal en todos los textos.
3. THE Website SHALL mostrar el nombre "Pimenta Studio" en el título del navegador y en los metadatos de SEO de cada página.
4. THE Navbar SHALL mostrar el logo de Pimenta Studio en el lado izquierdo.
5. THE Website SHALL mantener el esquema de colores: fondo blanco (`#ffffff`), fondo oscuro (`#191a23`), texto claro (`#f3f3f3`) y acento naranja (`#ff9327`).

---

### Requirement 2: Navbar Actualizado

**User Story:** Como visitante, quiero una barra de navegación clara con acceso a todas las secciones relevantes, para que pueda navegar fácilmente por el sitio.

#### Acceptance Criteria

1. THE Navbar SHALL incluir los siguientes enlaces: "Servicios" (`/#services`), "Portfolio" (`/portfolio`), "Productos" (`/#products`), "Proceso" (`/#process`), "Blog" (`/articles`).
2. THE Navbar SHALL incluir un botón de llamada a la acción "Agendar Reunión" que enlace al WhatsApp de Pimenta Studio.
3. WHEN el usuario accede desde un dispositivo móvil, THE Navbar SHALL mostrar un menú hamburguesa que despliega los enlaces al hacer clic.
4. THE Navbar SHALL permanecer fija en la parte superior de la pantalla durante el scroll (`position: fixed`).

---

### Requirement 3: Sección Hero Actualizada

**User Story:** Como visitante, quiero ver una propuesta de valor clara de Pimenta Studio al llegar al sitio, para que entienda qué hace la empresa en segundos.

#### Acceptance Criteria

1. THE Hero SHALL mostrar el titular principal: "Construimos el futuro digital de tu empresa".
2. THE Hero SHALL mostrar un subtítulo descriptivo que mencione los servicios principales: desarrollo web, marketing digital, diseño y software a medida.
3. THE Hero SHALL incluir un botón primario "Agendar Reunión" que enlace al WhatsApp de Pimenta Studio (`https://api.whatsapp.com/send?phone=50663536621`).
4. THE Hero SHALL incluir un botón secundario "Ver Portfolio" que enlace a `/portfolio`.
5. THE Hero SHALL mostrar la ilustración SVG existente o una equivalente en el lado derecho en pantallas medianas y grandes.

---

### Requirement 4: Sección de Servicios Actualizada

**User Story:** Como cliente potencial, quiero ver todos los servicios que ofrece Pimenta Studio, para que pueda evaluar si se ajustan a mis necesidades.

#### Acceptance Criteria

1. THE Services SHALL mostrar exactamente 6 tarjetas de servicio con los siguientes títulos: "Desarrollo Web", "Marketing Digital", "Diseño & Branding", "SEO", "Software a Medida", "Consultoría".
2. WHEN una tarjeta de servicio tiene `index === 1`, THE Services SHALL renderizarla con fondo gris claro (`#f3f3f3`) y título con fondo naranja.
3. WHEN una tarjeta de servicio tiene `index === 2`, THE Services SHALL renderizarla con fondo naranja (`#ff9327`) y título con fondo blanco.
4. WHEN una tarjeta de servicio tiene `index === 3`, THE Services SHALL renderizarla con fondo oscuro (`#191a23`) y texto claro.
5. THE Services SHALL incluir un enlace "Ver más" en cada tarjeta que apunte a la sección de contacto o a una URL relevante.

---

### Requirement 5: Nueva Sección Portfolio en Landing

**User Story:** Como visitante, quiero ver una muestra de proyectos realizados por Pimenta Studio en la landing page, para que pueda evaluar la calidad de su trabajo.

#### Acceptance Criteria

1. THE Landing_Page SHALL incluir una sección `Portfolio` con id `portfolio` que muestre hasta 3 proyectos destacados.
2. THE Portfolio SHALL mostrar para cada proyecto: título, descripción breve, tecnologías usadas (como tags), imagen de portada y un enlace "Ver Proyecto" que apunte a `/portfolio/[slug]`.
3. THE Portfolio SHALL incluir un botón "Ver todos los proyectos" que enlace a `/portfolio`.
4. THE Portfolio SHALL usar el componente `SectionTitle` existente con el título "Portfolio" y una descripción relevante.
5. WHEN no existen proyectos en la Content_Collection de portfolio, THE Portfolio SHALL mostrar un estado vacío con mensaje "Próximamente nuevos proyectos".

---

### Requirement 6: Página de Listado de Portfolio (`/portfolio`)

**User Story:** Como visitante interesado, quiero ver todos los proyectos de Pimenta Studio en una página dedicada, para que pueda explorar su trabajo completo.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL estar disponible en la ruta `/portfolio` y usar el layout `MainLayout` existente.
2. THE Portfolio_Page SHALL mostrar todos los proyectos de la Content_Collection de portfolio en una grilla responsiva.
3. THE Portfolio_Page SHALL mostrar para cada proyecto: imagen de portada, título, descripción breve, tags de tecnologías y enlace al detalle.
4. WHEN no existen proyectos en la colección, THE Portfolio_Page SHALL mostrar el mensaje "Próximamente nuevos proyectos".
5. THE Portfolio_Page SHALL tener metadatos SEO con título "Portfolio | Pimenta Studio" y descripción relevante.

---

### Requirement 7: Página de Detalle de Proyecto (`/portfolio/[slug]`)

**User Story:** Como visitante, quiero ver el detalle completo de un proyecto específico, para que pueda entender el alcance y resultado del trabajo realizado.

#### Acceptance Criteria

1. THE Project_Detail_Page SHALL estar disponible en la ruta `/portfolio/[slug]` y generarse estáticamente con `getStaticPaths`.
2. THE Project_Detail_Page SHALL mostrar: título del proyecto, imagen de portada, descripción completa (contenido Markdown), cliente, tecnologías usadas, año y enlace al proyecto en vivo (si existe).
3. IF el slug solicitado no existe en la Content_Collection, THEN THE Project_Detail_Page SHALL redirigir a la página 404.
4. THE Project_Detail_Page SHALL incluir un enlace "← Volver al Portfolio" que apunte a `/portfolio`.
5. THE Project_Detail_Page SHALL tener metadatos SEO dinámicos usando el título y descripción del proyecto.

---

### Requirement 8: Content Collection de Portfolio

**User Story:** Como desarrollador, quiero una Content Collection tipada para los proyectos del portfolio, para que pueda gestionar el contenido de forma estructurada y segura.

#### Acceptance Criteria

1. THE Content_Collection SHALL definir una colección `portfolio` en `src/content/config.ts` con el siguiente schema: `title` (string), `description` (string), `client` (string, opcional), `year` (number), `tags` (array de strings), `image` (string), `liveUrl` (string, opcional), `featured` (boolean, por defecto false).
2. THE Content_Collection SHALL aceptar archivos Markdown (`.md`) en `src/content/portfolio/`.
3. WHEN se accede a un archivo de portfolio, THE Content_Collection SHALL validar que los campos requeridos (`title`, `description`, `year`, `tags`, `image`) estén presentes.
4. IF un campo requerido falta en un archivo de portfolio, THEN THE Content_Collection SHALL lanzar un error de validación en tiempo de build.
5. THE Content_Collection SHALL incluir al menos 3 proyectos de ejemplo con contenido representativo de Pimenta Studio.

---

### Requirement 9: Nueva Sección Productos/SaaS

**User Story:** Como visitante, quiero conocer los productos SaaS propios de Pimenta Studio, para que pueda evaluar si alguno se adapta a mis necesidades.

#### Acceptance Criteria

1. THE Landing_Page SHALL incluir una sección `Products` con id `products` que muestre los SaaS propios de Pimenta Studio.
2. THE Products SHALL mostrar para cada SaaS_Product: nombre, descripción breve, estado ("Disponible", "Beta", "Próximamente"), ícono o imagen, y un enlace externo al producto.
3. THE Products SHALL usar tarjetas con el estilo visual del template (bordes redondeados, sombra inferior, colores alternados).
4. WHEN un SaaS_Product tiene estado "Próximamente", THE Products SHALL mostrar el enlace deshabilitado o con texto "En desarrollo".
5. THE Products SHALL incluir el componente `SectionTitle` con el título "Nuestros Productos" y descripción relevante.

---

### Requirement 10: Sección de Casos de Estudio Actualizada

**User Story:** Como cliente potencial, quiero ver resultados concretos obtenidos por Pimenta Studio, para que pueda confiar en su capacidad de entrega.

#### Acceptance Criteria

1. THE Cases SHALL mostrar al menos 3 casos de estudio con resultados reales o representativos de Pimenta Studio.
2. THE Cases SHALL mostrar para cada caso: descripción del resultado obtenido y un enlace "Más Información".
3. THE Cases SHALL usar el componente `Card` existente con fondo oscuro (`bg-dark`) y texto claro.
4. THE Cases SHALL reemplazar los textos genéricos del template por contenido específico de los servicios de Pimenta Studio (desarrollo web, SEO, marketing digital).

---

### Requirement 11: Sección de Proceso Actualizada

**User Story:** Como cliente potencial, quiero entender cómo trabaja Pimenta Studio, para que pueda saber qué esperar al contratarlos.

#### Acceptance Criteria

1. THE Process SHALL mostrar exactamente 4 pasos del flujo de trabajo de Pimenta Studio usando el componente `Accordion` existente.
2. THE Process SHALL usar los títulos: "Consulta Inicial", "Análisis y Propuesta", "Desarrollo e Implementación", "Entrega y Soporte".
3. WHEN el usuario hace clic en un paso del acordeón, THE Process SHALL expandir ese paso y colapsar los demás.
4. WHEN un paso está expandido, THE Process SHALL aplicar fondo naranja (`bg-green` que es `#ff9327`) al ítem activo.

---

### Requirement 12: Sección de Equipo Actualizada

**User Story:** Como visitante, quiero conocer al equipo fundador de Pimenta Studio, para que pueda generar confianza en la empresa.

#### Acceptance Criteria

1. THE Team SHALL mostrar exactamente 3 miembros fundadores: Percy Benavides (Director Creativo), Jose Ramírez (Director de Operaciones), Edwin Delgado (Director de Desarrollo).
2. THE Team SHALL mostrar para cada miembro: foto, nombre, rol y descripción de experiencia.
3. THE Team SHALL incluir un enlace al perfil de LinkedIn de cada miembro usando el ícono existente.
4. THE Team SHALL usar el componente `TeamCard` existente con el estilo de borde y sombra.

---

### Requirement 13: Sección de Testimonios Actualizada

**User Story:** Como visitante, quiero leer opiniones de clientes reales de Pimenta Studio, para que pueda validar la calidad de sus servicios.

#### Acceptance Criteria

1. THE Testimonials SHALL mostrar al menos 3 testimonios de clientes en el slider existente (`SwiperSlider`).
2. THE Testimonials SHALL mostrar para cada testimonio: cita del cliente, nombre y rol/empresa.
3. THE Testimonials SHALL reemplazar los testimonios genéricos del template por testimonios representativos de clientes de Pimenta Studio.
4. WHEN el usuario navega entre testimonios, THE Testimonials SHALL mostrar la transición suave del slider con los controles de navegación existentes.

---

### Requirement 14: Sección de Contacto y Footer Actualizados

**User Story:** Como visitante interesado, quiero encontrar fácilmente la información de contacto de Pimenta Studio, para que pueda comunicarme con ellos.

#### Acceptance Criteria

1. THE Contact SHALL mostrar el formulario existente con los campos: Nombre, Correo y Mensaje.
2. THE Footer SHALL mostrar el email `contacto@pimenta.studio`, teléfono `+506 6353 6621` y dirección "San José, Costa Rica".
3. THE Footer SHALL incluir enlaces a redes sociales de Pimenta Studio (Instagram, LinkedIn, Facebook).
4. THE Footer SHALL mostrar los enlaces de navegación actualizados incluyendo Portfolio y Productos.
5. THE Footer SHALL mostrar el copyright "© 2024 Pimenta Studio. Todos los derechos reservados."

---

### Requirement 15: Sección de Sponsors/Clientes Actualizada

**User Story:** Como visitante, quiero ver con qué empresas o tecnologías ha trabajado Pimenta Studio, para que pueda evaluar su experiencia.

#### Acceptance Criteria

1. THE Sponsors SHALL mostrar logos de tecnologías o clientes relevantes para Pimenta Studio (ej: logos de tecnologías como Astro, React, WordPress, o logos de clientes reales).
2. THE Sponsors SHALL aplicar efecto `grayscale` por defecto y mostrar color al hacer hover, usando las clases existentes.
3. THE Sponsors SHALL mostrar al menos 6 logos en una grilla responsiva.

---

### Requirement 16: Metadatos SEO y Datos del Sitio

**User Story:** Como administrador del sitio, quiero que todos los metadatos SEO reflejen la identidad de Pimenta Studio, para que el sitio sea indexado correctamente.

#### Acceptance Criteria

1. THE Website SHALL actualizar `src/data/siteData.json` con: `title: "Pimenta Studio"`, `description` relevante al negocio e `image` de portada.
2. THE Landing_Page SHALL tener el título "Pimenta Studio | Desarrollo Web, Marketing Digital y Software a Medida".
3. THE Portfolio_Page SHALL tener el título "Portfolio | Pimenta Studio".
4. THE Project_Detail_Page SHALL tener título dinámico en formato "[Nombre del Proyecto] | Pimenta Studio".
5. THE Website SHALL incluir metadatos Open Graph para compartir en redes sociales en todas las páginas principales.
