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
  title: "Career Spells",
  description: "Unlock your professional potential with powerful job promotion spells from a trusted African spell caster.",
  image: IMG.careerLadder
}, {
  title: "Interview Success",
  description: "Ace your next job interview with spiritual guidance and confidence-boosting rituals from Prophet Kim.",
  image: IMG.interview
}, {
  title: "Salary Spells",
  description: "Negotiate a higher salary with powerful money spells designed to boost your income and financial stability.",
  image: IMG.goldCoins
}, {
  title: "Beat Workplace Competition",
  description: "Gain an edge over your colleagues with African protection spells that shield you from workplace politics.",
  image: IMG.protection
}, {
  title: "Leadership Spells",
  description: "Enhance your leadership qualities and command respect with powerful spiritual guidance from Prophet Kim.",
  image: IMG.crown
}, {
  title: "Remove Career Blockages",
  description: "Clear any spiritual obstacles hindering your career growth with authentic African spell casting services.",
  image: IMG.breakChains
}, {
  title: "Attract New Opportunities",
  description: "Open doors to new career paths and job offers with powerful voodoo spells for success and prosperity.",
  image: IMG.openDoors
}, {
  title: "Workplace Harmony",
  description: "Create a positive and productive work environment with spiritual healing services from a traditional healer.",
  image: IMG.handshake
}, {
  title: "Entrepreneurial Success",
  description: "Boost your business and attract more clients with powerful money spells from Africa's best spell caster.",
  image: IMG.growth
}, {
  title: "Pass Exams",
  description: "Ensure success in professional exams and certifications with spiritual guidance from Prophet Kim.",
  image: IMG.graduation
}, {
  title: "Business Boost",
  description: "Attract more customers and increase your profits with powerful money spells from Africa, tailored for your success.",
  image: IMG.busyShop
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
    /* @__PURE__ */ jsx(Seo, { titleKey: "seo.job.title", descKey: "seo.job.desc" }),
    /* @__PURE__ */ jsx(PageHero, { image: IMG.careerLadder, title: t("pages.job.title"), subtitle: t("pages.job.sub") }),
    /* @__PURE__ */ jsx("section", { className: "bg-surface", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-16", children: /* @__PURE__ */ jsx(FeatureGrid, { items, withActions: true, pageLabel: "Job Promotion Spells" }) }) })
  ] });
}
export {
  Page as component
};
