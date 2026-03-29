/* empty css                                                */
import { a as createComponent, m as maybeRenderHead, d as renderComponent, f as renderScript, r as renderTemplate, c as createAstro, b as addAttribute } from '../chunks/astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import '../chunks/index_CKKIScCG.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_CsHPIvfN.mjs';
/* empty css                                 */
import { $ as $$Section, b as $$SectionTitle, a as $$Services } from '../chunks/Services_C9rLAEKM.mjs';
import { $ as $$Card } from '../chunks/Card_B3To8Anb.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_DdAnXpNS.mjs';
import { $ as $$ProjectCard } from '../chunks/ProjectCard_DFw0WFAX.mjs';
import { $ as $$MainLayout } from '../chunks/MainLayout_DPVo62AF.mjs';
export { renderers } from '../renderers.mjs';

const decorForm = new Proxy({"src":"/_astro/contact-pic.BrB0SfUf.png","width":692,"height":649,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ramir/Projects/pimenta-webpage/src/assets/pics/contact-pic.png";
							}
							
							return target[name];
						}
					});

const $$Form = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex relative justify-start items-center p-[60px] bg-[#F3F3F3] rounded-[45px] overflow-hidden" data-astro-cid-2lkv3ujd> <form class="bg-gray sm:p-6 h-full w-full lg:max-w-lg" data-astro-cid-2lkv3ujd> <div class="flex flex-col sm:flex-row gap-[35px] sm:items-center mb-10" data-astro-cid-2lkv3ujd> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox1" name="checkbox1" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox1" class="text-black" data-astro-cid-2lkv3ujd>Di Hola</label> </div> <div class="flex items-center gap-[14px]" data-astro-cid-2lkv3ujd> <input type="checkbox" id="checkbox2" name="checkbox2" class="form-checkbox text-black" data-astro-cid-2lkv3ujd> <label for="checkbox2" class="flex items-center text-black" data-astro-cid-2lkv3ujd>Deja una nota</label> </div> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="name" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Nombre*</label> <input type="text" id="name" name="name" placeholder="Nombre" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="email" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Correo*</label> <input type="email" id="email" name="email" placeholder="Correo Electrónico" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd> </div> <div class="mb-4" data-astro-cid-2lkv3ujd> <label for="message" class="block text-black mb-2" data-astro-cid-2lkv3ujd>Mensaje*</label> <textarea id="message" name="message" placeholder="Mensaje" class="w-full px-[30px] py-[18px] border border-black rounded-[14px] text-black outline-none" data-astro-cid-2lkv3ujd></textarea> </div> <button type="submit" name="submit" class="btn-primary w-full" data-astro-cid-2lkv3ujd>Enviar</button> </form> <picture class="absolute right-[-25%] top-[2%] bottom-[2%] hidden lg:block" data-astro-cid-2lkv3ujd> ${renderComponent($$result, "Image", $$Image, { "src": decorForm, "alt": "decor", "data-astro-cid-2lkv3ujd": true })} </picture> </div>  ${renderScript($$result, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/Form.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/Form.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px] mb-[140px] relative"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Cont\xE1ctanos", "description": "Si tienes alguna duda o consulta, no dudes en contactarnos. Estaremos encantados de ayudarte." })} ${renderComponent($$result2, "Form", $$Form, {})} </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Contact.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", "  <script>\n  function adjustHeroPadding() {\n    const nav = document.querySelector('nav');\n    const hero = document.getElementById('hero');\n    if (!nav || !hero) return;\n    const navHeight = nav.getBoundingClientRect().height;\n    // On desktop (lg) the layout is side by side so no top padding needed\n    if (window.innerWidth >= 1024) {\n      hero.style.paddingTop = '0px';\n    } else {\n      hero.style.paddingTop = navHeight + 16 + 'px';\n    }\n  }\n  adjustHeroPadding();\n  window.addEventListener('resize', adjustHeroPadding);\n<\/script>"])), renderComponent($$result, "Section", $$Section, { "id": "home", "data-astro-cid-anhloy43": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="relative flex flex-col items-center md:flex-row" id="hero" style="padding-top: 0" data-astro-cid-anhloy43> <div class="row items-center pb-4 md:w-6/12 md:pb-20 md:pt-10" data-astro-cid-anhloy43> <div class="text-left space-y-3" data-astro-cid-anhloy43> <h1 class="text-4xl font-medium leading-tight md:text-6xl text-center md:text-left" data-astro-cid-anhloy43>Construimos el futuro digital de tu empresa</h1> <p class="mt-4 mb-6 text-base font-normal leading-7 text-center md:text-left md:pr-12" data-astro-cid-anhloy43>Desarrollo web, marketing digital, diseño y software a medida para empresas que quieren crecer en el mundo digital.</p> <div class="w-full justify-center md:justify-start items-center flex flex-row gap-3" data-astro-cid-anhloy43> <a href="https://api.whatsapp.com/send?phone=50663536621&text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Pimenta%20Studio." target="_blank" class="px-5 py-3 md:px-8 md:py-5 bg-zinc-900 hover:bg-white rounded-2xl text-center text-white hover:text-black border text-base md:text-xl font-normal leading-6" data-astro-cid-anhloy43>Agendar Reunión</a> <a href="/portfolio" class="px-5 py-3 md:px-8 md:py-5 bg-white hover:bg-zinc-900 rounded-2xl text-center text-black hover:text-white border text-base md:text-xl font-normal leading-6 btn-secondary" data-astro-cid-anhloy43>Ver Proyectos</a> </div> </div> </div> <div class="hero-deco-wrapper flex items-center justify-center py-2 md:py-5 md:w-6/12 md:pb-20 md:pt-10" aria-hidden="true" data-astro-cid-anhloy43> <div class="hero-deco" data-astro-cid-anhloy43> <div class="hero-deco__gradient" data-astro-cid-anhloy43></div> <div class="hero-deco__circle hero-deco__circle--lg" data-astro-cid-anhloy43></div> <div class="hero-deco__circle hero-deco__circle--sm" data-astro-cid-anhloy43></div> <div class="hero-deco__dots" data-astro-cid-anhloy43></div> <div class="hero-deco__ring" data-astro-cid-anhloy43></div> </div> </div> </div> ` }));
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Hero.astro", void 0);

const $$Process = createComponent(($$result, $$props, $$slots) => {
  const description = "Nuestro proceso est\xE1 dise\xF1ado para garantizar resultados claros y medibles en cada proyecto.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "process" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Nuestro Flujo de Trabajo", "description": description })} <div class="process-timeline relative max-w-4xl mx-auto" data-stagger-container> <!-- Línea central (solo desktop) --> <div class="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-dark/20 -translate-x-1/2" aria-hidden="true"></div> <!-- Paso 1 (izquierda en desktop) --> <div class="process-step process-step--left animate-on-scroll flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 md:pr-[calc(50%+2rem)]"> <div class="flex-shrink-0"> <span class="text-7xl font-medium leading-none" style="color: rgba(255,147,39,0.2)">01</span> </div> <div class="bg-gray rounded-[30px] p-8 border border-dark/10 shadow-sm flex-1"> <h3 class="text-xl font-medium mb-3">Consulta Inicial</h3> <p class="text-dark/70 text-sm leading-relaxed">Nos reunimos contigo para entender tu negocio, tus objetivos y tus necesidades. Esta conversación nos permite identificar las oportunidades y definir el alcance del proyecto antes de proponer cualquier solución.</p> </div> </div> <!-- Paso 2 (derecha en desktop) --> <div class="process-step process-step--right animate-on-scroll flex flex-col md:flex-row-reverse items-start md:items-center gap-6 mb-16 md:pl-[calc(50%+2rem)]"> <div class="flex-shrink-0"> <span class="text-7xl font-medium leading-none" style="color: rgba(255,147,39,0.2)">02</span> </div> <div class="bg-gray rounded-[30px] p-8 border border-dark/10 shadow-sm flex-1"> <h3 class="text-xl font-medium mb-3">Análisis y Propuesta</h3> <p class="text-dark/70 text-sm leading-relaxed">Analizamos tu mercado, competencia y recursos actuales. Con esa información elaboramos una propuesta detallada con estrategia, tecnologías recomendadas, cronograma y presupuesto.</p> </div> </div> <!-- Paso 3 (izquierda en desktop) --> <div class="process-step process-step--left animate-on-scroll flex flex-col md:flex-row items-start md:items-center gap-6 mb-16 md:pr-[calc(50%+2rem)]"> <div class="flex-shrink-0"> <span class="text-7xl font-medium leading-none" style="color: rgba(255,147,39,0.2)">03</span> </div> <div class="bg-gray rounded-[30px] p-8 border border-dark/10 shadow-sm flex-1"> <h3 class="text-xl font-medium mb-3">Desarrollo e Implementación</h3> <p class="text-dark/70 text-sm leading-relaxed">Ejecutamos el proyecto con metodologías ágiles, manteniéndote informado en cada etapa. Desde el diseño hasta el desarrollo y las pruebas, trabajamos en estrecha colaboración contigo.</p> </div> </div> <!-- Paso 4 (derecha en desktop) --> <div class="process-step process-step--right animate-on-scroll flex flex-col md:flex-row-reverse items-start md:items-center gap-6 mb-16 md:pl-[calc(50%+2rem)]"> <div class="flex-shrink-0"> <span class="text-7xl font-medium leading-none" style="color: rgba(255,147,39,0.2)">04</span> </div> <div class="bg-gray rounded-[30px] p-8 border border-dark/10 shadow-sm flex-1"> <h3 class="text-xl font-medium mb-3">Entrega y Soporte</h3> <p class="text-dark/70 text-sm leading-relaxed">Lanzamos el proyecto y te entregamos un informe con los resultados y métricas clave. Además, ofrecemos soporte continuo para garantizar que todo funcione correctamente.</p> </div> </div> </div> </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Process.astro", void 0);

const $$Proposal = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "data-astro-cid-4wrfyqhw": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="proposal-cta relative overflow-hidden rounded-[45px] bg-dark text-white mt-[123px] mb-[163px]" data-astro-cid-4wrfyqhw> <!-- Orbs decorativos de fondo --> <div class="proposal-orb proposal-orb--1" aria-hidden="true" data-astro-cid-4wrfyqhw></div> <div class="proposal-orb proposal-orb--2" aria-hidden="true" data-astro-cid-4wrfyqhw></div> <!-- Contenido principal --> <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-[60px]" data-astro-cid-4wrfyqhw> <!-- Texto y CTA --> <div class="flex flex-col gap-6 md:w-1/2" data-astro-cid-4wrfyqhw> <h2 class="text-3xl font-medium text-white" data-astro-cid-4wrfyqhw>Hagamos que las cosas pasen</h2> <p class="text-white/70 leading-relaxed" data-astro-cid-4wrfyqhw>
Contacta con nosotros hoy para obtener más información sobre cómo nuestros servicios pueden ayudar a que tu negocio crezca y tenga éxito en línea.
</p> <a href="https://api.whatsapp.com/send?phone=50663536621&text=Hola,%20estoy%20interesado%20en%20los%20servicios%20de%20Pimenta%20Studio." target="_blank" class="btn-proposal w-fit" data-astro-cid-4wrfyqhw>
Agendar Reunión
</a> </div> <!-- Elemento visual abstracto CSS --> <div class="proposal-visual hidden md:flex items-center justify-center md:w-1/2" aria-hidden="true" data-astro-cid-4wrfyqhw> <div class="proposal-ring proposal-ring--outer" data-astro-cid-4wrfyqhw></div> <div class="proposal-ring proposal-ring--inner" data-astro-cid-4wrfyqhw></div> <div class="proposal-dot" data-astro-cid-4wrfyqhw></div> </div> </div> </div> ` })} `;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Proposal.astro", void 0);

const linkd = new Proxy({"src":"/_astro/profile-in.DFDeuCDe.svg","width":34,"height":34,"format":"svg"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ramir/Projects/pimenta-webpage/src/assets/pics/profile-in.svg";
							}
							
							return target[name];
						}
					});

const $$Astro$1 = createAstro("https://pimenta.studio");
const $$TeamCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TeamCard;
  const { pic, name, role, description, link } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="p-[60px]"> <div class="flex flex-col sm:flex-row relative"> <picture>${renderComponent($$result2, "Image", $$Image, { "src": pic, "alt": name })}</picture> <div class="flex flex-col justify-end sm:ml-5"> <h3 class="text-lg font-medium">${name}</h3> <p class="text-sm font-normal">${role}</p> </div> <a${addAttribute(link, "href")} class="absolute right-0 top-0">${renderComponent($$result2, "Image", $$Image, { "src": linkd, "alt": "Linkedin Logo" })}</a> </div> <div class="w-full h-[1px] bg-black my-7"></div> <div>${description}</div> </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/TeamCard.astro", void 0);

const p1 = new Proxy({"src":"/_astro/t1.DCqpUh7U.png","width":106,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ramir/Projects/pimenta-webpage/src/assets/team/t1.png";
							}
							
							return target[name];
						}
					});

const p2 = new Proxy({"src":"/_astro/t2.nG-pfUKH.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ramir/Projects/pimenta-webpage/src/assets/team/t2.png";
							}
							
							return target[name];
						}
					});

const p3 = new Proxy({"src":"/_astro/t3.CD1xqxr1.png","width":103,"height":103,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/Users/ramir/Projects/pimenta-webpage/src/assets/team/t3.png";
							}
							
							return target[name];
						}
					});

const $$Team = createComponent(($$result, $$props, $$slots) => {
  const description = "Somos un equipo apasionado por la tecnolog\xEDa y el dise\xF1o, comprometidos con el \xE9xito de cada proyecto.";
  const team = [
    {
      pic: p1,
      name: "Percy Benavides",
      role: "Director Creativo & Fundador",
      description: "Especialista en dise\xF1o UX/UI y estrategia de marca con m\xE1s de 4 a\xF1os liderando proyectos digitales.",
      link: "https://linkedin.com"
    },
    {
      pic: p2,
      name: "Jose Ram\xEDrez",
      role: "Director de Operaciones & Fundador",
      description: "Experto en gesti\xF3n de proyectos y operaciones con enfoque en marketing digital y crecimiento de negocios.",
      link: "https://linkedin.com"
    },
    {
      pic: p3,
      name: "Edwin Delgado",
      role: "Director de Desarrollo & Fundador",
      description: "Desarrollador full-stack con m\xE1s de 4 a\xF1os construyendo aplicaciones web y sistemas SaaS escalables.",
      link: "https://linkedin.com"
    }
  ];
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Equipo", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3  gap-10 mb-28"> ${team.map((member, index) => renderTemplate`${renderComponent($$result2, "TeamCard", $$TeamCard, { "key": index, "pic": member.pic, "name": member.name, "role": member.role, "description": member.description, "link": member.link })}`)} </div> </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Team.astro", void 0);

const testimonials = [
	{
		index: 1,
		name: "Carlos Méndez",
		role: "CEO en Boutique Alma",
		comment: "Pimenta Studio transformó nuestra presencia digital por completo. La tienda online que desarrollaron superó todas nuestras expectativas y las ventas aumentaron un 40% en el primer trimestre. Un equipo profesional, puntual y con mucho talento."
	},
	{
		index: 2,
		name: "Laura Vargas",
		role: "Directora de Marketing en Impulso Agency",
		comment: "Trabajar con Pimenta Studio fue una experiencia excelente. La landing page que crearon para nuestro lanzamiento alcanzó una tasa de conversión del 8% y generamos más de 300 leads en dos semanas. Definitivamente los recomiendo."
	},
	{
		index: 3,
		name: "Andrés Solano",
		role: "Fundador de TeamFlow",
		comment: "El equipo de Pimenta Studio construyó nuestra plataforma SaaS desde cero con una arquitectura sólida y escalable. Su capacidad técnica y comunicación durante todo el proceso fueron impecables. Son nuestros socios tecnológicos de confianza."
	},
	{
		index: 4,
		name: "María Fernández",
		role: "Gerente General en Distribuidora Norte",
		comment: "Contratamos a Pimenta Studio para una consultoría de SEO y los resultados fueron increíbles. En tres meses pasamos a primera página en Google para nuestras palabras clave principales y el tráfico orgánico se duplicó."
	},
	{
		index: 5,
		name: "Roberto Jiménez",
		role: "Director Comercial en TechSolutions CR",
		comment: "El software a medida que desarrolló Pimenta Studio automatizó procesos que antes nos tomaban horas. La inversión se recuperó en menos de seis meses. Profesionales, creativos y muy comprometidos con los resultados."
	}
];

const $$SwiperSlider = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="relative mt-12 mb-16"> <!-- Carousel track wrapper --> <div class="overflow-hidden" id="testimonials-viewport"> <div class="flex gap-6 transition-transform duration-500 ease-in-out" id="testimonials-track"> ${testimonials.map((item) => renderTemplate`<div class="testimonial-card shrink-0 bg-white border border-zinc-100 rounded-2xl p-8 shadow-sm flex flex-col gap-6"> <svg class="text-green w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"> <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"></path> </svg> <p class="text-zinc-600 text-base leading-relaxed flex-1">"${item.comment}"</p> <div class="border-t border-zinc-100 pt-4"> <p class="font-semibold text-zinc-900">${item.name}</p> <p class="text-sm text-zinc-400">${item.role}</p> </div> </div>`)} </div> </div> <!-- Navigation arrows --> <div class="flex items-center justify-center gap-4 mt-8"> <button id="prev-btn" aria-label="Anterior" class="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7"></path> </svg> </button> <!-- Dots --> <div id="testimonials-dots" class="flex gap-2"></div> <button id="next-btn" aria-label="Siguiente" class="w-10 h-10 rounded-full border border-zinc-200 flex items-center justify-center hover:border-zinc-900 hover:bg-zinc-900 hover:text-white transition-colors text-zinc-600 disabled:opacity-30 disabled:cursor-not-allowed"> <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2"> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"></path> </svg> </button> </div> </div> ${renderScript($$result, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/SwiperSlider.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/SwiperSlider.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "testimonials" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Testimonios", "description": "Para nosotros es muy importante saber las opiniones de nuestros clientes para poder mejorar continuamente." })} ${renderComponent($$result2, "SwiperSlider", $$SwiperSlider, {})} </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Testimonials.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$PortfolioSection = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("portfolio");
  const featuredProjects = allProjects.filter((p) => p.data.featured === true);
  const hasMore = featuredProjects.length > 3;
  const description = "Conoce algunos de los proyectos que hemos desarrollado para nuestros clientes.";
  return renderTemplate(_a || (_a = __template(["", "  <script>\n  (function () {\n    const track = document.getElementById('portfolioTrack');\n    if (!track) return;\n\n    const slides = Array.from(track.querySelectorAll('.portfolio-slide'));\n    const total = slides.length;\n    const GAP = 32;\n    let current = 0;\n\n    const prevBtn = document.getElementById('portfolioPrev');\n    const nextBtn = document.getElementById('portfolioNext');\n    const dotsContainer = document.getElementById('portfolioDots');\n    const hasNav = prevBtn && nextBtn && dotsContainer;\n\n    function getCols() {\n      const cols = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 3;\n      return Math.min(cols, total); // never more cols than slides\n    }\n\n    function setSlideWidths() {\n      const cols = getCols();\n      const viewport = track.parentElement.offsetWidth;\n      const cardWidth = (viewport - GAP * (cols - 1)) / cols;\n      slides.forEach((slide) => {\n        slide.style.width = cardWidth + 'px';\n        slide.style.flex = '0 0 ' + cardWidth + 'px';\n      });\n    }\n\n    function getMaxIndex() {\n      return Math.max(0, total - getCols());\n    }\n\n    function buildDots() {\n      if (!dotsContainer) return;\n      dotsContainer.innerHTML = '';\n      const max = getMaxIndex();\n      for (let i = 0; i <= max; i++) {\n        const dot = document.createElement('button');\n        dot.className = 'portfolio-dot' + (i === current ? ' active' : '');\n        dot.setAttribute('aria-label', 'Proyecto ' + (i + 1));\n        dot.addEventListener('click', () => goTo(i));\n        dotsContainer.appendChild(dot);\n      }\n    }\n\n    function updateDots() {\n      if (!dotsContainer) return;\n      dotsContainer.querySelectorAll('.portfolio-dot').forEach((d, i) => {\n        d.classList.toggle('active', i === current);\n      });\n    }\n\n    function goTo(index) {\n      const max = getMaxIndex();\n      current = Math.max(0, Math.min(index, max));\n      const cardWidth = slides[0].offsetWidth;\n      track.style.transform = 'translateX(-' + (current * (cardWidth + GAP)) + 'px)';\n      if (prevBtn) prevBtn.disabled = current === 0;\n      if (nextBtn) nextBtn.disabled = current >= max;\n      updateDots();\n    }\n\n    if (prevBtn) prevBtn.addEventListener('click', () => goTo(current - 1));\n    if (nextBtn) nextBtn.addEventListener('click', () => goTo(current + 1));\n\n    let resizeTimer;\n    window.addEventListener('resize', () => {\n      clearTimeout(resizeTimer);\n      resizeTimer = setTimeout(() => {\n        current = 0;\n        setSlideWidths();\n        buildDots();\n        goTo(0);\n      }, 150);\n    });\n\n    setSlideWidths();\n    buildDots();\n    goTo(0);\n  })();\n<\/script>"])), renderComponent($$result, "Section", $$Section, { "id": "portfolio", "data-astro-cid-vfwvykj6": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]" data-astro-cid-vfwvykj6> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Proyectos", "description": description, "data-astro-cid-vfwvykj6": true })} ${featuredProjects.length > 0 ? renderTemplate`<div class="portfolio-slider-wrapper" data-astro-cid-vfwvykj6> <div class="portfolio-slider-viewport" data-astro-cid-vfwvykj6> <div class="portfolio-track" id="portfolioTrack" data-astro-cid-vfwvykj6> ${featuredProjects.map((project) => renderTemplate`<div class="portfolio-slide" data-astro-cid-vfwvykj6> ${renderComponent($$result2, "ProjectCard", $$ProjectCard, { "title": project.data.title, "description": project.data.description, "image": project.data.image, "tags": project.data.tags, "slug": project.id, "data-astro-cid-vfwvykj6": true })} </div>`)} </div> </div> ${hasMore && renderTemplate`<div class="portfolio-nav" data-astro-cid-vfwvykj6> <button id="portfolioPrev" class="portfolio-nav__btn" aria-label="Proyectos anteriores" data-astro-cid-vfwvykj6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-vfwvykj6> <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" data-astro-cid-vfwvykj6></path> </svg> </button> <div class="portfolio-nav__dots" id="portfolioDots" data-astro-cid-vfwvykj6></div> <button id="portfolioNext" class="portfolio-nav__btn" aria-label="Proyectos siguientes" data-astro-cid-vfwvykj6> <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" data-astro-cid-vfwvykj6> <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" data-astro-cid-vfwvykj6></path> </svg> </button> </div>`} </div>` : renderTemplate`<p class="text-center text-dark/60 py-16" data-astro-cid-vfwvykj6>Próximamente nuevos proyectos</p>`} <div class="flex justify-center mt-12" data-astro-cid-vfwvykj6> <a href="/portfolio" class="btn-primary" data-astro-cid-vfwvykj6>Ver todos los proyectos</a> </div> </div> ` }));
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/PortfolioSection.astro", void 0);

const $$Astro = createAstro("https://pimenta.studio");
const $$ProductCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductCard;
  const { name, description, status, icon, url } = Astro2.props;
  const badgeClass = status === "Disponible" ? "bg-[#fff3e0] text-[#b85c00] border border-[#ff9327]" : status === "Beta" ? "bg-[#fef9c3] text-[#854d0e] border border-[#fbbf24]" : "bg-[#f3f4f6] text-[#6b7280] border border-[#d1d5db]";
  const iconAreaClass = status !== "Pr\xF3ximamente" ? "w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-100" : "w-14 h-14 flex items-center justify-center rounded-2xl border border-gray-100 opacity-60";
  return renderTemplate`${renderComponent($$result, "Card", $$Card, { "isUnderline": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<article class="flex flex-col h-full bg-white rounded-[45px] p-8 gap-5 shadow-sm hover:shadow-md transition-shadow duration-200"> ${icon && renderTemplate`<div${addAttribute(iconAreaClass, "class")}${addAttribute(status !== "Pr\xF3ximamente" ? "background: linear-gradient(to bottom, #fff7ed, #ffffff)" : void 0, "style")}> <img${addAttribute(icon, "src")}${addAttribute(`${name} icon`, "alt")} class="w-8 h-8 object-contain"> </div>`} <div class="flex flex-col gap-2 flex-1"> <div class="flex items-center gap-3 flex-wrap"> <h3 class="text-xl font-medium text-black">${name}</h3> <span${addAttribute(`text-xs font-medium px-2.5 py-1 rounded-full ${badgeClass}`, "class")}> ${status} </span> </div> <p class="text-sm text-dark/70">${description}</p> </div> <div class="mt-auto"> ${status === "Pr\xF3ximamente" ? renderTemplate`<span aria-disabled="true" role="link" class="inline-flex items-center gap-2 text-sm text-gray-400 cursor-not-allowed select-none"> <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path> </svg>
En desarrollo
</span>` : url ? renderTemplate`<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-sm font-medium text-[#ff9327] hover:underline group">
Ir al producto
<svg class="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" fill="currentColor" viewBox="0 0 20 20"> <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path> </svg> </a>` : null} </div> </article> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/ProductCard.astro", void 0);

const $$Products = createComponent(($$result, $$props, $$slots) => {
  const products = [
    {
      name: "PimentaOS",
      description: "Gestiona tus clientes, proyectos y pipeline de ventas desde un solo lugar. Dise\xF1ado para agencias y equipos de desarrollo web que quieren crecer sin perder el control.",
      status: "Pr\xF3ximamente",
      url: "https://pimenta.studio"
    },
    {
      name: "FitMaster",
      description: "Gesti\xF3n total de gimnasios, membres\xEDas, rutinas, recordatorios, finanzas, equipo y m\xE1s..",
      status: "Pr\xF3ximamente",
      url: "https://piment.studio"
    },
    {
      name: "VisualNote",
      description: "Bloc de notas basado en la Web con IA integrada",
      status: "Beta",
      url: "https://visualnote.vercel.app"
    }
  ];
  const description = "Herramientas SaaS creadas por Pimenta Studio para potenciar agencias, equipos de marketing y negocios digitales.";
  return renderTemplate`${renderComponent($$result, "Section", $$Section, { "id": "products" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-[140px]"> ${renderComponent($$result2, "SectionTitle", $$SectionTitle, { "sectionTitle": "Nuestros Productos", "description": description })} <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-stagger-container> ${products.map((product) => renderTemplate`${renderComponent($$result2, "ProductCard", $$ProductCard, { "name": product.name, "description": product.description, "status": product.status, "url": product.url })}`)} </div> </div> ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/sections/Products.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Pimenta Studio | Desarrollo Web, Marketing Digital y Software a Medida", "description": "Desarrollo web, marketing digital, dise\xF1o y software a medida para empresas que quieren crecer en el mundo digital." }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})} ${renderComponent($$result2, "Proposal", $$Proposal, {})} ${renderComponent($$result2, "PortfolioSection", $$PortfolioSection, {})} ${renderComponent($$result2, "Products", $$Products, {})} ${renderComponent($$result2, "Process", $$Process, {})} ${renderComponent($$result2, "Team", $$Team, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ` })}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/pages/index.astro", void 0);

const $$file = "C:/Users/ramir/Projects/pimenta-webpage/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$Index,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
