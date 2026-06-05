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
  title: "Attract Customers",
  description: "Draw a steady stream of loyal customers to your business with powerful attraction spells from Prophet Kim.",
  image: IMG.busyShop
}, {
  title: "Increase Sales",
  description: "Boost your daily sales and revenue with money spells designed to maximize your business profits quickly.",
  image: IMG.growth
}, {
  title: "Business Protection",
  description: "Protect your business from competitors, theft, and bad luck with powerful African protection charms and rituals.",
  image: IMG.protection
}, {
  title: "Debt Recovery",
  description: "Recover money owed to your business and clear debts with spiritual solutions that ensure financial flow.",
  image: IMG.moneyReturn
}, {
  title: "Business Expansion",
  description: "Open new branches and expand your market reach with success spells that pave the way for growth.",
  image: IMG.office
}, {
  title: "Win Tenders",
  description: "Secure lucrative contracts and tenders with spiritual guidance that gives you an advantage over competitors.",
  image: IMG.legalDocs
}, {
  title: "Partnership Harmony",
  description: "Ensure smooth and profitable business partnerships with spells that foster trust and cooperation.",
  image: IMG.handshake
}, {
  title: "Remove Bad Luck",
  description: "Cleanse your business premises of negative energy and bad luck that may be hindering your success.",
  image: IMG.cleansing
}, {
  title: "Employee Loyalty",
  description: "Foster a dedicated and hardworking team with spells that promote loyalty and productivity in the workplace.",
  image: IMG.bindingLove
}, {
  title: "Financial Stability",
  description: "Achieve long-term financial stability for your business with money spells that ensure consistent cash flow.",
  image: IMG.vault
}, {
  title: "Investment Success",
  description: "Make wise investment decisions and see high returns with spiritual insight and guidance from Prophet Kim.",
  image: IMG.goldCoins
}, {
  title: "Business Consultation",
  description: "Get a personalized spiritual consultation for your business to identify and solve hidden problems today.",
  image: IMG.consultation
}];
function Page() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.business.title", descKey: "seo.business.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.growth, title: t("pages.business.title"), subtitle: t("pages.business.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Boost Business Spells" }) }) })
  ] });
}
export {
  Page as component
};
