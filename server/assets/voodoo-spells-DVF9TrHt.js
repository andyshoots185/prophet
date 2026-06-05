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
  title: "Ancient Voodoo",
  description: "Authentic African ancestral rituals that have been used for centuries to provide powerful spiritual solutions for love and success today.",
  image: IMG.ritualAltar
}, {
  title: "Shielding Rituals",
  description: "Protect yourself from spiritual attacks and bad luck with powerful African protection spells and charms designed for total safety.",
  image: IMG.protection
}, {
  title: "Success Spells",
  description: "Unlock your path to greatness using African spiritual solutions for love and business success through traditional voodoo practices and rituals.",
  image: IMG.spiritualPower
}, {
  title: "Cleansing Rituals",
  description: "Remove negative energy and bad spirits from your life with authentic African spell casting services and Luganda spiritual healing today.",
  image: IMG.cleansing
}, {
  title: "Ancestral Binding",
  description: "Bind your desires to reality using African cultural spell casting traditions and spiritual guidance online from Prophet Kim himself.",
  image: IMG.drum
}, {
  title: "Curse Removal",
  description: "Break any generational curse or bad luck with powerful money spells from Africa and spiritual healing services for total freedom always.",
  image: IMG.breakChains
}, {
  title: "Voodoo Wealth",
  description: "Attract wealth and financial stability using authentic African ancestral rituals and spiritual guidance online from a trusted healer.",
  image: IMG.vault
}, {
  title: "Custom Rituals",
  description: "Get a custom ritual tailored to your specific needs using traditional healer in Africa methods that ensure total success and peace.",
  image: IMG.herbs
}, {
  title: "Spiritual Power",
  description: "Connect with the spirits for guidance and protection using African ancestral rituals and powerful spiritual solutions for all your problems.",
  image: IMG.candles
}, {
  title: "Book a Session",
  description: "Contact the best traditional healer in East Africa today for powerful voodoo spells and African spiritual guidance online now.",
  image: IMG.consultation
}, {
  title: "Business Boost",
  description: "Attract more customers and increase your profits with powerful money spells from Africa, tailored for your business success.",
  image: IMG.growth
}, {
  title: "Family Peace",
  description: "Restore harmony and resolve disputes within your family using African spiritual solutions for love and understanding.",
  image: IMG.familyHome
}];
function Page() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.voodoo.title", descKey: "seo.voodoo.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.ritualAltar, title: t("pages.voodoo.title"), subtitle: t("pages.voodoo.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Voodoo Spells" }) }) })
  ] });
}
export {
  Page as component
};
