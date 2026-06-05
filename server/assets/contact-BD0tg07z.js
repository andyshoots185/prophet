import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { MapPin, Phone, Mail, MessageCircle, Facebook, Twitter, Instagram } from "lucide-react";
import { S as SiteLayout, a as Seo, P as PageHero, I as IMG, b as PHONE, E as EMAIL, c as SectionHeader, F as FeatureGrid } from "./images-BjLrBF_E.js";
import "react";
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
  title: "Fast Results",
  description: "Authentic African spell casting services designed for quick and effective outcomes for all your spiritual needs today.",
  image: IMG.candlesDark
}, {
  title: "24/7 Availability",
  description: "African spiritual guidance online available round the clock to ensure you get the help you need anytime, anywhere.",
  image: IMG.moonNight
}, {
  title: "Confidentiality",
  description: "Your spiritual journey is private. I guarantee 100% confidentiality for all spiritual healing services and ancestral rituals.",
  image: IMG.smokeMystic
}, {
  title: "Expert Healer",
  description: "As the best traditional healer in East Africa, I bring decades of experience in African ancestral rituals and herbal medicine.",
  image: IMG.herbs
}, {
  title: "Proven Success",
  description: "Thousands of success stories from people using my powerful spiritual solutions for love and marriage problems worldwide.",
  image: IMG.couple
}, {
  title: "Safe Methods",
  description: "All my African cultural spell casting traditions are safe and focused on positive spiritual healing and total life protection.",
  image: IMG.shield
}, {
  title: "Honest Guidance",
  description: "Get honest and direct African spiritual guidance online from a healer who truly cares about your success and happiness always.",
  image: IMG.hands
}, {
  title: "Global Reach",
  description: "Distance is not a barrier. My powerful money spells from Africa and love rituals work globally for everyone in need today.",
  image: IMG.africanLand
}, {
  title: "Personalized Support",
  description: "Every problem is unique. I offer tailored spiritual solutions for love and marriage that fit your specific life situation perfectly.",
  image: IMG.candlesGlow
}, {
  title: "Affordable Help",
  description: "Spiritual healing services that are accessible to all, ensuring that financial status doesn't stop you from getting ancestral help.",
  image: IMG.heart
}, {
  title: "Business Boost",
  description: "Attract more customers and increase your profits with powerful money spells from Africa, tailored for your business success.",
  image: IMG.growth
}, {
  title: "Family Peace",
  description: "Restore harmony and resolve disputes within your family using African spiritual solutions for love and understanding.",
  image: IMG.drum
}];
function Contact() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.contact.title", descKey: "seo.contact.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.candlesGlow, title: t("pages.contact.title"), subtitle: t("pages.contact.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: t("common.sendMessage") }),
        /* @__PURE__ */ jsxs("form", { className: "mt-6 space-y-4", onSubmit: (e) => e.preventDefault(), children: [
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: t("common.name") }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: t("common.namePh"), className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: t("common.email") }),
            /* @__PURE__ */ jsx("input", { type: "email", placeholder: t("common.emailPh"), className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: t("common.subject") }),
            /* @__PURE__ */ jsx("input", { type: "text", placeholder: t("common.subjectPh"), className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" })
          ] }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("label", { className: "block text-sm font-medium text-foreground mb-1", children: t("common.message") }),
            /* @__PURE__ */ jsx("textarea", { rows: 5, placeholder: t("common.messagePh"), className: "w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-brand" })
          ] }),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90 transition", children: t("common.submit") })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-xl bg-surface p-8 border border-border h-fit", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: t("common.contactDetails") }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-6 space-y-4 text-sm", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3", children: [
            /* @__PURE__ */ jsx(MapPin, { className: "h-5 w-5 text-brand mt-0.5" }),
            " ",
            /* @__PURE__ */ jsx("span", { children: t("common.serving") })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-5 w-5 text-brand" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: `tel:${PHONE}`, className: "hover:text-brand", children: PHONE })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-brand" }),
            " ",
            /* @__PURE__ */ jsx("a", { href: `mailto:${EMAIL}`, className: "hover:text-brand", children: EMAIL })
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-5 w-5 text-brand" }),
            " WhatsApp: ",
            PHONE
          ] })
        ] }),
        /* @__PURE__ */ jsx("h3", { className: "mt-8 text-base font-semibold text-foreground", children: t("common.followMe") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-3 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "grid h-9 w-9 place-items-center rounded-full bg-brand text-white hover:opacity-90", children: /* @__PURE__ */ jsx(Facebook, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Twitter", className: "grid h-9 w-9 place-items-center rounded-full bg-call text-white hover:opacity-90", children: /* @__PURE__ */ jsx(Twitter, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "grid h-9 w-9 place-items-center rounded-full bg-brand text-white hover:opacity-90", children: /* @__PURE__ */ jsx(Instagram, { className: "h-4 w-4" }) })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("pages.contact.why") }),
      /* @__PURE__ */ jsx(FeatureGrid, { items })
    ] }) })
  ] });
}
export {
  Contact as component
};
