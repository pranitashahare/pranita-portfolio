import React, { useMemo } from 'react'
import { motion } from 'framer-motion'
import QRCode from 'react-qr-code'
import { Mail, Download, ExternalLink, Linkedin, Phone, MapPin, BarChart3, Sparkles, Leaf, Send, Calendar, BookOpen, Briefcase, Rocket } from 'lucide-react'

// ====== FACTUAL CONTENT (from your CV) ======
const CV = {
  name: "Pranita Jayant Shahare",
  title: "Business Analyst",
  location: "Paris, France",
  phone: "(+33) 744 832 385",
  email: "pranitashahare@gmail.com",
  linkedin: "https://www.linkedin.com/in/pranita-shahare/",
  objective:
    "Business Analytics Master’s candidate (MIM, MSc) with international experience in France and India, specialising in digitalisation, business intelligence, and cross-functional project delivery.",
  openTo:
    "Open to: Business Analyst / BI roles and early-stage collaborations.",
  skills: {
    tools: ["Power BI", "Tableau", "SQL", "Python", "R", "Microsoft 365", "Canva"],
    data: [
      "Dashboard Design",
      "Data Visualisation & Storytelling",
      "Reporting & Analysis",
      "Business Intelligence",
      "Customer Discovery",
      "Founder support",
      "Market research",
    ],
    languages: [
      "English – Bilingual",
      "French – A2 (improving)",
      "Hindi – Native",
      "Marathi – Native",
      "Open to learning German",
    ],
  },
  experience: [
    {
      role: "Startup Founder - PranVie",
      place: "NEOMA Venture Studio | Mont-Saint-Aignan, France",
      period: "May 2025 – Present",
      bullets: [
        "Initiated PranVie as an ethical wellness startup exploring organic spirulina-based nutrition solutions; currently in ideation and validation phase under NEOMA’s pre-incubation support.",
        "Outlined the D2C model and subscription strategy while advancing MVP development, including branding, product concept, and go-to-market hypothesis.",
        "Drafted early-stage marketing strategies, financial models, and investor pitch materials.",
      ],
    },
    {
      role: "Executive Assistant",
      place: "Brad Technology | Avignon, France",
      period: "Jul 2024 – Oct 2024",
      bullets: [
        "Developed interactive Power BI dashboards using Power Query, accelerating comparative studies across 5 business verticals.",
        "Analysed industry trends and surveyed competitor strategies to recommend 2 high-potential markets.",
        "Contributed to the mobile app JSON rewrite and coordinated a 6‑month strategic roadmap.",
      ],
    },
    {
      role: "Digital & Tech Ambassador/Community Leader – Volunteer",
      place: "NEOMA Business School | Mont-Saint-Aignan, France",
      period: "Nov 2023 – Apr 2025",
      bullets: [
        "Created and curated digital content to promote AI topics within the student community.",
        "Engaged 20+ professionals and initiated mentorships through targeted outreach.",
        "Published collaborative social posts and webinar highlights using designed templates.",
      ],
    },
  ],
  education: [
    {
      title: "Programme Grande École – MIM, MSc Business Analytics",
      place: "NEOMA Business School | Mont-Saint-Aignan, France",
      period: "Sep 2023 – Apr 2025",
      thesis:
        "How to Use AI & Predictive Analytics to Combat Human Trafficking",
    },
    {
      title: "Master of Science – Botany",
      place: "Institute of Science | Nagpur, India",
      period: "Jun 2018 – Dec 2020",
    },
    {
      title: "Bachelor of Science – Botany, Chemistry, Zoology",
      place: "Nagpur University | Nagpur, India",
      period: "Jun 2015 – Apr 2018",
    },
  ],
  certs: [
    "Business Intelligence with Power BI, Advanced Excel, PowerPoint & Tableau – Skill Nation",
    "Google Analytics – Google Digital Skill Shop",
  ],
}

// Small helpers
const fadeUp = { initial: { opacity: 0, y: 18 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: 0.3 }, transition: { duration: 0.5 } }

export default function App() {
  const url = useMemo(() => (typeof window !== 'undefined' ? window.location.href : ''), [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* ====== Header / Nav ====== */}
      <header className="sticky top-0 z-30 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <Leaf className="h-6 w-6 text-teal-600" aria-hidden />
            <span className="font-semibold">{CV.name}</span>
          </a>
          <nav className="hidden md:flex items-center gap-5 text-sm">
            <a href="#about" className="hover:underline">About</a>
            <a href="#journey" className="hover:underline">Journey</a>
            <a href="#projects" className="hover:underline">Projects</a>
            <a href="#pranvie" className="hover:underline">PranVie</a>
            <a href="#skills" className="hover:underline">Skills</a>
            <a href="#contact" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="/Pranita-SHAHARE-CV.pdf" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800">
              <Download className="mr-2 h-4 w-4" /> CV
            </a>
            <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* ====== Hero ====== */}
      <section id="home" className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-96 h-96 bg-teal-200/30 rounded-full blur-3xl top-[-5rem] left-[-5rem]" />
          <div className="absolute w-96 h-96 bg-amber-200/30 rounded-full blur-3xl bottom-[-5rem] right-[-5rem]" />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div {...fadeUp} className="space-y-6">
            <span className="inline-block rounded-full bg-amber-500 text-white px-4 py-1 text-sm font-medium shadow">Welcome</span>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900">
              Hi, I’m <span className="text-teal-600">Pranita</span>
            </h1>
            <p className="text-lg text-slate-700">
              {CV.title} blending <strong>data-driven insights</strong> with <strong>practical execution</strong> across analytics and early-stage ventures.
            </p>
            <p className="text-slate-600">{CV.objective}</p>
            <div className="flex flex-wrap gap-4">
              <a href="#projects" className="px-5 py-3 bg-teal-600 text-white rounded-xl font-medium shadow hover:bg-teal-700 transition">View My Work</a>
              <a href="#contact" className="px-5 py-3 border border-slate-300 rounded-xl font-medium text-slate-700 hover:bg-slate-100 transition">Contact</a>
            </div>
          </motion.div>

          {/* Photo + QR */}
          <motion.div {...fadeUp} transition={{ duration: 0.6 }} className="flex flex-col items-center md:items-end gap-6">
            <div className="w-48 h-48 rounded-full overflow-hidden shadow-lg border-4 border-white bg-slate-100">
              <img src="/pranita.jpg" alt="Pranita Shahare" className="w-full h-full object-cover" />
            </div>
            <div className="bg-white p-4 rounded-xl shadow border">
              <p className="text-xs text-slate-600 mb-2">Scan to visit this site</p>
              <QRCode value={url || ''} size={100} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== About ====== */}
      <section id="about" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold">About Me</h2>
            <p className="mt-2 text-slate-600">A quick intro</p>
          </motion.div>
          <motion.div {...fadeUp} className="md:col-span-2 text-slate-700 leading-relaxed">
            <p>
              I’m {CV.name} — an MSc Business Analytics candidate with a prior MSc in Botany. I combine analytics, product sense, and empathy to solve real problems.
              I’ve built dashboards, streamlined processes, and started validating a wellness venture.
            </p>
            <p className="mt-3">{CV.openTo}</p>
            <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-600">
              <span className="inline-flex items-center gap-2"><MapPin className="h-4 w-4"/>{CV.location}</span>
              <span className="inline-flex items-center gap-2"><Mail className="h-4 w-4"/>{CV.email}</span>
              <span className="inline-flex items-center gap-2"><Phone className="h-4 w-4"/>{CV.phone}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Journey Timeline ====== */}
      <section id="journey" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">My Journey</motion.h2>
        <div className="mt-8 relative pl-6">
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-slate-200" />
          <ul className="space-y-8">
            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-teal-600" />
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Calendar className="h-4 w-4" /> May 2025 – Present
                </div>
                <div className="mt-1 font-semibold">Founder, PranVie</div>
                <p className="text-slate-700 mt-1">
                  Exploring organic spirulina-based nutrition; building MVP, D2C plan, and early go-to-market under NEOMA’s pre‑incubation support.
                </p>
              </div>
            </motion.li>

            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-amber-500" />
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <Briefcase className="h-4 w-4" /> Jul 2024 – Oct 2024
                </div>
                <div className="mt-1 font-semibold">Executive Assistant, Brad Technology</div>
                <p className="text-slate-700 mt-1">
                  Built Power BI dashboards, analysed markets, and supported roadmap execution across 5 verticals.
                </p>
              </div>
            </motion.li>

            <motion.li {...fadeUp} className="relative">
              <span className="absolute -left-[11px] top-1.5 w-5 h-5 rounded-full bg-slate-900" />
              <div className="bg-white border rounded-xl p-4 shadow-sm">
                <div className="flex items-center gap-2 text-sm text-slate-600">
                  <BookOpen className="h-4 w-4" /> Sep 2023 – Apr 2025
                </div>
                <div className="mt-1 font-semibold">MIM, MSc Business Analytics, NEOMA</div>
                <p className="text-slate-700 mt-1">
                  Thesis: How to Use AI & Predictive Analytics to Combat Human Trafficking.
                </p>
              </div>
            </motion.li>
          </ul>
        </div>
      </section>

      {/* ====== Projects (interactive cards) ====== */}
      <section id="projects" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">Selected Work</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {/* Project 1 */}
          <motion.div {...fadeUp} className="group border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Power BI Dashboards</div>
            <p className="text-sm text-slate-600 mt-1">Interactive dashboards built at Brad Technology to compare 5 business verticals.</p>
            <div className="mt-3 text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Power Query data shaping</li>
                <li>Comparative analysis views</li>
                <li>Actionable KPIs for stakeholders</li>
              </ul>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div {...fadeUp} className="group border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> Community & Content</div>
            <p className="text-sm text-slate-600 mt-1">AI-themed content and events at NEOMA; grew network by engaging 20+ professionals.</p>
            <div className="mt-3 text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>Event posts, webinar highlights</li>
                <li>Templates for faster publishing</li>
                <li>Mentorship connections</li>
              </ul>
            </div>
          </motion.div>

          {/* Project 3 */}
          <motion.div {...fadeUp} className="group border rounded-2xl p-5 bg-white shadow-sm hover:shadow-md transition">
            <div className="font-semibold flex items-center gap-2"><Leaf className="h-5 w-5"/> PranVie Validation</div>
            <p className="text-sm text-slate-600 mt-1">Early validation of an ethical spirulina venture: MVP concept, D2C plan, and roadmap drafts.</p>
            <div className="mt-3 text-sm text-slate-700">
              <ul className="list-disc pl-5 space-y-1">
                <li>MVP scoping & branding</li>
                <li>Subscription strategy outline</li>
                <li>Investor-ready pitch materials</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== PranVie Spotlight ====== */}
      <section id="pranvie" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">PranVie — Early-Stage Wellness Venture</motion.h2>
        <div className="mt-6 grid md:grid-cols-2 gap-8">
          <motion.div {...fadeUp} className="bg-white border rounded-2xl p-6 shadow-sm">
            <div className="font-semibold flex items-center gap-2"><Rocket className="h-5 w-5"/> Status & Focus</div>
            <p className="text-slate-700 mt-2">
              In ideation and validation under NEOMA’s pre‑incubation support. Exploring organic spirulina-based products with a D2C model and subscription strategy.
            </p>
            <div className="mt-4">
              <div className="text-sm text-slate-600 font-medium">Near-term roadmap</div>
              <ul className="text-sm text-slate-700 list-disc pl-5 mt-2 space-y-1">
                <li>MVP refinement and user feedback loops</li>
                <li>Pricing and positioning tests</li>
                <li>Supplier due diligence and certifications mapping</li>
              </ul>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="bg-gradient-to-br from-teal-50 to-amber-50 border rounded-2xl p-6">
            <div className="text-sm text-slate-700">
              <div className="font-semibold">Why Spirulina?</div>
              <p className="mt-2">
                Nutrient-dense, vegan-friendly, and suitable for daily wellness. The goal is ethical sourcing, clear labelling, and accessible pricing.
              </p>
              <p className="mt-3 text-slate-600">
                *This section reflects current validation work — no product claims beyond the research/ideation stage.*
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Skills ====== */}
      <section id="skills" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <motion.h2 {...fadeUp} className="text-2xl font-bold">Skills</motion.h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><BarChart3 className="h-5 w-5"/> Tools</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.tools.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><Sparkles className="h-5 w-5"/> Data</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.data.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>
              ))}
            </div>
          </motion.div>
          <motion.div {...fadeUp} className="border rounded-2xl p-6 bg-white">
            <h3 className="font-semibold flex items-center gap-2"><Leaf className="h-5 w-5"/> Languages</h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {CV.skills.languages.map((s) => (
                <span key={s} className="px-2 py-1 rounded bg-slate-100 text-slate-800 text-sm">{s}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Contact (Netlify Forms) ====== */}
      <section id="contact" className="max-w-6xl mx-auto px-6 md:px-12 py-14">
        <div className="grid md:grid-cols-3 gap-6 items-start">
          <motion.div {...fadeUp}>
            <h2 className="text-2xl font-bold">Contact</h2>
            <p className="text-slate-600 mt-1">Let’s work together</p>
            <div className="mt-4 flex gap-2">
              <a href={`mailto:${CV.email}`} className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Mail className="mr-2 h-4 w-4"/> Email</a>
              <a href={CV.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center rounded-xl px-3 py-2 border text-sm"><Linkedin className="mr-2 h-4 w-4"/> LinkedIn</a>
            </div>
          </motion.div>

          <motion.div {...fadeUp} className="md:col-span-2">
            <div className="border rounded-2xl p-6 bg-white">
              {/* Netlify Forms: works with static hosting */}
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
                    <button type="submit" className="inline-flex items-center rounded-xl px-3 py-2 bg-slate-900 text-white text-sm hover:bg-slate-800"><Send className="mr-2 h-4 w-4"/> Send</button>
                  </div>
                </div>
              </form>
              <p className="mt-3 text-xs text-slate-500">
                This form is powered by Netlify Forms. You’ll see submissions in your Netlify dashboard (Forms tab).
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ====== Footer ====== */}
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

