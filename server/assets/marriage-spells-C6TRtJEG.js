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
  title: "Stable Marriage",
  description: "African spiritual solutions for love and marriage to ensure a stable and happy home for you and your family forever.",
  image: IMG.familyHome
}, {
  title: "Loyalty Spells",
  description: "Ensure your partner remains faithful using powerful African ancestral rituals and spiritual guidance online from Prophet Kim today.",
  image: IMG.faithfulness
}, {
  title: "Family Protection",
  description: "Shield your marriage from evil eyes and enemies with authentic African spell casting services and protection charms for your home.",
  image: IMG.protection
}, {
  title: "Heal Communication",
  description: "Restore understanding and effective communication in your marriage through Luganda spiritual healing and traditional wisdom.",
  image: IMG.coupleTalk
}, {
  title: "Wealth in Marriage",
  description: "Attract financial prosperity and success into your household with powerful money spells from Africa designed for married couples.",
  image: IMG.goldCoins
}, {
  title: "Stop Interference",
  description: "Stop outsiders from breaking your marriage using African cultural spell casting traditions and spiritual guidance from a trusted expert.",
  image: IMG.cleansing
}, {
  title: "Fertility Rituals",
  description: "Seek ancestral blessings for children and family growth through authentic African ancestral rituals and spiritual healing services.",
  image: IMG.baby
}, {
  title: "Marital Harmony",
  description: "Bring back peace and love to a struggling marriage with powerful spiritual solutions for love and marriage problems today.",
  image: IMG.loveHeart
}, {
  title: "Binding Marriage",
  description: "Create a life-long bond with your spouse using traditional healer in Africa methods that ensure commitment and total loyalty forever.",
  image: IMG.rings
}, {
  title: "Consult a Healer",
  description: "Contact the best traditional healer in East Africa for marriage counseling and spiritual help to save your home today.",
  image: IMG.elder
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
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.marriage.title", descKey: "seo.marriage.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.wedding, title: t("pages.marriage.title"), subtitle: t("pages.marriage.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Marriage Spells" }) }) })
  ] });
}
export {
  Page as component
};
