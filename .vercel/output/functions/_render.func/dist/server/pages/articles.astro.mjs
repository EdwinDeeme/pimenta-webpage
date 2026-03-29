/* empty css                                                */
import { a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DPVo62AF.mjs';
import { $ as $$ArticleCard } from '../chunks/ArticleCard_B3Zzevo4.mjs';
import { g as getCollection } from '../chunks/_astro_content_DdAnXpNS.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allBlogArticles = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Blog | Pimenta Studio", "description": "Art\xEDculos, casos de \xE9xito y tendencias del mundo digital." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="pt-32 pb-20 px-4 mx-auto max-w-screen-xl"> <!-- Header --> <div class="text-center mb-16"> <h1 class="text-4xl sm:text-5xl font-medium text-dark mb-4">Blog</h1> <p class="text-dark/60 text-lg max-w-xl mx-auto">
Casos de éxito, tendencias y recursos para hacer crecer tu negocio digital.
</p> </div> <!-- Grid --> <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3" data-stagger-container> ${allBlogArticles.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/index.astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/index.astro";
const $$url = "/articles";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
