/* empty css                                                   */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from '../../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DPVo62AF.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_DdAnXpNS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://pimenta.studio");
async function getStaticPaths() {
  const entries = await getCollection("portfolio");
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${entry.data.title} | Pimenta Studio`, "description": entry.data.description }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 mx-auto max-w-screen-lg"> <!-- Back link --> <a href="/portfolio" class="inline-flex items-center gap-2 text-dark/70 hover:text-dark font-medium mb-8 transition-colors duration-200"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg>
Volver a Proyectos
</a> <!-- Cover image --> <img${addAttribute(entry.data.image, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-auto rounded-2xl mb-10 object-cover max-h-[480px]"> <!-- Header --> <div class="mb-8"> <h1 class="text-4xl sm:text-5xl font-bold text-dark mb-4">${entry.data.title}</h1> <p class="text-dark/70 text-lg mb-6">${entry.data.description}</p> <!-- Meta: client, year --> <div class="flex flex-wrap gap-6 text-sm text-dark/60 mb-6"> ${entry.data.client && renderTemplate`<span> <span class="font-semibold text-dark">Cliente:</span> ${entry.data.client} </span>`} <span> <span class="font-semibold text-dark">Año:</span> ${entry.data.year} </span> </div> <!-- Tags --> <div class="flex flex-wrap gap-2 mb-6"> ${entry.data.tags.map((tag) => renderTemplate`<span class="bg-gray-100 text-dark text-sm font-medium px-3 py-1 rounded-full border border-dark/10"> ${tag} </span>`)} </div> <!-- Live URL button --> ${entry.data.liveUrl && renderTemplate`<a${addAttribute(entry.data.liveUrl, "href")} target="_blank" rel="noopener noreferrer" class="btn-primary inline-flex items-center gap-2">
Ver proyecto en vivo
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path> </svg> </a>`} </div> <hr class="border-dark/10 mb-8"> <!-- Markdown content --> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/portfolio/[slug].astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/portfolio/[slug].astro";
const $$url = "/portfolio/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
