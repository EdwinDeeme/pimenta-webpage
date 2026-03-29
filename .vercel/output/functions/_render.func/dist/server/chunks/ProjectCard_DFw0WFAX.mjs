import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute } from './astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$Card } from './Card_B3To8Anb.mjs';
/* empty css                         */

const $$Astro = createAstro("https://pimenta.studio");
const $$ProjectCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProjectCard;
  const { title, description, image, tags, slug } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true, "data-astro-cid-t45dg4vu": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<a${addAttribute(`/portfolio/${slug}`, "href")} class="project-card animate-on-scroll"${addAttribute(`Ver proyecto ${title}`, "aria-label")} data-astro-cid-t45dg4vu> ${image ? renderTemplate`<img${addAttribute(image, "src")}${addAttribute(title, "alt")} class="project-card__img" data-astro-cid-t45dg4vu>` : renderTemplate`<div class="project-card__placeholder" data-astro-cid-t45dg4vu></div>`} <!-- Overlay con toda la info --> <div class="project-card__overlay" data-astro-cid-t45dg4vu> <div class="project-card__info" data-astro-cid-t45dg4vu> <div class="flex flex-wrap gap-2 mb-3" data-astro-cid-t45dg4vu> ${tags.map((tag) => renderTemplate`<span class="text-xs font-medium px-2 py-0.5 rounded-full bg-white/20 text-white border border-white/30" data-astro-cid-t45dg4vu> ${tag} </span>`)} </div> <h3 class="text-white font-medium text-lg leading-snug mb-2" data-astro-cid-t45dg4vu>${title}</h3> <p class="project-card__desc" data-astro-cid-t45dg4vu>${description}</p> <span class="project-card__cta" data-astro-cid-t45dg4vu>
Ver Proyecto →
</span> </div> </div> </a> ` })} `;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/ProjectCard.astro", void 0);

export { $$ProjectCard as $ };
