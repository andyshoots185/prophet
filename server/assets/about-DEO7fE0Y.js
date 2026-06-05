import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { S as SiteLayout, a as Seo, P as PageHero, I as IMG, F as FeatureGrid } from "./images-BjLrBF_E.js";
import "react";
import "lucide-react";
import "@tanstack/react-router";
import "@radix-ui/react-dialog";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-dropdown-menu";
import "./router-MDVrmb-p.js";
import "@tanstack/react-query";
import "i18next";
const items = [{
  title: "My Journey",
  description: "Born into a long line of African spiritual healers, I have inherited the ancient wisdom of my ancestors to help those in need today.",
  image: IMG.candlesDark
}, {
  title: "Ancestral Rituals",
  description: "I have spent decades mastering African ancestral rituals to provide authentic spiritual guidance and solutions for complex life problems.",
  image: IMG.ritualAltar
}, {
  title: "My Philosophy",
  description: "I believe in restoring balance through spiritual healing services, ensuring that every person finds peace and prosperity in life.",
  image: IMG.smokeMystic
}, {
  title: "East African Identity",
  description: "As a traditional healer in East Africa, I take pride in my heritage and offer Luganda spiritual healing to all my clients.",
  image: IMG.africanLand
}, {
  title: "Herbal Remedies",
  description: "I use powerful African herbal remedies for protection and health, combined with ancestral wisdom to heal the body and soul completely.",
  image: IMG.herbs
}, {
  title: "Worldwide Reach",
  description: "From Uganda to Qatar, my reputation as an authentic African spell caster has helped thousands across the globe find true happiness.",
  image: IMG.forestMist
}, {
  title: "Your Privacy",
  description: "All spiritual guidance online is handled with the utmost confidentiality, ensuring your personal journey remains private always.",
  image: IMG.candlesGlow
}, {
  title: "Success Rate",
  description: "My powerful spiritual solutions have a high success rate, making me the most sought-after African witch doctor in the region today.",
  image: IMG.silhouetteCouple
}, {
  title: "Dedication",
  description: "I am dedicated to your success, providing African spiritual guidance online that is tailored to your unique needs and circumstances.",
  image: IMG.couple
}, {
  title: "Call for Help",
  description: "Do not suffer in silence. Contact the best traditional healer in East Africa today for powerful money spells and love charms.",
  image: IMG.hands
}, {
  title: "Business Boost",
  description: "Attract more customers and increase your profits with powerful money spells from Africa, tailored for your business success.",
  image: IMG.growth
}, {
  title: "Family Peace",
  description: "Restore harmony and resolve disputes within your family using African spiritual solutions for love and understanding.",
  image: IMG.drum
}];
function About() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.about.title", descKey: "seo.about.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.moonNight, title: t("pages.about.title"), subtitle: t("pages.about.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items }) }) })
  ] });
}
export {
  About as component
};
