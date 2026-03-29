/* empty css                                                */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DPVo62AF.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_DFw0WFAX.mjs';
import { g as getCollection } from '../chunks/_astro_content_DdAnXpNS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const projects = await getCollection("portfolio");
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Proyectos | Pimenta Studio", "description": "Conoce los proyectos que hemos desarrollado para nuestros clientes." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 mx-auto max-w-screen-xl"> <div class="mb-12 text-center"> <h1 class="greenhead text-4xl sm:text-5xl mb-4">Proyectos</h1> <p class="text-dark/70 max-w-xl mx-auto">
Conoce los proyectos que hemos desarrollado para nuestros clientes.
</p> </div> ${projects.length === 0 ? renderTemplate`<div class="flex justify-center items-center py-24"> <p class="text-dark/50 text-lg text-center">Próximamente nuevos proyectos</p> </div>` : renderTemplate`<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> ${projects.map((project) => renderTemplate`${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "tags": project.data.tags, "slug": project.id })}`)} </div>`} </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/portfolio/index.astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/portfolio/index.astro";
const $$url = "/portfolio";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
