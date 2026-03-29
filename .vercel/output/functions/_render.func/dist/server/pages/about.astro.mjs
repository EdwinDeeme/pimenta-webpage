/* empty css                                                */
import { c as createAstro, a as createComponent, d as renderComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, F as Fragment, u as unescapeHTML } from '../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import { $ as $$MainLayout } from '../chunks/MainLayout_DPVo62AF.mjs';
import { $ as $$Section, a as $$Services } from '../chunks/Services_C9rLAEKM.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://pimenta.studio");
const $$Sponsors = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Sponsors;
  const sponsors = [
    {
      alt: "Astro",
      svg: `<svg viewBox="0 0 256 366" xmlns="http://www.w3.org/2000/svg"><path fill="#17191E" d="M182.022 9.147c2.982 3.702 4.502 8.697 7.543 18.687L256 246.074a276.467 276.467 0 0 0-79.426-26.891L133.318 73.008a5.63 5.63 0 0 0-10.802.017L79.784 219.11A276.453 276.453 0 0 0 0 246.04L66.76 27.783c3.051-9.972 4.577-14.959 7.559-18.654a24.541 24.541 0 0 1 9.946-7.358C88.67 0 93.885 0 104.314 0h47.683c10.443 0 15.664 0 20.074 1.774a24.545 24.545 0 0 1 9.95 7.373Z"/><path fill="#FF5D01" d="M189.972 256.46c-10.952 9.364-32.812 15.751-57.992 15.751-30.904 0-56.807-9.621-63.68-22.56-2.458 7.415-3.009 15.903-3.009 21.324 0 0-1.619 26.623 16.898 45.14 0-9.615 7.795-17.41 17.41-17.41 16.48 0 16.46 14.378 16.446 26.043l-.001 1.041c0 17.705 10.82 32.904 26.21 39.28a35.685 35.685 0 0 1-3.588-15.647c0-16.886 9.913-23.173 21.435-30.48 9.167-5.814 19.353-12.274 26.372-25.232a47.588 47.588 0 0 0 5.551-22.518c0-5.29-.731-10.412-2.052-15.273Z"/></svg>`
    },
    {
      alt: "React",
      svg: `<svg viewBox="0 0 256 228" xmlns="http://www.w3.org/2000/svg"><path fill="#00D8FF" d="M210.483 73.824a171.49 171.49 0 0 0-8.24-2.597c.465-1.9.893-3.777 1.273-5.621 6.238-30.281 2.16-54.676-11.769-62.708-13.355-7.7-35.196.329-57.254 19.526a171.23 171.23 0 0 0-6.375 5.848 155.866 155.866 0 0 0-4.241-3.917C100.759 3.829 77.587-4.822 63.673 3.233 50.33 10.957 46.379 33.89 51.995 62.588a170.974 170.974 0 0 0 1.892 8.48c-3.28.932-6.445 1.924-9.474 2.98C17.309 83.498 0 98.307 0 113.668c0 15.865 18.582 31.778 46.812 41.427a145.52 145.52 0 0 0 6.921 2.165 167.467 167.467 0 0 0-2.01 9.138c-5.354 28.2-1.173 50.591 12.134 58.266 13.744 7.926 36.812-.22 59.273-19.855a145.567 145.567 0 0 0 5.342-4.923 168.064 168.064 0 0 0 6.92 6.314c21.758 18.722 43.246 26.282 56.54 18.586 13.731-7.949 18.194-32.003 12.4-61.268a145.016 145.016 0 0 0-1.535-6.842c1.62-.48 3.21-.974 4.76-1.488 29.348-9.723 48.443-25.443 48.443-41.52 0-15.417-17.868-30.326-45.517-39.844Zm-6.365 70.984c-1.596.54-3.233 1.057-4.902 1.557a179.7 179.7 0 0 0-12.053-26.974 175.365 175.365 0 0 0 9.342-25.422c2.596.838 5.097 1.719 7.49 2.64 23.087 8.65 37.913 21.116 37.913 31.612 0 10.996-15.389 23.893-37.79 32.587ZM128.217 87.755c4.55 7.875 8.765 16.109 12.598 24.633a174.51 174.51 0 0 1-25.046.14 174.278 174.278 0 0 1 12.448-24.773Zm-3.307-4.578c-4.857-8.374-10.058-16.188-15.565-23.393 9.363-2.283 19.226-3.43 29.285-3.43 9.689 0 19.188 1.077 28.24 3.2-5.317 7.048-10.378 14.697-15.118 22.87a176.3 176.3 0 0 0-26.842.753Zm-47.32-9.747c-1.83-1.636-3.63-3.3-5.394-4.985-14.556-13.782-24.657-28.115-24.657-38.38 0-10.5 8.476-20.24 22.753-27.37 13.744-6.9 31.9-10.5 51.5-10.5 8.5 0 16.7.7 24.4 2.1-5.5 6.5-10.8 13.5-15.8 21.1a176.3 176.3 0 0 0-52.8 57.03Zm-9.7 14.3c-2.3-.7-4.5-1.4-6.6-2.1-22.4-7.8-37.8-20.3-37.8-31.3 0-10.5 14.7-22.6 36.4-31.1 2.3-.9 4.7-1.7 7.1-2.5a176.3 176.3 0 0 0-9.3 25.4 176.3 176.3 0 0 0 10.2 41.6Zm6.4 19.7a176.3 176.3 0 0 0 12.1 24.8c-9.4 2.3-19.3 3.5-29.4 3.5-9.7 0-19.2-1.1-28.3-3.2 5.3-7 10.4-14.7 15.1-22.9a176.3 176.3 0 0 0 30.5-2.2Zm3.3 4.6c4.9 8.4 10.1 16.2 15.6 23.4-9.4 2.3-19.2 3.4-29.3 3.4 9.7 0 19.2-1.1 28.2-3.2-5.3-7-10.4-14.7-15.1-22.9a176.3 176.3 0 0 0 .6-.7Z"/></svg>`
    },
    {
      alt: "TailwindCSS",
      svg: `<svg viewBox="0 0 256 154" xmlns="http://www.w3.org/2000/svg"><path fill="#06B6D4" d="M128 0C93.867 0 72.533 17.067 64 51.2 76.8 34.133 91.733 27.733 108.8 32c9.737 2.434 16.697 9.499 24.401 17.318C145.751 62.057 160.275 76.8 192 76.8c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C174.249 14.743 159.725 0 128 0ZM64 76.8C29.867 76.8 8.533 93.867 0 128c12.8-17.067 27.733-23.467 44.8-19.2 9.737 2.434 16.697 9.499 24.401 17.318C81.751 138.857 96.275 153.6 128 153.6c34.133 0 55.467-17.067 64-51.2-12.8 17.067-27.733 23.467-44.8 19.2-9.737-2.434-16.697-9.499-24.401-17.318C110.249 91.543 95.725 76.8 64 76.8Z"/></svg>`
    },
    {
      alt: "WordPress",
      svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#21759B" d="M128 0C57.308 0 0 57.308 0 128s57.308 128 128 128 128-57.308 128-128S198.692 0 128 0Zm-9.426 186.089-38.12-104.424c6.353-.333 12.072-.999 12.072-.999 5.686-.666 5.02-9.02-.666-8.687 0 0-17.073 1.333-28.078 1.333-2.059 0-4.49-.047-7.08-.13C71.638 44.994 98.38 27.2 128 27.2c21.863 0 41.763 8.363 56.706 22.04-.36-.023-.717-.057-1.088-.057-9.02 0-15.406 7.853-15.406 16.273 0 7.52 4.353 13.873 8.986 21.393 3.487 6.02 7.52 13.74 7.52 24.913 0 7.72-2.966 16.666-6.853 29.12l-8.986 30.013-32.305-96.04Zm107.12-58.08c2.44 8.88 3.84 18.24 3.84 28.04 0 35.2-19.093 66.013-47.573 82.666l32.96-95.253c6.16-15.413 8.213-27.733 8.213-38.693 0-3.973-.266-7.68-.773-11.2a100.8 100.8 0 0 1 3.333 34.44ZM128 228.8c-10.88 0-21.36-1.6-31.253-4.56l33.226-96.587 34.08 93.36c.226.547.493 1.053.786 1.52A100.693 100.693 0 0 1 128 228.8ZM27.2 128c0-11.04 1.68-21.693 4.8-31.72l62.72 171.893C57.68 250.24 27.2 192.64 27.2 128Z"/></svg>`
    },
    {
      alt: "Stripe",
      svg: `<svg viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg"><path fill="#635BFF" d="M256 128c0 70.692-57.308 128-128 128C57.308 256 0 198.692 0 128 0 57.308 57.308 0 128 0c70.692 0 128 57.308 128 128Z"/><path fill="#fff" d="M119.336 100.12c0-5.984 4.912-8.288 13.04-8.288 11.664 0 26.416 3.536 38.08 9.84V63.28c-12.752-5.072-25.36-7.056-38.08-7.056-31.2 0-51.952 16.272-51.952 43.408 0 42.352 58.32 35.568 58.32 53.808 0 7.072-6.144 9.36-14.72 9.36-12.736 0-29.024-5.232-41.904-12.288v38.56c14.256 6.16 28.672 8.752 41.904 8.752 31.84 0 53.744-15.744 53.744-43.248-.16-45.712-58.432-37.6-58.432-54.456Z"/></svg>`
    },
    {
      alt: "Supabase",
      svg: `<svg viewBox="0 0 256 263" xmlns="http://www.w3.org/2000/svg"><path fill="#3ECF8E" d="M149.602 258.579c-5.985 7.526-18.03 3.401-18.03-6.113V165.39h-80.3c-13.986 0-21.72-16.18-13.048-26.99L107.37 4.422c5.985-7.526 18.03-3.401 18.03 6.113v87.076h80.3c13.986 0 21.72 16.18 13.048 26.99L149.602 258.58Z"/></svg>`
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "sponsors", "data-astro-cid-fdaznekl": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="sponsors-marquee-wrapper" data-astro-cid-fdaznekl> <div class="sponsors-marquee" aria-label="Tecnologías que usamos" data-astro-cid-fdaznekl> <div class="sponsors-track" data-astro-cid-fdaznekl> ${sponsors.map((s) => renderTemplate`<div class="sponsor-item"${addAttribute(s.alt, "title")} data-astro-cid-fdaznekl> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(s.svg)}` })} </div>`)} </div> <div class="sponsors-track" aria-hidden="true" data-astro-cid-fdaznekl> ${sponsors.map((s) => renderTemplate`<div class="sponsor-item"${addAttribute(s.alt, "title")} data-astro-cid-fdaznekl> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate`${unescapeHTML(s.svg)}` })} </div>`)} </div> </div> </div> ` })} `;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Sponsors.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "About us" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="space-y-20"> <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-3"> <div class="relative flex flex-col-reverse items-center md:flex-row" id="hero"> <div class="row items-center py-5 md:pb-20 md:pt-10"> <div class="text-center space-y-10"> <h2 class="text-5xl font-medium leading-none md:text-6xl">We Navigate the <br> digital landscape <br> for success</h2> <p class="mt-6 mb-8  text-xl font-normal leading-7 sm:mb-12">Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.</p> <a class="px-9 py-5 bg-zinc-900 hover:bg-white text-white hover:text-black border rounded-2xl justify-items-center md:justify-items-start gap-2.5 inline-flex" rel="noopener noreferrer" href="https://github.com/manulthanura/Positivus" target="_blank"> <h2 class="text-center text-xl font-normal leading-7">Book a consultation</h2> </a> </div> </div> </div> </div> ${renderComponent($$result2, "Sponsors", $$Sponsors, {})} ${renderComponent($$result2, "Services", $$Services, {})} </main> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/about.astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
