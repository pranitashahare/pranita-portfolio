import React, { useMemo, useState } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import { Mail, Download, ExternalLink, Linkedin, Phone, MapPin, BarChart3, Sparkles, Leaf, Send, Calendar, BookOpen, Briefcase, Rocket } from 'lucide-react'

const CV = {
  name: "Pranita Jayant Shahare",
  title: "Business Analyst",
  location: "Paris, France",
  phone: "(+33) 744 832 385",
  email: "pranitashahare@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranita-shahare/",
  objective:
    "Business Analytics Master’s candidate (MIM, MSc) with international experience in France and India, specialising in digitalisation, business intelligence, and cross-functional project delivery.",
  openTo: "Open to: Business Analyst / BI roles and early-stage collaborations.",
  skills: {
    tools: ["Power BI","Tableau","SQL","Python","R","Microsoft 365","Canva"],
    data: ["Dashboard Design","Data Visualisation & Storytelling","Reporting & Analysis","Business Intelligence","Customer Discovery","Founder support","Market research"],
    languages: ["English – Bilingual","French – A2 (improving)","Hindi – Native","Marathi – Native","Open to learning German"],
  },
  experience: [
    {
      role: "Startup Founder - PranVie",
      place: "NEOMA Venture Studio | Mont-Saint-Aignan, France",
      period: "May 2025 – Present",
      bullets: [
        "Initiated PranVie as an ethical wellness startup exploring organic spirulina-based nutrition solutions; currently in ideation and validation phase under NEOMA’s pre-incubation support.",
        "Outlined the D2C model and subscription strategy while advancing MVP development, including branding, product concept, and go-to-market hypothesis.",
        "Drafted early-stage marketing strategies, financial models, and investor pitch materials."
      ]
    },
    {
      role: "Executive Assistant",
      place: "Brad Technology | Avignon, France",
      period: "Jul 2024 – Oct 2024",
      bullets: [
        "Developed interactive Power BI dashboards using Power Query, accelerating comparative studies across 5 business verticals.",
        "Analysed industry trends and surveyed competitor strategies to recommend 2 high-potential markets.",
        "Contributed to the mobile app JSON rewrite and coordinated a 6‑month strategic roadmap."
      ]
    },
    {
      role: "Digital & Tech Ambassador/Community Leader – Volunteer",
      place: "NEOMA Business School | Mont-Saint-Aignan, France",
      period: "Nov 2023 – Apr 2025",
      bullets: [
        "Created and curated digital content to promote AI topics within the student community.",
        "Engaged 20+ professionals and initiated mentorships through targeted outreach.",
        "Published collaborative social posts and webinar highlights using designed templates."
      ]
    }
  ],
  education: [
    { title: "Programme Grande École – MIM, MSc Business Analytics", place: "NEOMA Business School | Mont-Saint-Aignan, France", period: "Sep 2023 – Apr 2025", thesis: "How to Use AI & Predictive Analytics to Combat Human Trafficking" },
    { title: "Master of Science – Botany", place: "Institute of Science | Nagpur, India", period: "Jun 2018 – Dec 2020" },
    { title: "Bachelor of Science – Botany, Chemistry, Zoology", place: "Nagpur University | Nagpur, India", period: "Jun 2015 – Apr 2018" }
  ]
};

const STR = {
  en: {
    welcome: "Welcome",
    hi: "Hi, I’m",
    roleBlend: "Business Analyst blending data-driven insights with practical execution across analytics and early-stage ventures.",
    viewWork: "View My Work",
    contact: "Contact",
    quickIntro: "A quick intro",
    aboutSentence: "I combine analytics, product sense, and empathy to solve real problems. I’ve built dashboards, streamlined processes, and started validating a wellness venture.",
    openTo: CV.openTo,
    myJourney: "My Journey",
    selectedWork: "Selected Work",
    pranvieTitle: "PranVie — Early-Stage Wellness Venture",
    statusFocus: "Status & Focus",
    nearRoadmap: "Near-term roadmap",
    whySpirulina: "Why Spirulina?",
    skills: "Skills",
    tools: "Tools",
    data: "Data",
    langs: "Languages",
    contactH: "Contact",
    contactSub: "Let’s work together",
    emailBtn: "Email",
    linkedinBtn: "LinkedIn",
    send: "Send",
    scan: "Scan to visit this site",
  },
  fr: {
    welcome: "Bienvenue",
    hi: "Bonjour, je suis",
    roleBlend: "Analyste métier alliant décisions pilotées par les données et exécution pragmatique, entre analytics et projets early‑stage.",
    viewWork: "Voir mes projets",
    contact: "Contact",
    quickIntro: "Présentation rapide",
    aboutSentence: "J’allie analyse, sens produit et empathie pour résoudre des problèmes concrets. J’ai conçu des tableaux de bord, optimisé des processus et commencé la validation d’un projet bien‑être.",
    openTo: "Ouverte aux postes Business Analyst / BI et aux collaborations early‑stage.",
    myJourney: "Mon Parcours",
    selectedWork: "Réalisations",
    pranvieTitle: "PranVie — Jeune projet bien‑être",
    statusFocus: "Statut & Focus",
    nearRoadmap: "Feuille de route court terme",
    whySpirulina: "Pourquoi la spiruline ?",
    skills: "Compétences",
    tools: "Outils",
    data: "Données",
    langs: "Langues",
    contactH: "Contact",
    contactSub: "Travaillons ensemble",
    emailBtn: "Email",
    linkedinBtn: "LinkedIn",
    send: "Envoyer",
    scan: "Scannez pour ouvrir ce site",
  }
};

const fadeUp = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.55 } };

export default function App(){
  const [lang, setLang] = useState("en");
  const t = STR[lang];
  const url = useMemo(()=> (typeof window !== 'undefined' ? window.location.href : ''), []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-slate-900">Pranita<span className="text-teal-600">Shahare</span></a>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#journey" className="hover:underline">{t.myJourney}</a>
            <a href="#projects" className="hover:underline">{t.selectedWork}</a>
            <a href="#pranvie" className="hover:underline">PranVie</a>
            <a href="#skills" className="hover:underline">{t.skills}</a>
            <a href="#contact" className="hover:underline">{t.contact}</a>
          </nav>
          <div className="flex items-center gap-2">
            <button onClick={()=> setLang(lang === "en" ? "fr" : "en")} className="inline-flex items-center rounded-xl px-3 py-2 border text-sm" aria-label="Toggle language English/French">{lang === "en" ? "FR" : "EN"}</button>
            <a href="/Pranita-SHAHARE-CV.pdf" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800"><Download className="mr-2 h-4 w-4" /> CV</a>
            <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Linkedin className="mr-2 h-4 w-4" /> LinkedIn</a>
          </div>
        </div>
      </header>

      {/* Hero with animated blobs */}
      <section id="home" className="relative w-full min-h-[92vh] flex items-center overflow-hidden">
        <div aria-hidden className="absolute inset-0">
          <div className="blob absolute w-96 h-96 bg-teal-300/40 rounded-full top-[-6rem] left-[-6rem] animate-[float_8s_ease-in-out_infinite]" />
          <div className="blob absolute w-[28rem] h-[28rem] bg-amber-300/40 rounded-full bottom-[-8rem] right-[-8rem] animate-[float_10s_ease-in-out_infinite]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          <motion.div {...fadeUp} className="space-y-6">
            <span className="inline-block rounded-full bg-amber-500 text-white px-4 py-1 text-sm font-medium shadow">{t.welcome}</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">{t.hi} <span className="text-teal-700">Pranita</span></h1>
            <p className="text-lg text-slate-700">{t.roleBlend}</p>
            <p className="text-slate-600">{CV.objective}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-5 py-3 bg-teal-600 text-white rounded-xl font-medium shadow hover:bg-teal-700 transition">{t.viewWork}</a>
              <a href="#contact" className="px-5 py-3 border border-slate-300 rounded-xl font-medium text-slate-700 hover:bg-slate-100 transition">{t.contact}</a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ duration: .7 }} className="flex flex-col items-center md:items-end gap-6">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white bg-slate-100">
              <img src="/pranita.jpg" alt="Pranita Shahare" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow border">
              <p className="text-xs text-slate-600 mb-2">{t.scan}</p>
              <QRCode value={url || ''} size={100} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Marquee skills strip (Framer-style energy) */}
      <section className="marquee py-3 border-y border-slate-200 bg-white/70">
        <div className="marquee-track">
          {[...CV.skills.tools, ...CV.skills.data].map((x)=>(
            <span className="marquee-item" key={x}>{x}</span>
          ))}
          {[...CV.skills.tools, ...CV.skills.data].map((x)=>(
            <span className="marquee-item" key={x+'2'}>{x}</span>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div {...fadeUp}><h2 className="text-2xl font-bold">About Me</h2><p className="mt-2 text-slate-600">{t.quickIntro}</p></motion.div>
          <motion.div {...fadeUp} className="md:col-span-2 text-slate-700 leading-relaxed">
            <p>I’m {CV.name}. {t.aboutSentence}</p>
            <p className="mt-3">{t.openTo}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>{CV.location}</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/>{CV.email}</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/>{CV.phone}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Journey */}
      <section id="journey" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">{t.myJourney}</motion.h2>
        <div className="mt-8 relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-200" />
          <ul className="space-y-8">
            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-teal-600" />
              <div className="bg-white/90 backdrop-blur border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600"><Calendar className="h-4 w-4" /> May 2025 – Present</div>
                <div className="mt-1 font-semibold">Founder, PranVie</div>
                <p className="text-slate-700 mt-1">Exploring organic spirulina-based nutrition; building MVP, D2C plan, and early go‑to‑market under NEOMA’s pre‑incubation support.</p>
              </div>
            </motion.li>

            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-amber-500" />
              <div className="bg-white/90 backdrop-blur border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600"><Briefcase className="h-4 w-4" /> Jul 2024 – Oct 2024</div>
                <div className="mt-1 font-semibold">Executive Assistant, Brad Technology</div>
                <p className="text-slate-700 mt-1">Built Power BI dashboards, analysed markets, and supported roadmap execution across 5 verticals.</p>
              </div>
            </motion.li>

            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-900" />
              <div className="bg-white/90 backdrop-blur border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600"><BookOpen className="h-4 w-4" /> Sep 2023 – Apr 2025</div>
                <div className="mt-1 font-semibold">MIM, MSc Business Analytics, NEOMA</div>
                <p className="text-slate-700 mt-1">Thesis: How to Use AI & Predictive Analytics to Combat Human Trafficking.</p>
              </div>
            </motion.li>
          </ul>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">{t.selectedWork}</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="card border rounded-2xl p-5 bg-white shadow-sm">
            <div className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Power BI Dashboards</div>
            <p className="text-sm text-slate-600 mt-1">Interactive dashboards built at Brad Technology to compare 5 business verticals.</p>
            <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Power Query data shaping</li><li>Comparative analysis views</li><li>Actionable KPIs for stakeholders</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="card border rounded-2xl p-5 bg-white shadow-sm">
            <div className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> Community & Content</div>
            <p className="text-sm text-slate-600 mt-1">AI-themed content and events at NEOMA; grew network by engaging 20+ professionals.</p>
            <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>Event posts, webinar highlights</li><li>Templates for faster publishing</li><li>Mentorship connections</li>
            </ul>
          </motion.div>

          <motion.div {...fadeUp} className="card border rounded-2xl p-5 bg-white shadow-sm">
            <div className="font-semibold flex items-center gap-2"><Leaf className="h-5 w-5"/> PranVie Validation</div>
            <p className="text-sm text-slate-600 mt-1">Early validation of an ethical spirulina venture: MVP concept, D2C plan, and roadmap drafts.</p>
            <ul className="mt-3 text-sm text-slate-700 list-disc pl-5 space-y-1">
              <li>MVP scoping & branding</li><li>Subscription strategy outline</li><li>Investor-ready pitch materials</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* PranVie */}
      <section id="pranvie" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">{t.pranvieTitle}</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="bg-white/90 backdrop-blur border rounded-2xl p-6 shadow-sm">
            <div className="font-semibold flex items-center gap-2"><Rocket className="h-5 w-5"/> {t.statusFocus}</div>
            <p className="text-slate-700 mt-2">In ideation and validation under NEOMA’s pre‑incubation support. Exploring organic spirulina-based products with a D2C model and subscription strategy.</p>
            <div className="mt-4">
              <div className="text-sm text-slate-600 font-medium">{t.nearRoadmap}</div>
              <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
                <li>MVP refinement and user feedback loops</li>
                <li>Pricing and positioning tests</li>
                <li>Supplier due diligence and certifications mapping</li>
              </ul>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="bg-gradient-to-br from-teal-50 to-amber-50 border rounded-2xl p-6">
            <div className="text-sm text-slate-700">
              <div className="font-semibold">{t.whySpirulina}</div>
              <p className="mt-2">Nutrient-dense, vegan-friendly, and suitable for daily wellness. The goal is ethical sourcing, clear labelling, and accessible pricing.</p>
              <p className="mt-3 text-slate-600">*This section reflects current validation work — no product claims beyond the research/ideation stage.*</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">{t.skills}</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> {t.tools}</h3>
            <div className="mt-3 flex flex-wrap gap-2">{CV.skills.tools.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}</div>
          </motion.div>
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> {t.data}</h3>
            <div className="mt-3 flex flex-wrap gap-2">{CV.skills.data.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}</div>
          </motion.div>
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><Leaf className="h-5 w-5"/> {t.langs}</h3>
            <div className="mt-3 flex flex-wrap gap-2">{CV.skills.languages.map((s)=> <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>)}</div>
          </motion.div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold">{t.contactH}</h2>
            <p className="text-slate-600 mt-1">{t.contactSub}</p>
            <div className="mt-4 flex gap-2">
              <a href={`mailto:${CV.email}`} className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Mail className="mr-2 h-4 w-4"/> {t.emailBtn}</a>
              <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Linkedin className="mr-2 h-4 w-4"/> {t.linkedinBtn}</a>
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-2">
            <div className="border rounded-2xl p-6 bg-white">
              <form name="contact" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="contact" />
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" name="name" placeholder="Your name" required className="w-full rounded-xl border px-3 py-2"/>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@example.com" required className="w-full rounded-xl border px-3 py-2"/>
                  </div>
                  <div className="md:col-span-2 space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea id="message" name="message" placeholder="Tell me about your project or role…" className="w-full min-h-[120px] rounded-xl border px-3 py-2"></textarea>
                  </div>
                  <div className="md:col-span-2 flex justify-end">
                    <button type="submit" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800"><Send className="mr-2 h-4 w-4"/> {t.send}</button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-10 mt-8">
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-600">© {new Date().getFullYear()} {CV.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a href="/Pranita-SHAHARE-CV.pdf" className="text-sm underline flex items-center gap-1"><Download className="h-4 w-4"/> CV</a>
            <a href="#privacy" className="text-sm underline flex items-center gap-1"><ExternalLink className="h-4 w-4"/> Privacy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
