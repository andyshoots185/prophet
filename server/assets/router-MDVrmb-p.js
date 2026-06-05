import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createRootRouteWithContext, useRouter, Link, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
const appCss = "/assets/styles-C9Czqzo9.css";
const en = {
  topbar: { tagline: "Authentic East African Spiritual Solutions" },
  nav: {
    home: "Home",
    about: "About Prophet Kim",
    love: "Love Spells",
    marriage: "Marriage Spells",
    voodoo: "Voodoo Spells",
    job: "Job Promotion",
    business: "Boost Business",
    court: "Win Court Case",
    contact: "Contact Me",
    menu: "Menu"
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Call",
    getHelp: "Get Help Now",
    learnMore: "Learn More About Prophet Kim",
    startConsult: "Start My Consultation",
    sendMessage: "Send a Message",
    submit: "Submit Message",
    name: "Your Name",
    namePh: "Enter your name",
    email: "Email Address",
    emailPh: "Enter your email",
    subject: "Subject",
    subjectPh: "What can I help you with?",
    message: "Message",
    messagePh: "Describe your problem...",
    contactDetails: "Contact Details",
    followMe: "Follow Me",
    serving: "Serving Globally & Throughout East Africa (Online & In-Person)"
  },
  footer: {
    tagline: "Serving East Africa with authentic spiritual healing for love, success, and protection. Trusted traditional healer for over two decades.",
    quickLinks: "Quick Links",
    contact: "Contact",
    rights: "© 2026 Prophet Kim — All Rights Reserved."
  },
  home: {
    heroTitle: "Authentic East African Spells Caster",
    heroSub: "Powerful Spiritual Healing Services and Ancestral Rituals for all your problems across East Africa.",
    aboutTitle: "About Prophet Kim — Your Trusted Spiritual Guide",
    aboutP1: "Born into a long line of African traditional healers, Prophet Kim inherited the ancient ancestral wisdom passed down through generations. For over two decades he has helped thousands across Uganda, Kenya, Tanzania, Rwanda, Burundi and beyond find love, prosperity, protection and inner peace.",
    aboutP2: "Every consultation is handled with strict 100% confidentiality, and his proven success rate has made him one of the most sought-after spiritual advisors in East Africa today.",
    solutionsTitle: "Our Spiritual Solutions",
    solutionsSub: "Specialized African spiritual guidance online and traditional healer services.",
    whyTitle: "Why Choose Prophet Kim",
    whySub: "A trusted spiritual guide rooted in authentic East African ancestral tradition.",
    howTitle: "How It Works",
    howSub: "Getting spiritual help is simple, private, and judgement-free.",
    voicesTitle: "Voices of Transformation",
    voicesSub: "Real stories from clients across East Africa.",
    regionsTitle: "Serving All of East Africa",
    ctaTitle: "Don't Suffer in Silence",
    ctaText: "Whatever your struggle — love, money, family, court, protection — Prophet Kim is ready to guide you back to peace. Reach out today, in complete confidentiality.",
    stats: { years: "Years of Experience", lives: "Lives Transformed", rate: "Success Rate", countries: "Countries Served" }
  },
  pages: {
    about: { title: "About Prophet Kim", sub: "Your trusted traditional healer and spiritual guide in East Africa." },
    love: { title: "Powerful Love Spells Africa", sub: "Bring back your lost love and find true happiness through spiritual healing services." },
    marriage: { title: "African Spiritual Marriage Solutions", sub: "Protect your marriage and ensure a life of peace and commitment today." },
    voodoo: { title: "Powerful Voodoo Rituals", sub: "Harness the power of African ancestral rituals for total protection and success in life." },
    job: { title: "Job Promotion Spells", sub: "Climb the corporate ladder with powerful African spiritual solutions." },
    business: { title: "Boost Business Spells", sub: "Attract wealth, customers, and success with powerful African business spells." },
    court: { title: "Win Court Case Spells", sub: "Secure victory in legal battles with powerful African court case spells." },
    contact: { title: "Get in Touch Today", sub: "Reach out to Prophet Kim for authentic East African spiritual solutions and healing.", why: "Why Contact Prophet Kim?" }
  },
  seo: {
    home: { title: "Prophet Kim — Authentic East African Spells Caster", desc: "Powerful spiritual healing services and African ancestral rituals across Uganda, Kenya, Tanzania and beyond." },
    about: { title: "About Prophet Kim — Trusted East African Healer", desc: "Meet Prophet Kim, your trusted traditional healer and spiritual guide serving all of East Africa." },
    love: { title: "Powerful Love Spells Africa — Prophet Kim", desc: "Bring back your lost love and find true happiness with powerful African love spells by Prophet Kim." },
    marriage: { title: "African Marriage Spells — Prophet Kim", desc: "Protect your marriage and ensure a life of peace and commitment with Prophet Kim's spiritual solutions." },
    voodoo: { title: "Powerful Voodoo Rituals — Prophet Kim", desc: "Harness the power of African ancestral voodoo rituals for total protection and success." },
    job: { title: "Job Promotion Spells — Prophet Kim", desc: "Climb the corporate ladder with powerful African spiritual solutions for career success." },
    business: { title: "Boost Business Spells — Prophet Kim", desc: "Attract wealth, customers, and success with Prophet Kim's powerful African business spells." },
    court: { title: "Win Court Case Spells — Prophet Kim", desc: "Secure victory in legal battles with powerful African court case spells from Prophet Kim." },
    contact: { title: "Contact Prophet Kim — East African Healer", desc: "Reach Prophet Kim for authentic East African spiritual solutions. Call or WhatsApp +27788778927." }
  }
};
const sw = {
  topbar: { tagline: "Suluhisho la Kweli la Kiroho la Afrika Mashariki" },
  nav: {
    home: "Nyumbani",
    about: "Kuhusu Nabii Kim",
    love: "Uchawi wa Mapenzi",
    marriage: "Uchawi wa Ndoa",
    voodoo: "Uchawi wa Voodoo",
    job: "Kupandishwa Cheo",
    business: "Kukuza Biashara",
    court: "Kushinda Kesi",
    contact: "Wasiliana Nami",
    menu: "Menyu"
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Piga Simu",
    getHelp: "Pata Msaada Sasa",
    learnMore: "Jifunze Zaidi Kuhusu Nabii Kim",
    startConsult: "Anza Mashauriano Yangu",
    sendMessage: "Tuma Ujumbe",
    submit: "Tuma",
    name: "Jina Lako",
    namePh: "Andika jina lako",
    email: "Barua Pepe",
    emailPh: "Andika barua pepe yako",
    subject: "Mada",
    subjectPh: "Naweza kukusaidiaje?",
    message: "Ujumbe",
    messagePh: "Elezea tatizo lako...",
    contactDetails: "Maelezo ya Mawasiliano",
    followMe: "Nifuate",
    serving: "Tunahudumia Ulimwenguni na Afrika Mashariki Yote (Mtandaoni na Ana kwa Ana)"
  },
  footer: {
    tagline: "Tunahudumia Afrika Mashariki kwa uponyaji wa kweli wa kiroho kwa mapenzi, mafanikio, na ulinzi. Mganga wa jadi anayeaminika kwa zaidi ya miongo miwili.",
    quickLinks: "Viungo vya Haraka",
    contact: "Mawasiliano",
    rights: "© 2026 Nabii Kim — Haki Zote Zimehifadhiwa."
  },
  home: {
    heroTitle: "Mchawi wa Kweli wa Afrika Mashariki",
    heroSub: "Huduma za Uponyaji wa Kiroho zenye Nguvu na Mila za Mababu kwa matatizo yako yote katika Afrika Mashariki.",
    aboutTitle: "Kuhusu Nabii Kim — Kiongozi Wako wa Kiroho Anayeaminika",
    aboutP1: "Akiwa amezaliwa katika ukoo mrefu wa waganga wa jadi wa Kiafrika, Nabii Kim alirithi hekima ya kale ya mababu iliyopitishwa kwa vizazi. Kwa zaidi ya miongo miwili amesaidia maelfu kote Uganda, Kenya, Tanzania, Rwanda, Burundi na kwingineko kupata mapenzi, ustawi, ulinzi na amani ya ndani.",
    aboutP2: "Kila mashauriano hushughulikiwa kwa usiri kamili wa 100%, na kiwango chake cha mafanikio kimemfanya kuwa mmoja wa washauri wa kiroho wanaotafutwa zaidi Afrika Mashariki leo.",
    solutionsTitle: "Suluhisho Zetu za Kiroho",
    solutionsSub: "Mwongozo maalum wa kiroho wa Kiafrika mtandaoni na huduma za waganga wa jadi.",
    whyTitle: "Kwa Nini Umchague Nabii Kim",
    whySub: "Mwongozo wa kiroho unayeaminika mwenye mizizi ya kweli ya jadi ya Afrika Mashariki.",
    howTitle: "Jinsi Inavyofanya Kazi",
    howSub: "Kupata msaada wa kiroho ni rahisi, wa faragha, na bila hukumu.",
    voicesTitle: "Sauti za Mabadiliko",
    voicesSub: "Hadithi za kweli kutoka kwa wateja kote Afrika Mashariki.",
    regionsTitle: "Tunahudumia Afrika Mashariki Yote",
    ctaTitle: "Usiteseke kwa Kimya",
    ctaText: "Iwe shida yako ni mapenzi, pesa, familia, mahakama au ulinzi — Nabii Kim yuko tayari kukurudisha kwa amani. Wasiliana leo, kwa usiri kamili.",
    stats: { years: "Miaka ya Uzoefu", lives: "Maisha Yaliyobadilishwa", rate: "Kiwango cha Mafanikio", countries: "Nchi Tunazohudumia" }
  },
  pages: {
    about: { title: "Kuhusu Nabii Kim", sub: "Mganga wako wa jadi anayeaminika na mwongozo wa kiroho Afrika Mashariki." },
    love: { title: "Uchawi wa Mapenzi wa Afrika wenye Nguvu", sub: "Rudisha mpenzi wako uliyemkosa na pata furaha ya kweli kupitia huduma za uponyaji wa kiroho." },
    marriage: { title: "Suluhisho la Ndoa la Kiroho la Kiafrika", sub: "Linda ndoa yako na hakikisha maisha ya amani na uaminifu leo." },
    voodoo: { title: "Mila za Voodoo zenye Nguvu", sub: "Tumia nguvu ya mila ya mababu wa Kiafrika kwa ulinzi kamili na mafanikio maishani." },
    job: { title: "Uchawi wa Kupandishwa Cheo", sub: "Panda ngazi ya kazi kwa suluhisho zenye nguvu za kiroho za Kiafrika." },
    business: { title: "Uchawi wa Kukuza Biashara", sub: "Vutia utajiri, wateja, na mafanikio kwa uchawi wenye nguvu wa biashara wa Kiafrika." },
    court: { title: "Uchawi wa Kushinda Kesi", sub: "Pata ushindi katika vita vya kisheria kwa uchawi wenye nguvu wa kesi wa Kiafrika." },
    contact: { title: "Wasiliana Nasi Leo", sub: "Wasiliana na Nabii Kim kwa suluhisho la kweli la kiroho la Afrika Mashariki na uponyaji.", why: "Kwa Nini Uwasiliane na Nabii Kim?" }
  },
  seo: {
    home: { title: "Nabii Kim — Mchawi wa Kweli wa Afrika Mashariki", desc: "Huduma za uponyaji wa kiroho zenye nguvu na mila za mababu kote Uganda, Kenya, Tanzania na zaidi." },
    about: { title: "Kuhusu Nabii Kim — Mganga Anayeaminika", desc: "Kutana na Nabii Kim, mganga wako wa jadi anayeaminika anayehudumia Afrika Mashariki yote." },
    love: { title: "Uchawi wa Mapenzi wa Afrika — Nabii Kim", desc: "Rudisha mpenzi wako uliyemkosa na pata furaha ya kweli kwa uchawi wa mapenzi wa Nabii Kim." },
    marriage: { title: "Uchawi wa Ndoa wa Kiafrika — Nabii Kim", desc: "Linda ndoa yako na hakikisha amani na uaminifu wa maisha yote kwa suluhisho la Nabii Kim." },
    voodoo: { title: "Mila za Voodoo zenye Nguvu — Nabii Kim", desc: "Tumia nguvu ya mila ya mababu wa Kiafrika kwa ulinzi kamili na mafanikio." },
    job: { title: "Uchawi wa Kupandishwa Cheo — Nabii Kim", desc: "Panda ngazi ya kazi kwa suluhisho zenye nguvu za kiroho za Kiafrika kwa mafanikio." },
    business: { title: "Uchawi wa Kukuza Biashara — Nabii Kim", desc: "Vutia utajiri, wateja, na mafanikio kwa uchawi wa biashara wa Nabii Kim." },
    court: { title: "Uchawi wa Kushinda Kesi — Nabii Kim", desc: "Pata ushindi katika kesi za kisheria kwa uchawi wa kesi wa Nabii Kim." },
    contact: { title: "Wasiliana na Nabii Kim — Mganga wa Afrika Mashariki", desc: "Wasiliana na Nabii Kim kwa suluhisho la kweli la kiroho. Piga simu au WhatsApp +27788778927." }
  }
};
const lg = {
  topbar: { tagline: "Eby'Omwoyo eby'Amazima okuva mu Buvanjuba bw'Afrika" },
  nav: {
    home: "Awaka",
    about: "Ku Nnabbi Kim",
    love: "Eddagala ly'Okwagala",
    marriage: "Eddagala ly'Obufumbo",
    voodoo: "Eddagala lya Voodoo",
    job: "Okukuza mu Mulimu",
    business: "Okukuza Bizinensi",
    court: "Okuwangula Omusango",
    contact: "Tukubire",
    menu: "Menyu"
  },
  common: {
    whatsapp: "WhatsApp",
    call: "Kuba Simu",
    getHelp: "Funa Obuyambi Kati",
    learnMore: "Manya Ebisingawo ku Nnabbi Kim",
    startConsult: "Tandika Okwebuuza",
    sendMessage: "Sindika Obubaka",
    submit: "Sindika",
    name: "Erinnya Lyo",
    namePh: "Yingiza erinnya lyo",
    email: "Email",
    emailPh: "Yingiza email yo",
    subject: "Omutwe",
    subjectPh: "Nkuyambe ki?",
    message: "Obubaka",
    messagePh: "Nnyonnyola ekizibu kyo...",
    contactDetails: "Endagiriro",
    followMe: "Ngoberera",
    serving: "Tuweereza mu Nsi Yonna ne mu Buvanjuba bw'Afrika (Ku Yintaneeti ne Mu Maaso)"
  },
  footer: {
    tagline: "Tuweereza Obuvanjuba bw'Afrika n'eddagala ery'amazima ery'omwoyo ku kwagala, obuwanguzi, n'okukuuma. Omusawo ow'ennono eyeesigibwa okumala emyaka egisukka mu abiri.",
    quickLinks: "Empuliziganya Eyangu",
    contact: "Endagiriro",
    rights: "© 2026 Nnabbi Kim — Eddembe Lyonna Likuumiddwa."
  },
  home: {
    heroTitle: "Omulaguzi ow'Amazima ow'Obuvanjuba bw'Afrika",
    heroSub: "Eby'Obujjanjabi by'Omwoyo n'Emikolo gya Bajjajja eri ebizibu byo byonna mu Buvanjuba bw'Afrika.",
    aboutTitle: "Ku Nnabbi Kim — Omulagirizi Wo ow'Omwoyo Eyeesigibwa",
    aboutP1: "Yazaalibwa mu lunyiriri lw'abasawo ab'ennono ab'Afrika, Nnabbi Kim yasikira amagezi g'edda aga bajjajja agayitiddwa mu mirembe. Okumala emyaka egisukka mu abiri ayambye enkumi nkumi mu Uganda, Kenya, Tanzania, Rwanda, Burundi n'okusukka okuzuula okwagala, obugagga, okukuumibwa n'emirembe.",
    aboutP2: "Buli okwebuuza kukolwa mu kyama ekijjuvu, era omutendera gwe ogw'obuwanguzi gumufudde omu ku balagirizi b'omwoyo abasinga okwetaagibwa mu Buvanjuba bw'Afrika leero.",
    solutionsTitle: "Ebigonjoolwa Byaffe eby'Omwoyo",
    solutionsSub: "Obulagirizi obw'Afrika obw'omwoyo ku yintaneeti n'eby'abasawo ab'ennono.",
    whyTitle: "Lwaki Olonde Nnabbi Kim",
    whySub: "Omulagirizi w'omwoyo eyeesigibwa eyeesigamye ku nnono ey'amazima ey'Obuvanjuba bw'Afrika.",
    howTitle: "Engeri Gye Kikolamu",
    howSub: "Okufuna obuyambi obw'omwoyo kyangu, kya kyama, era tewali kusalira musango.",
    voicesTitle: "Amaloboozi g'Enkyukakyuka",
    voicesSub: "Ebyafaayo eby'amazima okuva ku bakasitoma okwetoloola Obuvanjuba bw'Afrika.",
    regionsTitle: "Tuweereza Obuvanjuba bw'Afrika Bwonna",
    ctaTitle: "Tobonaabona mu Kasirise",
    ctaText: "Ekizibu kyonna — okwagala, ssente, amaka, omusango, okukuumibwa — Nnabbi Kim ali mwetegefu okukukomyawo mu mirembe. Tukubire leero, mu kyama ekijjuvu.",
    stats: { years: "Emyaka gy'Obumanyirivu", lives: "Obulamu Obukyusiddwa", rate: "Omutendera gw'Obuwanguzi", countries: "Amawanga Ge Tuweereza" }
  },
  pages: {
    about: { title: "Ku Nnabbi Kim", sub: "Omusawo wo ow'ennono eyeesigibwa n'omulagirizi w'omwoyo mu Buvanjuba bw'Afrika." },
    love: { title: "Eddagala ly'Okwagala ery'Amaanyi ery'Afrika", sub: "Komyawo omwagalwa wo eyabula era ofune essanyu ery'amazima okuyita mu by'obujjanjabi by'omwoyo." },
    marriage: { title: "Ebigonjoolwa by'Obufumbo eby'Omwoyo eby'Afrika", sub: "Kuuma obufumbo bwo era kakasa obulamu obw'emirembe n'obwesigwa leero." },
    voodoo: { title: "Emikolo gya Voodoo egy'Amaanyi", sub: "Kozesa amaanyi g'emikolo gya bajjajja b'Afrika ku kukuumibwa okujjuvu n'obuwanguzi mu bulamu." },
    job: { title: "Eddagala ly'Okukuzibwa mu Mulimu", sub: "Linnya eddaala ery'emirimu n'ebigonjoolwa eby'amaanyi eby'omwoyo eby'Afrika." },
    business: { title: "Eddagala ly'Okukuza Bizinensi", sub: "Sikiriza obugagga, bakasitoma, n'obuwanguzi n'eddagala ery'amaanyi erya bizinensi ery'Afrika." },
    court: { title: "Eddagala ly'Okuwangula Omusango", sub: "Funa obuwanguzi mu mitalo egy'amateeka n'eddagala ery'amaanyi ery'emisango ery'Afrika." },
    contact: { title: "Tukubire Leero", sub: "Tukubire Nnabbi Kim ku bigonjoolwa eby'amazima eby'omwoyo eby'Obuvanjuba bw'Afrika n'obujjanjabi.", why: "Lwaki Otukubire Nnabbi Kim?" }
  },
  seo: {
    home: { title: "Nnabbi Kim — Omulaguzi ow'Amazima ow'Obuvanjuba bw'Afrika", desc: "Eby'obujjanjabi by'omwoyo n'emikolo gya bajjajja mu Uganda, Kenya, Tanzania n'okusukka." },
    about: { title: "Ku Nnabbi Kim — Omusawo Eyeesigibwa", desc: "Manya Nnabbi Kim, omusawo wo ow'ennono eyeesigibwa aweereza Obuvanjuba bw'Afrika bwonna." },
    love: { title: "Eddagala ly'Okwagala ery'Afrika — Nnabbi Kim", desc: "Komyawo omwagalwa wo eyabula era ofune essanyu n'eddagala ery'okwagala erya Nnabbi Kim." },
    marriage: { title: "Eddagala ly'Obufumbo — Nnabbi Kim", desc: "Kuuma obufumbo bwo era kakasa emirembe n'obwesigwa n'ebigonjoolwa bya Nnabbi Kim." },
    voodoo: { title: "Emikolo gya Voodoo egy'Amaanyi — Nnabbi Kim", desc: "Kozesa amaanyi g'emikolo gya bajjajja b'Afrika ku kukuumibwa n'obuwanguzi." },
    job: { title: "Eddagala ly'Okukuzibwa — Nnabbi Kim", desc: "Linnya eddaala ery'emirimu n'ebigonjoolwa eby'amaanyi eby'omwoyo eby'Afrika." },
    business: { title: "Eddagala ly'Bizinensi — Nnabbi Kim", desc: "Sikiriza obugagga, bakasitoma, n'obuwanguzi n'eddagala lya Nnabbi Kim." },
    court: { title: "Eddagala ly'Omusango — Nnabbi Kim", desc: "Funa obuwanguzi mu misango n'eddagala ery'amaanyi erya Nnabbi Kim." },
    contact: { title: "Tukubire Nnabbi Kim — Omusawo w'Obuvanjuba", desc: "Tukubire Nnabbi Kim ku bigonjoolwa eby'amazima. Kuba simu oba WhatsApp +27788778927." }
  }
};
i18n.use(initReactI18next).init({
  resources: { en: { translation: en }, sw: { translation: sw }, lg: { translation: lg } },
  lng: typeof window !== "undefined" ? localStorage.getItem("lang") || "en" : "en",
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});
function NotFoundComponent() {
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Page not found" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist or has been moved." }),
    /* @__PURE__ */ jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Go home"
      }
    ) })
  ] }) });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. You can try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const Route$9 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Prophet Kim — Authentic East African Spells Caster" },
      { name: "description", content: "Powerful spiritual healing services and African ancestral rituals across East Africa." },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Prophet Kim" },
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/favicon.png" }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$9.useRouteContext();
  return /* @__PURE__ */ jsx(QueryClientProvider, { client: queryClient, children: /* @__PURE__ */ jsx(Outlet, {}) });
}
const $$splitComponentImporter$8 = () => import("./win-court-case-CvQ9ZOag.js");
const Route$8 = createFileRoute("/win-court-case")({
  head: () => ({
    meta: [{
      title: "Win Court Case Spells — Prophet Kim"
    }, {
      name: "description",
      content: "Secure victory in legal battles with powerful African court case spells from Prophet Kim."
    }, {
      property: "og:title",
      content: "Win Court Case Spells"
    }, {
      property: "og:description",
      content: "Win legal battles with powerful African court spells."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./voodoo-spells-DVF9TrHt.js");
const Route$7 = createFileRoute("/voodoo-spells")({
  head: () => ({
    meta: [{
      title: "Powerful Voodoo Rituals — Prophet Kim"
    }, {
      name: "description",
      content: "Harness the power of African ancestral voodoo rituals for total protection and success in life with Prophet Kim."
    }, {
      property: "og:title",
      content: "Powerful Voodoo Rituals"
    }, {
      property: "og:description",
      content: "Ancient African voodoo rituals for protection and success."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./marriage-spells-C6TRtJEG.js");
const Route$6 = createFileRoute("/marriage-spells")({
  head: () => ({
    meta: [{
      title: "African Spiritual Marriage Solutions — Prophet Kim"
    }, {
      name: "description",
      content: "Protect your marriage and ensure a life of peace and commitment with Prophet Kim's African spiritual marriage solutions."
    }, {
      property: "og:title",
      content: "African Spiritual Marriage Solutions"
    }, {
      property: "og:description",
      content: "Protect your marriage with authentic African spiritual healing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./love-spells-CtW-S-D3.js");
const Route$5 = createFileRoute("/love-spells")({
  head: () => ({
    meta: [{
      title: "Powerful Love Spells Africa — Prophet Kim"
    }, {
      name: "description",
      content: "Bring back your lost love and find true happiness with powerful African love spells by Prophet Kim."
    }, {
      property: "og:title",
      content: "Powerful Love Spells Africa"
    }, {
      property: "og:description",
      content: "Bring back lost love through authentic spiritual healing."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./job-promotion-C6Mg9LXw.js");
const Route$4 = createFileRoute("/job-promotion")({
  head: () => ({
    meta: [{
      title: "Job Promotion Spells — Prophet Kim"
    }, {
      name: "description",
      content: "Climb the corporate ladder with powerful African spiritual solutions for career success and job promotion."
    }, {
      property: "og:title",
      content: "Job Promotion Spells"
    }, {
      property: "og:description",
      content: "Powerful career advancement spells from Prophet Kim."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./contact-BD0tg07z.js");
const Route$3 = createFileRoute("/contact")({
  head: () => ({
    meta: [{
      title: "Contact Prophet Kim — East African Spiritual Healer"
    }, {
      name: "description",
      content: "Reach out to Prophet Kim for authentic East African spiritual solutions and healing. Call or WhatsApp +27788778927."
    }, {
      property: "og:title",
      content: "Get in Touch with Prophet Kim"
    }, {
      property: "og:description",
      content: "Reach out for authentic East African spiritual solutions."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./boost-business-BhIK0X7L.js");
const Route$2 = createFileRoute("/boost-business")({
  head: () => ({
    meta: [{
      title: "Boost Business Spells — Prophet Kim"
    }, {
      name: "description",
      content: "Attract wealth, customers, and success with Prophet Kim's powerful African business spells."
    }, {
      property: "og:title",
      content: "Boost Business Spells"
    }, {
      property: "og:description",
      content: "Attract wealth and customers with African business spells."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./about-DEO7fE0Y.js");
const Route$1 = createFileRoute("/about")({
  head: () => ({
    meta: [{
      title: "About Prophet Kim — Trusted East African Healer"
    }, {
      name: "description",
      content: "Meet Prophet Kim, your trusted traditional healer and spiritual guide serving Uganda, Kenya, Tanzania and all of East Africa."
    }, {
      property: "og:title",
      content: "About Prophet Kim"
    }, {
      property: "og:description",
      content: "Trusted traditional healer and spiritual guide in East Africa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./index-DAE1w9Ga.js");
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "Prophet Kim — Authentic East African Spells Caster"
    }, {
      name: "description",
      content: "Powerful spiritual healing services and African ancestral rituals across Uganda, Kenya, Tanzania and beyond. Trusted spells caster Prophet Kim."
    }, {
      property: "og:title",
      content: "Prophet Kim — Authentic East African Spells Caster"
    }, {
      property: "og:description",
      content: "Powerful spiritual healing services across East Africa."
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WinCourtCaseRoute = Route$8.update({
  id: "/win-court-case",
  path: "/win-court-case",
  getParentRoute: () => Route$9
});
const VoodooSpellsRoute = Route$7.update({
  id: "/voodoo-spells",
  path: "/voodoo-spells",
  getParentRoute: () => Route$9
});
const MarriageSpellsRoute = Route$6.update({
  id: "/marriage-spells",
  path: "/marriage-spells",
  getParentRoute: () => Route$9
});
const LoveSpellsRoute = Route$5.update({
  id: "/love-spells",
  path: "/love-spells",
  getParentRoute: () => Route$9
});
const JobPromotionRoute = Route$4.update({
  id: "/job-promotion",
  path: "/job-promotion",
  getParentRoute: () => Route$9
});
const ContactRoute = Route$3.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$9
});
const BoostBusinessRoute = Route$2.update({
  id: "/boost-business",
  path: "/boost-business",
  getParentRoute: () => Route$9
});
const AboutRoute = Route$1.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$9
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$9
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  BoostBusinessRoute,
  ContactRoute,
  JobPromotionRoute,
  LoveSpellsRoute,
  MarriageSpellsRoute,
  VoodooSpellsRoute,
  WinCourtCaseRoute
};
const routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router;
};
export {
  getRouter
};
