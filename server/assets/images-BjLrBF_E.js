import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { X, ChevronRight, Check, Circle, Phone, Mail, MessageCircle, Menu, Facebook, Twitter, Instagram, Globe } from "lucide-react";
import { Link } from "@tanstack/react-router";
import * as SheetPrimitive from "@radix-ui/react-dialog";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import "./router-MDVrmb-p.js";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetPortal = SheetPrimitive.Portal;
const SheetOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Overlay,
  {
    className: cn(
      "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    ),
    ...props,
    ref
  }
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;
const sheetVariants = cva(
  "fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=closed]:duration-300 data-[state=open]:duration-500 data-[state=open]:animate-in data-[state=closed]:animate-out",
  {
    variants: {
      side: {
        top: "inset-x-0 top-0 border-b data-[state=closed]:slide-out-to-top data-[state=open]:slide-in-from-top",
        bottom: "inset-x-0 bottom-0 border-t data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
        left: "inset-y-0 left-0 h-full w-3/4 border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left sm:max-w-sm",
        right: "inset-y-0 right-0 h-full w-3/4 border-l data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right sm:max-w-sm"
      }
    },
    defaultVariants: {
      side: "right"
    }
  }
);
const SheetContent = React.forwardRef(({ side = "right", className, children, ...props }, ref) => /* @__PURE__ */ jsxs(SheetPortal, { children: [
  /* @__PURE__ */ jsx(SheetOverlay, {}),
  /* @__PURE__ */ jsxs(SheetPrimitive.Content, { ref, className: cn(sheetVariants({ side }), className), ...props, children: [
    /* @__PURE__ */ jsxs(SheetPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-secondary", children: [
      /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }),
    children
  ] })
] }));
SheetContent.displayName = SheetPrimitive.Content.displayName;
const SheetTitle = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Title,
  {
    ref,
    className: cn("text-lg font-semibold text-foreground", className),
    ...props
  }
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;
const SheetDescription = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SheetPrimitive.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;
const DropdownMenu = DropdownMenuPrimitive.Root;
const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;
const DropdownMenuSubTrigger = React.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.SubTrigger,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = DropdownMenuPrimitive.SubTrigger.displayName;
const DropdownMenuSubContent = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.SubContent,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = DropdownMenuPrimitive.SubContent.displayName;
const DropdownMenuContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsx(DropdownMenuPrimitive.Portal, { children: /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Content,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = DropdownMenuPrimitive.Content.displayName;
const DropdownMenuItem = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = DropdownMenuPrimitive.Item.displayName;
const DropdownMenuCheckboxItem = React.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.CheckboxItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = DropdownMenuPrimitive.CheckboxItem.displayName;
const DropdownMenuRadioItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DropdownMenuPrimitive.RadioItem,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(DropdownMenuPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = DropdownMenuPrimitive.RadioItem.displayName;
const DropdownMenuLabel = React.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = DropdownMenuPrimitive.Label.displayName;
const DropdownMenuSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DropdownMenuPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = DropdownMenuPrimitive.Separator.displayName;
function useIsScrolling(idleMs = 200) {
  const [scrolling, setScrolling] = useState(false);
  const timer = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onScroll = () => {
      if (window.scrollY < 20) {
        setScrolling(false);
        if (timer.current) clearTimeout(timer.current);
        return;
      }
      setScrolling(true);
      if (timer.current) clearTimeout(timer.current);
      timer.current = setTimeout(() => setScrolling(false), idleMs);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (timer.current) clearTimeout(timer.current);
    };
  }, [idleMs]);
  return scrolling;
}
const PHONE = "+27788778927";
const PHONE_LINK = "tel:+27788778927";
const WA_NUMBER = "27788778927";
const EMAIL = "info@prophetkimspells.com";
function waLink(page, topic) {
  const parts = ["Hello Prophet Kim,"];
  if (page) parts.push(`I'm reaching out regarding your ${page}.`);
  if (topic) parts.push(`Specifically interested in: ${topic}.`);
  parts.push("My problem is: ");
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(parts.join(" "))}`;
}
const WA_LINK = waLink();
const navItems = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/love-spells", key: "love" },
  { to: "/marriage-spells", key: "marriage" },
  { to: "/voodoo-spells", key: "voodoo" },
  { to: "/job-promotion", key: "job" },
  { to: "/boost-business", key: "business" },
  { to: "/win-court-case", key: "court" },
  { to: "/contact", key: "contact" }
];
const LANGS = [
  { code: "en", label: "English" },
  { code: "sw", label: "Kiswahili" },
  { code: "lg", label: "Luganda" }
];
function LangSwitcher() {
  const { i18n: i18nInst } = useTranslation();
  const current = LANGS.find((l) => l.code === i18nInst.language)?.label ?? "English";
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxs(DropdownMenuTrigger, { className: "inline-flex items-center gap-1 rounded-md bg-white/10 px-2 py-1 text-xs font-medium hover:bg-white/20 transition", children: [
      /* @__PURE__ */ jsx(Globe, { className: "h-3.5 w-3.5" }),
      " ",
      current
    ] }),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "z-[60]", children: LANGS.map((l) => /* @__PURE__ */ jsx(
      DropdownMenuItem,
      {
        onClick: () => {
          i18nInst.changeLanguage(l.code);
          if (typeof window !== "undefined") localStorage.setItem("lang", l.code);
        },
        children: l.label
      },
      l.code
    )) })
  ] });
}
function TopBar() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "w-full bg-brand text-brand-foreground text-xs sm:text-sm", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-4", children: [
      /* @__PURE__ */ jsxs("a", { href: PHONE_LINK, className: "flex items-center gap-1.5 hover:underline", children: [
        /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
        " Tel: ",
        PHONE
      ] }),
      /* @__PURE__ */ jsxs("a", { href: `mailto:${EMAIL}`, className: "hidden sm:flex items-center gap-1.5 hover:underline", children: [
        /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5" }),
        " ",
        EMAIL
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(LangSwitcher, {}),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: WA_LINK,
          target: "_blank",
          rel: "noopener",
          className: "inline-flex items-center gap-1.5 rounded-md bg-whatsapp px-3 py-1 text-white font-medium hover:opacity-90 transition",
          children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
            " ",
            t("common.whatsapp")
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "a",
        {
          href: PHONE_LINK,
          className: "inline-flex items-center gap-1.5 rounded-md bg-call px-3 py-1 text-white font-medium hover:opacity-90 transition",
          children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
            " ",
            t("common.call")
          ]
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "hidden lg:inline ml-3 opacity-90", children: t("topbar.tagline") })
    ] })
  ] }) });
}
function Nav({ hidden }) {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  return /* @__PURE__ */ jsx(
    "nav",
    {
      className: `w-full bg-background/95 backdrop-blur border-b border-border transition-transform duration-300 ease-out ${hidden ? "-translate-y-full md:translate-y-0" : "translate-y-0"}`,
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-3 flex items-center justify-between md:justify-center gap-x-5 gap-y-2", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "md:hidden text-base font-extrabold text-brand", children: "PROPHET KIM" }),
        /* @__PURE__ */ jsx("div", { className: "hidden md:flex flex-wrap items-center justify-center gap-x-5 gap-y-2", children: navItems.map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.to,
            className: "text-sm font-medium text-foreground/80 hover:text-brand transition",
            activeProps: { className: "text-brand font-semibold" },
            activeOptions: { exact: item.to === "/" },
            children: t(`nav.${item.key}`)
          },
          item.to
        )) }),
        /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
          /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
            "button",
            {
              "aria-label": t("nav.menu"),
              className: "md:hidden inline-flex items-center justify-center rounded-md p-2 text-brand hover:bg-brand/10",
              children: /* @__PURE__ */ jsx(Menu, { className: "h-6 w-6" })
            }
          ) }),
          /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "w-72", children: [
            /* @__PURE__ */ jsx(SheetTitle, { className: "text-brand", children: t("nav.menu") }),
            /* @__PURE__ */ jsx("div", { className: "mt-6 flex flex-col gap-1", children: navItems.map((item) => /* @__PURE__ */ jsx(
              Link,
              {
                to: item.to,
                onClick: () => setOpen(false),
                className: "rounded-md px-3 py-2.5 text-sm font-medium text-foreground/80 hover:bg-brand/10 hover:text-brand transition",
                activeProps: { className: "bg-brand/10 text-brand font-semibold" },
                activeOptions: { exact: item.to === "/" },
                children: t(`nav.${item.key}`)
              },
              item.to
            )) }),
            /* @__PURE__ */ jsxs("div", { className: "mt-6 flex gap-2", children: [
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: WA_LINK,
                  target: "_blank",
                  rel: "noopener",
                  className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-whatsapp px-3 py-2 text-sm text-white",
                  children: [
                    /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
                    " ",
                    t("common.whatsapp")
                  ]
                }
              ),
              /* @__PURE__ */ jsxs(
                "a",
                {
                  href: PHONE_LINK,
                  className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-call px-3 py-2 text-sm text-white",
                  children: [
                    /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
                    " ",
                    t("common.call")
                  ]
                }
              )
            ] })
          ] })
        ] })
      ] })
    }
  );
}
function FloatingActions() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: WA_LINK,
        target: "_blank",
        rel: "noopener",
        "aria-label": "WhatsApp",
        className: "fixed left-4 bottom-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-whatsapp text-white shadow-xl hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(MessageCircle, { className: "h-6 w-6" })
      }
    ),
    /* @__PURE__ */ jsx(
      "a",
      {
        href: PHONE_LINK,
        "aria-label": "Call",
        className: "fixed right-4 bottom-6 z-50 grid h-12 w-12 place-items-center rounded-full bg-call text-white shadow-xl hover:scale-110 transition-transform",
        children: /* @__PURE__ */ jsx(Phone, { className: "h-6 w-6" })
      }
    )
  ] });
}
function Footer() {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsxs("footer", { className: "bg-footer text-footer-foreground mt-20", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-3", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-bold tracking-wide", children: "PROPHET KIM" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-white/70 leading-relaxed", children: t("footer.tagline") }),
        /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-3", children: [
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Facebook", className: "hover:text-white text-white/60", children: /* @__PURE__ */ jsx(Facebook, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Twitter", className: "hover:text-white text-white/60", children: /* @__PURE__ */ jsx(Twitter, { className: "h-5 w-5" }) }),
          /* @__PURE__ */ jsx("a", { href: "#", "aria-label": "Instagram", className: "hover:text-white text-white/60", children: /* @__PURE__ */ jsx(Instagram, { className: "h-5 w-5" }) })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-widest uppercase", children: t("footer.quickLinks") }),
        /* @__PURE__ */ jsx("ul", { className: "mt-3 space-y-2 text-sm text-white/80", children: navItems.slice(0, 6).map((n) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(Link, { to: n.to, className: "hover:text-white", children: t(`nav.${n.key}`) }) }, n.to)) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h4", { className: "text-sm font-semibold tracking-widest uppercase", children: t("footer.contact") }),
        /* @__PURE__ */ jsxs("ul", { className: "mt-3 space-y-2 text-sm text-white/80", children: [
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Phone, { className: "h-4 w-4" }),
            " ",
            PHONE
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4" }),
            " ",
            EMAIL
          ] }),
          /* @__PURE__ */ jsxs("li", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(MessageCircle, { className: "h-4 w-4" }),
            " WhatsApp: ",
            PHONE
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-t border-white/10", children: /* @__PURE__ */ jsx("p", { className: "mx-auto max-w-7xl px-4 py-4 text-center text-xs text-white/60", children: t("footer.rights") }) })
  ] });
}
function SiteLayout({ children }) {
  const scrolling = useIsScrolling(180);
  return /* @__PURE__ */ jsxs("div", { className: "flex min-h-screen flex-col", children: [
    /* @__PURE__ */ jsxs("div", { className: "sticky top-0 z-40", children: [
      /* @__PURE__ */ jsx(TopBar, {}),
      /* @__PURE__ */ jsx(Nav, { hidden: scrolling })
    ] }),
    /* @__PURE__ */ jsx("main", { className: "flex-1", children }),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(FloatingActions, {})
  ] });
}
function Seo({ titleKey, descKey }) {
  const { t, i18n } = useTranslation();
  useEffect(() => {
    if (typeof document === "undefined") return;
    const title = t(titleKey);
    const desc = t(descKey);
    document.title = title;
    document.documentElement.setAttribute("lang", i18n.language);
    const setMeta = (selector, attr, name, content) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta('meta[name="description"]', "name", "description", desc);
    setMeta('meta[property="og:title"]', "property", "og:title", title);
    setMeta('meta[property="og:description"]', "property", "og:description", desc);
  }, [t, titleKey, descKey, i18n.language]);
  return null;
}
function PageHero({ title, subtitle, image, cta }) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      className: "relative isolate flex min-h-[420px] md:min-h-[520px] items-center justify-center overflow-hidden",
      style: {
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      },
      children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/55", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-4 max-w-3xl rounded-2xl border border-white/10 bg-black/40 px-8 py-10 text-center backdrop-blur-md", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-3xl md:text-5xl font-extrabold text-white tracking-tight", children: title }),
          subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base md:text-lg text-white/85", children: subtitle }),
          cta && /* @__PURE__ */ jsx(
            "a",
            {
              href: cta.href,
              className: "mt-7 inline-flex items-center justify-center rounded-full bg-gold px-7 py-3 text-base font-semibold text-black shadow-lg hover:scale-105 transition-transform",
              children: cta.label
            }
          )
        ] })
      ]
    }
  );
}
function FeatureGrid({
  items,
  withActions = false,
  pageLabel
}) {
  const { t } = useTranslation();
  return /* @__PURE__ */ jsx("div", { className: "grid gap-6 sm:grid-cols-2 lg:grid-cols-4", children: items.map((f) => /* @__PURE__ */ jsxs(
    "article",
    {
      className: "group flex flex-col overflow-hidden rounded-xl border border-border bg-card shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300",
      children: [
        /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] overflow-hidden bg-muted", children: /* @__PURE__ */ jsx(
          "img",
          {
            src: f.image,
            alt: f.title,
            loading: "lazy",
            className: "h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
          }
        ) }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col p-5", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-base font-bold text-foreground", children: f.title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed flex-1", children: f.description }),
          withActions && /* @__PURE__ */ jsxs("div", { className: "mt-4 flex gap-2", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: waLink(pageLabel, f.title),
                target: "_blank",
                rel: "noopener",
                className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-whatsapp px-3 py-1.5 text-xs font-medium text-white hover:opacity-90",
                children: [
                  /* @__PURE__ */ jsx(MessageCircle, { className: "h-3.5 w-3.5" }),
                  " ",
                  t("common.whatsapp")
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: PHONE_LINK,
                className: "inline-flex flex-1 items-center justify-center gap-1.5 rounded-md bg-call px-3 py-1.5 text-xs font-medium text-white hover:opacity-90",
                children: [
                  /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5" }),
                  " ",
                  t("common.call")
                ]
              }
            )
          ] })
        ] })
      ]
    },
    f.title
  )) });
}
function SectionHeader({ title, subtitle }) {
  return /* @__PURE__ */ jsxs("div", { className: "text-center mb-10", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-extrabold text-foreground", children: title }),
    /* @__PURE__ */ jsx("div", { className: "mx-auto mt-3 h-1 w-20 rounded-full bg-brand" }),
    subtitle && /* @__PURE__ */ jsx("p", { className: "mt-4 text-base text-muted-foreground max-w-2xl mx-auto", children: subtitle })
  ] });
}
const lostLove = "/assets/lost-love-Bg9pgMq7.jpg";
const bindingLove = "/assets/binding-love-cbOFMKEl.jpg";
const loveHeart = "/assets/love-heart-WwV_NYqH.jpg";
const faithfulness = "/assets/faithfulness-8ELgfUwa.jpg";
const wedding = "/assets/wedding-BhVLh_Zq.jpg";
const healHeart = "/assets/heal-heart-DmqAnMgX.jpg";
const passion = "/assets/passion-CmbiCixt.jpg";
const soulmate = "/assets/soulmate-zqKZCeLN.jpg";
const consultation = "/assets/consultation-C6DTKClt.jpg";
const ritualAltar = "/assets/ritual-altar-CMKsIGBR.jpg";
const protection = "/assets/protection-B-xQhoom.jpg";
const cleansing = "/assets/cleansing-DBD971FW.jpg";
const drum = "/assets/drum-wx33pRIM.jpg";
const breakChains = "/assets/break-chains-vFCxuL31.jpg";
const goldCoins = "/assets/gold-coins-BCNoxW3W.jpg";
const herbs = "/assets/herbs-BHQtbLxX.jpg";
const spiritualPower = "/assets/spiritual-power-B5DVsX29.jpg";
const careerLadder = "/assets/career-ladder-DmlhDPrZ.jpg";
const interview = "/assets/interview-B59uN7UL.jpg";
const crown = "/assets/crown-Ao0l9E5f.jpg";
const openDoors = "/assets/open-doors-CAv088Om.jpg";
const handshake = "/assets/handshake-Dz1S75GK.jpg";
const growth = "/assets/growth-BZky_8f_.jpg";
const graduation = "/assets/graduation-CTojeW_X.jpg";
const busyShop = "/assets/busy-shop-iasQtdUE.jpg";
const office = "/assets/office-C-Q9SlTX.jpg";
const moneyReturn = "/assets/money-return-1z09UNIg.jpg";
const vault = "/assets/vault-CGw_-1ZK.jpg";
const gavel = "/assets/gavel-ChFrcIfn.jpg";
const parentChild = "/assets/parent-child-C_x8dscm.jpg";
const legalDocs = "/assets/legal-docs-DgSjmv_x.jpg";
const africaMap = "/assets/africa-map-DA0xfXWZ.jpg";
const elder = "/assets/elder-CbCPGUlN.jpg";
const familyHome = "/assets/family-home-CPTlVifl.jpg";
const baby = "/assets/baby-aoIMJloZ.jpg";
const coupleTalk = "/assets/couple-talk-CcRor9cX.jpg";
const rings = "/assets/rings-Dm8xXCRF.jpg";
const candles = "/assets/candles-gCVAq4V8.jpg";
const moon = "/assets/moon-CpvvI3Ms.jpg";
const forest = "/assets/forest-DPX43ADG.jpg";
const scales = "/assets/scales-m41dN6wb.jpg";
const savanna = "/assets/savanna-B-hBp57Y.jpg";
const spellbook = "/assets/spellbook-CY5DO2j0.jpg";
const IMG = {
  lostLove,
  bindingLove,
  loveHeart,
  faithfulness,
  wedding,
  healHeart,
  passion,
  soulmate,
  consultation,
  ritualAltar,
  protection,
  cleansing,
  drum,
  breakChains,
  goldCoins,
  herbs,
  spiritualPower,
  careerLadder,
  interview,
  crown,
  openDoors,
  handshake,
  growth,
  graduation,
  busyShop,
  office,
  moneyReturn,
  vault,
  gavel,
  parentChild,
  legalDocs,
  africaMap,
  elder,
  familyHome,
  baby,
  coupleTalk,
  rings,
  candles,
  scales,
  spellbook,
  // Legacy aliases so any leftover references keep working
  couple: lostLove,
  hands: bindingLove,
  heart: loveHeart,
  silhouetteCouple: faithfulness,
  candlesDark: candles,
  candlesGlow: candles,
  smokeMystic: cleansing,
  moonNight: moon,
  forestMist: forest,
  shield: protection,
  africanLand: savanna
};
export {
  EMAIL as E,
  FeatureGrid as F,
  IMG as I,
  PageHero as P,
  SiteLayout as S,
  Seo as a,
  PHONE as b,
  SectionHeader as c
};
