/* empty css                                                   */
import { a as createComponent, m as maybeRenderHead, r as renderTemplate, c as createAstro, d as renderComponent } from '../../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../../chunks/MainLayout_DPVo62AF.mjs';
import { $ as $$ArticleCard } from '../../chunks/ArticleCard_BLbavIyW.mjs';
import 'clsx';
import { g as getCollection } from '../../chunks/_astro_content_DdAnXpNS.mjs';
export { renderers } from '../../renderers.mjs';

const $$SearchForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="search-form" class="flex items-center" action="/articles/search"> <label for="search-input" class="sr-only">Search</label> <div class="relative w-full"> <input type="text" id="query" name="query" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2.5" placeholder="Search articles..." required> </div> <button type="submit" class="p-2.5 ms-2 text-sm font-medium text-white bg-black rounded-lg border border-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300"> <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"></path> </svg> <span class="sr-only">Search</span> </button> </form>`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/SearchForm.astro", void 0);

const $$Astro = createAstro("https://pimenta.studio");
const $$Search = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Search;
  const query = Astro2.url.searchParams.get("query");
  const allBlogArticles = await getCollection("blog");
  const searchResults = query ? allBlogArticles.filter((article) => {
    const q = query.toLowerCase();
    const titleMatch = article.data.title.toLowerCase().includes(q);
    const bodyMatch = (article.body ?? "").toLowerCase().includes(q);
    const slugMatch = article.id.toLowerCase().includes(q);
    return titleMatch || bodyMatch || slugMatch;
  }) : [];
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Search Results" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6"> <a href="/articles" class="inline-flex items-center font-medium text-black hover:text-green my-4"> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-6 w-6"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18"></path> </svg> <span class="ml-1 font-bold text-lg">All Articles</span> </a> <br> ${renderComponent($$result2, "SearchForm", $$SearchForm, {})} <br> <h2 class="text-2xl pb-3 mt-6">Results For <strong>${query}</strong></h2> <div class="grid gap-8 lg:grid-cols-2"> ${searchResults.map((article) => renderTemplate`${renderComponent($$result2, "ArticleCard", $$ArticleCard, { "article": article })}`)} </div> </div> </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/search.astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/articles/search.astro";
const $$url = "/articles/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Search,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
