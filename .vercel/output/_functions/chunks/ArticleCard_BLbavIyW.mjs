import { c as createAstro, a as createComponent, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import 'clsx';
import { f as formatDate } from './utils_CIZL8hpr.mjs';
/* empty css                         */

const $$Astro = createAstro("https://pimenta.studio");
const $$ArticleCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleCard;
  const { article } = Astro2.props;
  const imageUrl = article.data.image.startsWith("/") ? article.data.image : "/blog/" + article.data.image;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute("/articles/" + article.id.replace(/\.md$/, ""), "href")} class="article-card group animate-on-scroll" data-astro-cid-ldcvgv4j> <!-- Image --> <div class="article-card__img-wrapper" data-astro-cid-ldcvgv4j> <img${addAttribute(imageUrl, "src")}${addAttribute(article.data.title, "alt")} class="article-card__img" data-astro-cid-ldcvgv4j> <div class="article-card__img-overlay" data-astro-cid-ldcvgv4j></div> </div> <!-- Content --> <div class="article-card__body" data-astro-cid-ldcvgv4j> <div class="flex items-center justify-between mb-3" data-astro-cid-ldcvgv4j> <span class="text-xs font-medium px-2.5 py-1 rounded-full bg-[#fff3e0] text-[#b85c00] border border-[#ff9327]" data-astro-cid-ldcvgv4j> ${article.data.type} </span> <span class="text-xs text-dark/50" data-astro-cid-ldcvgv4j>${formatDate(article.data.pubDate)}</span> </div> <h2 class="article-card__title" data-astro-cid-ldcvgv4j>${article.data.title}</h2> <p class="article-card__summary" data-astro-cid-ldcvgv4j>${article.data.summary}</p> <div class="flex items-center justify-between mt-4 pt-4 border-t border-dark/10" data-astro-cid-ldcvgv4j> <div class="flex items-center gap-2" data-astro-cid-ldcvgv4j> <img${addAttribute(article.data.authImage, "src")}${addAttribute(article.data.author, "alt")} class="w-7 h-7 rounded-full object-cover" data-astro-cid-ldcvgv4j> <span class="text-sm font-medium text-dark" data-astro-cid-ldcvgv4j>${article.data.author}</span> </div> <span class="text-sm font-medium text-[#ff9327] group-hover:underline" data-astro-cid-ldcvgv4j>
Leer más →
</span> </div> </div> </a> `;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/ArticleCard.astro", void 0);

export { $$ArticleCard as $ };
