import { jsxs, jsx } from "react/jsx-runtime";
import { useTranslation } from "react-i18next";
import { S as SiteLayout, a as Seo, P as PageHero, I as IMG, c as SectionHeader, F as FeatureGrid } from "./images-BjLrBF_E.js";
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
const solutions = [{
  title: "Love Spells Africa",
  description: "Bring back lost love and find true happiness through authentic African spell casting services.",
  image: IMG.lostLove
}, {
  title: "Marriage Stability",
  description: "Ensure lifelong commitment and peace in your home with powerful spiritual solutions.",
  image: IMG.wedding
}, {
  title: "Voodoo Rituals",
  description: "Remove negative energy and shield your life from any harm through ancient voodoo.",
  image: IMG.ritualAltar
}, {
  title: "Money Spells",
  description: "Attract wealth, business success, and financial breakthroughs through spiritual guidance.",
  image: IMG.goldCoins
}, {
  title: "Traditional Healing",
  description: "Luganda and East African ancestral herbal remedies for all life challenges.",
  image: IMG.herbs
}, {
  title: "Protection Charms",
  description: "Shield your family and business from spiritual attacks permanently with sacred charms.",
  image: IMG.protection
}, {
  title: "Faithfulness Spells",
  description: "Ensure loyalty, trust and commitment in your relationship using ancestral methods.",
  image: IMG.faithfulness
}, {
  title: "Love Binding",
  description: "Create an unbreakable bond with your partner using ancestral binding rituals.",
  image: IMG.bindingLove
}, {
  title: "Global Reach",
  description: "Serving clients throughout East Africa and globally with guaranteed results.",
  image: IMG.africaMap
}, {
  title: "Ancestral Wisdom",
  description: "Connect with your roots through powerful traditional herbal remedies and rituals.",
  image: IMG.elder
}, {
  title: "Business Boost",
  description: "Attract more customers and maximize your business profits quickly.",
  image: IMG.busyShop
}, {
  title: "Family Peace",
  description: "Resolve deep-rooted disputes within your household and restore lasting harmony.",
  image: IMG.familyHome
}];
function Index() {
  const {
    t
  } = useTranslation();
  return /* @__PURE__ */ jsxs(SiteLayout, { children: [
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.home.title", descKey: "seo.home.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.candlesDark, title: t("home.heroTitle"), subtitle: t("home.heroSub"), cta: {
      label: t("common.getHelp"),
      href: "/contact"
    } }),
    /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 grid gap-10 md:grid-cols-2 items-center", children: [
      /* @__PURE__ */ jsx("div", { className: "overflow-hidden rounded-2xl shadow-lg", children: /* @__PURE__ */ jsx("img", { src: IMG.africanLand, alt: "East African landscape", className: "w-full h-[420px] object-cover" }) }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-foreground", children: t("home.aboutTitle") }),
        /* @__PURE__ */ jsx("div", { className: "mt-3 h-1 w-20 rounded-full bg-brand" }),
        /* @__PURE__ */ jsx("p", { className: "mt-5 text-base text-muted-foreground leading-relaxed", children: t("home.aboutP1") }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground leading-relaxed", children: t("home.aboutP2") }),
        /* @__PURE__ */ jsx("a", { href: "/about", className: "mt-6 inline-flex items-center rounded-md bg-brand px-6 py-2.5 text-sm font-semibold text-brand-foreground hover:opacity-90 transition", children: t("common.learnMore") })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("home.solutionsTitle"), subtitle: t("home.solutionsSub") }),
      /* @__PURE__ */ jsx(FeatureGrid, { items: solutions, withActions: true, pageLabel: "Spiritual Solutions" })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-brand text-brand-foreground", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-14 grid grid-cols-2 md:grid-cols-4 gap-8 text-center", children: [{
      n: "25+",
      l: t("home.stats.years")
    }, {
      n: "10,000+",
      l: t("home.stats.lives")
    }, {
      n: "98%",
      l: t("home.stats.rate")
    }, {
      n: "6",
      l: t("home.stats.countries")
    }].map((s) => /* @__PURE__ */ jsxs("div", { children: [
      /* @__PURE__ */ jsx("div", { className: "text-4xl md:text-5xl font-extrabold text-gold", children: s.n }),
      /* @__PURE__ */ jsx("div", { className: "mt-2 text-sm md:text-base text-white/85", children: s.l })
    ] }, s.l)) }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("home.whyTitle"), subtitle: t("home.whySub") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
        t: "100% Confidentiality",
        d: "Every consultation is private and protected. Your story stays sacred between you and Prophet Kim."
      }, {
        t: "Proven Results",
        d: "Decades of testimonies from across Uganda, Kenya, Tanzania, Rwanda, Burundi and South Sudan."
      }, {
        t: "Authentic Ancestral Roots",
        d: "Born into a lineage of traditional healers — every ritual is genuine, never copied."
      }, {
        t: "Fast Spiritual Response",
        d: "Many clients begin noticing changes within days of their first ritual."
      }, {
        t: "Personalised Rituals",
        d: "No two problems are the same — each spell is crafted to your unique situation."
      }, {
        t: "Available 24/7",
        d: "Reach out anytime via WhatsApp or call. Prophet Kim listens day and night."
      }].map((w) => /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border bg-card p-6 hover:shadow-lg transition", children: [
        /* @__PURE__ */ jsx("div", { className: "h-10 w-10 rounded-full bg-brand/10 text-brand grid place-items-center font-bold", children: "✦" }),
        /* @__PURE__ */ jsx("h3", { className: "mt-4 text-lg font-bold text-foreground", children: w.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: w.d })
      ] }, w.t)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("home.howTitle"), subtitle: t("home.howSub") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-4", children: [{
        n: "01",
        t: "Reach Out",
        d: "Send a WhatsApp message or call describing your problem."
      }, {
        n: "02",
        t: "Consultation",
        d: "Prophet Kim listens and consults the ancestors on your behalf."
      }, {
        n: "03",
        t: "Ritual Begins",
        d: "A personalised ritual is prepared and performed for you."
      }, {
        n: "04",
        t: "See Results",
        d: "Witness the changes unfold in your life within days."
      }].map((s) => /* @__PURE__ */ jsxs("div", { className: "relative rounded-xl bg-card border border-border p-6", children: [
        /* @__PURE__ */ jsx("div", { className: "text-5xl font-extrabold text-brand/15", children: s.n }),
        /* @__PURE__ */ jsx("h3", { className: "mt-2 text-lg font-bold text-foreground", children: s.t }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed", children: s.d })
      ] }, s.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("home.voicesTitle"), subtitle: t("home.voicesSub") }),
      /* @__PURE__ */ jsx("div", { className: "grid gap-6 md:grid-cols-3", children: [{
        q: "My husband came back home after 8 months apart. Prophet Kim restored my family.",
        n: "Aisha — Kampala, Uganda"
      }, {
        q: "I got the promotion I had prayed for over 4 years. The ritual worked within weeks.",
        n: "Samuel — Nairobi, Kenya"
      }, {
        q: "My business doubled its customers in a month. I am forever grateful to Prophet Kim.",
        n: "Joseph — Dar es Salaam, Tanzania"
      }].map((tt) => /* @__PURE__ */ jsxs("figure", { className: "rounded-xl border border-border bg-card p-6 shadow-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "text-3xl text-gold leading-none", children: "“" }),
        /* @__PURE__ */ jsx("blockquote", { className: "mt-2 text-sm text-foreground/90 leading-relaxed italic", children: tt.q }),
        /* @__PURE__ */ jsx("figcaption", { className: "mt-4 text-xs font-semibold uppercase tracking-wider text-brand", children: tt.n })
      ] }, tt.n)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-14", children: [
      /* @__PURE__ */ jsx(SectionHeader, { title: t("home.regionsTitle") }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap justify-center gap-3", children: ["Uganda", "Kenya", "Tanzania", "Rwanda", "Burundi", "South Sudan"].map((c) => /* @__PURE__ */ jsx("span", { className: "rounded-full border-2 border-brand/20 bg-card px-5 py-2 text-sm font-semibold text-foreground", children: c }, c)) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "bg-brand text-brand-foreground", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 py-14 text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold", children: t("home.ctaTitle") }),
      /* @__PURE__ */ jsx("p", { className: "mt-4 text-white/85 max-w-2xl mx-auto", children: t("home.ctaText") }),
      /* @__PURE__ */ jsx("div", { className: "mt-7 flex flex-wrap justify-center gap-3", children: /* @__PURE__ */ jsx("a", { href: "/contact", className: "inline-flex items-center rounded-full bg-gold px-7 py-3 text-base font-semibold text-black hover:scale-105 transition-transform", children: t("common.startConsult") }) })
    ] }) })
  ] });
}
export {
  Index as component
};
