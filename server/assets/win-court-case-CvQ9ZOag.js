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
  title: "Win Any Case",
  description: "Turn the tide in your favor and win any court case with powerful legal spells from Prophet Kim.",
  image: IMG.gavel
}, {
  title: "Dismiss Charges",
  description: "Have charges dropped or dismissed completely with spiritual intervention that influences legal outcomes.",
  image: IMG.legalDocs
}, {
  title: "Child Custody",
  description: "Win child custody battles and ensure the well-being of your children with powerful family protection spells.",
  image: IMG.parentChild
}, {
  title: "Divorce Settlement",
  description: "Get a fair and favorable divorce settlement with spells that ensure you get what you deserve.",
  image: IMG.rings
}, {
  title: "Legal Protection",
  description: "Protect yourself from lawsuits and legal trouble with powerful African protection charms and rituals.",
  image: IMG.scales
}, {
  title: "Influence Judge",
  description: "Sway the judge and jury in your favor with spiritual influence that ensures a positive verdict.",
  image: IMG.gavel
}, {
  title: "Release from Jail",
  description: "Secure early release or bail for loved ones with powerful freedom spells from a trusted spell caster.",
  image: IMG.breakChains
}, {
  title: "Stop Lawsuit",
  description: "Halt any ongoing lawsuit against you and find peace with spiritual solutions that resolve conflicts.",
  image: IMG.cleansing
}, {
  title: "Property Disputes",
  description: "Resolve land and property disputes in your favor with ancient African wisdom and legal spells.",
  image: IMG.africaMap
}, {
  title: "Get Compensation",
  description: "Ensure you receive full compensation for damages or injuries with spells that enforce justice.",
  image: IMG.moneyReturn
}, {
  title: "Spiritual Legal Aid",
  description: "Get spiritual insight into your legal case to make the right decisions and avoid pitfalls.",
  image: IMG.spellbook
}, {
  title: "Case Consultation",
  description: "Book a consultation with Prophet Kim to discuss your case and find the best spiritual strategy.",
  image: IMG.consultation
}];
function Page() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.court.title", descKey: "seo.court.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.scales, title: t("pages.court.title"), subtitle: t("pages.court.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Court Case Spells" }) }) })
  ] });
}
export {
  Page as component
};
