import { c as createAstro, a as createComponent, m as maybeRenderHead, e as renderSlot, r as renderTemplate } from './astro/server_CWi-4Xom.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://pimenta.studio");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { isUnderline } = Astro2.props;
  return renderTemplate`${isUnderline ? renderTemplate`${maybeRenderHead()}<div class="rounded-[45px] border border-dark shadow-[0px_5px_0px_#191a23]">${renderSlot($$result, $$slots["default"])}</div>` : renderTemplate`<div class="rounded-[45px]">${renderSlot($$result, $$slots["default"])}</div>`}`;
}, "C:/Users/ramir/Projects/pimenta-webpage/src/components/ui/Card.astro", void 0);

export { $$Card as $ };
