/* empty css                                                   */
import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate, d as renderComponent } from '../../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DPVo62AF.mjs';
import 'clsx';
import { c as capitalize, f as formatDate } from '../../chunks/utils_CIZL8hpr.mjs';
import { r as renderEntry, g as getCollection } from '../../chunks/_astro_content_DdAnXpNS.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro$1 = createAstro("https://pimenta.studio");
const $$Tags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Tags;
  const { tags } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-wrap gap-2"> ${tags.map((tag, index) => renderTemplate`<span class="px-2 py-1 bg-lime text-black rounded-full text-xs hover:opacity-90"><a${addAttribute("/articles/tag/" + tag, "href")}>#${capitalize(tag)}</a></span>`)} </div>`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/Tags.astro", void 0);

const $$Astro = createAstro("https://pimenta.studio");
async function getStaticPaths() {
  const entries = await getCollection("blog");
  return entries.map((entry) => ({
    params: { slug: entry.id },
    props: { entry }
  }));
}
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { entry } = Astro2.props;
  const { Content } = await renderEntry(entry);
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": `${entry.data.title} | Pimenta Studio`, "description": entry.data.summary }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 mx-auto max-w-screen-md"> <!-- Back --> <a href="/articles" class="inline-flex items-center gap-2 text-dark/60 hover:text-dark font-medium mb-10 transition-colors"> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg>
Volver al Blog
</a> <!-- Header --> <div class="mb-8"> <div class="flex items-center gap-3 mb-4"> <span class="text-xs font-medium px-3 py-1 rounded-full bg-[#fff3e0] text-[#b85c00] border border-[#ff9327]"> ${entry.data.type} </span> <span class="text-sm text-dark/50">${formatDate(entry.data.pubDate)}</span> </div> <h1 class="text-3xl sm:text-4xl font-medium text-dark leading-tight mb-4">${entry.data.title}</h1> <p class="text-dark/60 text-lg leading-relaxed mb-6">${entry.data.summary}</p> <!-- Author --> <div class="flex items-center gap-3 pb-6 border-b border-dark/10"> <img${addAttribute(entry.data.authImage, "src")}${addAttribute(entry.data.author, "alt")} class="w-10 h-10 rounded-full object-cover"> <span class="font-medium text-dark">${entry.data.author}</span> </div> </div> <!-- Cover image --> <img${addAttribute(entry.data.image.startsWith("/") ? entry.data.image : "/blog/" + entry.data.image, "src")}${addAttribute(entry.data.title, "alt")} class="w-full h-auto rounded-2xl mb-10 object-cover max-h-[420px]"> <!-- Tags --> <div class="mb-8"> ${renderComponent($$result2, "Tags", $$Tags, { "tags": entry.data.tags })} </div> <!-- Content --> <div class="content"> ${renderComponent($$result2, "Content", Content, {})} </div> </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/[...slug].astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/[...slug].astro";
const $$url = "/articles/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
