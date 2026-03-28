# Design Document: Pimenta Studio Website

## Overview

Personalización del template Astro + TailwindCSS (Positivus) para convertirlo en el sitio web oficial de Pimenta Studio. El proyecto consiste en:

1. Actualizar el contenido y la identidad visual de todas las secciones existentes.
2. Añadir dos nuevas secciones en la landing: **Portfolio** y **Productos/SaaS**.
3. Crear las páginas `/portfolio` y `/portfolio/[slug]` con rutas estáticas.
4. Definir una Content Collection tipada `portfolio` en Astro.

El stack permanece igual: Astro (SSG), TailwindCSS, Space Grotesk, color acento `#ff9327`.

---

## Architecture

El sitio sigue la arquitectura estática de Astro (SSG). No hay servidor en runtime; todo se genera en build time.

```mermaid
graph TD
    A[src/content/portfolio/*.md] -->|getCollection| B[PortfolioSection.astro]
    A -->|getStaticPaths| C[/portfolio/slug.astro]
    A -->|getCollection| D[/portfolio/index.astro]
    E[src/data/siteData.json] --> F[MainLayout.astro]
    F --> G[index.astro]
    F --> D
    F --> C
    G --> B
    G --> H[ProductsSection.astro]
```

**Flujo de datos:**
- Los proyectos del portfolio se almacenan como archivos `.md` en `src/content/portfolio/`.
- Astro valida el frontmatter contra el schema Zod en build time.
- Las páginas de detalle se generan estáticamente con `getStaticPaths`.
- Los productos SaaS se definen como array estático en el componente `Products.astro` (sin Content Collection, ya que son pocos y no tienen cuerpo Markdown).

---

## Components and Interfaces

### Nuevos componentes

#### `src/components/sections/PortfolioSection.astro`
Sección de la landing que muestra hasta 3 proyectos `featured: true`.

```typescript
// Props: ninguna (consume getCollection internamente)
// Renderiza: SectionTitle + grid de ProjectCard + botón "Ver todos"
```

#### `src/components/ui/ProjectCard.astro`
Tarjeta reutilizable para mostrar un proyecto del portfolio.

```typescript
interface Props {
  title: string;
  description: string;
  image: string;
  tags: string[];
  slug: string;
}
```

#### `src/components/sections/Products.astro`
Sección de la landing que muestra los productos SaaS propios.

```typescript
// Props: ninguna (datos estáticos internos)
// Renderiza: SectionTitle + grid de ProductCard
```

#### `src/components/ui/ProductCard.astro`
Tarjeta para un producto SaaS.

```typescript
interface Props {
  name: string;
  description: string;
  status: 'Disponible' | 'Beta' | 'Próximamente';
  icon?: string;
  url?: string;
}
```

### Componentes existentes reutilizados

| Componente | Uso |
|---|---|
| `SectionTitle` | Título + descripción en Portfolio y Products |
| `Card` | Wrapper con borde/sombra en ProjectCard y ProductCard |
| `Tags` | Chips de tecnologías en ProjectCard |
| `MainLayout` | Layout de `/portfolio` y `/portfolio/[slug]` |
| `Navbar` | Actualizado con nuevos enlaces |
| `Footer` | Actualizado con datos reales |

### Páginas nuevas

| Ruta | Archivo | Descripción |
|---|---|---|
| `/portfolio` | `src/pages/portfolio/index.astro` | Listado completo de proyectos |
| `/portfolio/[slug]` | `src/pages/portfolio/[slug].astro` | Detalle de proyecto |

---

## Data Models

### Content Collection: `portfolio`

Definida en `src/content/config.ts`:

```typescript
const portfolioCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    year: z.number(),
    tags: z.array(z.string()),
    image: z.string(),
    liveUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
  }),
});
```

**Campos requeridos:** `title`, `description`, `year`, `tags`, `image`  
**Campos opcionales:** `client`, `liveUrl`, `featured` (default `false`)

### Modelo de Producto SaaS (estático)

```typescript
interface SaasProduct {
  name: string;
  description: string;
  status: 'Disponible' | 'Beta' | 'Próximamente';
  icon: string;        // ruta a asset SVG/PNG
  url: string | null;  // null si status === 'Próximamente'
}
```

### `src/data/siteData.json` (actualizado)

```json
{
  "title": "Pimenta Studio",
  "description": "Desarrollo web, marketing digital, diseño y software a medida para empresas que quieren crecer.",
  "image": "/cover.png",
  "url": "https://pimenta.studio"
}
```

### Estructura de archivos de portfolio

```
src/content/portfolio/
  proyecto-ejemplo-1.md   # featured: true
  proyecto-ejemplo-2.md   # featured: true
  proyecto-ejemplo-3.md   # featured: true
```

Frontmatter de ejemplo:

```yaml
---
title: "E-commerce para Tienda Local"
description: "Desarrollo de tienda online con carrito, pagos y panel de administración."
client: "Tienda XYZ"
year: 2024
tags: ["Astro", "TailwindCSS", "Stripe"]
image: "/portfolio/ecommerce-xyz.png"
liveUrl: "https://tiendaxyz.com"
featured: true
---
```

---

## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*


### Property 1: Schema Zod valida correctamente

*Para cualquier* objeto de frontmatter de portfolio, si contiene todos los campos requeridos (`title`, `description`, `year`, `tags`, `image`) con tipos correctos, el schema Zod debe aceptarlo; si falta algún campo requerido o tiene tipo incorrecto, debe rechazarlo con error de validación.

**Validates: Requirements 8.1, 8.3, 8.4**

### Property 2: getStaticPaths cubre toda la colección

*Para cualquier* conjunto de entradas en la Content Collection `portfolio`, `getStaticPaths` debe retornar exactamente un path por cada entrada, usando el `slug` de la entrada como parámetro.

**Validates: Requirements 7.1**

### Property 3: ProjectCard renderiza todos los campos requeridos

*Para cualquier* proyecto de la colección portfolio, el componente `ProjectCard` debe renderizar el título, descripción, imagen, tags y un enlace a `/portfolio/[slug]` del proyecto.

**Validates: Requirements 5.2, 6.3**

### Property 4: Título dinámico de página de detalle

*Para cualquier* proyecto de la colección, la página `/portfolio/[slug]` debe generar un `<title>` con el formato `"[title del proyecto] | Pimenta Studio"`.

**Validates: Requirements 7.5, 16.4**

### Property 5: Sección Portfolio muestra máximo 3 proyectos destacados

*Para cualquier* colección de proyectos con campo `featured`, el filtro aplicado en `PortfolioSection` debe retornar como máximo 3 proyectos, y todos deben tener `featured === true`.

**Validates: Requirements 5.1**

### Property 6: Estado vacío cuando no hay proyectos

*Para cualquier* colección de portfolio vacía (0 entradas), tanto `PortfolioSection` como `/portfolio` deben renderizar el mensaje "Próximamente nuevos proyectos" en lugar de una grilla vacía.

**Validates: Requirements 5.5, 6.4**

### Property 7: Productos con estado "Próximamente" tienen enlace deshabilitado

*Para cualquier* producto SaaS con `status === "Próximamente"`, el componente `ProductCard` debe renderizar el enlace como deshabilitado (atributo `disabled` o `aria-disabled="true"`) o mostrar el texto "En desarrollo" en lugar de un enlace activo.

**Validates: Requirements 9.4**

### Property 8: ProductCard renderiza todos los campos requeridos

*Para cualquier* producto SaaS del array de datos, el componente `ProductCard` debe renderizar el nombre, descripción, estado e ícono del producto.

**Validates: Requirements 9.2**

### Property 9: Array de servicios tiene exactamente 6 elementos

*Para cualquier* renderizado de la sección Services, el array de tarjetas debe tener exactamente 6 elementos, uno por cada servicio de Pimenta Studio.

**Validates: Requirements 4.1**

### Property 10: Cada tarjeta de servicio tiene enlace

*Para cualquier* tarjeta en el array de servicios, debe existir un campo `link` no vacío que se renderice como enlace "Ver más".

**Validates: Requirements 4.5**

### Property 11: Array de equipo tiene exactamente 3 miembros con datos completos

*Para cualquier* renderizado de la sección Team, el array debe tener exactamente 3 miembros, y cada miembro debe tener `name`, `role`, `description`, `pic` y `link` (LinkedIn) definidos y no vacíos.

**Validates: Requirements 12.1, 12.2, 12.3**

### Property 12: Array de testimonios tiene al menos 3 entradas con datos completos

*Para cualquier* renderizado de la sección Testimonials, el array debe tener al menos 3 testimonios, y cada testimonio debe tener `quote`, `name` y `role` definidos y no vacíos.

**Validates: Requirements 13.1, 13.2**

### Property 13: Array de casos de estudio tiene al menos 3 entradas con datos completos

*Para cualquier* renderizado de la sección Cases, el array debe tener al menos 3 casos, y cada caso debe tener `title` (descripción del resultado) y `link` definidos y no vacíos.

**Validates: Requirements 10.1, 10.2**

### Property 14: Array de proceso tiene exactamente 4 pasos

*Para cualquier* renderizado de la sección Process, el array de pasos del acordeón debe tener exactamente 4 elementos.

**Validates: Requirements 11.1**

### Property 15: Sponsors muestra al menos 6 logos

*Para cualquier* renderizado de la sección Sponsors, el array de logos debe tener al menos 6 elementos.

**Validates: Requirements 15.1, 15.3**

---

## Error Handling

### Build time (Astro + Zod)

- Si un archivo `.md` en `src/content/portfolio/` tiene frontmatter inválido (campo requerido faltante o tipo incorrecto), Astro lanzará un error de build con el mensaje de Zod indicando el campo problemático. El build falla y no se despliega contenido roto.
- Si `getStaticPaths` no encuentra entradas en la colección, retorna un array vacío y no se generan páginas de detalle (no es un error, es el estado vacío esperado).

### Runtime (navegador)

- Si el usuario navega a `/portfolio/slug-inexistente`, Astro sirve la página 404 existente (`src/pages/404.astro`). Esto se garantiza porque las páginas se generan estáticamente; cualquier ruta no generada cae en el 404 del hosting.
- Si una imagen referenciada en el frontmatter no existe en `public/`, Astro mostrará una imagen rota. Mitigación: documentar en el README que las imágenes deben colocarse en `public/portfolio/` antes de hacer build.

### Formulario de contacto

- El formulario existente (`Form.astro`) no tiene validación del lado del servidor (es un sitio estático). La validación es responsabilidad del servicio externo al que apunte el `action` del formulario (ej: Formspree, Netlify Forms).

---

## Testing Strategy

### Enfoque dual: Unit tests + Property-based tests

Ambos tipos son complementarios y necesarios para cobertura completa.

**Unit tests** (ejemplos concretos y casos borde):
- Verificar que `siteData.json` contiene `title: "Pimenta Studio"`.
- Verificar que el Navbar renderiza los 5 enlaces requeridos.
- Verificar que el Hero renderiza el titular y los dos botones con los hrefs correctos.
- Verificar que `/portfolio` tiene el título SEO correcto.
- Verificar que la página de detalle incluye el enlace "← Volver al Portfolio".
- Verificar que el Footer contiene el email, teléfono y copyright correctos.
- Verificar que existen al menos 3 archivos en `src/content/portfolio/`.

**Property-based tests** (propiedades universales):
- Usar **fast-check** (TypeScript/JavaScript) como librería de PBT.
- Cada test debe ejecutar mínimo **100 iteraciones**.
- Cada test debe incluir un comentario con el tag: `Feature: pimenta-studio-website, Property N: <texto de la propiedad>`.

#### Configuración de fast-check

```bash
npm install --save-dev fast-check
```

#### Ejemplo de property test

```typescript
// Feature: pimenta-studio-website, Property 1: Schema Zod valida correctamente
import fc from 'fast-check';
import { portfolioSchema } from '../src/content/config';

test('schema acepta objetos válidos y rechaza inválidos', () => {
  // Objetos válidos
  fc.assert(fc.property(
    fc.record({
      title: fc.string({ minLength: 1 }),
      description: fc.string({ minLength: 1 }),
      year: fc.integer({ min: 2000, max: 2100 }),
      tags: fc.array(fc.string(), { minLength: 1 }),
      image: fc.string({ minLength: 1 }),
    }),
    (data) => {
      expect(() => portfolioSchema.parse(data)).not.toThrow();
    }
  ), { numRuns: 100 });

  // Objetos inválidos (campo requerido faltante)
  fc.assert(fc.property(
    fc.record({
      description: fc.string({ minLength: 1 }),
      year: fc.integer({ min: 2000, max: 2100 }),
      tags: fc.array(fc.string(), { minLength: 1 }),
      image: fc.string({ minLength: 1 }),
      // title ausente intencionalmente
    }),
    (data) => {
      expect(() => portfolioSchema.parse(data)).toThrow();
    }
  ), { numRuns: 100 });
});
```

#### Mapeo de propiedades a tests

| Property | Tipo de test | Librería |
|---|---|---|
| 1 - Schema Zod valida | property | fast-check |
| 2 - getStaticPaths cubre colección | property | fast-check |
| 3 - ProjectCard renderiza campos | property | fast-check + @testing-library/dom |
| 4 - Título dinámico de detalle | property | fast-check |
| 5 - Máximo 3 proyectos featured | property | fast-check |
| 6 - Estado vacío | edge-case | unit test (vitest) |
| 7 - Próximamente deshabilitado | property | fast-check |
| 8 - ProductCard renderiza campos | property | fast-check |
| 9 - Exactamente 6 servicios | property | unit test (vitest) |
| 10 - Cada servicio tiene enlace | property | fast-check |
| 11 - 3 miembros con datos completos | property | fast-check |
| 12 - 3+ testimonios con datos | property | fast-check |
| 13 - 3+ casos con datos | property | fast-check |
| 14 - Exactamente 4 pasos proceso | property | unit test (vitest) |
| 15 - 6+ logos sponsors | property | unit test (vitest) |

**Cada propiedad debe ser implementada por un único property-based test.**
